import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";

import { FlickeringGrid } from "@/components/flickering-grid";

const GRID_MASK = "radial-gradient(ellipse 80% 90% at 50% 0%, #000 15%, transparent 90%)";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-surface-band text-muted-foreground">
      {/*
        Squares are the teal data/insight accent, not the violet action colour —
        this is atmosphere, and spending the action hue on it would dilute the CTAs.
        maxOpacity is 0.18, not the library's 0.3: at 0.3 a glyph sitting over a
        fully-lit square drops muted text to 4.41:1, under the AA floor.
      */}
      <FlickeringGrid
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        squareSize={2}
        gridGap={10}
        flickerChance={0.22}
        color="#3aced6"
        maxOpacity={0.18}
        style={{ maskImage: GRID_MASK, WebkitMaskImage: GRID_MASK }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-flex items-center">
            <img
              src="/image.svg"
              alt="Omixir Bioinformatics"
              className="h-14 w-auto"
              width={160}
              height={32}
            />
          </div>
          <p className="mt-4 max-w-md text-sm">Defining the Future of Genomic Diagnostics</p>
          <div className="mt-6 space-y-1 text-sm text-foreground">
            <div>support@omixir.com</div>
            <div>+91 99006 38928</div>
          </div>
          <a
            href="https://www.linkedin.com/company/99336820/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Omixir on LinkedIn"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-150 hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Products</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/products/assure"
                className="rounded-sm transition-colors duration-150 hover:text-primary"
              >
                Assure
              </Link>
            </li>
            <li>
              <a
                href="https://geneie.chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm transition-colors duration-150 hover:text-primary"
              >
                Geneie
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/"
                hash="about"
                hashScrollIntoView={{ behavior: "smooth" }}
                className="rounded-sm transition-colors duration-150 hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="contact"
                hashScrollIntoView={{ behavior: "smooth" }}
                className="rounded-sm transition-colors duration-150 hover:text-primary"
              >
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="rounded-sm transition-colors duration-150 hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="rounded-sm transition-colors duration-150 hover:text-primary">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="rounded-sm transition-colors duration-150 hover:text-primary">
                HIPAA / Data Compliance
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground">
          Copyright © 2026 Omixir Bioinformatics Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
