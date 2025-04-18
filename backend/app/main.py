from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

from app.routes.article import router as article_router
from app.routes.user import router as user_router
from app.routes.s3 import router as s3_router

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(article_router, prefix="/articles")
app.include_router(user_router, prefix="/users")
app.include_router(s3_router, prefix="/s3")

handler = Mangum(app)
