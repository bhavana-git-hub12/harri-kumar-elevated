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
      <div className="absolute inset-0 bg-[radial-gradient(1100px_650px_at_12%_-12%,oklch(0.32_0.12_26/0.38),transparent_62%),radial-gradient(900px_620px_at_92%_8%,oklch(0.2_0.02_265/0.85),transparent_66%),linear-gradient(180deg,oklch(0.13_0.008_265),oklch(0.1_0.005_265))]" />
      <div
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,oklch(1_0_0/0.07)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.07)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(75%_60%_at_50%_15%,black,transparent)]"
      />
      <div className="absolute -top-24 left-1/4 h-[45rem] w-[38rem] -rotate-[18deg] bg-[linear-gradient(90deg,transparent,oklch(0.6_0.2_26/0.1),transparent)] blur-2xl" />
      <div className="absolute top-1/3 right-0 h-[38rem] w-[28rem] rotate-[14deg] bg-[linear-gradient(90deg,transparent,oklch(0.85_0.01_265/0.07),transparent)] blur-2xl" />
      <div ref={layerRef} className="absolute inset-0 transition-transform duration-500 ease-out">
        <div
          className="absolute -left-32 top-24 h-[38rem] w-[38rem] rounded-full bg-primary/14 blur-[150px]"
          style={{ animation: "drift 18s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[-10rem] top-[45%] h-[30rem] w-[30rem] rounded-full bg-accent/8 blur-[160px]"
          style={{ animation: "drift 24s ease-in-out infinite reverse" }}
        />
        {particles.map((_, index) => (
          <span
            key={index}
            className="absolute block rounded-full bg-metal/50"
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