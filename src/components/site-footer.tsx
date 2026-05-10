import { Link } from "@tanstack/react-router";
import { Scissors, Mail, Instagram, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-9 rounded-full border-2 border-gold flex items-center justify-center">
                <Scissors className="size-4 text-gold" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg tracking-wider">GROOMHUB</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where student hustle meets structure. Built for student entrepreneurs across South Africa.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-widest text-gold mb-4">PLATFORM</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/features" className="hover:text-gold">Features</Link></li>
              <li><Link to="/how-it-works" className="hover:text-gold">How It Works</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-widest text-gold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
              <li><a href="mailto:st10440562@rcconnect.co.za" className="hover:text-gold">st10440562@rcconnect.co.za</a></li>
              <li><a href="https://wa.me/27717590255" className="hover:text-gold">WhatsApp Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-widest text-gold mb-4">CONNECT</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-gold hover:text-gold transition"><Instagram className="size-4" /></a>
              <a href="#" aria-label="Twitter" className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-gold hover:text-gold transition"><Twitter className="size-4" /></a>
              <a href="mailto:st10440562@rcconnect.co.za" aria-label="Email" className="size-10 rounded-full border border-border/60 flex items-center justify-center hover:border-gold hover:text-gold transition"><Mail className="size-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 GroomHub. Designed with WCAG 2.1 (POUR) principles.</p>
          <p>Hustle. Style. Success.</p>
        </div>
      </div>
    </footer>
  );
}
