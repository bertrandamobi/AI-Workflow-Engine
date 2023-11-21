from typing import Any

from pydantic import BaseModel, Field


class WorkflowRequest(BaseModel):
    company: str = Field(..., description="Company to analyze")
    objectives: list[str] = Field(default_factory=list)
    context: dict[str, Any] = Field(default_factory=dict)


class WorkflowResponse(BaseModel):
    workflow_id: str
    status: str
    summary: str
    artifacts: dict[str, Any]
