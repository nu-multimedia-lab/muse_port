import boto3
from botocore.exceptions import ClientError
import logging
import os


class S3Handler:
    def __init__(self, bucket_name: str):
        region = os.getenv("AWS_REGION", "ap-northeast-3")
        endpoint_url = os.getenv("AWS_S3_ENDPOINT_URL", "https://s3.ap-northeast-3.amazonaws.com")
        self.s3_client = boto3.client("s3", region_name=region, endpoint_url=endpoint_url)
        # エンドポイントを明示的に指定しないと勝手にリダイレクトして認証エラーが発生するので注意
        self.bucket_name = bucket_name

    def generate_presigned_url_for_upload(
            self,
            key: str,
            expires_in: int = 300
            ) -> str:
        try:
            url = self.s3_client.generate_presigned_url(
                ClientMethod="put_object",
                Params={
                    "Bucket": self.bucket_name,
                    "Key": key,
                },
                ExpiresIn=expires_in,
                HttpMethod="PUT"
            )
            return url
        except ClientError as e:
            logging.error(e)
            raise RuntimeError(f"Presigned URL の生成に失敗しました: {e}")
        
    def generate_presigned_url_for_download(
            self,
            key: str,
            expires_in: int = 300
            ) -> str:
        try:
            url = self.s3_client.generate_presigned_url(
                ClientMethod="get_object",
                Params={
                    "Bucket": self.bucket_name,
                    "Key": key,
                },
                ExpiresIn=expires_in,
                HttpMethod="GET"
            )
            return url
        except ClientError as e:
            logging.error(e)
            raise RuntimeError(f"Presigned URL の生成に失敗しました: {e}")

    def get_work_media(self, work_id: str) -> list[str]:
        """
        Get all media for a specific work.
        """
        try:
            response = self.s3_client.list_objects_v2(
                Bucket=self.bucket_name,
                Prefix=work_id
            )
            if "Contents" in response:
                return [obj["Key"] for obj in response["Contents"]]
            else:
                return []
        except ClientError as e:
            logging.error(e)
            raise RuntimeError(f"Media の取得に失敗しました: {e}")
