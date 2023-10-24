from fastapi import FastAPI

from app.api.workflows import router as workflow_router
from app.core.config import get_settings
from app.core.logging import configure_logging

settings = get_settings()
configure_logging(settings.log_level)

app = FastAPI(
    title="Agentic AI Workflow Engine",
    description="Enterprise orchestration engine powered by LangGraph",
    version="0.1.0",
)
app.include_router(workflow_router)


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
