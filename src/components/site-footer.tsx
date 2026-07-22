import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[oklch(0.16_0.04_240)] text-[oklch(0.85_0.02_240)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md gradient-brand text-primary-foreground">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 3c4 4 8 14 12 18M18 3c-4 4-8 14-12 18" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-lg font-semibold text-white">Omixir Bioinformatics</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-[oklch(0.75_0.02_240)]">
            AI-powered precision genomics for the Indian population. Transforming sequencing data
            into actionable clinical insights.
          </p>
          <div className="mt-6 space-y-1 text-sm">
            <div>support@omixir.com</div>
            <div>+91 89032 66203</div>
            <div>Bengaluru, Karnataka, India</div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Products</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/products/assure" className="hover:text-secondary">Assure</Link></li>
            <li><Link to="/products/geneie" className="hover:text-secondary">Geneie</Link></li>
            <li><Link to="/technology" className="hover:text-secondary">Technology</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-secondary">About</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
            <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-secondary">Terms of Service</a></li>
            <li><a href="#" className="hover:text-secondary">HIPAA / Data Compliance</a></li>
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