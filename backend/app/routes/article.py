from fastapi import APIRouter, HTTPException

from app.cruds.article import ArticleCRUD
from app.schemas.article import Article

router = APIRouter()
crud = ArticleCRUD()


@router.get("/")
async def get_articles() -> list[Article]:
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


@router.put("/{article_id}")
async def update_article(article_id: str, article_update: Article) -> Article:
    try:
        updated_article = crud.update_article(article_id, article_update)
        return updated_article
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.delete("/{article_id}")
async def delete_article(article_id: str) -> None:
    try:
        crud.delete_article(article_id)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
