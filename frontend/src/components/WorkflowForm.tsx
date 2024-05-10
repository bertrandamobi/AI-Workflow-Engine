"use client";

import { FormEvent, useState } from "react";
import { runMarketAnalysis } from "../lib/api";
import { WorkflowResponse } from "../types/workflow";

export default function WorkflowForm() {
  const [company, setCompany] = useState("NVIDIA");
  const [objectives, setObjectives] = useState("Competitive positioning, product strategy");
  const [result, setResult] = useState<WorkflowResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const response = await runMarketAnalysis({
        company,
        objectives: objectives.split(",").map((item) => item.trim()),
      });
      setResult(response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={company} onChange={(event) => setCompany(event.target.value)} placeholder="Company" />
        <textarea
          value={objectives}
          onChange={(event) => setObjectives(event.target.value)}
          placeholder="Comma-separated objectives"
        />
        <button type="submit" disabled={loading}>{loading ? "Running..." : "Run Workflow"}</button>
      </form>

      {result && (
        <section>
          <h2>Workflow Result</h2>
          <p><strong>ID:</strong> {result.workflow_id}</p>
          <p><strong>Status:</strong> {result.status}</p>
          <h3>Summary</h3>
          <p>{result.summary}</p>
          <h3>Recommendations</h3>
          <p>{result.artifacts.recommendations}</p>
        </section>
      )}
    </div>
  );
}
