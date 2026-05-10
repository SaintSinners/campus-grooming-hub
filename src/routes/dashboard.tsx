import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LayoutDashboard, CalendarDays, Calendar as CalendarIcon, Users, UserSquare2,
  Activity, ImageIcon, MessagesSquare, BarChart3, Settings, LogOut, Crown,
  Scissors, ShieldCheck, Star, TrendingUp, AlertTriangle, Info, CheckCircle2,
  Download, UserPlus, FileText, Bell,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Director's Dashboard — GroomHub" },
      { name: "description", content: "Overview of system performance and program insights for GroomHub directors and registered members." },
      { property: "og:title", content: "Director's Dashboard — GroomHub" },
      { property: "og:description", content: "Role-based dashboard for GroomHub members." },
    ],
  }),
  component: DashboardPage,
});

const nav: Array<{ icon: typeof LayoutDashboard; label: string; to: string }> = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard" },
  { icon: CalendarDays, label: "Bookings", to: "/book" },
  { icon: CalendarIcon, label: "Calendar", to: "/book" },
  { icon: Users, label: "Stylists", to: "/features" },
  { icon: UserSquare2, label: "Students", to: "/features" },
  { icon: Activity, label: "Grooming Tracker", to: "/features" },
  { icon: ImageIcon, label: "Lookbook", to: "/features" },
  { icon: MessagesSquare, label: "Social Feed", to: "/social-feed" },
  { icon: BarChart3, label: "Reports", to: "/dashboard" },
  { icon: Settings, label: "Settings", to: "/dashboard" },
];

const kpis = [
  { icon: CalendarDays, label: "Total Bookings", value: "432", delta: "+18%", tone: "text-emerald-400" },
  { icon: Users, label: "Active Students", value: "182", delta: "+12%", tone: "text-emerald-400" },
  { icon: Scissors, label: "Active Stylists", value: "28", delta: "+8%", tone: "text-emerald-400" },
  { icon: ShieldCheck, label: "System Uptime", value: "99.8%", delta: "Excellent", tone: "text-emerald-400" },
  { icon: Star, label: "Satisfaction Rate", value: "4.8 / 5", delta: "+0.2", tone: "text-emerald-400" },
];

const services = [
  { name: "Fade Cut", pct: 42, color: "bg-gold" },
  { name: "Beard Trim", pct: 22, color: "bg-violet-500" },
  { name: "Braids", pct: 18, color: "bg-sky-500" },
  { name: "Line Up", pct: 10, color: "bg-emerald-500" },
  { name: "Other", pct: 8, color: "bg-muted-foreground" },
];

const alerts = [
  { icon: CheckCircle2, color: "text-emerald-400", title: "No scheduling conflicts", desc: "All bookings are properly synced.", time: "09:45 AM" },
  { icon: AlertTriangle, color: "text-gold", title: "Low availability", desc: "3 stylists have high booking load.", time: "09:30 AM" },
  { icon: Info, color: "text-violet-400", title: "New stylist onboarded", desc: "Karabo J. has joined the platform.", time: "Yesterday" },
  { icon: Info, color: "text-sky-400", title: "System update", desc: "Platform updated successfully.", time: "2 days ago" },
];

const stylists = [
  { rank: 1, name: "Sipho K.", role: "Fade Specialist", bookings: 128 },
  { rank: 2, name: "Anele B.", role: "Braids Expert", bookings: 96 },
  { rank: 3, name: "Thando P.", role: "Locs Specialist", bookings: 84 },
];

const recent = [
  { student: "Lwazi M.", stylist: "Sipho K.", service: "Fade Cut", date: "18 May 2025", time: "10:00", status: "Confirmed" },
  { student: "Karabo J.", stylist: "Anele B.", service: "Box Braids", date: "18 May 2025", time: "14:00", status: "Confirmed" },
  { student: "Neo R.", stylist: "Thando P.", service: "Loc Maintenance", date: "18 May 2025", time: "16:00", status: "Pending" },
  { student: "Sipho D.", stylist: "Sipho K.", service: "Beard Trim", date: "18 May 2025", time: "18:00", status: "Confirmed" },
];

const usage = [
  { icon: CalendarDays, label: "Bookings", pct: 92 },
  { icon: TrendingUp, label: "Grooming Tracker", pct: 68 },
  { icon: ImageIcon, label: "Lookbook", pct: 55 },
  { icon: MessagesSquare, label: "Social Feed", pct: 47 },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const slots = ["08:00 – 10:00", "10:00 – 12:00", "12:00 – 14:00", "14:00 – 16:00", "16:00 – 18:00", "18:00 – 20:00"];

function DashboardPage() {
  const [active, setActive] = useState("Dashboard");
  void setActive;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/40 min-h-screen sticky top-0">
          <div className="p-6 border-b border-border/40">
            <Link to="/" className="flex flex-col items-center gap-2">
              <div className="size-14 rounded-lg border-2 border-gold flex items-center justify-center relative">
                <Crown className="size-3 text-gold absolute -top-2" />
                <span className="font-display font-bold text-2xl text-gold">G</span>
              </div>
              <div className="text-center">
                <div className="font-display font-bold tracking-widest">GROOMHUB</div>
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground">STYLE. SCHEDULE. SUCCEED.</div>
              </div>
            </Link>
          </div>

          <nav className="flex-1 p-3 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                  active === item.label
                    ? "bg-gold/10 text-gold border-l-2 border-gold"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-border/40">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-surface">
              <div className="size-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold text-sm font-semibold">MD</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-gold tracking-widest">DIRECTOR</div>
                <div className="text-sm font-medium truncate">Mr. M. Dlamini</div>
                <div className="text-xs text-muted-foreground truncate">Program Director</div>
              </div>
            </div>
            <button className="mt-3 w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-gold border border-border/40">
              <LogOut className="size-4" /> Log Out
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 lg:p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-lg border border-gold/40 flex items-center justify-center">
                <ShieldCheck className="size-6 text-gold" />
              </div>
              <div>
                <h1 className="font-display text-3xl lg:text-4xl font-bold">Director's Dashboard</h1>
                <p className="text-muted-foreground text-sm">Overview of system performance and program insights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/40 text-sm">
                <CalendarIcon className="size-4 text-muted-foreground" />
                12 May – 18 May 2025
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gold text-gold text-sm hover:bg-gold/10">
                Export Report <Download className="size-4" />
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-border/40 bg-surface p-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <k.icon className="size-4 text-gold" /> {k.label}
                </div>
                <div className="font-display text-3xl font-bold">{k.value}</div>
                <div className={`text-xs mt-1 ${k.tone}`}>{k.delta} <span className="text-muted-foreground">vs last week</span></div>
              </div>
            ))}
          </div>

          {/* Row: Bookings Overview + Services + Alerts */}
          <div className="grid lg:grid-cols-3 gap-4">
            <Panel title="Bookings Overview" action="View Details">
              <select className="text-xs bg-background border border-border/40 rounded px-2 py-1 mb-3">
                <option>This Week</option>
              </select>
              <svg viewBox="0 0 300 140" className="w-full h-40">
                <defs>
                  <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.15 80)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="oklch(0.78 0.15 80)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M20,100 L65,80 L110,70 L155,50 L200,55 L245,65 L290,55 L290,140 L20,140 Z" fill="url(#g)" />
                <path d="M20,100 L65,80 L110,70 L155,50 L200,55 L245,65 L290,55" stroke="oklch(0.78 0.15 80)" strokeWidth="2" fill="none" />
                {[[20,100],[65,80],[110,70],[155,50],[200,55],[245,65],[290,55]].map(([x,y],i)=>(
                  <circle key={i} cx={x} cy={y} r="3" fill="oklch(0.78 0.15 80)" />
                ))}
              </svg>
              <div className="grid grid-cols-7 text-[10px] text-muted-foreground">
                {days.map((d) => <div key={d} className="text-center">{d}</div>)}
              </div>
            </Panel>

            <Panel title="Most Popular Services" action="View All">
              <div className="flex items-center gap-4">
                <div className="relative size-32">
                  <Donut data={services} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="font-display text-xl font-bold">432</div>
                    <div className="text-[10px] text-muted-foreground">Total</div>
                  </div>
                </div>
                <ul className="flex-1 space-y-1.5 text-sm">
                  {services.map((s) => (
                    <li key={s.name} className="flex items-center justify-between">
                      <span className="flex items-center gap-2"><span className={`size-3 rounded-sm ${s.color}`} />{s.name}</span>
                      <span className="text-muted-foreground">{s.pct}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>

            <Panel title="System Alerts" action="View All">
              <ul className="space-y-3">
                {alerts.map((a) => (
                  <li key={a.title} className="flex items-start gap-3">
                    <a.icon className={`size-4 mt-0.5 ${a.color}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{a.title}</div>
                      <div className="text-xs text-muted-foreground">{a.desc}</div>
                    </div>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">{a.time}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>

          {/* Row: Heatmap + Engagement + Top Stylists */}
          <div className="grid lg:grid-cols-3 gap-4">
            <Panel title="Bookings by Time Slot" action="View Details">
              <div className="space-y-1.5">
                {slots.map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground w-20">{s}</span>
                    <div className="flex-1 grid grid-cols-7 gap-1">
                      {days.map((_, j) => {
                        const intensity = Math.abs(Math.sin(i + j)) * 0.8 + 0.1;
                        return <div key={j} className="h-5 rounded" style={{ background: `oklch(0.78 0.15 80 / ${intensity})` }} />;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Student Engagement" action="View Details">
              <div className="text-right text-emerald-400 text-sm mb-1">+24% <span className="text-muted-foreground text-xs">vs last month</span></div>
              <svg viewBox="0 0 300 140" className="w-full h-40">
                <path d="M20,90 L60,85 L100,75 L140,60 L180,65 L220,55 L260,45 L290,40" stroke="oklch(0.62 0.2 290)" strokeWidth="2" fill="none" />
                {[[20,90],[60,85],[100,75],[140,60],[180,65],[220,55],[260,45]].map(([x,y],i)=>(
                  <circle key={i} cx={x} cy={y} r="3" fill="oklch(0.62 0.2 290)" />
                ))}
              </svg>
            </Panel>

            <Panel title="Top Performing Stylists" action="View All">
              <ul className="space-y-3">
                {stylists.map((s) => (
                  <li key={s.rank} className="flex items-center gap-3">
                    <span className="size-7 rounded-full border border-gold/40 flex items-center justify-center text-xs text-gold">{s.rank}</span>
                    <div className="size-9 rounded-full bg-surface border border-border/40" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{s.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{s.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">{s.bookings}</div>
                      <div className="text-[10px] text-muted-foreground">Bookings</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>

          {/* Row: Recent Bookings + Platform Usage + Quick Actions */}
          <div className="grid lg:grid-cols-3 gap-4">
            <Panel title="Recent Bookings" action="View All" className="lg:col-span-1">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="text-muted-foreground">
                    <tr className="text-left">
                      <th className="py-2">Student</th><th>Stylist</th><th>Service</th><th>Time</th><th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recent.map((r) => (
                      <tr key={r.student} className="border-t border-border/40">
                        <td className="py-2">{r.student}</td>
                        <td>{r.stylist}</td>
                        <td>{r.service}</td>
                        <td>{r.time}</td>
                        <td>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] border ${
                            r.status === "Confirmed" ? "border-emerald-500/40 text-emerald-400" : "border-gold/40 text-gold"
                          }`}>{r.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel title="Platform Usage" action="View Report">
              <ul className="space-y-3">
                {usage.map((u) => (
                  <li key={u.label}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="flex items-center gap-2"><u.icon className="size-4 text-gold" />{u.label}</span>
                      <span className="text-muted-foreground">{u.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                      <div className="h-full bg-gold" style={{ width: `${u.pct}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-muted-foreground mt-3">Based on student activity this week.</p>
            </Panel>

            <div className="space-y-4">
              <Panel title="Quick Actions">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: UserPlus, label: "Add New Stylist" },
                    { icon: Scissors, label: "Manage Services" },
                    { icon: FileText, label: "Generate Report" },
                    { icon: Settings, label: "System Settings" },
                  ].map((q) => (
                    <button key={q.label} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-gold hover:text-gold transition">
                      <q.icon className="size-5" />
                      <span className="text-[11px]">{q.label}</span>
                    </button>
                  ))}
                </div>
              </Panel>
              <div className="rounded-xl border border-gold/30 bg-gold/5 p-4 flex items-center gap-3">
                <Bell className="size-8 text-gold shrink-0" />
                <p className="text-xs">Empowering student entrepreneurs.<br/>Building careers. One cut at a time.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Panel({ title, action, children, className = "" }: { title: string; action?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-border/40 bg-surface p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display font-semibold">{title}</h3>
        {action && <button className="text-xs text-gold hover:underline">{action}</button>}
      </div>
      {children}
    </div>
  );
}

function Donut({ data }: { data: { pct: number; color: string }[] }) {
  const colorMap: Record<string, string> = {
    "bg-gold": "oklch(0.78 0.15 80)",
    "bg-violet-500": "oklch(0.62 0.2 290)",
    "bg-sky-500": "oklch(0.7 0.15 230)",
    "bg-emerald-500": "oklch(0.7 0.17 155)",
    "bg-muted-foreground": "oklch(0.55 0 0)",
  };
  const r = 40, c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg viewBox="0 0 100 100" className="size-32 -rotate-90">
      <circle cx="50" cy="50" r={r} fill="none" stroke="oklch(0.2 0 0)" strokeWidth="14" />
      {data.map((d, i) => {
        const len = (d.pct / 100) * c;
        const el = (
          <circle key={i} cx="50" cy="50" r={r} fill="none"
            stroke={colorMap[d.color]} strokeWidth="14"
            strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset} />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}
