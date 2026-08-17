import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { navLinks, socials } from "@/lib/site-data";

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  LinkedIn: Linkedin,
};

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-14 pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="min-w-0">
          <BrandLogo size="lg" />
          <p className="mt-5 font-display text-lg font-bold">Mr. Harri Kumar</p>
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
            Entrepreneur · Business Leader
          </p>
          <a
            href="#connect"
            className="tap-feedback mt-4 inline-block text-sm font-semibold text-primary hover:underline"
          >
            Connect with me →
          </a>
        </div>

        <nav className="min-w-0">
          <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="tap-feedback text-sm text-foreground/85 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0">
          <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase">Social</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = iconMap[social.label] ?? Instagram;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="tap-feedback magnetic glass-panel grid h-11 w-11 place-items-center rounded-xl text-foreground/85 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-border px-4 pt-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Mr. Harri Kumar. All rights reserved.
      </div>
    </footer>
  );
}