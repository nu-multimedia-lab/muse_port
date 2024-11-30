from typing import Optional

from pydantic import BaseModel


class User(BaseModel):
    user_id: Optional[str] = None # PK
    username: str
    bio: Optional[str] = None
    created_at: Optional[str] = None

class UserUpdate(BaseModel):
    username: Optional[str] = None
    bio: Optional[str] = None
