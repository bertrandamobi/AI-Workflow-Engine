import WorkflowForm from "../components/WorkflowForm";
import "./styles.css";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="noise-overlay" />

      <header className="hero">
        <p className="eyebrow">LangGraph • OpenAI • Retrieval • Orchestration</p>
        <h1>Agentic AI Workflow Engine</h1>
        <p className="hero-copy">
          Autonomous market analysis with stateful graph execution, retriever-augmented context,
          and executive-grade recommendation synthesis.
        </p>
        <div className="hero-metrics">
          <article>
            <span>3</span>
            <p>Orchestration Nodes</p>
          </article>
          <article>
            <span>1 Click</span>
            <p>Run Strategic Analysis</p>
          </article>
          <article>
            <span>Typed</span>
            <p>End-to-End Contracts</p>
          </article>
        </div>
      </header>

      <section className="content-grid">
        <article className="panel elevated">
          <h2>Workflow Studio</h2>
          <p className="panel-copy">
            Trigger a complete research → analysis → recommendation cycle. Designed for portfolio
            strategy, product intelligence, and competitive planning.
          </p>
          <WorkflowForm />
        </article>

        <aside className="panel glass">
          <h2>System Highlights</h2>
          <ul>
            <li>Deterministic LangGraph state machine orchestration.</li>
            <li>OpenAI model abstraction for configurable inference strategy.</li>
            <li>Vector retrieval-ready service layer for contextual augmentation.</li>
            <li>Containerized full-stack runtime for local and cloud demos.</li>
          </ul>
          <div className="pulse-card">
            <h3>Demo Intent</h3>
            <p>
              This interface is optimized for executive demos and architectural storytelling,
              showcasing senior-level engineering quality and product thinking.
            </p>
          </div>
        </aside>
      </section>

      <footer className="site-footer">
        <p>© 2023 Bertrand Amobi.</p>
        <p>For demonstration purposes only. <a href="https://github.com/bertrandamobi/AI-Workflow-Engine" target="_blank" rel="noreferrer">View Source Code.</a></p>
      </footer>
    </main>
  );
}
