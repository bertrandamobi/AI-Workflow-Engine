# Agentic AI Workflow Engine

A production-style, full-stack orchestration platform for autonomous market analysis workflows using **LangGraph**, **OpenAI**, and **vector retrieval patterns**.

<a href="https://bertrandAmobi.github.io/AI-Workflow-Engine/">
  <img src="/images/app-image.png" width="100%" />
</a>

---

🔗 **[Live Demo](https://bertrandAmobi.github.io/AI-Workflow-Engine/)**

</div>

> **Live Demo (GitHub Pages):** Uses a fully client-side market simulation so the dashboard remains interactive without backend infrastructure.

---

## Architecture Overview

- **Backend**: FastAPI service exposing workflow execution APIs.
- **Orchestration**: LangGraph state-machine graph with explicit node transitions (`research -> analysis -> recommendations`).
- **LLM Layer**: OpenAI chat model abstraction with configurable model selection.
- **Retrieval Layer**: Chroma-based vector service abstraction for extensible RAG workflows.
- **Frontend**: Next.js dashboard to trigger workflows and inspect results.
- **Runtime**: Docker Compose for local full-stack bootstrapping.

## Repository Structure

```text
AI-Workflow-Engine
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── backend/
│   ├── Dockerfile
│   ├── app/
│   │   ├── __init__.py
│   │   ├── api/
│   │   │   └── workflows.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── logging.py
│   │   ├── graph/
│   │   │   └── workflow.py
│   │   ├── main.py
│   │   ├── schemas/
│   │   │   └── workflow.py
│   │   └── services/
│   │       ├── llm_service.py
│   │       └── vector_store.py
│   ├── pyproject.toml
│   └── tests/
│       └── test_health.py
└── frontend/
│   ├── Dockerfile
│   ├── next.config.mjs
│   ├── package.json
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── styles.css
│   │   ├── components/
│   │   │   └── WorkflowForm.tsx
│   │   ├── lib/
│   │   │   └── api.ts
│   │   └── types/
│   │       └── workflow.ts
│   └── tsconfig.json
├── images/
│   └── app-image.png
├── .env.example
├── docker-compose.yml
├── .gitignore
├── .gitkeep
├── LICENSE
└── README.md
```

## Local Development

### 1) Prerequisites
- Python 3.11+
- Node 22+
- Docker + Docker Compose

### 2) Configure environment

```bash
cp .env.example .env
```

Populate at least:
- `OPENAI_API_KEY`
- `OPENAI_MODEL`

### 3) Run backend

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -e .
uvicorn app.main:app --reload --port 8000
```

### 4) Run frontend

```bash
cd frontend
npm install
npm run dev
```

### 5) Run full stack with Docker

```bash
docker compose up --build
```

## API Contract

### POST `/workflows/market-analysis`

Request:
```json
{
  "company": "NVIDIA",
  "objectives": ["Competitive positioning", "Pricing strategy"],
  "context": {}
}
```

Response:
```json
{
  "workflow_id": "uuid",
  "status": "completed",
  "summary": "...",
  "artifacts": {
    "research_notes": "...",
    "recommendations": "..."
  }
}
```

## Engineering Characteristics

- Clear separation of concerns (API / orchestration / services / schema boundaries).
- Strong typing across Python and TypeScript.
- Environment-driven configuration with explicit defaults.
- Dockerized runtime and clean onboarding docs.
- Test scaffold for API health and easy extension for integration tests.

## Scalability Roadmap

1. Add task queue + worker runtime (Celery/Arq) for asynchronous workflow runs.
2. Persist workflow state transitions in SQLModel-backed store.
3. Add observability stack (OpenTelemetry traces, structured logs, metrics).
4. Add multi-tenant authn/authz and policy-enforced tool access.
5. Expand graph with conditional branches and evaluator nodes.

## Quality Gates (recommended)

Backend:
```bash
pytest
ruff check .
mypy app
```

Frontend:
```bash
npm run lint
npm run build
```

## GitHub Pages Demo Deployment

This repository includes a ready-to-use workflow at `.github/workflows/deploy-pages.yml`.

1. Push your code to `main`.
2. In GitHub: **Settings → Pages → Source = GitHub Actions**.
3. Run workflow (push or manual dispatch).

The build publishes `frontend/out/` to Pages.

---

## Licence

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
