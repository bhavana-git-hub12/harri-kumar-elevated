import { Briefcase, HardHat, HandshakeIcon, UsersRound } from "lucide-react";
import { Reveal } from "./Reveal";
import { media } from "@/lib/site-data";

const jbAreas = [
  { title: "Job Opportunities", icon: Briefcase },
  { title: "Workforce Connections", icon: UsersRound },
  { title: "Candidate Support", icon: HardHat },
  { title: "Employer Connections", icon: HandshakeIcon },
];

export function Businesses() {
  return (
    <section id="work" className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-primary uppercase">Work & Ventures</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            JB — Blue-Collar Job Seeker
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A workforce and recruitment initiative connecting blue-collar job seekers with employers
            who need reliable people — built on direct relationships, verified candidates and
            practical placement support.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="min-w-0">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border">
              <img
                src={media.jbWorkforce}
                alt="Blue-collar workers in safety helmets lit against a dark background"
                loading="lazy"
                width={1280}
                height={800}
                className="h-72 w-full object-cover sm:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
              <div className="glass-panel absolute right-4 bottom-4 left-4 rounded-2xl px-5 py-4">
                <p className="font-display text-sm font-bold">Recruitment · Blue-Collar Employment</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Career opportunities matched to real, on-ground demand.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="min-w-0 grid gap-4 sm:grid-cols-2">
            {jbAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 80}>
                <div className="tilt-card glass-panel h-full rounded-2xl p-6">
                  <area.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-base font-bold">{area.title}</h3>
                </div>
              </Reveal>
            ))}
            <Reveal delay={320} className="sm:col-span-2">
              <div className="glass-panel rounded-2xl p-6">
                <h3 className="text-base font-bold">Recruitment & Career Opportunities</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  JB focuses on the workforce segment most digital platforms ignore — matching
                  skilled and semi-skilled candidates to employers, supporting them through
                  placement, and keeping the process transparent on both sides.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}