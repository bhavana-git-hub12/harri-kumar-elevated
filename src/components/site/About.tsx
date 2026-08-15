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
                the delivery, and accountable for the result. Over more than a decade he has moved
                from hands-on entrepreneurship into business management and digital project
                leadership, running a practice that spans websites, hosting, e-commerce and
                performance marketing for organisations that need their digital presence to
                actually produce revenue.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="leading-relaxed text-muted-foreground">
                His business management work covers the unglamorous essentials: strategic planning,
                operations, hiring and team structure, budgeting and the daily decisions that
                determine whether growth is sustainable. On the digital side he leads
                transformation projects — mapping how a business actually works, then building the
                platforms, integrations and reporting that make it faster, clearer and cheaper to
                run.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="leading-relaxed text-muted-foreground">
                As a project leader he owns scope, timeline, risk and delivery, coordinating
                designers, developers and stakeholders so commitments are met rather than
                renegotiated. Beyond technology, workforce and recruitment initiatives connect
                blue-collar job seekers with employers who need dependable people — a practical,
                human side of business development that most digital founders never touch.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <p className="leading-relaxed text-muted-foreground">
                Networking and community building sit underneath all of it. He treats professional
                relationships as long-term infrastructure, connecting entrepreneurs, opening
                collaboration between businesses and strengthening the local business community. His
                vision is straightforward: help businesses grow through disciplined strategy and
                honest digital transformation, and build organisations designed to outlast their
                founder.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
                {pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="tap-feedback glass-panel rounded-xl px-3 py-2.5 text-xs font-medium text-foreground/85 hover:border-primary/50 hover:text-primary sm:text-sm"
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