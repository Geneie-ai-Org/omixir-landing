import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-band text-muted-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
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
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground">
          Copyright © 2026 Omixir Bioinformatics Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
