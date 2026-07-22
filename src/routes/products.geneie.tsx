import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, MessageSquare, BookOpen, FileText, Brain } from "lucide-react";

export const Route = createFileRoute("/products/geneie")({
  head: () => ({
    meta: [
      { title: "Geneie — Conversational AI Genomics Assistant" },
      { name: "description", content: "Geneie is Omixir's AI-powered genomics assistant for variant interpretation, literature retrieval, ACMG guideline support, and automated genomic report generation." },
      { property: "og:title", content: "Geneie by Omixir" },
      { property: "og:description", content: "Your conversational genomics expert." },
    ],
  }),
  component: GeneiePage,
});

function GeneiePage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-brand-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI Genomics Assistant
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Geneie: Your conversational genomics expert.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Simplify genomic data interpretation for clinicians, researchers, and diagnostic laboratories — with conversational AI trained on the entire clinical genomics stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.geneie.chat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90">
                Try Geneie <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-md gradient-brand">
                <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold">Geneie</span>
              <span className="ml-auto text-xs text-muted-foreground">geneie.chat</span>
            </div>
            <div className="space-y-3 p-4">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
                What are the most clinically relevant pathogenic variants for epileptic encephalopathy?
              </div>
              <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm text-foreground">
                Here are the top ACMG-classified variants ranked by evidence:
                <div className="mt-3 space-y-1.5 text-xs">
                  {[
                    ["SCN1A", "c.2792C>T", "Pathogenic"],
                    ["KCNQ2", "c.740C>T", "Likely Path."],
                    ["STXBP1", "c.875G>A", "VUS"],
                    ["CDKL5", "c.175C>T", "Pathogenic"],
                  ].map(([g, v, c]) => (
                    <div key={g} className="flex items-center justify-between rounded bg-background px-2 py-1">
                      <span className="font-mono font-semibold text-primary">{g}</span>
                      <span className="font-mono text-muted-foreground">{v}</span>
                      <span className="text-[10px] font-medium">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
                Draft a clinical report for SCN1A.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Capabilities</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: MessageSquare, t: "Natural language variant interpretation", d: "Ask about any variant in plain English and get evidence-backed answers." },
            { i: BookOpen, t: "Instant literature retrieval", d: "PubMed, ClinVar, OMIM, and HGMD synthesized into a single response." },
            { i: Brain, t: "ACMG guideline support", d: "Automated criteria mapping across PVS1–BP7 with justification." },
            { i: FileText, t: "Automated report generation", d: "Population-aware genomic reports drafted from raw variant data." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-secondary" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}