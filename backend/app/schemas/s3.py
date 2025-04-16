from pydantic import BaseModel
from typing import Optional

class S3ObjectRequest(BaseModel):
    bucket_name: str
    article_id: str
    object_name: str
    expiration: Optional[int] = 300
