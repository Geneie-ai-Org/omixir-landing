# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences of roughly equal priority — the site is a company front door, not a
single-funnel product page, and no one audience may be served at the cost of the others:

1. **Clinical and diagnostic lab decision-makers** — lab directors and heads of genomics
   evaluating whether to route NGS analysis through Omixir. They judge pipeline accuracy,
   variant-class coverage, validation rigor, and throughput.
2. **Hospital clinicians and genetic counselors** — clinical geneticists, fetal medicine
   specialists, and counselors who order tests and read reports. They judge interpretability,
   phenotype relevance, and whether a report is usable in a consultation.
3. **Partners, investors, and institutions** — pharma, academic collaborators, and funders
   evaluating Omixir as a company. They judge technical depth and credibility.

All three arrive to evaluate rather than to transact. The site's job is to make Omixir
legible and credible to a technically literate reader, not to close a purchase.

## Product Purpose

Omixir Bioinformatics Pvt. Ltd. is an Indian genomics company building NGS-based diagnostics,
AI-powered analysis platforms, and computational tools for precision medicine.

Stated mission: make advanced genomic diagnostics more accurate, accessible, and clinically
meaningful by integrating sequencing technologies, bioinformatics, and AI.

Stated vision: build genomics analysis platforms that enable earlier diagnosis, better clinical
decision-making, and personalized healthcare.

Two products:

- **Assure** — genomics analysis platform for detecting disease-associated variants from NGS
  data, aimed at prenatal and rare disease diagnostics. **In development / pre-launch.**
- **Geneie** — conversational AI genomics assistant for variant interpretation, literature
  retrieval, phenotype analysis, ACMG support, and report generation. **Live and publicly
  usable at https://geneie.chat/.**

Success for the site: a technically literate evaluator in any of the three audiences comes away
understanding what Omixir has built, believing it is real, and starting a conversation.

## Positioning

**AI-native interpretation — Assure and Geneie engineered together as one system.** The
differentiator is that analysis and interpretation live in the same loop: the pipeline that
calls and prioritizes variants and the assistant that explains them are built by the same team
against the same evidence model, rather than an analysis vendor bolting on a chatbot or a
chatbot wrapping someone else's pipeline.

Comprehensive variant coverage and Indian-population awareness are real capabilities (see
below) but are **not** the position. Future copy should not lead with them as the claim.

Note: the current live site's meta description leads with "tuned for the Indian population"
while its stats strip leads with "Global Diagnostic Standards." Neither reflects the confirmed
position. This is an open conflict for future work to resolve, not settled truth.

## Operating Context

Users arrive from clinical genomics work: sequencing runs produce VCFs and alignment data that
must be turned into a report a clinician can act on. The surrounding workflow includes
phenotype capture (HPO terms), variant prioritization, evidence review against clinical
databases, ACMG/AMP classification, and delivery of a written clinical report.

Evaluation is skeptical and technical. This audience reads gene symbols, HGVS notation, and
database names as evidence, and reads vague benefit language as absence of evidence.

Named customer segments the company addresses: hospitals, genetic counselors, clinical labs,
IVF clinics, academic institutions, and pharma.

## Capabilities and Constraints

**Confirmed analysis capabilities:**

- Variant classes: SNVs, indels, CNVs, structural variants, repeat expansions, mitochondrial
  variants, and complex genomic rearrangements
- Phenotype-driven prioritization (HPO-based)
- Population-aware clinical reporting
- Short-read and long-read sequencing integration
- Orthogonal validation across variant classes
- ML models for variant prioritization by pathogenicity and phenotype relevance
- Cloud-based, scalable compute

**Databases and models integrated:** ClinVar, OMIM, HGMD, dbSNP, SIFT, PolyPhen, CADD,
SpliceAI, GenomeIndia, gnomAD, HPO, ACMG.

**GenomeIndia integration** improves allele-frequency accuracy for the Indian population. Real
capability; not the headline position.

**Product stage — treat as a hard constraint on copy:**

- Assure is pre-launch. It is not running live clinical cases for external customers. Honest
  asks are early access, pilot conversations, or a waitlist — **not** "buy," "get started," or
  claims of current clinical use.
- Geneie is live and publicly usable; the site should send people straight to geneie.chat.

**Known truth-vs-copy conflicts on the live site** (flagged for future work, not yet resolved):

- Assure is presented as a shipping "Flagship Platform" with a "Request a Demo" CTA while
  pre-launch.
- Case cards labeled "Validated" with a case ID (`Case A-01823`) and counts (1,284 variants /
  42 prioritized / 6 reported) read as real results but are illustrative UI data.
- The footer links "Privacy Policy," "Terms of Service," and "HIPAA / Data Compliance" to `#`.
- The contact form's submit handler only sets local state — no message is actually sent, but
  the UI says "Message sent."

**Technical constraints:** TanStack Start (React 19, file-based routing), TypeScript, Tailwind
CSS v4, shadcn/ui, deployed to Cloudflare via nitro. The repository syncs with Lovable, so
published git history must never be rewritten. See CLAUDE.md for the full engineering
constraints, including the layered SSR error handling that must be preserved.

## Brand Commitments

- **Name:** Omixir Bioinformatics Pvt. Ltd.
- **Tagline in use:** "Defining the Future of Genomic Diagnostics"
- **Logo assets:** `public/omixir_logo.svg`, `public/image.svg` (footer lockup),
  `public/favicon.png`; Geneie mark at `src/assets/geneie-g.svg.asset.json`
- **Product names:** Assure, Geneie — always capitalized, never "the Assure platform" pluralized
  or genericized
- **Contact:** support@omixir.com · +91 99006 38928
- **LinkedIn:** company page linked from the footer
- **Voice:** technically precise and evidence-forward. Gene symbols, HGVS notation, and database
  names are used directly rather than simplified away.

## Evidence on Hand

**None.** This is the single most important constraint on future work.

Every number, case ID, gene, variant, classification, and report count currently on the site is
illustrative UI data. There are, as of this record:

- no real or anonymized case data cleared for display
- no named customers, pilot partners, or reference labs
- no publications, benchmarks, concordance data, or validation studies
- no testimonials, press, or awards

Future work must not fabricate any of these, must not present illustrative product UI as real
results without labeling it, and must not invent pricing, licensing, deployment, or performance
claims. Where proof would normally go, use honestly-labeled product demonstration, method
transparency, or explicit forward-looking framing.

Real assets that do exist: the Geneie product itself at https://geneie.chat/ (live, publicly
usable) — currently the strongest available proof that Omixir ships working software.

## Product Principles

1. **Evidence or nothing.** With no case data, customers, or publications, credibility comes
   from method transparency and the working product — never from invented proof. Illustrative
   data must read as illustrative.
2. **Stage-honest asks.** Assure is pre-launch and Geneie is live; the site's calls to action
   must match each product's real stage rather than a uniform "request a demo."
3. **Speak to technical readers directly.** The audience reads notation and database names as
   substance. Precision earns trust here; simplification reads as evasion.
4. **One system, two products.** Assure and Geneie are presented as halves of a single
   interpretation loop, not as a product list.
5. **Serve three audiences without diluting any.** Lab, clinic, and institution each need a path
   through the site; a single generic pitch fails all three.

## Accessibility & Inclusion

No product-specific standard has been established. Baseline: clinical audiences on desktop
workstations in professional settings, with the general expectation that a healthcare-adjacent
site meets WCAG 2.1 AA. Confirm before treating as a requirement.
