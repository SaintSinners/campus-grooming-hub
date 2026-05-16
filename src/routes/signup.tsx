import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  Scissors,
  Users,
  ShieldCheck,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Building2,
  UploadCloud,
  Check,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import signupModel from "@/assets/signup-model.jpg";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create Your Account — GroomHub" },
      {
        name: "description",
        content:
          "Join GroomHub. Create your student entrepreneur or client account and unlock smarter scheduling, grooming and community.",
      },
    ],
  }),
  component: SignupPage,
});

const steps = [
  { n: 1, label: "Account", Icon: User },
  { n: 2, label: "Academic", Icon: Calendar },
  { n: 3, label: "Preferences", Icon: Scissors },
  { n: 4, label: "Complete", Icon: Check },
];

function SignupPage() {
  const [role, setRole] = useState<"entrepreneur" | "client">("entrepreneur");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = name.trim() || (email.split("@")[0] || "Member");
    signIn({ name: finalName, email, role });
    navigate({ to: "/dashboard" });
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT — brand panel */}
      <aside className="relative hidden lg:flex flex-col justify-between p-10 xl:p-14 overflow-hidden bg-[oklch(0.12_0.005_60)] border-r border-border/40">
        {/* decorative diagonal lines */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--gold) 0 1px, transparent 1px 22px)",
          }}
        />

        {/* logo */}
        <Link to="/" className="relative flex items-center gap-3">
          <div className="size-11 rounded-full border-2 border-gold flex items-center justify-center">
            <Scissors className="size-5 text-gold" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-xl tracking-wider">GROOMHUB</div>
            <div className="text-[9px] tracking-[0.25em] text-muted-foreground">
              HUSTLE. STYLE. SUCCESS.
            </div>
          </div>
        </Link>

        {/* hero copy + portrait */}
        <div className="relative grid grid-cols-2 gap-6 items-center my-10">
          <div>
            <h1 className="font-display text-5xl xl:text-6xl font-bold leading-[1.05]">
              Welcome to <br />
              <span className="text-gold">GroomHub</span>
            </h1>
            <div className="mt-4 h-0.5 w-16 bg-gold rounded-full" />
            <p className="mt-6 text-muted-foreground text-base leading-relaxed max-w-xs">
              Create your account and unlock a smarter way to manage your academics,
              business, and grooming.
            </p>
          </div>
          <div className="relative">
            <img
              src={signupModel}
              alt="GroomHub member portrait"
              width={1024}
              height={1024}
              loading="lazy"
              className="rounded-2xl object-cover aspect-[3/4] w-full"
            />
          </div>
        </div>

        {/* feature list */}
        <ul className="relative space-y-5">
          {[
            {
              Icon: Calendar,
              title: "Academic Sync",
              desc: "Smart scheduling that respects your classes.",
            },
            {
              Icon: Scissors,
              title: "Grooming Management",
              desc: "Track your styles, services and products.",
            },
            {
              Icon: Users,
              title: "Community & Trust",
              desc: "Share, review and grow with your community.",
            },
          ].map(({ Icon, title, desc }) => (
            <li key={title} className="flex items-start gap-4">
              <div className="size-12 shrink-0 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center">
                <Icon className="size-5 text-gold" />
              </div>
              <div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-muted-foreground">{desc}</div>
              </div>
            </li>
          ))}
        </ul>

        {/* trust pill */}
        <div className="relative mt-8 rounded-xl border border-border/60 bg-surface/60 px-5 py-4 flex items-center gap-4">
          <div className="size-10 rounded-lg border border-gold/40 bg-gold/5 flex items-center justify-center">
            <ShieldCheck className="size-5 text-gold" />
          </div>
          <div className="text-sm">
            <div className="font-semibold">Your data is secure with us.</div>
            <div className="text-gold">We respect your privacy.</div>
          </div>
        </div>
      </aside>

      {/* RIGHT — form panel */}
      <section className="relative px-6 sm:px-10 lg:px-14 py-10 lg:py-14">
        {/* top bar */}
        <div className="flex justify-end text-sm text-muted-foreground">
          {user ? (
            <>Signed in as <span className="ml-2 text-gold font-medium">{user.name}</span> ·{" "}
              <Link to="/dashboard" className="ml-2 text-gold hover:underline font-medium">Go to Dashboard</Link>
            </>
          ) : (
            <>Already have an account?{" "}
              <Link to="/dashboard" className="ml-2 text-gold hover:underline font-medium">Log In</Link>
            </>
          )}
        </div>

        {/* stepper */}
        <ol className="mt-10 flex items-center justify-between max-w-2xl mx-auto">
          {steps.map((s, i) => {
            const active = s.n === 1;
            return (
              <li key={s.n} className="flex-1 flex items-center last:flex-none">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`size-12 rounded-full flex items-center justify-center border-2 transition ${
                      active
                        ? "border-gold text-gold bg-gold/5"
                        : "border-border/60 text-muted-foreground"
                    }`}
                  >
                    <s.Icon className="size-5" />
                  </div>
                  <div className="text-center leading-tight">
                    <div
                      className={`text-xs font-bold ${active ? "text-gold" : "text-muted-foreground"}`}
                    >
                      {s.n}
                    </div>
                    <div
                      className={`text-xs ${active ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {s.label}
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px bg-border/60 mx-2 -mt-7" />
                )}
              </li>
            );
          })}
        </ol>

        {/* form */}
        <form
          className="mt-12 max-w-3xl mx-auto"
          onSubmit={handleSubmit}
        >
          <h2 className="font-display text-3xl font-bold">Create Your Account</h2>
          <p className="text-muted-foreground mt-1">Let's get you started.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <Field label="Full Name">
              <InputWithIcon Icon={User} placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
            </Field>
            <Field label="Email Address">
              <InputWithIcon Icon={Mail} type="email" placeholder="name@university.edu" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Field>
            <Field label="Password">
              <InputWithIcon
                Icon={Lock}
                type={showPw ? "text" : "password"}
                placeholder="Create a strong password"
                trailing={
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    aria-label="Toggle password visibility"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {showPw ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                  </button>
                }
              />
            </Field>
            <Field label="Confirm Password">
              <InputWithIcon
                Icon={Lock}
                type={showPw2 ? "text" : "password"}
                placeholder="Confirm your password"
                trailing={
                  <button
                    type="button"
                    onClick={() => setShowPw2((v) => !v)}
                    aria-label="Toggle password visibility"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {showPw2 ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                  </button>
                }
              />
            </Field>
          </div>

          {/* role */}
          <div className="mt-8">
            <div className="text-sm font-medium mb-3">I am a:</div>
            <div className="grid sm:grid-cols-2 gap-4">
              <RoleCard
                selected={role === "entrepreneur"}
                onClick={() => setRole("entrepreneur")}
                Icon={UserPlus}
                title="Student Entrepreneur"
                desc="I offer grooming services to clients."
              />
              <RoleCard
                selected={role === "client"}
                onClick={() => setRole("client")}
                Icon={User}
                title="Client"
                desc="I want to book grooming services."
              />
            </div>
          </div>

          {/* university */}
          <div className="mt-8">
            <label className="text-sm font-medium">University / Institution</label>
            <div className="mt-2 relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <select
                defaultValue=""
                className="w-full h-14 rounded-xl bg-surface border border-border/60 pl-11 pr-4 text-sm appearance-none focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              >
                <option value="" disabled>
                  Select your university or institution
                </option>
                <option>University of Cape Town</option>
                <option>University of the Witwatersrand</option>
                <option>Stellenbosch University</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* timetable upload */}
          <div className="mt-8 grid lg:grid-cols-[1.4fr_1fr] gap-5">
            <div>
              <label className="text-sm font-medium">
                Upload Your Timetable (iCal, CSV or PNG)
              </label>
              <label className="mt-2 flex flex-col items-center justify-center h-44 rounded-xl border-2 border-dashed border-gold/40 bg-gold/[0.02] cursor-pointer hover:bg-gold/[0.04] transition">
                <UploadCloud className="size-7 text-gold mb-2" />
                <div className="text-sm">
                  Drag & drop your timetable here{" "}
                  <span className="text-gold underline underline-offset-4">
                    or click to browse
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Supported formats: .ics, .csv, .png, .jpg
                </div>
                <input type="file" className="sr-only" accept=".ics,.csv,.png,.jpg,.jpeg" />
              </label>
            </div>
            <div className="rounded-xl border border-border/60 bg-surface/60 p-5">
              <div className="font-semibold mb-3">Why upload your timetable?</div>
              <ul className="space-y-2 text-sm">
                {[
                  "Helps us block lecture times",
                  "Prevents booking conflicts",
                  "Keeps your schedule stress-free",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="size-4 text-gold mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* submit */}
          <button
            type="submit"
            className="mt-10 w-full h-14 rounded-xl gradient-gold text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 hover:glow-gold transition"
          >
            Create Account & Continue <ArrowRight className="size-5" />
          </button>

          <p className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
            <ShieldCheck className="size-4 text-gold" />
            By creating an account, you agree to our{" "}
            <a className="text-gold hover:underline">Terms of Service</a> and{" "}
            <a className="text-gold hover:underline">Privacy Policy</a>.
          </p>
        </form>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function InputWithIcon({
  Icon,
  trailing,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  Icon: React.ComponentType<{ className?: string }>;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
      <input
        {...props}
        className="w-full h-14 rounded-xl bg-surface border border-border/60 pl-11 pr-11 text-sm placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
      {trailing && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">{trailing}</div>
      )}
    </div>
  );
}

function RoleCard({
  selected,
  onClick,
  Icon,
  title,
  desc,
}: {
  selected: boolean;
  onClick: () => void;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-xl border-2 p-4 flex items-center gap-4 transition ${
        selected
          ? "border-gold bg-gold/5"
          : "border-border/60 bg-surface/60 hover:border-border"
      }`}
    >
      <div
        className={`size-12 rounded-full flex items-center justify-center border ${
          selected ? "border-gold/60 bg-gold/10 text-gold" : "border-border text-muted-foreground"
        }`}
      >
        <Icon className="size-5" />
      </div>
      <div className="flex-1">
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      <div
        className={`size-6 rounded-full border-2 flex items-center justify-center ${
          selected ? "border-gold bg-gold text-primary-foreground" : "border-border"
        }`}
      >
        {selected && <Check className="size-4" strokeWidth={3} />}
      </div>
    </button>
  );
}
