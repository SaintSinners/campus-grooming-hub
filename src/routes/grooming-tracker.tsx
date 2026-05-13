import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  TrendingUp, Plus, Save, Calendar as CalIcon, Clock, Star, Flame,
  Lightbulb, CheckCircle2, Bell, Pencil, Trash2, Info, MoreVertical,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useAuth, initials } from "@/lib/auth";

export const Route = createFileRoute("/grooming-tracker")({
  head: () => ({
    meta: [
      { title: "Grooming Tracker — GroomHub" },
      { name: "description", content: "Track your grooming journey, log styles, products and notes — keep your style on point." },
      { property: "og:title", content: "Grooming Tracker — GroomHub" },
      { property: "og:description", content: "Personal grooming log with history, streaks and reminders." },
    ],
  }),
  component: GroomingTrackerPage,
});

type Record = {
  id: string;
  style: string;
  date: string;
  products: string;
  notes: string;
};

const STYLES = ["Low Fade", "High Fade", "Taper Cut", "Braids", "Line Up", "Twists", "Loc Maintenance", "Beard Trim"];

const seed: Record[] = [
  { id: "1", style: "Low Fade", date: "14 May 2025", products: "Cantu Cream, Oil Sheen", notes: "Came out clean. Will book again." },
  { id: "2", style: "Braids", date: "6 May 2025", products: "Eco Gel, Argan Oil", notes: "Used less gel. Lasted longer." },
  { id: "3", style: "Taper Cut", date: "28 Apr 2025", products: "Pomade", notes: "Sharp edges. Great finish." },
  { id: "4", style: "Line Up", date: "20 Apr 2025", products: "Beard Oil", notes: "Quick and tidy. Perfect." },
];

function GroomingTrackerPage() {
  const { user } = useAuth();
  const [records, setRecords] = useState<Record[]>(seed);
  const [filter, setFilter] = useState("All Styles");
  const [draft, setDraft] = useState({ style: "Low Fade", date: todayStr(), products: "", notes: "" });

  const visible = filter === "All Styles" ? records : records.filter(r => r.style === filter);

  function save() {
    const r: Record = { id: crypto.randomUUID(), ...draft };
    setRecords([r, ...records]);
    setDraft({ style: "Low Fade", date: todayStr(), products: "", notes: "" });
  }
  function remove(id: string) { setRecords(records.filter(r => r.id !== id)); }

  const profile = user
    ? { name: user.name, role: user.role === "entrepreneur" ? "Student Entrepreneur" : user.role === "director" ? "Director" : "Client", initials: initials(user.name) }
    : { name: "Kabelo D.", role: "Student Entrepreneur (Demo)", initials: "KD" };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Center column */}
          <div className="space-y-6">
            {/* Header card */}
            <div className="rounded-2xl border border-border/40 bg-surface/40 p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <TrendingUp className="size-6 text-gold" />
                  </div>
                  <div>
                    <h1 className="font-display text-3xl lg:text-4xl font-bold">Grooming Tracker</h1>
                    <p className="text-muted-foreground text-sm mt-1">Track your grooming journey and keep your style on point.</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gold text-gold text-sm hover:bg-gold/10">
                  <Plus className="size-4" /> New Record
                </button>
              </div>
            </div>

            {/* Add new record */}
            <div className="rounded-2xl border border-border/40 bg-surface/40 p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-5 bg-gold rounded-full" />
                <h2 className="font-display text-lg font-semibold">Add New Record</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <Field label="Style">
                  <select
                    value={draft.style}
                    onChange={(e) => setDraft({ ...draft, style: e.target.value })}
                    className="w-full bg-background border border-border/60 rounded-lg px-3 py-2 text-sm"
                  >
                    {STYLES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Date">
                  <input
                    type="text"
                    value={draft.date}
                    onChange={(e) => setDraft({ ...draft, date: e.target.value })}
                    className="w-full bg-background border border-border/60 rounded-lg px-3 py-2 text-sm"
                  />
                </Field>
                <Field label="Products Used" hint="(optional)">
                  <input
                    type="text"
                    placeholder="e.g. Cantu Cream, Oil Sheen"
                    value={draft.products}
                    onChange={(e) => setDraft({ ...draft, products: e.target.value })}
                    className="w-full bg-background border border-border/60 rounded-lg px-3 py-2 text-sm"
                  />
                </Field>
                <Field label="Notes" hint="(optional)">
                  <input
                    type="text"
                    placeholder="How did it turn out?"
                    value={draft.notes}
                    onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
                    className="w-full bg-background border border-border/60 rounded-lg px-3 py-2 text-sm"
                  />
                </Field>
              </div>
              <button
                onClick={save}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-gold text-primary-foreground text-sm font-semibold hover:glow-gold transition"
              >
                Save Record <Save className="size-4" />
              </button>
            </div>

            {/* History */}
            <div className="rounded-2xl border border-border/40 bg-surface/40 p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-5 bg-gold rounded-full" />
                  <h2 className="font-display text-lg font-semibold">History</h2>
                </div>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-background border border-border/60 rounded-lg px-3 py-1.5 text-xs"
                >
                  <option>All Styles</option>
                  {STYLES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <ul className="space-y-3">
                {visible.map(r => (
                  <li key={r.id} className="grid grid-cols-[64px_1fr_auto] md:grid-cols-[64px_1.2fr_1fr_1.5fr_auto] items-center gap-4 p-3 rounded-xl border border-border/40 bg-background/40">
                    <div className="size-16 rounded-lg bg-gold/10 border border-border/40 flex items-center justify-center text-2xl">✂︎</div>
                    <div>
                      <div className="font-display font-semibold">{r.style}</div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                        <CalIcon className="size-3.5" /> {r.date}
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Products</div>
                      <div className="text-xs">{r.products || "—"}</div>
                    </div>
                    <div className="hidden md:block text-sm text-muted-foreground">{r.notes}</div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg border border-border/40 hover:text-gold hover:border-gold/40"><Pencil className="size-4" /></button>
                      <button onClick={() => remove(r.id)} className="p-2 rounded-lg border border-border/40 text-red-500 hover:bg-red-500/10"><Trash2 className="size-4" /></button>
                    </div>
                  </li>
                ))}
                {visible.length === 0 && <li className="text-sm text-muted-foreground text-center py-6">No records yet — add your first above.</li>}
              </ul>
            </div>

            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gold/30 bg-gold/5 text-sm">
              <Info className="size-4 text-gold" /> Consistency is key. Track your grooming, own your style.
            </div>
          </div>

          {/* Right panel */}
          <aside className="space-y-4">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold">Your Summary</h3>
                <MoreVertical className="size-4 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Stat icon={CalIcon} value={String(records.length)} label="Total Records" tone="gold" />
                <Stat icon={Clock} value="3" label="This Month" tone="violet" />
                <Stat icon={Star} value="4.8" label="Avg. Satisfaction" tone="emerald" />
                <Stat icon={Flame} value={String(new Set(records.map(r => r.style)).size)} label="Styles Tried" tone="orange" />
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2"><Flame className="size-4 text-gold" /><h3 className="font-display font-semibold">Style Streak</h3></div>
                <div className="relative size-12">
                  <svg viewBox="0 0 36 36" className="size-12 -rotate-90">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(0.2 0 0)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(0.78 0.15 80)" strokeWidth="3" strokeDasharray="70 100" />
                  </svg>
                  <CalIcon className="size-4 text-foreground absolute inset-0 m-auto" />
                </div>
              </div>
              <div className="font-display text-3xl font-bold">7 Days</div>
              <p className="text-xs text-muted-foreground mt-1">Keep it up!</p>
            </Card>

            <Card>
              <div className="flex items-center gap-2 mb-3"><Lightbulb className="size-4 text-gold" /><h3 className="font-display font-semibold">Tips & Reminders</h3></div>
              <ul className="space-y-2 text-sm">
                {["Keep your scalp clean and hydrated.", "Trim every 2–3 weeks.", "Use quality products.", "Drink water. Stay fresh!"].map(t => (
                  <li key={t} className="flex items-start gap-2"><CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" /><span>{t}</span></li>
                ))}
              </ul>
            </Card>

            <Card>
              <div className="flex items-center gap-2 mb-3"><Bell className="size-4 text-violet-400" /><h3 className="font-display font-semibold">Next Reminder</h3></div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Your next grooming is due in</p>
                  <div className="font-display text-2xl font-bold mt-1">3 Days</div>
                  <p className="text-xs text-muted-foreground mt-1">17 May 2025</p>
                </div>
                <div className="size-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
                  <CalIcon className="size-5 text-violet-400" />
                </div>
              </div>
            </Card>

            <div className="rounded-2xl border border-border/40 bg-surface/40 p-4 flex items-center gap-3">
              <div className="size-10 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-semibold">{profile.initials}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{profile.name}</div>
                <div className="text-xs text-muted-foreground truncate">{profile.role}</div>
              </div>
              <Link to="/dashboard" className="text-xs text-gold hover:underline">Dashboard</Link>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground block mb-1.5">
        {label} {hint && <span className="opacity-60">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-border/40 bg-surface/40 p-5">{children}</div>;
}

function Stat({ icon: Icon, value, label, tone }: { icon: typeof Star; value: string; label: string; tone: "gold" | "violet" | "emerald" | "orange" }) {
  const map = {
    gold: "text-gold border-gold/30 bg-gold/5",
    violet: "text-violet-400 border-violet-500/30 bg-violet-500/5",
    emerald: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    orange: "text-orange-400 border-orange-500/30 bg-orange-500/5",
  };
  return (
    <div className={`rounded-xl border p-3 ${map[tone]}`}>
      <Icon className="size-4 mb-2" />
      <div className="font-display text-2xl font-bold text-foreground">{value}</div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function todayStr() {
  return new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}
