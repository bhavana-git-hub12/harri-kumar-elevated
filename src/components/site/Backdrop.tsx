import { useEffect, useRef } from "react";

/** Cinematic layered background: gradient depth, grid, drifting light and 3D particles. */
export function Backdrop() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 26;
        const y = (event.clientY / window.innerHeight - 0.5) * 26;
        if (layerRef.current) {
          layerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const particles = Array.from({ length: 18 });

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_15%_-10%,oklch(0.3_0.09_28/0.5),transparent_60%),radial-gradient(900px_600px_at_90%_10%,oklch(0.24_0.05_265/0.7),transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,oklch(1_0_0/0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]"
      />
      <div ref={layerRef} className="absolute inset-0 transition-transform duration-500 ease-out">
        <div
          className="absolute -left-32 top-24 h-[38rem] w-[38rem] rounded-full bg-primary/20 blur-[140px]"
          style={{ animation: "drift 18s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[-10rem] top-[45%] h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[150px]"
          style={{ animation: "drift 24s ease-in-out infinite reverse" }}
        />
        {particles.map((_, index) => (
          <span
            key={index}
            className="absolute block rounded-full bg-primary/60"
            style={{
              width: `${2 + (index % 3)}px`,
              height: `${2 + (index % 3)}px`,
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
              opacity: 0.15 + (index % 5) * 0.08,
              animation: `float-slow ${10 + (index % 7) * 2}s ease-in-out ${index * 0.4}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}