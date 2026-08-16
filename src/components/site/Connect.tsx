import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { BrandLogo } from "./BrandLogo";
import { socials } from "@/lib/site-data";

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  LinkedIn: Linkedin,
};

export function Connect() {
  return (
    <section id="connect" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-primary uppercase">Connect</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Connect With Harri Kumar
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Whether you want to discuss a project, explore a collaboration or simply build a
            professional relationship, the door is open. Follow the work, the ventures and the
            thinking — then start a conversation.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social, index) => {
            const Icon = iconMap[social.label] ?? Instagram;
            return (
              <Reveal as="li" key={social.label} delay={index * 70}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-feedback tilt-card group glass-panel flex items-center justify-between gap-4 rounded-2xl p-6"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="truncate font-display font-bold">{social.label}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={140} className="mt-10">
          <div className="glass-panel grid gap-6 rounded-[1.75rem] p-8 sm:flex sm:items-center sm:justify-between sm:p-10">
            <div className="min-w-0">
              <BrandLogo size="md" />
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                For business enquiries, partnerships, digital projects and workforce collaboration —
                reach out directly through any of the channels above.
              </p>
            </div>
            <a
              href={socials[3].href}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-feedback magnetic inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground uppercase shadow-[var(--shadow-lift)] hover:brightness-110"
            >
              Message on LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}