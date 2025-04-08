from fastapi import APIRouter, HTTPException
import boto3
from botocore.exceptions import ClientError
from app.schemas.s3 import PresignedRequest

router = APIRouter()

# S3クライアント設定
s3_client = boto3.client('s3', region_name='ap-northeast-3', endpoint_url='https://s3.ap-northeast-3.amazonaws.com')
# エンドポイントを明示的に指定しないと、勝手にリダイレクトして認証エラーが発生するので注意

# ダウンロード用のpresigned URLを生成
@router.post("/generate-download-url")
def generate_download_url(presigned_request: PresignedRequest) -> dict:
    try:
        presigned_url = s3_client.generate_presigned_url(
            ClientMethod='get_object',
            Params={'Bucket': presigned_request.bucket_name, 'Key': presigned_request.object_name},
            ExpiresIn=presigned_request.expiration
        )
        return {"url": presigned_url}
    except ClientError as e:
        raise HTTPException(status_code=500, detail=str(e))

# アップロード用のpresigned URLを生成
@router.post("/generate-upload-url")
def generate_upload_url(presigned_request: PresignedRequest) -> dict:
    try:
        presigned_url = s3_client.generate_presigned_url(
            ClientMethod='put_object',
            Params={'Bucket': presigned_request.bucket_name, 'Key': presigned_request.object_name},
            ExpiresIn=presigned_request.expiration
        )
        return {"url": presigned_url}
    except ClientError as e:
        raise HTTPException(status_code=500, detail=str(e))