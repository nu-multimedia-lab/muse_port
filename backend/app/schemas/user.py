from typing import Optional

from pydantic import BaseModel


class User(BaseModel):
    id: str
    username: str
    bio: Optional[str] = None


class UserCreate(BaseModel):
    id: Optional[str] = None
    username: str


class UserUpdate(BaseModel):
    username: Optional[str] = None
    bio: Optional[str] = None
