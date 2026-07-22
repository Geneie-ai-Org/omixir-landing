import { createFileRoute } from "@tanstack/react-router";
import { Cloud, Cpu, Database, GitBranch, Layers, Microscope } from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Bioinformatics Pipelines, Databases & Infrastructure" },
      { name: "description", content: "Scalable bioinformatics workflows built on industry-standard tools, clinical annotation databases, and cloud-based genomic computing infrastructure." },
      { property: "og:title", content: "Omixir Technology" },
      { property: "og:description", content: "Our pipelines, databases, and infrastructure for clinical genomics." },
    ],
  }),
  component: Technology,
});

function Technology() {
  return (
    <>
      <section className="relative overflow-hidden gradient-brand-soft">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-28">
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Bioinformatics engineered for clinical scale.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Omixir builds scalable workflows on industry-standard tools and modern computational infrastructure — from short- and long-read integration to cloud-based genomic computing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: Layers, t: "Sequencing Integration", d: "Short-read and long-read sequencing integration across platforms and chemistries." },
            { i: Microscope, t: "Variant Calling & Validation", d: "Variant calling with orthogonal validation across SNVs, indels, CNVs, and structural variants." },
            { i: GitBranch, t: "Structural Variant Analysis", d: "Dedicated SV callers combined with visualization and manual review workflows." },
            { i: Cpu, t: "ML for Variant Prioritization", d: "Machine learning models rank variants by pathogenicity and phenotype relevance." },
            { i: Database, t: "Clinical Annotation", d: "ClinVar, OMIM, HGMD, dbSNP, and other clinical databases integrated end-to-end." },
            { i: Cloud, t: "Cloud-Based Compute", d: "High-performance and cloud-based genomic computing that scales with clinical demand." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-sm">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold text-foreground">Databases & Prediction Models</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Clinical annotation, functional prediction, and population genomics — combined into a single interpretation surface.
          </p>
          <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-4">
            {["ClinVar", "OMIM", "HGMD", "dbSNP", "SIFT", "PolyPhen", "CADD", "SpliceAI", "GenomeIndia", "gnomAD", "HPO", "ACMG"].map((n) => (
              <div key={n} className="rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-mono font-semibold text-primary">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}