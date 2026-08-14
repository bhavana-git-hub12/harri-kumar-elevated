import {
  ArrowUpRight,
  Boxes,
  BrushIcon,
  Globe,
  LayoutTemplate,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  PenTool,
  Search,
  Server,
  Share2,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { BrandLogo } from "./BrandLogo";
import { HOSTING_BABA_URL, media, services } from "@/lib/site-data";

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

export function HostingBaba() {
  return (
    <section id="hosting-baba" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel relative overflow-hidden rounded-[2rem]">
          <img
            src={media.svcDigital}
            alt="Hosting infrastructure lit in red inside a dark data centre"
            loading="lazy"
            width={1280}
            height={800}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
            <Reveal className="min-w-0">
              <BrandLogo imgClassName="h-10 sm:h-12" />
              <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Hosting Baba
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                The digital and technology business led by Harri Kumar — design, development,
                hosting and marketing delivered as one accountable engine for business growth.
              </p>
              <a
                href={HOSTING_BABA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)]"
              >
                Visit Hosting Baba <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
            <Reveal delay={120} className="min-w-0">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Design", "Development", "Hosting", "Marketing", "E-Commerce", "IT Support"].map(
                  (item) => (
                    <div
                      key={item}
                      className="tilt-card glass-panel rounded-xl px-3 py-4 text-center text-xs font-semibold sm:text-sm"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length] ?? LayoutTemplate;
            return (
              <Reveal as="li" key={service.title} delay={(index % 3) * 70} className="min-w-0">
                <a
                  href={HOSTING_BABA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tilt-card group glass-panel flex h-full flex-col rounded-2xl p-6"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.detail}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    Explore at Hosting Baba <ArrowUpRight className="h-3.5 w-3.5" />
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