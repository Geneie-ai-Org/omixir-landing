import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md gradient-brand text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 3c4 4 8 14 12 18M18 3c-4 4-8 14-12 18" strokeLinecap="round" />
              <path d="M8 6h8M8 18h8M9 10h6M9 14h6" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Omixir<span className="text-secondary"> Bioinformatics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setProdOpen(true)}
            onMouseLeave={() => setProdOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-primary">
              Products <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {prodOpen && (
              <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                  <Link to="/products/assure" className="block px-4 py-3 hover:bg-muted">
                    <div className="text-sm font-semibold text-foreground">Assure</div>
                    <div className="text-xs text-muted-foreground">Prenatal & rare disease</div>
                  </Link>
                  <Link to="/products/geneie" className="block border-t border-border px-4 py-3 hover:bg-muted">
                    <div className="text-sm font-semibold text-foreground">Geneie</div>
                    <div className="text-xs text-muted-foreground">AI genomics assistant</div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <NavLink to="/technology">Technology</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            Request a Demo
          </Link>
        </div>

        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink to="/products/assure" onClick={() => setOpen(false)}>Assure</MobileLink>
            <MobileLink to="/products/geneie" onClick={() => setOpen(false)}>Geneie</MobileLink>
            <MobileLink to="/technology" onClick={() => setOpen(false)}>Technology</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-foreground/80 transition hover:text-primary"
      activeProps={{ className: "text-primary" }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
    >
      {children}
    </Link>
  );
}