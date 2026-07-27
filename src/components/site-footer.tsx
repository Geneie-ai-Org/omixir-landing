import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[oklch(0.16_0.04_240)] text-[oklch(0.85_0.02_240)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-flex items-center rounded-md bg-white px-3 py-2">
            <img
              src="/omixir_logo.svg"
              alt="Omixir Bioinformatics"
              className="h-8 w-auto"
              width={160}
              height={32}
            />
          </div>
          <p className="mt-4 max-w-md text-sm text-[oklch(0.75_0.02_240)]">
            Defining the Future of Genomic Diagnostics
          </p>
          <div className="mt-6 space-y-1 text-sm">
            <div>support@omixir.com</div>
            <div>+91 99006 38928</div>
          </div>
          <a
            href="https://www.linkedin.com/company/99336820/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Omixir on LinkedIn"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Products</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/products/assure" className="hover:text-secondary">
                Assure
              </Link>
            </li>
            <li>
              <a
                href="https://geneie.chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                Geneie
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/"
                hash="about"
                hashScrollIntoView={{ behavior: "smooth" }}
                className="hover:text-secondary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="contact"
                hashScrollIntoView={{ behavior: "smooth" }}
                className="hover:text-secondary"
              >
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                HIPAA / Data Compliance
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-[oklch(0.7_0.02_240)]">
          Copyright © 2026 Omixir Bioinformatics Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
