import { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { HOSTING_BABA_URL, media } from "@/lib/site-data";

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
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pt-40 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div className="reveal min-w-0" data-visible="true">
          <div className="glass-panel inline-flex items-center gap-3 rounded-full py-1.5 pr-4 pl-2">
            <BrandLogo imgClassName="h-6" />
            <span className="text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
              Official CEO Profile
            </span>
          </div>

          <h1 className="mt-7 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">Building Businesses.</span>
            <span className="block">Creating Digital Impact.</span>
            <span className="text-gradient-red block">Leading with Vision.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mr. Harri Kumar is an entrepreneur and business leader focused on building businesses,
            developing digital solutions, creating meaningful professional connections and
            delivering practical technology-driven growth.
          </p>

          <div className="mt-8 flex flex-col gap-1 border-l-2 border-primary pl-4">
            <span className="font-display text-xl font-bold sm:text-2xl">Harri Kumar</span>
            <span className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
              CEO — Hosting Baba
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#about"
              className="magnetic inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)]"
            >
              Explore My Journey <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={HOSTING_BABA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic glass-panel inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              Hosting Baba <ExternalLink className="h-4 w-4 text-primary" />
            </a>
            <a
              href="#connect"
              className="magnetic inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground/90 hover:border-primary/50"
            >
              Connect With Me
            </a>
          </div>
        </div>

        <div className="relative min-w-0">
          <div
            ref={portraitRef}
            className="relative mx-auto max-w-md transition-transform duration-500 ease-out will-change-transform"
            style={{ perspective: "1400px" }}
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-2">
              <img
                src={media.harriSuit}
                alt="Mr. Harri Kumar, CEO of Hosting Baba, in a formal black suit"
                width={1280}
                height={1707}
                className="h-[26rem] w-full rounded-[1.6rem] object-cover object-top sm:h-[34rem]"
              />
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
              <p className="font-display text-sm font-semibold">Digital · Workforce · Growth</p>
            </div>
            <div
              className="glass-panel absolute -top-6 -right-3 rounded-2xl px-5 py-3 sm:-right-8"
              style={{ animation: "float-slow 11s ease-in-out 1s infinite" }}
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Role</p>
              <p className="font-display text-sm font-semibold">CEO · Entrepreneur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}