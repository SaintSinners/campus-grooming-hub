import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Scissors, Users, Package, Camera, Shield, Bell, Sparkles, BookOpen, BarChart3, MessagesSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — GroomHub" },
      { name: "description", content: "Academic Sync, Grooming Tracker, Lookbook, Peer Reviews and more — every feature engineered with constraints and feedback." },
      { property: "og:title", content: "Features — GroomHub" },
      { property: "og:description", content: "A complete toolkit for student grooming entrepreneurs." },
    ],
  }),
  component: FeaturesPage,
});

const groups = [
  {
    label: "Academic Instance",
    tagline: "Constraint-driven scheduling",
    items: [
      { icon: Calendar, title: "Timetable Sync", desc: "Upload your iCal or class JSON. The booking engine maps every academic block automatically." },
      { icon: Shield, title: "Conflict Prevention", desc: "Booking attempts during a lecture are blocked instantly with clear, friendly feedback." },
      { icon: Bell, title: "Smart Reminders", desc: "Class buffers, prep windows and travel time built into every confirmed booking." },
    ],
  },
  {
    label: "Personal Instance",
    tagline: "Self-optimisation layer",
    items: [
      { icon: Scissors, title: "Grooming Tracker", desc: "A complete service log — what was done, by whom, and when to book again." },
      { icon: Camera, title: "Lookbook", desc: "Save reference styles. The system auto-suggests them on future bookings." },
      { icon: Package, title: "Shared Inventory", desc: "Track shared products, oils and tools so the chair is always ready." },
    ],
  },
  {
    label: "Social Instance",
    tagline: "Community & trust",
    items: [
      { icon: Users, title: "Peer Reviews", desc: "Before/after posts, ratings and comments build a verified reputation." },
      { icon: MessagesSquare, title: "Social Feed", desc: "A live community feed to share style showcases, tips and inspiration with peers.", to: "/social-feed" },
      { icon: Sparkles, title: "Reputation Badges", desc: "Top-rated stylists get gamified recognition — and more bookings." },
      { icon: BarChart3, title: "Director Dashboard", desc: "Programme leaders monitor adoption, compliance and engagement.", to: "/dashboard" },
    ],
  },
];

function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.25em] text-gold font-semibold mb-4">FEATURES</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Built around <span className="italic text-gold">how you actually work.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg">
              Every module follows Norman's constraints, Nielsen's visibility and feedback, and WCAG 2.1 POUR — so the system feels obvious from day one.
            </p>
          </div>

          <div className="mt-20 space-y-24">
            {groups.map((g, idx) => (
              <div key={g.label}>
                <div className="flex items-end justify-between gap-4 mb-10 pb-4 border-b border-border/40">
                  <div>
                    <p className="text-xs tracking-[0.25em] text-gold font-semibold">0{idx + 1} — {g.tagline.toUpperCase()}</p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">{g.label}</h2>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {g.items.map((it) => {
                    const to = (it as { to?: string }).to;
                    const card = (
                      <div className="p-7 rounded-2xl border border-border/60 bg-surface/40 hover:border-gold/40 transition h-full">
                        <div className="size-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                          <it.icon className="size-5 text-gold" />
                        </div>
                        <h3 className="font-display text-xl font-bold">{it.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                        {to && <p className="mt-4 text-xs text-gold font-semibold">Open →</p>}
                      </div>
                    );
                    return to ? (
                      <Link key={it.title} to={to}>{card}</Link>
                    ) : (
                      <div key={it.title}>{card}</div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-10 rounded-3xl border border-gold/30 bg-surface/40">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="size-5 text-gold" />
              <p className="text-xs tracking-[0.25em] text-gold font-semibold">UNDER THE HOOD</p>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Constraint logic, in plain code.</h3>
            <pre className="mt-6 p-6 rounded-xl bg-background/60 border border-border/60 text-xs md:text-sm overflow-x-auto font-mono text-muted-foreground"><code>{`function validateBooking(request, academicSchedule) {
  const conflict = academicSchedule.some(slot =>
    request.start < slot.end && request.end > slot.start
  );
  if (conflict) {
    showFeedback("❌ Booking conflicts with lecture");
    return false;
  }
  return true;
}`}</code></pre>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
