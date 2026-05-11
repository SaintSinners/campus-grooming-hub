import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Role = "entrepreneur" | "client" | "director";

export type SessionUser = {
  name: string;
  email?: string;
  role: Role;
};

type AuthCtx = {
  user: SessionUser | null;
  signIn: (u: SessionUser) => void;
  signOut: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "groomhub.session.v1";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setUser(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const signIn = (u: SessionUser) => {
    setUser(u);
    try { localStorage.setItem(KEY, JSON.stringify(u)); } catch { /* ignore */ }
  };
  const signOut = () => {
    setUser(null);
    try { localStorage.removeItem(KEY); } catch { /* ignore */ }
  };

  return <Ctx.Provider value={{ user, signIn, signOut }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used within AuthProvider");
  return v;
}

export function initials(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("") || "U";
}
