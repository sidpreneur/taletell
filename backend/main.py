from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from routers import story, job
from db.database import create_tables



create_tables()

app = FastAPI(
    title="Taletell API",
    description="API for Taletell, a platform for creating your own stories and playing them",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",

)
app.add_middleware( CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(story.router)
app.include_router(job.router)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000 , reload=True,)

