import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Calendar, Scissors, Users, Accessibility, Sparkles, Star } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero-model.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GroomHub — Where Student Hustle Meets Structure" },
      { name: "description", content: "Balance your academics, build your brand, and stay on top of your grooming. Built for student entrepreneurs." },
      { property: "og:title", content: "GroomHub — Where Student Hustle Meets Structure" },
      { property: "og:description", content: "Academic scheduling, grooming tracker and peer reviews built for student entrepreneurs." },
    ],
  }),
  component: HomePage,
});

const universities = ["University of Johannesburg", "University of Pretoria", "Durban University of Technology", "Varsity College", "UNISA"];

const quickFeatures = [
  { icon: Calendar, title: "Academic Sync", desc: "Smart scheduling that respects your classes." },
  { icon: Scissors, title: "Grooming Tracker", desc: "Track your styles, services & products." },
  { icon: Users, title: "Community Reviews", desc: "Build trust and grow your reputation." },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 size-[500px] rounded-full bg-gold/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-12 lg:pt-20 pb-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/5 text-gold text-xs font-semibold tracking-wider">
                <Sparkles className="size-3.5" />
                BUILT FOR STUDENTS. DESIGNED FOR IMPACT.
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                Where Student
                <br />
                Hustle Meets
                <br />
                <span className="italic text-gold">Structure.</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Balance your academics, build your brand, and stay on top of your grooming.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/how-it-works" className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl gradient-gold text-primary-foreground font-semibold hover:glow-gold transition">
                  Get Started
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                </Link>
                <button className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-gold/50 text-foreground font-semibold hover:bg-gold/5 transition">
                  <Play className="size-4 text-gold" fill="currentColor" />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-[110%] rounded-full border border-gold/30" />
              </div>
              <div className="relative aspect-square max-w-lg mx-auto">
                <img
                  src={heroImg}
                  alt="Student entrepreneur with a fresh fade haircut, illuminated by warm gold studio lighting"
                  width={1024}
                  height={1024}
                  className="relative z-10 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* feature strip */}
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-12">
            <div className="rounded-2xl border border-gold/20 bg-surface/60 backdrop-blur p-2 md:p-3">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/50">
                {quickFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-4 p-5">
                    <div className="size-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <f.icon className="size-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg">{f.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 mx-auto max-w-3xl rounded-full border border-gold/20 bg-surface/40 px-6 py-3 flex flex-wrap items-center justify-center gap-3 text-sm">
              <Accessibility className="size-4 text-gold" />
              <span className="text-gold font-semibold">Accessible. Usable. Reliable.</span>
              <span className="text-muted-foreground">Built with WCAG 2.1 (POUR) principles.</span>
              <Link to="/about" className="text-gold font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* trusted by */}
          <div className="border-t border-border/40 bg-surface/40">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-6">
              <p className="text-xs tracking-[0.2em] text-muted-foreground font-semibold">TRUSTED BY STUDENT ENTREPRENEURS</p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
                {universities.map((u) => (
                  <span key={u} className="text-xs font-semibold text-muted-foreground/80 tracking-wide uppercase">{u}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THREE INSTANCES */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl mb-16">
              <p className="text-xs tracking-[0.25em] text-gold font-semibold mb-4">THE PROGRESSIVE MODEL</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Three instances.
                <br />
                <span className="italic text-gold">One ecosystem.</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                A user-centred system that grows with you — from onboarding to community, every interaction is guided by constraints, feedback and visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Academic", subtitle: "Operational core", points: ["Timetable Sync", "Constraint-based booking", "Conflict-free scheduling"] },
                { num: "02", title: "Personal", subtitle: "Self-management", points: ["Grooming Tracker", "Lookbook of styles", "Shared inventory"] },
                { num: "03", title: "Social", subtitle: "Community trust", points: ["Peer review feed", "Reputation badges", "Before / after gallery"] },
              ].map((card) => (
                <div key={card.num} className="group relative p-8 rounded-2xl border border-border/60 bg-surface/40 hover:border-gold/40 transition">
                  <div className="font-display text-6xl text-gold/30 group-hover:text-gold/60 transition">{card.num}</div>
                  <h3 className="mt-2 font-display text-2xl font-bold">{card.title}</h3>
                  <p className="text-xs tracking-widest text-gold uppercase mt-1">{card.subtitle}</p>
                  <ul className="mt-6 space-y-2.5">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm">
                        <span className="size-1.5 rounded-full bg-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-24 border-y border-border/40 bg-surface/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 text-gold fill-gold" />)}
            </div>
            <blockquote className="font-display text-2xl md:text-4xl leading-snug">
              "GroomHub turned my side hustle into a real business — without messing with my class schedule. My clients trust the reviews, and I trust the system."
            </blockquote>
            <div className="mt-8 text-sm">
              <p className="font-semibold">Lebo M.</p>
              <p className="text-muted-foreground">3rd-year Business Student • UJ</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 p-12 md:p-16 text-center">
              <div className="absolute inset-0 gradient-gold opacity-10" />
              <div className="relative">
                <h2 className="font-display text-4xl md:text-5xl font-bold">Ready to <span className="italic text-gold">level up</span>?</h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Join the first cohort of student entrepreneurs building structured, accessible businesses.</p>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-gold text-primary-foreground font-semibold hover:glow-gold transition">
                  Claim your profile <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
