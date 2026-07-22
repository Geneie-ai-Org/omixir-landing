import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Omixir — Bridging Research and Clinical Reality" },
      { name: "description", content: "Omixir Bioinformatics integrates NGS, bioinformatics, and AI to make precision medicine accessible to every patient and clinician." },
      { property: "og:title", content: "About Omixir Bioinformatics" },
      { property: "og:description", content: "Our mission, vision, and the team behind AI-powered genomics for India." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden gradient-brand-soft">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> About Omixir
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Bridging the gap between cutting-edge research and clinical reality.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Omixir Bioinformatics Pvt. Ltd. is an Indian genomics company developing NGS-based diagnostics, AI-powered analysis platforms, and computational tools for precision medicine.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Make advanced genomic diagnostics more accurate, accessible, and clinically meaningful through the integration of cutting-edge sequencing technologies, bioinformatics, and artificial intelligence.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <Eye className="h-8 w-8 text-secondary" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To build robust genomics analysis platforms enabling earlier diagnosis, better clinical decision-making, and personalized healthcare — making precision medicine accessible to every patient and clinician.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-foreground">What we specialize in</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Comprehensive genomic analysis to detect a wide spectrum of genetic variants involved in a broad range of genetic disorders and diseases.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Single nucleotide variants (SNVs)",
              "Insertions & deletions (Indels)",
              "Copy number variants (CNVs)",
              "Structural variants (SVs)",
              "Repeat expansions",
              "Mitochondrial variants",
              "Complex genomic rearrangements",
              "Phenotype-driven prioritization",
              "Population-aware clinical reporting",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}