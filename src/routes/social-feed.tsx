import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard, CalendarDays, Calendar as CalendarIcon, Activity, ImageIcon,
  MessagesSquare, ShieldCheck, Crown, Settings, LogOut, Bell, Users,
  Image as ImageIc, Scissors, Lightbulb, BarChart3, Plus, Heart,
  MessageCircle, Share2, Bookmark, MoreHorizontal, Hash, Star, SlidersHorizontal,
  ChevronDown, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/social-feed")({
  head: () => ({
    meta: [
      { title: "Social Feed — GroomHub" },
      { name: "description", content: "Connect, share and inspire. The GroomHub peer-review social feed." },
      { property: "og:title", content: "Social Feed — GroomHub" },
      { property: "og:description", content: "Community feed for student stylists and clients." },
    ],
  }),
  component: SocialFeedPage,
});

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard" },
  { icon: CalendarIcon, label: "Calendar", to: "/book" },
  { icon: CalendarDays, label: "Booking", to: "/book" },
  { icon: Activity, label: "Grooming Tracker", to: "/features" },
  { icon: ImageIc, label: "Lookbook", to: "/features" },
  { icon: MessagesSquare, label: "Social Feed", to: "/social-feed", active: true },
  { icon: ShieldCheck, label: "Admin", to: "/dashboard" },
] as Array<{ icon: typeof LayoutDashboard; label: string; to: string; active?: boolean }>;

const posts = [
  {
    name: "Sipho K.", role: "Beard Artist", time: "2h ago",
    text: "Fresh line up and beard trim. Confidence booster! ✨",
    tags: ["#BeardGameStrong", "#CleanLook", "#GroomHub"],
    likes: 124, comments: 18, shares: 9,
    images: 3,
  },
  {
    name: "Anele B.", role: "Braids Expert", time: "4h ago",
    text: "Knotless braids with a clean finish. Protective and stylish! 💛",
    tags: ["#BraidsQueen", "#ProtectiveStyle"],
    likes: 98, comments: 12, shares: 4,
    images: 1,
  },
  {
    name: "Thando P.", role: "Locs Specialist", time: "6h ago",
    text: "Loc maintenance day. Retwist, cleanse and keep growing! 🌱",
    tags: ["#LocJourney", "#HealthyLocs"],
    likes: 76, comments: 9, shares: 3,
    images: 1,
  },
];

const trending = [
  { tag: "FadeFriday", count: "1.2K posts" },
  { tag: "BeardGoals", count: "982 posts" },
  { tag: "BraidsSeason", count: "756 posts" },
  { tag: "LocsJourney", count: "643 posts" },
  { tag: "SelfCare", count: "538 posts" },
];

const top = [
  { rank: 1, name: "Sipho K.", role: "Beard Artist", rating: 4.9 },
  { rank: 2, name: "Anele B.", role: "Braids Expert", rating: 4.8 },
  { rank: 3, name: "Thando P.", role: "Locs Specialist", rating: 4.7 },
];

const suggestions = [
  { name: "Lwazi M.", role: "Fade Specialist" },
  { name: "Karabo J.", role: "Hair Stylist" },
  { name: "Neo R.", role: "Barber" },
];

const rules = [
  "Be respectful and kind",
  "No hate speech or bullying",
  "Share positive and helpful content",
  "Protect everyone's privacy",
];

function SocialFeedPage() {
  const [tab, setTab] = useState<"All Posts" | "Following" | "Mentions">("All Posts");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/40 min-h-screen sticky top-0">
          <div className="p-6 border-b border-border/40">
            <Link to="/" className="flex flex-col items-center gap-2">
              <div className="size-14 rounded-lg border-2 border-gold flex items-center justify-center relative">
                <Crown className="size-3 text-gold absolute -top-2" />
                <span className="font-display font-bold text-2xl text-gold">G</span>
              </div>
              <div className="text-center">
                <div className="font-display font-bold tracking-widest text-gold">GROOMHUB</div>
                <div className="text-[9px] tracking-[0.25em] text-muted-foreground">STYLE. SCHEDULE. SUCCEED.</div>
              </div>
            </Link>
          </div>

          <nav className="flex-1 p-3 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                  item.active
                    ? "bg-gold/10 text-gold border-l-2 border-gold"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-border/40 space-y-3">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-surface">
              <div className="size-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold text-sm font-semibold">KD</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">Kabelo D.</div>
                <div className="text-xs text-muted-foreground truncate">Student Entrepreneur</div>
              </div>
              <ChevronDown className="size-4 text-muted-foreground" />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border/40 text-muted-foreground hover:text-gold">
                <Settings className="size-4" />
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border/40 text-muted-foreground hover:text-gold relative">
                <Bell className="size-4" />
                <span className="absolute top-1 right-3 size-1.5 rounded-full bg-gold" />
              </button>
            </div>
            <Link to="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-gold border border-border/40">
              <LogOut className="size-4" /> Log out
            </Link>
          </div>
        </aside>

        {/* Center Feed */}
        <main className="flex-1 min-w-0 p-4 lg:p-6 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="size-10 rounded-lg border border-gold/40 flex items-center justify-center">
                <Users className="size-5 text-gold" />
              </div>
              <div>
                <h1 className="font-display text-2xl lg:text-3xl font-bold">Social Feed</h1>
                <p className="text-muted-foreground text-sm">Connect. Share. Inspire.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gold text-background text-sm font-semibold hover:bg-gold/90">
                <Plus className="size-4" /> Create Post
              </button>
              <button className="size-10 rounded-lg border border-border/40 flex items-center justify-center text-gold relative">
                <Bell className="size-4" />
                <span className="absolute top-2 right-2 size-1.5 rounded-full bg-gold" />
              </button>
            </div>
          </div>

          {/* Composer */}
          <div className="rounded-xl border border-border/40 bg-surface p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gold/20" />
              <input
                placeholder="What's on your mind?"
                className="flex-1 bg-background/60 border border-border/40 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-5 text-xs text-muted-foreground">
                <button className="flex items-center gap-2 hover:text-gold"><ImageIcon className="size-4 text-gold" /> Photo / Video</button>
                <button className="flex items-center gap-2 hover:text-gold"><Scissors className="size-4 text-gold" /> Style Showcase</button>
                <button className="flex items-center gap-2 hover:text-gold"><Lightbulb className="size-4 text-gold" /> Tip / Advice</button>
                <button className="flex items-center gap-2 hover:text-gold"><BarChart3 className="size-4 text-gold" /> Poll</button>
              </div>
              <button className="px-5 py-2 rounded-lg bg-gold text-background text-sm font-semibold hover:bg-gold/90">Post</button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <div className="flex items-center gap-6">
              {(["All Posts", "Following", "Mentions"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`text-sm pb-2 -mb-2 ${tab === t ? "text-gold border-b-2 border-gold font-semibold" : "text-muted-foreground"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                Latest <ChevronDown className="size-4" />
              </button>
              <button className="size-8 rounded-lg border border-border/40 flex items-center justify-center text-muted-foreground hover:text-gold">
                <SlidersHorizontal className="size-4" />
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((p) => (
              <article key={p.name} className="rounded-xl border border-border/40 bg-surface p-5">
                <header className="flex items-start gap-3">
                  <div className="size-10 rounded-full bg-gold/20" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.role} · {p.time}</div>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="size-4" /></button>
                </header>
                <p className="mt-3 text-sm">{p.text}</p>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gold">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>

                {p.images > 0 && (
                  <div className={`mt-4 grid gap-2 ${p.images === 3 ? "grid-cols-3" : "grid-cols-1"}`}>
                    {Array.from({ length: p.images }).map((_, i) => (
                      <div key={i} className="aspect-[4/3] rounded-lg bg-gradient-to-br from-muted/40 to-background border border-border/40" />
                    ))}
                  </div>
                )}

                <footer className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-5">
                    <button className="flex items-center gap-1.5 hover:text-gold"><Heart className="size-4" /> {p.likes}</button>
                    <button className="flex items-center gap-1.5 hover:text-gold"><MessageCircle className="size-4" /> {p.comments}</button>
                    <button className="flex items-center gap-1.5 hover:text-gold"><Share2 className="size-4" /> {p.shares}</button>
                  </div>
                  <button className="hover:text-gold"><Bookmark className="size-4" /></button>
                </footer>
              </article>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:flex w-80 shrink-0 flex-col gap-4 p-4 border-l border-border/40">
          <RightPanel title="Trending Topics" action="View all">
            <ul className="space-y-3">
              {trending.map((t) => (
                <li key={t.tag} className="flex items-center gap-3">
                  <Hash className="size-4 text-gold" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{t.tag}</div>
                    <div className="text-xs text-muted-foreground">{t.count}</div>
                  </div>
                </li>
              ))}
            </ul>
          </RightPanel>

          <RightPanel title="Top Contributors" action="View all">
            <ul className="space-y-3">
              {top.map((c) => (
                <li key={c.rank} className="flex items-center gap-3">
                  <span className="size-6 rounded-full border border-gold/40 flex items-center justify-center text-[10px] text-gold">{c.rank}</span>
                  <div className="size-9 rounded-full bg-gold/20" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{c.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{c.role}</div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gold">
                    <Star className="size-3 fill-gold" /> {c.rating}
                  </div>
                </li>
              ))}
            </ul>
          </RightPanel>

          <RightPanel title="Suggestions for You" action="View all">
            <ul className="space-y-3">
              {suggestions.map((s) => (
                <li key={s.name} className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-gold/20" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{s.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{s.role}</div>
                  </div>
                  <button className="text-xs px-3 py-1 rounded-md border border-gold text-gold hover:bg-gold/10">Follow</button>
                </li>
              ))}
            </ul>
          </RightPanel>

          <RightPanel title="Community Rules" icon={ShieldCheck}>
            <ul className="space-y-2">
              {rules.map((r) => (
                <li key={r} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-emerald-400" /> {r}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-gold">Together we build a stronger community.</p>
          </RightPanel>
        </aside>
      </div>
    </div>
  );
}

function RightPanel({
  title, action, icon: Icon, children,
}: { title: string; action?: string; icon?: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border/40 bg-surface p-4">
      <header className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-gold font-semibold text-sm">
          {Icon && <Icon className="size-4" />} {title}
        </div>
        {action && <button className="text-xs text-gold/70 hover:text-gold">{action}</button>}
      </header>
      {children}
    </section>
  );
}
