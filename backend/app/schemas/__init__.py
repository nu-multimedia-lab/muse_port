from typing import TypeVar

from app.schemas.article import Article
from app.schemas.user import User

Model = TypeVar("Model", Article, User)
