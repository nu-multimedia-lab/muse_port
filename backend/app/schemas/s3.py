from pydantic import BaseModel

class PresignedRequest(BaseModel):
    bucket_name: str
    object_name: str
    expiration: int = 300
