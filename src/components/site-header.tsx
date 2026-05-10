import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-10 rounded-full border-2 border-gold flex items-center justify-center">
            <Scissors className="size-5 text-gold" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-xl tracking-wider">GROOMHUB</div>
            <div className="text-[9px] tracking-[0.25em] text-muted-foreground">HUSTLE. STYLE. SUCCESS.</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm font-medium relative transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
                {active && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gold rounded-full" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/signup" className="text-sm font-medium text-foreground/90 hover:text-gold transition">Log In</Link>
          <Link to="/book" className="px-5 py-2.5 rounded-lg gradient-gold text-primary-foreground font-semibold text-sm hover:glow-gold transition">
            Book a Service
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                {n.label}
              </Link>
            ))}
            <Link to="/signup" onClick={() => setOpen(false)} className="mt-2 px-5 py-2.5 rounded-lg gradient-gold text-primary-foreground font-semibold text-sm text-center">
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
