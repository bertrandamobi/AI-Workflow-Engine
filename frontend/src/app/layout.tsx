import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic AI Workflow Engine Demo",
  description: "Senior-level orchestration demo UI for LangGraph-powered workflows",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
