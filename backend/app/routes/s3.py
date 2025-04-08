from fastapi import APIRouter, HTTPException
import boto3
from botocore.exceptions import ClientError

router = APIRouter()

s3_client = boto3.client('s3')

@router.post("/generate-presigned-url/download/")
def generate_presigned_url_download(bucket_name: str, object_name: str, expiration: int = 3600):
    try:
        response = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': bucket_name, 'Key': object_name},
            ExpiresIn=expiration
        )
        return {"url": response}
    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"Presigned URLの生成に失敗しました: {str(e)}")
    
@router.post("/generate-presigned-url/upload/")
def generate_presigned_url_upload(bucket_name: str, object_name: str, expiration: int = 3600):
    try:
        response = s3_client.generate_presigned_url(
            'put_object',
            Params={'Bucket': bucket_name, 'Key': object_name},
            ExpiresIn=expiration
        )
        return {"url": response}
    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"Presigned URLの生成に失敗しました: {str(e)}")