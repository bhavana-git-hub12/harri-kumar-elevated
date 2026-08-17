import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { BrandLogo } from "./BrandLogo";
import { ContactForm } from "./ContactForm";
import { media, socials } from "@/lib/site-data";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.005c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  LinkedIn: Linkedin,
  WhatsApp: WhatsAppIcon,
};

export function Connect() {
  return (
    <section id="connect" className="relative py-14 sm:py-16 lg:py-20">
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

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <img
                src={media.companyLogo}
                alt="Web Hosting Baba company logo"
                loading="lazy"
                className="mt-5 h-8 w-auto rounded-[3px] object-contain opacity-85 transition-all duration-300 hover:opacity-100 sm:h-9"
              />
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
      <ContactForm />
    </section>
  );
}