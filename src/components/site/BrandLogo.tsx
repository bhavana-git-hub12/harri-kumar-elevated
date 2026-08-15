import { media } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/** Personal gold calligraphy mark, framed in a circular gold ring. */
export function BrandLogo({
  className,
  imgClassName,
  size = "md",
  label = "Harri Kumar — back to top",
  href = "#home",
}: {
  className?: string;
  imgClassName?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  href?: string;
}) {
  const sizes = {
    sm: "h-11 w-11",
    md: "h-14 w-14",
    lg: "h-20 w-20",
  } as const;

  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        "group tap-feedback relative inline-grid shrink-0 place-items-center rounded-full",
        "bg-[radial-gradient(circle_at_30%_20%,oklch(0.22_0.02_264),oklch(0.1_0.012_264))]",
        "gold-ring overflow-hidden transition-transform duration-500 hover:scale-105",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        sizes[size],
        className,
      )}
      style={{ animation: "gold-pulse 6s ease-in-out infinite" }}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/25 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
      <img
        src={media.logo}
        alt="Harri Kumar personal logo"
        width={720}
        height={1160}
        className={cn("relative h-[78%] w-auto object-contain", imgClassName)}
      />
    </a>
  );
}
