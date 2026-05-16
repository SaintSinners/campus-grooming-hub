import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  User,
  Clock,
  CheckCircle2,
  CircleCheck,
  Scissors,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  ShieldCheck,
  ArrowRight,
  Waves,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Service — GroomHub" },
      {
        name: "description",
        content:
          "Choose your stylist, service and time slot. GroomHub handles the scheduling around your lectures.",
      },
      { property: "og:title", content: "Book a Service — GroomHub" },
      {
        property: "og:description",
        content: "Reserve a fade, beard trim, braids or more in seconds.",
      },
    ],
  }),
  component: BookPage,
});

const stylists = [
  { name: "Lwazi M.", role: "Fade Specialist", rating: 4.9, reviews: 128, about: "Expert in modern fades and clean finishes." },
  { name: "Anele B.", role: "Braids Expert", rating: 4.8, reviews: 96, about: "Hand-crafted braids and protective styles." },
  { name: "Sipho K.", role: "Beard Artist", rating: 4.7, reviews: 74, about: "Sharp beard sculpting and grooming." },
  { name: "Thando P.", role: "Locs Specialist", rating: 4.8, reviews: 88, about: "Loc maintenance, retwists and styling." },
];

const services = [
  { name: "Fade Cut", price: "R120", duration: "45 mins", icon: Scissors },
  { name: "Beard Trim", price: "R80", duration: "20 mins", icon: Sparkles },
  { name: "Braids", price: "R200", duration: "90 mins", icon: Scissors },
  { name: "Line Up", price: "R60", duration: "15 mins", icon: Waves },
  { name: "Hair Wash", price: "R50", duration: "20 mins", icon: Waves },
];

const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
const unavailable = new Set(["12:00", "13:00"]);

const steps = [
  { n: 1, label: "Service", icon: User },
  { n: 2, label: "Time", icon: Clock },
  { n: 3, label: "Confirm", icon: CheckCircle2 },
  { n: 4, label: "Done", icon: CircleCheck },
];

function BookPage() {
  const [stylistIdx, setStylistIdx] = useState(0);
  const [serviceIdx, setServiceIdx] = useState(0);
  const [time, setTime] = useState("15:00");
  const [date] = useState(14);
  const [confirmed, setConfirmed] = useState(false);

  const stylist = stylists[stylistIdx];
  const service = services[serviceIdx];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div className="flex items-start gap-5">
              <div className="size-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                <CalendarIcon className="size-6 text-gold" />
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] text-gold font-semibold mb-2">BOOKING</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                  Book a <span className="italic text-gold">Service</span>
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Select your stylist, service and time. We'll handle the rest.
                </p>
              </div>
            </div>

            {/* Stepper */}
            <ol className="flex items-center gap-2 sm:gap-4">
              {steps.map((s, i) => {
                const active = i === 0;
                return (
                  <li key={s.n} className="flex items-center gap-2 sm:gap-4">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`size-10 rounded-full flex items-center justify-center border-2 ${active ? "bg-gold border-gold text-primary-foreground" : "border-border/60 text-muted-foreground"}`}>
                        <s.icon className="size-4" />
                      </div>
                      <span className={`text-[10px] tracking-widest uppercase ${active ? "text-gold font-semibold" : "text-muted-foreground"}`}>
                        {s.n}. {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && <div className="w-6 sm:w-12 h-px bg-border/60 mb-5" />}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8">
            {/* LEFT — flow */}
            <div className="space-y-10">
              {/* Stylist */}
              <section>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-display text-2xl font-bold">1. Choose Your Stylist</h2>
                  <button className="text-sm text-gold inline-flex items-center gap-1 hover:underline">
                    View all stylists <ChevronRight className="size-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stylists.map((s, i) => {
                    const active = i === stylistIdx;
                    return (
                      <button
                        key={s.name}
                        onClick={() => setStylistIdx(i)}
                        className={`relative p-5 rounded-2xl border text-center transition ${active ? "border-gold bg-gold/5" : "border-border/60 bg-surface/40 hover:border-gold/40"}`}
                      >
                        {active && (
                          <span className="absolute top-3 right-3 size-6 rounded-full bg-gold flex items-center justify-center">
                            <CheckCircle2 className="size-4 text-primary-foreground" />
                          </span>
                        )}
                        <div className="size-20 mx-auto rounded-full bg-gradient-to-br from-gold/30 to-surface flex items-center justify-center mb-3">
                          <User className="size-9 text-gold/70" />
                        </div>
                        <p className="font-semibold">{s.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.role}</p>
                        <p className="mt-2 inline-flex items-center gap-1 text-xs">
                          <Star className="size-3.5 fill-gold text-gold" /> {s.rating}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Service */}
              <section>
                <h2 className="font-display text-2xl font-bold mb-5">2. Choose Your Service</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {services.map((s, i) => {
                    const active = i === serviceIdx;
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.name}
                        onClick={() => setServiceIdx(i)}
                        className={`relative p-5 rounded-2xl border text-center transition ${active ? "border-gold bg-gold/5" : "border-border/60 bg-surface/40 hover:border-gold/40"}`}
                      >
                        {active && (
                          <span className="absolute top-3 right-3 size-5 rounded-full bg-gold flex items-center justify-center">
                            <CheckCircle2 className="size-3.5 text-primary-foreground" />
                          </span>
                        )}
                        <div className={`size-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${active ? "bg-gold/15" : "bg-background/60"}`}>
                          <Icon className={`size-6 ${active ? "text-gold" : "text-muted-foreground"}`} />
                        </div>
                        <p className="font-semibold text-sm">{s.name}</p>
                        <p className="text-xs text-gold mt-1">{s.price}</p>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Date & Time */}
              <section>
                <h2 className="font-display text-2xl font-bold mb-5">3. Choose Date & Time</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Mini calendar */}
                  <div className="p-5 rounded-2xl border border-border/60 bg-surface/40">
                    <div className="flex items-center justify-between mb-4">
                      <button className="size-8 rounded-full hover:bg-background/60 flex items-center justify-center"><ChevronLeft className="size-4" /></button>
                      <p className="font-display font-bold">May 2025</p>
                      <button className="size-8 rounded-full hover:bg-background/60 flex items-center justify-center"><ChevronRight className="size-4" /></button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-[10px] tracking-widest text-muted-foreground text-center mb-2">
                      {["MON","TUE","WED","THU","FRI","SAT","SUN"].map(d => <div key={d}>{d}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-sm text-center">
                      {[28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1].map((d, i) => {
                        const muted = i < 3 || i > 33;
                        const sel = d === date && !muted;
                        return (
                          <button
                            key={i}
                            className={`aspect-square rounded-md transition ${sel ? "bg-gold text-primary-foreground font-bold" : muted ? "text-muted-foreground/40" : "hover:bg-gold/10"}`}
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time slots */}
                  <div className="p-5 rounded-2xl border border-border/60 bg-surface/40">
                    <p className="font-semibold mb-4">Wednesday, 14 May</p>
                    <div className="grid grid-cols-3 gap-2">
                      {times.map(t => {
                        const off = unavailable.has(t);
                        const sel = t === time;
                        return (
                          <button
                            key={t}
                            disabled={off}
                            onClick={() => setTime(t)}
                            className={`py-2.5 rounded-lg text-sm font-medium border transition ${sel ? "bg-gold text-primary-foreground border-gold" : off ? "text-muted-foreground/40 border-border/30 cursor-not-allowed" : "border-border/60 hover:border-gold/50"}`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground inline-flex items-center gap-1.5">
                      <Clock className="size-3.5" /> Times in grey are unavailable (lecture schedule)
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT — Summary */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="p-6 rounded-2xl border border-gold/30 bg-surface/40">
                <h3 className="font-display text-xl font-bold text-gold mb-5">Booking Summary</h3>
                <dl className="space-y-4 text-sm">
                  <Row icon={User} k="Stylist" v={`${stylist.name} (${stylist.role})`} />
                  <Row icon={Scissors} k="Service" v={service.name} />
                  <Row icon={CalendarIcon} k="Date" v="Wednesday, 14 May 2025" />
                  <Row icon={Clock} k="Time" v={time} />
                  <Row icon={Clock} k="Duration" v={service.duration} />
                </dl>
                <div className="my-5 border-t border-border/60" />
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display text-lg">Total</span>
                  <span className="font-display text-2xl font-bold text-gold">{service.price}</span>
                </div>
                <button
                  onClick={() => setConfirmed(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-gold text-primary-foreground font-semibold hover:glow-gold transition"
                >
                  {confirmed ? "Booking Confirmed ✓" : "Confirm Booking"} {!confirmed && <ArrowRight className="size-4" />}
                </button>
                {confirmed && (
                  <p className="mt-3 text-xs text-gold text-center">
                    {service.name} with {stylist.name} on Wed 14 May at {time}. Check your dashboard for details.
                  </p>
                )}
                {!confirmed && (
                  <p className="mt-3 text-xs text-muted-foreground inline-flex items-center gap-1.5 justify-center w-full">
                    <ShieldCheck className="size-3.5 text-gold" /> Your booking is secure and protected
                  </p>
                )}
              </div>

              <div className="p-6 rounded-2xl border border-border/60 bg-surface/40">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-gradient-to-br from-gold/30 to-surface flex items-center justify-center">
                    <User className="size-6 text-gold/70" />
                  </div>
                  <div>
                    <p className="font-semibold">{stylist.name}</p>
                    <p className="text-xs text-muted-foreground">{stylist.role}</p>
                    <p className="text-xs mt-0.5 inline-flex items-center gap-1">
                      <Star className="size-3 fill-gold text-gold" /> {stylist.rating} ({stylist.reviews} reviews)
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-background/40">
                  <p className="text-xs tracking-widest text-gold uppercase mb-1">About</p>
                  <p className="text-sm text-muted-foreground">{stylist.about}</p>
                </div>
                <button className="mt-4 w-full py-2.5 rounded-lg border border-gold/40 text-gold text-sm font-semibold hover:bg-gold/10 transition">
                  View Profile
                </button>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Row({ icon: Icon, k, v }: { icon: any; k: string; v: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="size-4 text-gold mt-0.5 shrink-0" />
      <div>
        <dt className="text-xs tracking-widest text-muted-foreground uppercase">{k}</dt>
        <dd className="font-medium mt-0.5">{v}</dd>
      </div>
    </div>
  );
}
