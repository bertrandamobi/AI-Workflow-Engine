from fastapi import APIRouter

from app.graph.workflow import run_workflow
from app.schemas.workflow import WorkflowRequest, WorkflowResponse

router = APIRouter(prefix="/workflows", tags=["workflows"])


@router.post("/market-analysis", response_model=WorkflowResponse)
def execute_market_analysis(payload: WorkflowRequest) -> WorkflowResponse:
    result = run_workflow(payload.company, payload.objectives)
    return WorkflowResponse(**result)
