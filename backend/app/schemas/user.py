from datetime import datetime
from typing import Optional

from pydantic import BaseModel, field_serializer


class User(BaseModel):
    id: str  # PK
    created_at: datetime
    updated_at: datetime
    username: str
    bio: Optional[str] = None

    @field_serializer("created_at", "updated_at", when_used="json")
    @classmethod
    def datetime_to_str(cls, value: datetime) -> str:
        return value.isoformat(timespec="seconds")


class UserCreate(BaseModel):
    username: str
    bio: Optional[str] = None


class UserUpdate(BaseModel):
    username: Optional[str] = None
    bio: Optional[str] = None
