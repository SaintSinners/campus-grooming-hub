import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GroomHub" },
      { name: "description", content: "Email, WhatsApp or send us a message — first-time users always get a hand." },
      { property: "og:title", content: "Contact — GroomHub" },
      { property: "og:description", content: "Reach the GroomHub team — we're built for support." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14">
            <div>
              <p className="text-xs tracking-[0.25em] text-gold font-semibold mb-4">CONTACT</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Let's <span className="italic text-gold">talk.</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-lg">
                Whether you're a stylist ready to launch or a student looking for your next fade — we're here.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: Mail, k: "Email", v: "hello@groomhub.co", href: "mailto:hello@groomhub.co" },
                  { icon: MessageCircle, k: "WhatsApp", v: "+27 00 000 0000", href: "https://wa.me/27000000000" },
                  { icon: MapPin, k: "Based in", v: "Johannesburg, South Africa", href: "#" },
                ].map((c) => (
                  <a key={c.k} href={c.href} className="flex items-center gap-4 p-5 rounded-2xl border border-border/60 bg-surface/40 hover:border-gold/40 transition">
                    <div className="size-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <c.icon className="size-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest text-gold uppercase">{c.k}</p>
                      <p className="font-semibold mt-0.5">{c.v}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="p-8 md:p-10 rounded-3xl border border-gold/20 bg-surface/40"
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="size-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                    <Send className="size-6 text-gold" />
                  </div>
                  <h2 className="font-display text-3xl font-bold">Message received.</h2>
                  <p className="mt-3 text-muted-foreground">We'll be in touch within one working day.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold">Send us a message</h2>
                  <p className="text-sm text-muted-foreground mt-1">Fields marked * are required.</p>

                  <div className="mt-8 space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Full name *" id="name" required />
                      <Field label="Email *" id="email" type="email" required />
                    </div>
                    <Field label="University" id="uni" />
                    <div>
                      <label htmlFor="msg" className="block text-xs tracking-widest text-muted-foreground uppercase mb-2">Message *</label>
                      <textarea
                        id="msg" required rows={5}
                        className="w-full rounded-xl bg-background/60 border border-border/60 px-4 py-3 text-sm focus:outline-none focus:border-gold transition"
                      />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl gradient-gold text-primary-foreground font-semibold hover:glow-gold transition">
                      Send message <Send className="size-4" />
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs tracking-widest text-muted-foreground uppercase mb-2">{label}</label>
      <input
        id={id} type={type} required={required}
        className="w-full rounded-xl bg-background/60 border border-border/60 px-4 py-3 text-sm focus:outline-none focus:border-gold transition"
      />
    </div>
  );
}
