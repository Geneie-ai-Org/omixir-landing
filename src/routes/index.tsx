import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Dna,
  ShieldCheck,
  Building2,
  Baby,
  FlaskConical,
  GraduationCap,
  Pill,
  HeartPulse,
  Target,
  Eye,
  Sparkles,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Microscope,
  Mail,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import geneieG from "@/assets/geneie-g.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omixir Bioinformatics — The Precision Genomics Platform for Clinical Diagnostics" },
      {
        name: "description",
        content:
          "Transforming complex sequencing data into actionable clinical insights with cutting-edge bioinformatics and AI, tuned for the Indian population.",
      },
      {
        property: "og:title",
        content: "Omixir Bioinformatics — The Precision Genomics Platform for Clinical Diagnostics",
      },
      {
        property: "og:description",
        content:
          "Transforming complex sequencing data into actionable clinical insights with cutting-edge bioinformatics and AI, tuned for the Indian population.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand-soft" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,oklch(0.42_0.14_235/0.25)_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:py-32">
          <div className="flex flex-col justify-center">
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
              The Precision Genomics Platform for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Clinical Diagnostics
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Transforming complex sequencing data into actionable clinical insights with
              cutting-edge bioinformatics and artificial intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products/assure"
                className="inline-flex items-center gap-2 rounded-md gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
              >
                Explore Assure <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://geneie.chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Meet Geneie AI
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { k: "SNV · Indel · CNV · SV", v: "Variant Coverage" },
            { k: "AI-Assisted", v: "Interpretation" },
            {
              k: "Global Diagnostic Standards",
              v: "Worldwide applicability for precision medicine",
            },
            { k: "Seamless Clinical Workflows", v: "Highly scalable and automated pipelines" },
          ].map((s) => (
            <div key={s.v} className="px-6 py-6 text-center">
              <div className="text-sm font-semibold text-primary md:text-base">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-16 border-t border-border">
        <div className="relative overflow-hidden gradient-brand-soft">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
            <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Bridging the gap between cutting-edge research and clinical reality.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Omixir Bioinformatics Pvt. Ltd. is an Indian genomics company developing NGS-based
              diagnostics, AI-powered analysis platforms, and computational tools for precision
              medicine.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Make advanced genomic diagnostics more accurate, accessible, and clinically
                meaningful through the integration of cutting-edge sequencing technologies,
                bioinformatics, and artificial intelligence.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <Eye className="h-8 w-8 text-secondary" />
              <h3 className="mt-4 text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To build robust genomics analysis platforms enabling earlier diagnosis, better
                clinical decision-making, and personalized healthcare — making precision medicine
                accessible to every patient and clinician.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h3 className="text-3xl font-bold text-foreground">What we specialize in</h3>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Comprehensive genomic analysis to detect a wide spectrum of genetic variants involved
              in a broad range of genetic disorders and diseases.
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
                <div
                  key={t}
                  className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Solutions</h2>
          <p className="mt-4 text-muted-foreground">
            A clinical genomics platform and an AI copilot — engineered together for accuracy and
            speed.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          <SolutionBlock
            eyebrow="Flagship Platform"
            title="Assure"
            subtitle="Clarity in prenatal rare disease diagnostics."
            body="Assure is Omixir's flagship genomics analysis platform designed to enable comprehensive and accurate detection of disease-associated genetic variants from next-generation sequencing (NGS) data. Powered by Omixir's proprietary analysis pipeline, Assure integrates advanced bioinformatics for variant prioritization, phenotype-driven interpretation, and clinically curated evidence to transform complex genomic data into actionable clinical insights."
            bullets={[
              "Comprehensive detection of SNVs, indels, CNVs, structural variants, repeat expansions, and mitochondrial variants",
              "Integrated annotation using ClinVar, OMIM, HGMD, dbSNP, gnomAD, and other leading genomic databases",
              "Scalable cloud-based computational infrastructure for rapid analysis",
            ]}
            to="/products/assure"
            cta="Learn more"
            visual={<AssureVisual />}
          />
          <SolutionBlock
            reverse
            eyebrow="AI Genomics Assistant"
            title="Geneie"
            subtitle="Your conversational genomics expert."
            body="Geneie simplifies genomic data interpretation for clinicians, researchers, and diagnostic labs — variant interpretation, literature retrieval, phenotype analysis, ACMG support, and report generation through conversational AI."
            bullets={[
              "Natural language variant interpretation",
              "Instant literature & ACMG guideline support",
              "Automated, population-aware genomic reports",
            ]}
            to="https://geneie.chat/"
            cta="See Geneie in action"
            visual={<GeneieVisual />}
          />
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="scroll-mt-16 border-t border-border">
        <div className="relative overflow-hidden gradient-brand-soft">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Bioinformatics engineered for clinical scale.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Omixir builds scalable workflows on industry-standard tools and modern computational
              infrastructure — from short- and long-read integration to cloud-based genomic
              computing.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                i: Layers,
                t: "Sequencing Integration",
                d: "Short-read and long-read sequencing integration across platforms and chemistries.",
              },
              {
                i: Microscope,
                t: "Variant Calling & Validation",
                d: "Variant calling with orthogonal validation across SNVs, indels, CNVs, and structural variants.",
              },
              {
                i: GitBranch,
                t: "Structural Variant Analysis",
                d: "Dedicated SV callers combined with visualization and manual review workflows.",
              },
              {
                i: Cpu,
                t: "ML for Variant Prioritization",
                d: "Machine learning models rank variants by pathogenicity and phenotype relevance.",
              },
              {
                i: Database,
                t: "Clinical Annotation",
                d: "ClinVar, OMIM, HGMD, dbSNP, and other clinical databases integrated end-to-end.",
              },
              {
                i: Cloud,
                t: "Cloud-Based Compute",
                d: "High-performance and cloud-based genomic computing that scales with clinical demand.",
              },
            ].map(({ i: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-sm"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h3 className="text-3xl font-bold text-foreground">Databases & Prediction Models</h3>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Clinical annotation, functional prediction, and population genomics — combined into a
              single interpretation surface.
            </p>
            <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-4">
              {[
                "ClinVar",
                "OMIM",
                "HGMD",
                "dbSNP",
                "SIFT",
                "PolyPhen",
                "CADD",
                "SpliceAI",
                "GenomeIndia",
                "gnomAD",
                "HPO",
                "ACMG",
              ].map((n) => (
                <div
                  key={n}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-mono font-semibold text-primary"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Who We Serve</h2>
            <p className="mt-4 text-muted-foreground">
              Trusted across the clinical, research, and industry genomics ecosystem.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { i: Building2, l: "Hospitals" },
              { i: HeartPulse, l: "Genetic Counselors" },
              { i: FlaskConical, l: "Clinical Labs" },
              { i: Baby, l: "IVF Clinics" },
              { i: GraduationCap, l: "Academic Institutions" },
              { i: Pill, l: "Pharma" },
            ].map(({ i: Icon, l }) => (
              <div
                key={l}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition hover:border-primary/40 hover:shadow-sm"
              >
                <Icon className="h-6 w-6 text-primary" />
                <div className="text-xs font-medium text-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 border-t border-border">
        <div className="gradient-brand-soft">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Get in touch</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We'd love to hear from you — whether you're exploring Assure, evaluating Geneie, or
              looking to partner.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20">
          <ContactForm />
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="grid gap-10 md:grid-cols-5">
      <div className="md:col-span-2">
        <h3 className="text-xl font-semibold text-foreground">Contact information</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Reach us directly through any of the following channels.
        </p>
        <div className="mt-8 space-y-5">
          <ContactItem icon={<Mail className="h-5 w-5" />} label="Email">
            <a href="mailto:support@omixir.com" className="hover:text-primary">
              support@omixir.com
            </a>
          </ContactItem>
          <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone">
            <a href="tel:+919900638928" className="hover:text-primary">
              +91 99006 38928
            </a>
          </ContactItem>
        </div>
      </div>

      <div className="md:col-span-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="h-12 w-12 text-secondary" />
              <h4 className="mt-4 text-xl font-semibold text-foreground">Message sent</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks for reaching out. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Organization" name="org" />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="text-sm font-medium text-foreground">Subject</label>
                <select
                  name="subject"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option>Assure Inquiry</option>
                  <option>Geneie Demo</option>
                  <option>Partnership</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
              >
                Send message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md gradient-brand text-primary-foreground">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function SolutionBlock({
  eyebrow,
  title,
  subtitle,
  body,
  bullets,
  to,
  cta,
  visual,
  reverse,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
  to: string;
  cta: string;
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  const isExternal = to.startsWith("http");
  const linkClasses =
    "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all";
  return (
    <div
      className={`grid gap-12 md:grid-cols-2 md:items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-secondary">
          {eyebrow}
        </div>
        <h3 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">{title}</h3>
        <p className="mt-2 text-lg text-primary">{subtitle}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
        <ul className="mt-6 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {isExternal ? (
          <a href={to} target="_blank" rel="noopener noreferrer" className={linkClasses}>
            {cta} <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <Link to={to} className={linkClasses}>
            {cta} <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div>{visual}</div>
    </div>
  );
}

function HeroGraphic() {
  return (
    <div className="relative aspect-square w-full max-w-lg">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <linearGradient id="dna1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(0.42 0.14 235)" />
            <stop offset="1" stopColor="oklch(0.68 0.12 195)" />
          </linearGradient>
        </defs>
        <g stroke="url(#dna1)" strokeWidth="2.5" fill="none" strokeLinecap="round">
          {Array.from({ length: 24 }).map((_, i) => {
            const y = 40 + i * 14;
            const off = Math.sin(i * 0.5) * 60;
            return (
              <line
                key={i}
                x1={200 - off}
                y1={y}
                x2={200 + off}
                y2={y}
                opacity={0.3 + Math.abs(Math.sin(i * 0.5)) * 0.5}
              />
            );
          })}
        </g>
        <g fill="url(#dna1)">
          {Array.from({ length: 24 }).map((_, i) => {
            const y = 40 + i * 14;
            const off = Math.sin(i * 0.5) * 60;
            return (
              <g key={i}>
                <circle cx={200 - off} cy={y} r="4" />
                <circle cx={200 + off} cy={y} r="4" />
              </g>
            );
          })}
        </g>
        <g stroke="oklch(0.68 0.12 195)" strokeWidth="1" fill="none" opacity="0.5">
          <circle cx="200" cy="200" r="180" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="140" strokeDasharray="2 6" />
        </g>
        {[
          [60, 80],
          [340, 120],
          [80, 340],
          [330, 300],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="oklch(0.42 0.14 235)" />
            <circle
              cx={x}
              cy={y}
              r="12"
              fill="none"
              stroke="oklch(0.42 0.14 235)"
              strokeOpacity="0.3"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

function AssureVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <Dna className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">Assure · Variant Report</span>
        </div>
        <span className="rounded-full bg-secondary/15 px-2 py-0.5 text-xs font-medium text-secondary-foreground">
          Validated
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {[
          { g: "BRCA1", v: "c.5266dupC", c: "Pathogenic", t: "SNV" },
          { g: "DMD", v: "Exon 45–52 del", c: "Pathogenic", t: "CNV" },
          { g: "FMR1", v: "CGG (200+)", c: "Pathogenic", t: "Repeat" },
          { g: "MT-TL1", v: "m.3243A>G", c: "Likely Path.", t: "Mito" },
        ].map((r) => (
          <div
            key={r.g}
            className="grid grid-cols-12 items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs"
          >
            <div className="col-span-3 font-mono font-semibold text-primary">{r.g}</div>
            <div className="col-span-5 font-mono text-muted-foreground">{r.v}</div>
            <div className="col-span-2 text-[10px] uppercase tracking-wider text-muted-foreground">
              {r.t}
            </div>
            <div className="col-span-2 text-right font-medium text-foreground">{r.c}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ["1,284", "Variants"],
          ["42", "Prioritized"],
          ["6", "Reported"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-md bg-muted p-2">
            <div className="text-sm font-bold text-primary">{n}</div>
            <div className="text-[10px] uppercase text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GeneieVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-md gradient-brand">
          <img src={geneieG.url} alt="Geneie" className="h-4 w-auto" />
        </div>
        <span className="text-sm font-semibold">Geneie</span>

        <span className="ml-auto text-xs text-muted-foreground">geneie.chat</span>
      </div>
      <div className="space-y-3 p-4">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
          Prioritize pathogenic variants for HP:0001250 (seizures) in this VCF.
        </div>
        <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm text-foreground">
          Found 3 phenotype-matched variants. Ranked by ACMG evidence + population frequency.
          <div className="mt-3 space-y-1.5 text-xs">
            {[
              ["SCN1A", "c.2792C>T", "Pathogenic"],
              ["KCNQ2", "c.740C>T", "Likely Path."],
              ["STXBP1", "c.875G>A", "VUS"],
            ].map(([g, v, c]) => (
              <div
                key={g}
                className="flex items-center justify-between rounded bg-background px-2 py-1"
              >
                <span className="font-mono font-semibold text-primary">{g}</span>
                <span className="font-mono text-muted-foreground">{v}</span>
                <span className="text-[10px] font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl gradient-brand px-8 py-14 text-center text-primary-foreground md:px-16">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to bring precision genomics to your practice?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Request a demo of Assure or Geneie and see how Omixir accelerates clinical genomic
            interpretation.
          </p>
          <Link
            to="/"
            hash="contact"
            hashScrollIntoView={{ behavior: "smooth" }}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-md transition hover:bg-white/90"
          >
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
