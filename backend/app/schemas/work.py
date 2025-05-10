from datetime import datetime
from typing import Optional

from pydantic import BaseModel, field_serializer


class Work(BaseModel):
    id: str  # PK
    user_id: str  # FK
    created_at: datetime
    updated_at: datetime
    title: str
    tags: Optional[list[str]] = None
    content: str

    @field_serializer("created_at", "updated_at", when_used="json")
    @classmethod
    def datetime_to_str(cls, value: datetime) -> str:
        return value.isoformat(timespec="seconds")


class WorkCreate(BaseModel):
    user_id: str
    title: str
    tags: Optional[list[str]] = None
    content: str


class WorkUpdate(BaseModel):
    title: Optional[str] = None
    tags: Optional[list[str]] = None
    content: Optional[str] = None
