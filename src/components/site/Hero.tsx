import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { Stats } from "./Stats";
import { heroSubtitle, media } from "@/lib/site-data";

export function Hero() {
  const portraitRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = portraitRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.transform = `perspective(1400px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateZ(0)`;
    };
    const reset = () => {
      node.style.transform = "perspective(1400px)";
    };
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", reset);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-10 sm:pt-28 lg:pt-32 lg:pb-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
        <div className="reveal min-w-0" data-visible="true">
          <div className="glass-panel inline-flex items-center rounded-full p-2 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.5)]">
            <BrandLogo size="lg" imgClassName="object-contain" />
          </div>

          <div className="mt-5 flex items-center gap-4">
            <span className="text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
              Founder of
            </span>
            <img
              src={media.companyLogo}
              alt="Web Hosting Baba company logo"
              loading="lazy"
              className="h-7 w-auto rounded-[3px] object-contain opacity-85 transition-all duration-300 hover:opacity-100 sm:h-8"
            />
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.02] font-extrabold tracking-tight sm:text-5xl lg:text-[4.2rem]">
            Mr. Harri Kumar
          </h1>

          <p className="mt-4 max-w-xl text-[0.7rem] leading-relaxed tracking-[0.18em] text-muted-foreground uppercase sm:text-xs">
            {heroSubtitle}
          </p>

          <p className="mt-5 max-w-2xl font-display text-2xl leading-tight font-bold sm:text-3xl lg:text-4xl">
            <span className="text-gradient-red">Building Businesses, Digital Solutions</span>
            <span className="block">&amp; Stronger Communities.</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Entrepreneur, business management professional and digital project leader with 12+ years
            of experience building businesses, managing teams, delivering digital projects and
            creating meaningful business networks.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            His work spans business development and operations, strategic planning, digital
            transformation and technology-led solutions, end-to-end project leadership, and
            community and business networking — connecting entrepreneurs, employers and
            professionals into relationships that create long-term commercial opportunity.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            As the founder of Web Hosting Baba, he leads a digital services ecosystem covering web
            design and development, hosting, domains, e-commerce, SEO and digital marketing —
            helping businesses move from scattered offline processes to reliable, measurable digital
            systems.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Alongside his ventures, he invests heavily in people: mentoring young entrepreneurs,
            building referral-driven business communities and creating employment pathways through
            workforce and recruitment initiatives. His approach is simple — deliver what was
            promised, build relationships that last, and let results speak first.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#connect"
              className="tap-feedback magnetic inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground uppercase shadow-[var(--shadow-lift)] hover:brightness-110"
            >
              Connect With Me <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="tap-feedback magnetic inline-flex items-center gap-2 rounded-full border border-primary/45 px-6 py-3.5 text-sm font-semibold tracking-wide text-foreground uppercase hover:border-primary hover:text-primary"
            >
              Explore My Work <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <Stats className="mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-7" />
        </div>

        <div className="relative min-w-0">
          <div
            ref={portraitRef}
            className="relative mx-auto max-w-md transition-transform duration-500 ease-out will-change-transform"
            style={{ perspective: "1400px" }}
          >
            <div className="absolute -inset-6 rounded-[2.2rem] bg-primary/18 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-[1.5rem] p-2 ring-1 ring-primary/25">
              <img
                src={media.harriFormal}
                alt="Mr. Harri Kumar, entrepreneur and digital business leader, in formal business attire"
                width={1280}
                height={1707}
                className="h-[24rem] w-full rounded-[1.1rem] object-cover object-top sm:h-[32rem]"
              />
              <span className="pointer-events-none absolute inset-2 rounded-[1.1rem] bg-[linear-gradient(180deg,transparent_45%,oklch(0.11_0.006_265/0.55))]" />
              <span
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent"
                style={{ animation: "sheen 6s ease-in-out infinite" }}
              />
            </div>
            <div
              className="glass-panel absolute -bottom-6 -left-4 rounded-2xl px-5 py-3 sm:-left-10"
              style={{ animation: "float-slow 9s ease-in-out infinite" }}
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Focus</p>
              <p className="font-display text-sm font-semibold">Business · Digital · Community</p>
            </div>
            <div
              className="glass-panel absolute -top-6 -right-3 rounded-2xl px-5 py-3 sm:-right-8"
              style={{ animation: "float-slow 11s ease-in-out 1s infinite" }}
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Role</p>
              <p className="font-display text-sm font-semibold">Entrepreneur · Leader</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
