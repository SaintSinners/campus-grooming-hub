import { createFileRoute } from "@tanstack/react-router";
import { Eye, Hand, Brain, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GroomHub" },
      { name: "description", content: "GroomHub is built on user-centred design, WCAG 2.1 POUR principles, and the lived experience of student entrepreneurs." },
      { property: "og:title", content: "About — GroomHub" },
      { property: "og:description", content: "User-centred. Accessible. Built by and for student entrepreneurs." },
    ],
  }),
  component: AboutPage,
});

const pour = [
  { icon: Eye, k: "Perceivable", v: "High-contrast visuals, alt text on every image, generous typography." },
  { icon: Hand, k: "Operable", v: "Full keyboard navigation, accessible controls, predictable interactions." },
  { icon: Brain, k: "Understandable", v: "Plain-language messages, consistent patterns, multiple support channels." },
  { icon: Wrench, k: "Robust", v: "Cross-device compatibility, assistive tech support, future-ready architecture." },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.25em] text-gold font-semibold mb-4">ABOUT GROOMHUB</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Designed for <span className="italic text-gold">impact.</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Student entrepreneurship is on the rise — but the tools haven't caught up. Calendars don't talk to bookings. Reputation lives in WhatsApp groups. Routines slip when exams hit.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                GroomHub fixes this with a single, accessible ecosystem grounded in user-centred design (Norman, 2013), Nielsen's heuristics (1994) and WCAG 2.1 (W3C, 2018).
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-gold/30 bg-surface/40">
              <p className="text-xs tracking-[0.25em] text-gold font-semibold">RESEARCH QUESTION</p>
              <p className="mt-4 font-display text-2xl leading-snug">
                "How can a digital platform integrate academic scheduling, personal management and social interaction to support student entrepreneurs while maintaining accessibility standards?"
              </p>
            </div>
          </div>

          <div className="mt-24">
            <p className="text-xs tracking-[0.25em] text-gold font-semibold mb-4">ACCESSIBILITY — POUR</p>
            <h2 className="font-display text-4xl font-bold">Inclusive by design.</h2>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pour.map((p) => (
                <div key={p.k} className="p-7 rounded-2xl border border-border/60 bg-surface/40">
                  <div className="size-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <p.icon className="size-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{p.k}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-6">
            {[
              { k: "Constraints", v: "Norman (2013)", t: "Eliminate invalid states before they happen." },
              { k: "Visibility & Feedback", v: "Nielsen (1994)", t: "Every action gets an honest, immediate response." },
              { k: "POUR", v: "WCAG 2.1 (2018)", t: "Perceivable. Operable. Understandable. Robust." },
            ].map((c) => (
              <div key={c.k} className="p-7 rounded-2xl border border-border/60 bg-surface/40">
                <p className="text-xs tracking-widest text-gold">{c.v}</p>
                <h3 className="font-display text-2xl font-bold mt-2">{c.k}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.t}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
