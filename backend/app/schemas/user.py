from typing import Optional

from pydantic import BaseModel


class User(BaseModel):
    id: str  # PK
    created_at: str
    updated_at: str
    username: str
    bio: Optional[str] = None


class UserCreate(BaseModel):
    username: str
    bio: Optional[str] = None


class UserUpdate(BaseModel):
    username: Optional[str] = None
    bio: Optional[str] = None
