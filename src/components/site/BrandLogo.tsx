import { HOSTING_BABA_URL, media } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/** Hosting Baba logo — always links to the official Hosting Baba website. */
export function BrandLogo({
  className,
  imgClassName,
  label = "Visit the official Hosting Baba website",
}: {
  className?: string;
  imgClassName?: string;
  label?: string;
}) {
  return (
    <a
      href={HOSTING_BABA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group relative inline-flex items-center rounded-xl px-2 py-1 transition-transform duration-500 hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-ring",
        className,
      )}
    >
      <span className="absolute inset-0 rounded-xl bg-primary/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <img
        src={media.logo}
        alt="Hosting Baba logo"
        width={900}
        height={200}
        className={cn("relative h-8 w-auto drop-shadow-[0_6px_20px_oklch(0.58_0.24_28/0.45)]", imgClassName)}
      />
    </a>
  );
}