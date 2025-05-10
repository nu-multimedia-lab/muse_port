from typing import TypeVar

from app.schemas.work import Work
from app.schemas.user import User

Model = TypeVar("Model", Work, User)
