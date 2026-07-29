import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Dna, ShieldCheck, Building2, Baby, FlaskConical, GraduationCap, Pill, HeartPulse, Cloud, Cpu, Database, GitBranch, Layers, Microscope, Mail, Phone, Send, CheckCircle2 } from "lucide-react";

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


const BG = { teal: "/bg1.png", ember: "/bg2.png", violet: "/bg3.png" };
const SPECIALTIES = [
  {
    t: "Single nucleotide variants (SNVs)",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    feature: true,
    bg: BG.violet,
  },
  { t: "Insertions & deletions (Indels)", span: "lg:col-span-2", bg: BG.teal },
  { t: "Copy number variants (CNVs)", span: "", bg: BG.ember },
  { t: "Structural variants (SVs)", span: "", bg: BG.violet },
  { t: "Repeat expansions", span: "", bg: BG.teal },
  { t: "Mitochondrial variants", span: "", bg: BG.ember },
  { t: "Complex genomic rearrangements", span: "lg:col-span-2", bg: BG.teal },
  { t: "Phenotype-driven prioritization", span: "lg:col-span-2", bg: BG.violet },
  { t: "Population-aware clinical reporting", span: "lg:col-span-2", bg: BG.ember },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand-soft" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:py-28">
          <div className="flex flex-col justify-center">
            <h1 className="text-[2.125rem] font-bold leading-[1.1] tracking-tight text-foreground md:text-[2.625rem] lg:text-[3.5rem]">
              The Precision Genomics Platform for{" "}
              <span className="text-secondary">Clinical Diagnostics</span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground md:text-lg">
              Transforming complex sequencing data into actionable clinical insights with
              cutting-edge bioinformatics and artificial intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products/assure"
                className="group inline-flex items-center gap-2 rounded-md gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-[box-shadow,transform] duration-200 hover:shadow-xl hover:shadow-primary/30 active:translate-y-px"
              >
                Explore Assure
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://geneie.chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary active:translate-y-px"
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
      <section className="border-y border-border bg-surface-band">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { k: "SNV | Indel | CNV | SV", v: "Variant Coverage" },
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
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
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
            <div className="rounded-2xl bg-card p-8 shadow-lg shadow-black/20">
              <h3 className="mt-4 text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Make advanced genomic diagnostics more accurate, accessible, and clinically
                meaningful through the integration of cutting-edge sequencing technologies,
                bioinformatics, and artificial intelligence.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-lg shadow-black/20">
              <h3 className="mt-4 text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To build robust genomics analysis platforms enabling earlier diagnosis, better
                clinical decision-making, and personalized healthcare — making precision medicine
                accessible to every patient and clinician.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface-band">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              What we specialize in
            </h3>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Comprehensive genomic analysis to detect a wide spectrum of genetic variants involved
              in a broad range of genetic disorders and diseases.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:auto-rows-[9rem] lg:grid-cols-4">
              {SPECIALTIES.map(({ t, span, feature, bg }) => (
                <li
                  key={t}
                  className={`group relative isolate flex min-h-36 items-center justify-center overflow-hidden rounded-2xl bg-card p-6 text-center shadow-lg shadow-black/20 transition-shadow duration-600 ease-in-out hover:shadow-xl hover:shadow-black/40 ${span}`}
                >
                  <img
                    src={bg}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-fill opacity-[0.30] saturate-[0.18] transition-[opacity,transform,filter] duration-500 ease-out group-hover:scale-105 group-hover:opacity-70 group-hover:saturate-70"
                  />
                  <span
                    className={`font-medium leading-snug text-foreground ${
                      feature ? "text-lg lg:text-xl" : "text-sm"
                    }`}
                  >
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            A clinical genomics platform and an AI copilot, engineered together for accuracy and
            speed.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          <SolutionBlock
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
      <section id="technology" className="scroll-mt-16">
        <div className="relative overflow-hidden gradient-brand-soft">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Bioinformatics engineered for clinical scale.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Omixir builds scalable workflows on industry-standard tools and modern computational
              infrastructure — from short- and long-read integration to cloud-based genomic
              computing.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20">
          <dl className="border-t border-border">
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
                className="grid grid-cols-1 gap-x-6 gap-y-2 border-b border-border py-7 xl:grid-cols-[1.5rem_18rem_1fr] xl:items-baseline"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-secondary xl:translate-y-0.5 ml-4"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <dt className="text-base font-semibold text-foreground">{t}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground ml-4">{d}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-surface-band">
          <div className="mx-auto max-w-264 py-20">
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              Databases & Prediction Models
            </h3>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Clinical annotation, functional prediction, and population genomics — combined into a
              single interpretation surface.
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
              {[ "ClinVar", "OMIM", "HGMD", "dbSNP", "SIFT", "PolyPhen", "CADD", "SpliceAI", "GenomeIndia", "gnomAD", "HPO", "ACMG" ].map((n) => (
                <li
                  key={n}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Who We Serve
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trusted across the clinical, research, and industry genomics ecosystem.
            </p>
          </div>
          <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {[
              { i: Building2, l: "Hospitals" },
              { i: HeartPulse, l: "Genetic Counselors" },
              { i: FlaskConical, l: "Clinical Labs" },
              { i: Baby, l: "IVF Clinics" },
              { i: GraduationCap, l: "Academic Institutions" },
              { i: Pill, l: "Pharma" },
            ].map(({ i: Icon, l }) => (
              <li key={l} className="flex items-center gap-2.5">
                <Icon className="h-5 w-5 shrink-0 text-secondary" strokeWidth={1.5} aria-hidden />
                <span className="text-sm font-medium text-foreground">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16">
        <div className="gradient-brand-soft">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get in touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We'd love to hear from you, whether you're exploring Assure, evaluating Geneie, or
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
            <a
              href="mailto:support@omixir.com"
              className="rounded-sm transition-colors duration-150 hover:text-primary"
            >
              support@omixir.com
            </a>
          </ContactItem>
          <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone">
            <a
              href="tel:+919900638928"
              className="rounded-sm transition-colors duration-150 hover:text-primary"
            >
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
          className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/20 md:p-8"
        >
          {sent ? (
            <div className="animate-swap-in flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="h-12 w-12 text-secondary" strokeWidth={1.5} />
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
                <label htmlFor="contact-subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="mt-1.5 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-foreground outline-none transition-colors duration-150 hover:border-border-strong focus:border-primary"
                >
                  <option>Assure Inquiry</option>
                  <option>Geneie Demo</option>
                  <option>Partnership</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1.5 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-foreground outline-none transition-colors duration-150 hover:border-border-strong focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-md gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-[box-shadow,transform] duration-200 hover:shadow-xl hover:shadow-primary/30 active:translate-y-px"
              >
                Send message
                <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, children }: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-secondary">
        {icon}
      </div>
      <span className="sr-only">{label}</span>
      <div className="text-sm font-medium text-foreground">{children}</div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && (
          <span aria-hidden className="ml-0.5 text-destructive">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-foreground outline-none transition-colors duration-150 hover:border-border-strong focus:border-primary"
      />
    </div>
  );
}

function SolutionBlock({ title, subtitle, body, bullets, to, cta, visual, reverse }: {
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
  const linkClasses = "group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-foreground";
  const arrow = (
    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
  );
  return (
    <div
      className={`grid gap-12 md:grid-cols-2 md:items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {title}
        </h3>
        <p className="mt-2 text-lg text-foreground/80">{subtitle}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
        <ul className="mt-6 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                strokeWidth={1.75}
                aria-hidden
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {isExternal ? (
          <a href={to} target="_blank" rel="noopener noreferrer" className={linkClasses}>
            {cta} {arrow}
          </a>
        ) : (
          <Link to={to} className={linkClasses}>
            {cta} {arrow}
          </Link>
        )}
      </div>
      <div>{visual}</div>
    </div>
  );
}

function usePausedWhenHidden<T extends Element>() {
  const ref = useRef<T>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let onscreen = false;
    const sync = () => setRunning(onscreen && !document.hidden);

    const observer = new IntersectionObserver(
      ([entry]) => {
        onscreen = entry.isIntersecting;
        sync();
      },
      { rootMargin: "120px" },
    );
    observer.observe(node);
    document.addEventListener("visibilitychange", sync);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return { ref, running };
}

const HELIX_ROWS = 24;
const HELIX_TURNS = 1.5;
const HELIX_PERIOD = 9;
const HELIX_HALF_WIDTH = 62;


function HeroGraphic() {
  const { ref, running } = usePausedWhenHidden<HTMLDivElement>();

  const rows = Array.from({ length: HELIX_ROWS }, (_, i) => {
    const phase = (i * HELIX_TURNS) / HELIX_ROWS; // turns
    return {
      y: 40 + i * 14,
      restingScaleX: Math.cos(phase * 2 * Math.PI),
      delay: -phase * HELIX_PERIOD,
    };
  });

  // Variants called along the sequence, resolving top to bottom.
  const calls = [
    { x: 200 + HELIX_HALF_WIDTH, y: 96, delay: 0 },
    { x: 200 - HELIX_HALF_WIDTH, y: 152, delay: 1.1 },
    { x: 200 + HELIX_HALF_WIDTH, y: 236, delay: 2.2 },
    { x: 200 - HELIX_HALF_WIDTH, y: 306, delay: 3.3 },
  ];

  return (
    <div ref={ref} className="relative aspect-square w-full max-w-lg">
      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        role="img"
        aria-label="A rotating DNA double helix with variants being called along the sequence"
      >
        <defs>
          <linearGradient id="helix-strand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--color-primary)" />
            <stop offset="1" stopColor="var(--color-secondary)" />
          </linearGradient>
        </defs>

        {/* Orbit guides: static, they read as the analysis frame around the sequence */}
        <g fill="none" stroke="var(--color-border-strong)" strokeWidth="1">
          <circle cx="200" cy="200" r="180" strokeDasharray="4 10" opacity="0.7" />
          <circle cx="200" cy="200" r="140" strokeDasharray="2 8" opacity="0.45" />
        </g>

        {rows.map((row, i) => (
          <g
            key={i}
            style={{
              transformBox: "view-box",
              transformOrigin: `200px ${row.y}px`,
              transform: `scaleX(${row.restingScaleX})`,
              animation: running
                ? `helix-phase ${HELIX_PERIOD}s ease-in-out ${row.delay}s infinite`
                : undefined,
              willChange: running ? "transform" : undefined,
            }}
          >
            <line
              x1={200 - HELIX_HALF_WIDTH}
              y1={row.y}
              x2={200 + HELIX_HALF_WIDTH}
              y2={row.y}
              stroke="url(#helix-strand)"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.55"
            />
            <circle cx={200 - HELIX_HALF_WIDTH} cy={row.y} r="4" fill="var(--color-primary)" />
            <circle cx={200 + HELIX_HALF_WIDTH} cy={row.y} r="4" fill="var(--color-secondary)" />
          </g>
        ))}

        {calls.map((c, i) => (
          <g key={i}>
            <circle
              cx={c.x}
              cy={c.y}
              r="4"
              fill="none"
              stroke="var(--color-secondary)"
              strokeWidth="1.5"
              style={{
                animation: running ? `variant-ring 4.4s ease-out ${c.delay}s infinite` : undefined,
                opacity: running ? undefined : 0,
              }}
            />
            <circle
              cx={c.x}
              cy={c.y}
              r="3"
              fill="var(--color-secondary)"
              style={{
                animation: running ? `variant-call 4.4s ease-out ${c.delay}s infinite` : undefined,
                opacity: running ? undefined : 0.85,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Classification carries colour; VUS deliberately stays neutral. */
function classificationClass(c: string) {
  if (c === "Pathogenic") return "text-signal-pathogenic";
  if (c.startsWith("Likely")) return "text-signal-likely";
  return "text-muted-foreground";
}

function AssureVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/30">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <Dna className="h-4 w-4 text-secondary" strokeWidth={1.75} />
          <span className="text-sm font-semibold text-foreground">Assure | Variant Report</span>
        </div>
        <span className="rounded-full bg-secondary/12 px-2.5 py-0.5 text-xs font-medium text-secondary">
          Validated
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { g: "BRCA1", v: "c.5266dupC", c: "Pathogenic", t: "SNV" },
          { g: "DMD", v: "Exon 45–52 del", c: "Pathogenic", t: "CNV" },
          { g: "FMR1", v: "CGG (200+)", c: "Pathogenic", t: "Repeat" },
          { g: "MT-TL1", v: "m.3243A>G", c: "Likely Path.", t: "Mito" },
        ].map((r) => (
          <div
            key={r.g}
            className="grid grid-cols-12 items-center gap-2 rounded-md bg-muted px-3 py-2 text-xs"
          >
            <div className="col-span-3 font-mono font-semibold text-foreground">{r.g}</div>
            <div className="col-span-5 font-mono text-muted-foreground">{r.v}</div>
            <div className="col-span-2 text-[10px] text-muted-foreground">{r.t}</div>
            <div className={`col-span-2 text-right font-medium ${classificationClass(r.c)}`}>
              {r.c}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["1,284", "Variants"],
          ["42", "Prioritized"],
          ["6", "Reported"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-md bg-muted p-2.5 text-center">
            <div className="font-mono text-sm font-bold text-secondary">{n}</div>
            <div className="mt-0.5 text-[10px] text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GeneieVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/30">
      <div className="flex items-center gap-2 px-4 py-3">
        <div className="flex items-center justify-center">
          <img src="/geneie-dark.svg" alt="" className="h-8 w-auto ml-2" />
        </div>
        <span className="ml-auto text-xs text-muted-foreground">geneie.chat</span>
      </div>
      <div className="space-y-3 p-4">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary-solid px-3 py-2 text-sm text-primary-foreground">
          Prioritize pathogenic variants for HP:0001250 (seizures) in this VCF.
        </div>
        <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-border bg-muted px-3 py-2 text-sm text-foreground">
          Found 3 phenotype-matched variants. Ranked by ACMG evidence + population frequency.
          <div className="mt-3 space-y-1.5 text-xs">
            {[
              ["SCN1A", "c.2792C>T", "Pathogenic"],
              ["KCNQ2", "c.740C>T", "Likely Path."],
              ["STXBP1", "c.875G>A", "VUS"],
            ].map(([g, v, c]) => (
              <div
                key={g}
                className="flex items-center justify-between gap-2 rounded border border-border/70 bg-background px-2 py-1.5"
              >
                <span className="font-mono font-semibold text-foreground">{g}</span>
                <span className="font-mono text-muted-foreground">{v}</span>
                <span className={`font-medium ${classificationClass(c)}`}>{c}</span>
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
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-band px-8 py-14 text-center md:px-16">
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ready to bring precision genomics to your practice?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Request a demo of Assure or Geneie and see how Omixir accelerates clinical genomic
            interpretation.
          </p>
          <Link
            to="/"
            hash="contact"
            hashScrollIntoView={{ behavior: "smooth" }}
            className="group mt-8 inline-flex items-center gap-2 rounded-md gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-[box-shadow,transform] duration-200 hover:shadow-xl hover:shadow-primary/35 active:translate-y-px"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
