from typing import Optional

from pydantic import BaseModel


class Article(BaseModel):
    id: str  # PK
    user_id: str  # FK
    created_at: str
    updated_at: str
    title: str
    tags: Optional[list[str]] = None
    content: str


class ArticleCreate(BaseModel):
    user_id: str
    title: str
    tags: Optional[list[str]] = None
    content: str


class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    tags: Optional[list[str]] = None
    content: Optional[str] = None
