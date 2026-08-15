import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { stats } from "@/lib/site-data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-extrabold sm:text-4xl">
      <span className="text-gradient-red">
        {display}
        {suffix}
      </span>
    </span>
  );
}

export function Stats({ className }: { className?: string }) {
  return (
    <dl className={className}>
      {stats.map((stat) => (
        <div key={stat.label} className="min-w-0">
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="mt-1 block text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase sm:text-xs">
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
