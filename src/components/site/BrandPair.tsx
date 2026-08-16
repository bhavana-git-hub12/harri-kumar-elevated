import { media } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Premium pairing of the personal gold signature mark and the official
 * company logo — shown together in the Official Profile and closing section.
 */
export function BrandPair({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2", className)}>
      <Reveal>
        <figure className="tap-feedback group glass-panel flex h-full flex-col items-center justify-center gap-4 rounded-[1.5rem] border border-primary/20 p-6 transition-all duration-500 hover:border-primary/60 hover:shadow-[var(--shadow-lift)]">
          <div className="relative grid place-items-center">
            <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src={media.logo}
              alt="Harri Kumar personal gold signature mark"
              loading="lazy"
              className="relative h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-105 sm:h-40"
            />
          </div>
          <figcaption className="text-center text-xs tracking-[0.28em] text-muted-foreground uppercase transition-colors group-hover:text-primary">
            Personal Signature Mark
          </figcaption>
        </figure>
      </Reveal>

      <Reveal delay={110}>
        <figure className="tap-feedback group glass-panel flex h-full flex-col items-center justify-center gap-4 rounded-[1.5rem] border border-primary/20 p-6 transition-all duration-500 hover:border-primary/60 hover:shadow-[var(--shadow-lift)]">
          <div className="relative grid w-full place-items-center">
            <span className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src={media.companyLogo}
              alt="Official company logo"
              loading="lazy"
              className="relative w-full max-w-xs rounded-xl object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <figcaption className="text-center text-xs tracking-[0.28em] text-muted-foreground uppercase transition-colors group-hover:text-primary">
            Official Company Logo
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}
