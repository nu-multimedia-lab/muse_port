from typing import List

from app.schemas.article import Article

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
