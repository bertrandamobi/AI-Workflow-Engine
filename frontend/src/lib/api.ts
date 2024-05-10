import { WorkflowRequest, WorkflowResponse } from "../types/workflow";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

export async function runMarketAnalysis(payload: WorkflowRequest): Promise<WorkflowResponse> {
  const response = await fetch(`${API_BASE_URL}/workflows/market-analysis`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}
