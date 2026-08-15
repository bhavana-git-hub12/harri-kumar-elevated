import {
  ArrowUpRight,
  Boxes,
  BrushIcon,
  Globe,
  LayoutTemplate,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  Network,
  PenTool,
  Rocket,
  Search,
  Server,
  Share2,
  ShoppingCart,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { expertise, media, services } from "@/lib/site-data";

const icons: LucideIcon[] = [
  LayoutTemplate,
  MonitorSmartphone,
  Server,
  Globe,
  Megaphone,
  Search,
  Share2,
  ShoppingCart,
  Boxes,
  BrushIcon,
  PenTool,
  Wrench,
  LineChart,
];

const expertiseIcons: LucideIcon[] = [Target, Rocket, Users, Network];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel relative overflow-hidden rounded-[2rem]">
          <img
            src={media.svcDigital}
            alt="Modern server infrastructure inside a dark data centre"
            loading="lazy"
            width={1280}
            height={800}
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
            <Reveal className="min-w-0">
              <p className="text-xs tracking-[0.3em] text-primary uppercase">Services & Expertise</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Core Areas of Expertise
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                Four disciplines shape the way Harri Kumar works: managing a business as a system,
                solving business problems with technology, leading projects to a delivered result,
                and building the professional relationships that create long-term opportunity.
              </p>
            </Reveal>
            <Reveal delay={120} className="min-w-0">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Strategy", "Operations", "Digital", "Delivery", "Networking", "Growth"].map(
                  (item) => (
                    <div
                      key={item}
                      className="tap-feedback tilt-card glass-panel rounded-xl px-3 py-4 text-center text-xs font-semibold sm:text-sm"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {expertise.map((item, index) => {
            const Icon = expertiseIcons[index % expertiseIcons.length] ?? Target;
            return (
              <Reveal as="li" key={item.title} delay={(index % 2) * 90} className="min-w-0">
                <article className="tap-feedback tilt-card glass-panel h-full rounded-2xl p-6 sm:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/85">{item.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-16">
          <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
            Digital & Technology Services
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            The delivery capability behind the strategy — design, development, infrastructure and
            marketing run as one accountable engine for business growth.
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length] ?? LayoutTemplate;
            return (
              <Reveal as="li" key={service.title} delay={(index % 3) * 70} className="min-w-0">
                <a
                  href="#connect"
                  className="tap-feedback tilt-card group glass-panel flex h-full flex-col rounded-2xl p-6"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-5 font-display text-lg font-bold">{service.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.detail}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    Discuss this <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
