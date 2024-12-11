from typing import Optional

from pydantic import BaseModel


class Article(BaseModel):
    id: Optional[str] = None  # PK
    user_id: str  # FK
    created_at: Optional[str] = None
    updated_at: Optional[str] = None
    tags: Optional[list[str]] = None
    title: str
    content: str
