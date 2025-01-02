from fastapi import APIRouter

from app.cruds.article import ArticleCRUD
from app.routes import Route
from app.schemas.article import Article

router = APIRouter()
crud = ArticleCRUD()
route = Route(crud)


@router.get("/")
async def get_articles() -> list[Article]:
    return route.get_items()


@router.post("/", status_code=201)
async def create_article(new_article: Article) -> Article:
    return route.create_item(new_article)


@router.get("/{article_id}")
async def get_article(article_id: str) -> Article:
    return route.get_item(article_id)


@router.put("/{article_id}")
async def update_article(article_id: str, article_update: Article) -> Article:
    return route.update_item(article_id, article_update)


@router.delete("/{article_id}")
async def delete_article(article_id: str) -> None:
    return route.delete_item(article_id)
