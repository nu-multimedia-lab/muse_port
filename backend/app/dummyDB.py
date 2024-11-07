from typing import List

from app.schemas.article import Article
from app.schemas.user import User

# ダミーの記事データ
articles: List[Article] = [
    {
        "id": 1,
        "title": "First Article",
        "content": "This is the first article content.",
    },
    {
        "id": 2,
        "title": "Second Article",
        "content": "This is the second article content.",
    },
    {
        "id": 3,
        "title": "Third Article",
        "content": "This is the third article content.",
    },
]

# ダミーのユーザーデータ
users: List[User] = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"},
    {"id": 3, "name": "Charlie", "email": "charlie@example.com"},
]
