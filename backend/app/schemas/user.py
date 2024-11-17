from typing import Optional

from pydantic import BaseModel


class User(BaseModel):
    id: str
    username: str


class UserCreate(BaseModel):
    id: Optional[str] = None
    username: str
