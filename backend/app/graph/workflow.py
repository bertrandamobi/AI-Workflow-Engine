from typing import TypedDict
from uuid import uuid4

from langgraph.graph import END, StateGraph

from app.services.llm_service import LLMService


class MarketState(TypedDict):
    company: str
    objectives: list[str]
    research_notes: str
    analysis: str
    recommendations: str


llm = LLMService()


def research_node(state: MarketState) -> MarketState:
    prompt = f"Research top market dynamics for {state['company']}."
    state["research_notes"] = llm.summarize(prompt)
    return state


def analysis_node(state: MarketState) -> MarketState:
    prompt = (
        f"Use notes to produce strategic analysis for {state['company']}: {state['research_notes']}"
    )
    state["analysis"] = llm.summarize(prompt)
    return state


def recommendations_node(state: MarketState) -> MarketState:
    prompt = (
        f"Provide 5 executive recommendations for {state['company']} based on {state['analysis']}"
    )
    state["recommendations"] = llm.summarize(prompt)
    return state


def build_market_workflow():
    graph = StateGraph(MarketState)
    graph.add_node("research", research_node)
    graph.add_node("analysis", analysis_node)
    graph.add_node("recommendations", recommendations_node)

    graph.set_entry_point("research")
    graph.add_edge("research", "analysis")
    graph.add_edge("analysis", "recommendations")
    graph.add_edge("recommendations", END)

    return graph.compile()


def run_workflow(company: str, objectives: list[str]) -> dict:
    workflow = build_market_workflow()
    workflow_id = str(uuid4())

    state: MarketState = {
        "company": company,
        "objectives": objectives,
        "research_notes": "",
        "analysis": "",
        "recommendations": "",
    }
    result = workflow.invoke(state)
    return {
        "workflow_id": workflow_id,
        "status": "completed",
        "summary": result["analysis"],
        "artifacts": {
            "research_notes": result["research_notes"],
            "recommendations": result["recommendations"],
        },
    }
