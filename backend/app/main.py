import asyncio
from typing import List, Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

from dummyDB import articles
from schema import Article

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

handler = Mangum(app)


@app.get("/")
async def read_root() -> dict:
    return {"message": "Connection successful"}


@app.get("/articles")
async def get_articles() -> List[Article]:
    await asyncio.sleep(5)
    return articles


@app.get("/articles/{article_id}")
async def get_article(article_id: int) -> Union[Article, dict]:
    for article in articles:
        if article["id"] == article_id:
            return article
    return {"message": "Article not found"}


@app.post("/article")
async def create_article(article: Article) -> Article:
    articles.append(article)
    return article
