import asyncio
from typing import List, Union

from fastapi import APIRouter

from app.dummyDB import articles
from app.schemas.article import Article

router = APIRouter()


@router.get("/")
async def get_articles() -> List[Article]:
    await asyncio.sleep(5)
    return articles


@router.get("/{article_id}")
async def get_article(article_id: int) -> Union[Article, dict]:
    for article in articles:
        if article["id"] == article_id:
            return article
    return {"message": "Article not found"}


@router.post("/")
async def create_article(article: Article) -> Article:
    articles.append(article)
    return article
