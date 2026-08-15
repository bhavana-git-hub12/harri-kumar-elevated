import { Reveal } from "./Reveal";
import { media } from "@/lib/site-data";

const pillars = [
  "Entrepreneurship",
  "Business Leadership",
  "Digital Transformation",
  "Strategic Thinking",
  "Relationship Building",
  "Business Networking",
  "Workforce Solutions",
  "Team Leadership",
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-primary uppercase">About</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            The Person Behind the Vision
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal className="min-w-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-accent/15 blur-3xl" />
              <img
                src={media.harriLifestyle}
                alt="Harri Kumar outdoors, reflecting his personal brand and entrepreneurial lifestyle"
                loading="lazy"
                width={960}
                height={1280}
                className="relative h-[24rem] w-full rounded-[1.75rem] border border-border object-cover object-top sm:h-[30rem]"
              />
              <div className="glass-panel absolute right-4 bottom-4 left-4 rounded-2xl px-4 py-3">
                <p className="font-display text-sm font-bold">Founder-led leadership</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Close to the client, close to the delivery, accountable for the result.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="min-w-0 space-y-6">
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-foreground/90">
                Harri Kumar builds businesses the way operators do — close to the client, close to
                the delivery, and accountable for the result. As CEO of{" "}
                <a
                  href={HOSTING_BABA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  Hosting Baba
                </a>
                , he leads a digital and technology practice spanning websites, hosting, e-commerce
                and performance marketing for businesses that need their digital presence to
                actually produce revenue.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="leading-relaxed text-muted-foreground">
                His work extends beyond technology. Through workforce and recruitment initiatives he
                connects blue-collar job seekers with employers who need dependable people — a
                practical, human side of business development that most digital founders never
                touch. Alongside it, he invests heavily in professional networking, treating
                relationships as long-term infrastructure rather than short-term lead generation.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="leading-relaxed text-muted-foreground">
                What ties it together is a strategist's temperament: define the offer, build the
                team, hold the standard, and grow through trust. Clients stay because delivery is
                consistent; teams stay because direction is clear.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
                {pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="glass-panel rounded-xl px-3 py-2.5 text-xs font-medium text-foreground/85 transition-colors hover:border-primary/50 sm:text-sm"
                  >
                    {pillar}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}