from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

from app.routes.work import router as work_router
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

app.include_router(work_router, prefix="/works")
app.include_router(user_router, prefix="/users")
app.include_router(s3_router, prefix="/s3")

handler = Mangum(app)
