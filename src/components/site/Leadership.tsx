import { useState } from "react";
import { Reveal } from "./Reveal";
import { areas, journey, media } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Leadership() {
  const [open, setOpen] = useState<string | null>(areas[0].title);

  return (
    <section id="leadership" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-primary uppercase">Leadership</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Business & Leadership Areas
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => {
            const isOpen = open === area.title;
            return (
              <Reveal as="li" key={area.title} delay={(index % 3) * 60} className="min-w-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : area.title)}
                  aria-expanded={isOpen}
                  className={cn(
                    "tilt-card glass-panel w-full rounded-2xl p-5 text-left",
                    isOpen && "border-primary/50",
                  )}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-display text-base font-bold">{area.title}</span>
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <span className="min-h-0 overflow-hidden">
                      <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">
                        {area.detail}
                      </span>
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="min-w-0">
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-5 rounded-[2rem] bg-primary/15 blur-3xl" />
              <img
                src={media.harriFormal}
                alt="Harri Kumar at a professional business networking event"
                loading="lazy"
                width={1280}
                height={1920}
                className="relative h-[26rem] w-full rounded-[1.75rem] border border-border object-cover object-top sm:h-[34rem]"
              />
              <img
                src={media.networking}
                alt="Abstract network of connections over a night skyline"
                loading="lazy"
                width={1280}
                height={800}
                className="glass-panel absolute -right-3 -bottom-8 hidden h-32 w-48 rounded-2xl object-cover p-1 sm:block"
                style={{ animation: "float-slow 12s ease-in-out infinite" }}
              />
            </div>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <h3 className="text-2xl font-extrabold sm:text-3xl">Leadership Journey</h3>
              <p className="mt-3 text-muted-foreground">
                A progression built step by step — each stage funding the ambition of the next.
              </p>
            </Reveal>
            <ol className="relative mt-8 border-l border-border pl-6">
              {journey.map((stage, index) => (
                <Reveal as="li" key={stage.title} delay={index * 70} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[1.9rem] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-primary shadow-[0_0_0_5px_oklch(0.58_0.24_28/0.18)]" />
                  <h4 className="font-display text-lg font-bold">{stage.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {stage.detail}
                  </p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={120} className="mt-6">
              <div className="tilt-card glass-panel overflow-hidden rounded-2xl">
                <img
                  src={media.strategy}
                  alt="Black chess pieces beside a rising red growth chart"
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-40 w-full object-cover sm:h-52"
                />
                <div className="p-5">
                  <p className="font-display text-sm font-bold">Strategy over noise</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Decisions made for the next decade of the business, not the next quarter.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}