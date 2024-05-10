export interface WorkflowRequest {
  company: string;
  objectives: string[];
}

export interface WorkflowResponse {
  workflow_id: string;
  status: string;
  summary: string;
  artifacts: {
    research_notes: string;
    recommendations: string;
  };
}
