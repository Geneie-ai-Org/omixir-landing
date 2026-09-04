import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ShieldCheck, Dna, Layers, Brain, FileCheck2, Users } from "lucide-react";

export const Route = createFileRoute("/products/assure")({
  head: () => ({
    meta: [
      { title: "Assure — Prenatal & Rare Disease Genomic Diagnostics" },
      {
        name: "description",
        content:
          "Assure is Omixir's flagship genomics platform: comprehensive variant detection, orthogonal validation, and AI-assisted clinical reporting for prenatal and rare disease diagnostics.",
      },
      { property: "og:title", content: "Assure by Omixir" },
      { property: "og:description", content: "Clarity in prenatal and rare disease diagnostics." },
    ],
  }),
  component: AssurePage,
});

function AssurePage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-brand-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <Reveal stagger className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-secondary">
              <Dna className="h-3.5 w-3.5" strokeWidth={1.75} /> Flagship Platform
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Assure: Clarity in prenatal & rare disease diagnostics.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A highly accurate genomics platform for comprehensive SNV, Indel, CNV, and structural
              variant detection.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                hash="contact"
                hashScrollIntoView={{ behavior: "smooth" }}
                className="group inline-flex items-center gap-2 rounded-md gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-[box-shadow,transform] duration-200 hover:shadow-xl hover:shadow-primary/30 active:translate-y-px"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={160}
            className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/30"
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-sm font-semibold text-foreground">Assure · Case A-01823</span>
              <span className="rounded-full bg-secondary/12 px-2.5 py-0.5 text-xs font-medium text-secondary">
                Validated
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                ["1,284", "Variants"],
                ["42", "Prioritized"],
                ["6", "Reported"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-lg border border-border/70 bg-muted p-3">
                  <div className="font-mono text-lg font-bold text-secondary">{n}</div>
                  <div className="mt-0.5 text-[10px] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {[
                { g: "BRCA1", v: "c.5266dupC", t: "SNV", c: "Pathogenic" },
                { g: "DMD", v: "Exon 45–52 del", t: "CNV", c: "Pathogenic" },
                { g: "FMR1", v: "CGG (200+)", t: "Repeat", c: "Pathogenic" },
                { g: "MT-TL1", v: "m.3243A>G", t: "Mito", c: "Likely Path." },
                { g: "CFTR", v: "c.1521_1523del", t: "Indel", c: "Pathogenic" },
              ].map((r) => (
                <div
                  key={r.g}
                  className="grid grid-cols-12 items-center gap-2 rounded-md border border-border/70 bg-muted px-3 py-2 text-xs"
                >
                  <div className="col-span-3 font-mono font-semibold text-foreground">{r.g}</div>
                  <div className="col-span-5 font-mono text-muted-foreground">{r.v}</div>
                  <div className="col-span-2 text-[10px] text-muted-foreground">{r.t}</div>
                  <div
                    className={`col-span-2 text-right font-medium ${
                      r.c === "Pathogenic"
                        ? "text-signal-pathogenic"
                        : r.c.startsWith("Likely")
                          ? "text-signal-likely"
                          : "text-muted-foreground"
                    }`}
                  >
                    {r.c}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Platform capabilities
        </h2>
        <Reveal stagger as="dl" className="mt-10 border-t border-border">
          {[
            {
              i: Layers,
              t: "Comprehensive variant detection",
              d: "SNVs, indels, CNVs, SVs, repeat expansions, and mitochondrial variants in one workflow.",
            },
            {
              i: ShieldCheck,
              t: "Orthogonal validation",
              d: "Proprietary sequencing and analysis technique with multi-modal validation for clinical-grade accuracy.",
            },
            {
              i: Brain,
              t: "AI-assisted interpretation",
              d: "Machine learning models prioritize variants by pathogenicity and phenotype relevance.",
            },
            {
              i: FileCheck2,
              t: "Phenotype-driven prioritization",
              d: "HPO-based ranking aligns variant evidence with the patient's clinical presentation.",
            },
            {
              i: Users,
              t: "Indian population awareness",
              d: "GenomeIndia integration improves allele frequency accuracy for the Indian population.",
            },
            {
              i: Dna,
              t: "Clinical-grade reporting",
              d: "Population-aware, ACMG-aligned reports ready for clinical delivery.",
            },
          ].map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="grid grid-cols-1 gap-x-6 gap-y-2 border-b border-border py-7 xl:grid-cols-[1.5rem_18rem_1fr] xl:items-baseline"
            >
              <Icon
                className="h-5 w-5 shrink-0 text-secondary xl:translate-y-0.5"
                strokeWidth={1.5}
                aria-hidden
              />
              <dt className="text-base font-semibold text-foreground">{t}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{d}</dd>
            </div>
          ))}
        </Reveal>
      </section>
    </>
  );
}
