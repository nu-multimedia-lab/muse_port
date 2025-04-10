from fastapi import APIRouter, HTTPException
import boto3
from botocore.exceptions import ClientError
from app.schemas.s3 import S3ObjectRequest

router = APIRouter()

# S3クライアント設定
s3_client = boto3.client('s3', region_name='ap-northeast-3', endpoint_url='https://s3.ap-northeast-3.amazonaws.com')
# エンドポイントを明示的に指定しないと、勝手にリダイレクトして認証エラーが発生するので注意

# ダウンロード用のpresigned URLを生成
@router.post("/generate-download-url")
def generate_download_url(request: S3ObjectRequest) -> dict:
    object_key = f"{request.article_id}/{request.object_name}"
    # S3オブジェクトのキーをarticle_idとobject_nameを組み合わせて生成
    try:
        presigned_url = s3_client.generate_presigned_url(
            ClientMethod='get_object',
            Params={'Bucket': request.bucket_name, 'Key': object_key},
            ExpiresIn=request.expiration
        )
        return {"url": presigned_url, "filename": object_key}
    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"ダウンロード用URLの生成に失敗しました: {str(e)}")

# アップロード用のpresigned URLを生成
@router.post("/generate-upload-url")
def generate_upload_url(request: S3ObjectRequest) -> dict:
    object_key = f"{request.article_id}/{request.object_name}"
    # S3オブジェクトのキーをarticle_idとobject_nameを組み合わせて生成
    try:
        presigned_url = s3_client.generate_presigned_url(
            ClientMethod='put_object',
            Params={'Bucket': request.bucket_name, 'Key': object_key},
            ExpiresIn=request.expiration
        )
        return {"url": presigned_url}
    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"アップロード用URLの生成に失敗しました: {str(e)}")

# S3バケットのオブジェクト一覧を取得
@router.get("/list-objects")
def list_objects(bucket_name: str) -> dict:
    try:
        response = s3_client.list_objects_v2(Bucket=bucket_name)
        if 'Contents' in response:
            return {"objects": [obj['Key'] for obj in response['Contents']]}
        else:
            return {"objects": []}
    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"オブジェクト一覧の取得に失敗しました: {str(e)}")

# S3バケットのオブジェクトを削除
@router.delete("/delete-object")
def delete_object(request: S3ObjectRequest) -> dict:
    object_key = f"{request.article_id}/{request.object_name}"
    try:
        s3_client.delete_object(Bucket=request.bucket_name, Key=object_key)
        return {"message": "オブジェクトが削除されました"}
    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"オブジェクトの削除に失敗しました: {str(e)}")