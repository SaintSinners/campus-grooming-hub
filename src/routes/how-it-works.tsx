import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — GroomHub" },
      { name: "description", content: "From onboarding to intelligent habit formation — a five-phase progressive engagement model." },
      { property: "og:title", content: "How It Works — GroomHub" },
      { property: "og:description", content: "Five phases: Onboarding, Academic, Personal, Social, Intelligence." },
    ],
  }),
  component: HowPage,
});

const phases = [
  { num: "01", title: "Onboarding", focus: "Setup & constraints", body: "Stylists upload timetables and define services. Clients set preferences. The constraint engine activates immediately." },
  { num: "02", title: "Academic", focus: "Scheduling reliability", body: "The booking engine cross-checks every request against your lecture map. Conflicts are blocked with friendly, real-time feedback." },
  { num: "03", title: "Personal", focus: "Self-management", body: "Grooming tracker, lookbook and shared inventory turn one-off services into healthy routines." },
  { num: "04", title: "Social", focus: "Community trust", body: "Peer reviews, before/after posts and reputation badges amplify quality service providers." },
  { num: "05", title: "Intelligence", focus: "Habit formation", body: "Predictive booking suggestions and AI-assisted matching reduce friction at every step." },
];

function HowPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.25em] text-gold font-semibold mb-4">HOW IT WORKS</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              A <span className="italic text-gold">progressive</span> engagement model.
            </h1>
            <p className="mt-6 text-muted-foreground text-lg">
              Five phases. Each builds on the last — turning chaotic side hustles into structured opportunities.
            </p>
          </div>

          <div className="mt-20 relative">
            <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />
            <div className="space-y-10">
              {phases.map((p) => (
                <div key={p.num} className="relative grid md:grid-cols-[8rem_1fr] gap-6 items-start">
                  <div className="relative">
                    <div className="size-16 rounded-full border border-gold/40 bg-background flex items-center justify-center font-display text-xl font-bold text-gold">
                      {p.num}
                    </div>
                  </div>
                  <div className="p-7 rounded-2xl border border-border/60 bg-surface/40 hover:border-gold/40 transition">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="font-display text-2xl md:text-3xl font-bold">{p.title}</h2>
                      <span className="text-xs tracking-widest text-gold uppercase px-3 py-1 rounded-full bg-gold/10">{p.focus}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-4 gap-4">
            {[
              { k: "95%", v: "Conflict-free bookings" },
              { k: "WCAG AA", v: "Accessibility target" },
              { k: "70%", v: "Social adoption" },
              { k: "+45", v: "Net Promoter Score" },
            ].map((s) => (
              <div key={s.v} className="p-6 rounded-2xl border border-border/60 bg-surface/40 text-center">
                <p className="font-display text-3xl font-bold text-gold">{s.k}</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-gold text-primary-foreground font-semibold hover:glow-gold transition">
              Start your journey <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
