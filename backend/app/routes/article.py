from fastapi import APIRouter, HTTPException
from typing import List, Union

from fastapi import APIRouter

from app.cruds.article import ArticleCRUD
from app.schemas.article import Article

router = APIRouter()
crud = ArticleCRUD()

@router.get("/")
async def get_articles() -> List[Article]:
    try:
        articles = crud.get_all_articles()
        return articles
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/", status_code=201)
async def create_article(new_article: Article) -> Article:
    try:
        crud.create_article(new_article)
        return new_article
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/{article_id}")
async def get_article(article_id: str) -> Article:
    try:
        article = crud.get_article(article_id)
        return article
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
