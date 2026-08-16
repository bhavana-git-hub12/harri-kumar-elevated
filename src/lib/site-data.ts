import goldLogo from "@/assets/gold-logo.png.asset.json";
import companyLogo from "@/assets/web-hosting-baba-logo.png.asset.json";
import harriSuit from "@/assets/harri-suit.jpg.asset.json";
import harriFormal from "@/assets/harri-formal.jpg.asset.json";
import harriLifestyle from "@/assets/harri-lifestyle.jpg.asset.json";
import svcDigital from "@/assets/svc-digital.jpg";
import jbWorkforce from "@/assets/jb-workforce.jpg";
import networking from "@/assets/networking.jpg";
import strategy from "@/assets/strategy.jpg";

export const media = {
  logo: goldLogo.url,
  companyLogo: companyLogo.url,
  harriSuit: harriSuit.url,
  harriFormal: harriFormal.url,
  harriLifestyle: harriLifestyle.url,
  svcDigital,
  jbWorkforce,
  networking,
  strategy,
};

export const heroSubtitle =
  "Entrepreneur • Business Management Professional • Digital Project Leader • Community & Business Networker";

export const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Digital Projects" },
  { value: 2014, suffix: "", label: "Journey Began" },
] as const;

/** Four core expertise pillars, explained in depth. */
export const expertise = [
  {
    title: "Business Management",
    summary:
      "Running a business as a system: strategy, operations, people and decisions that hold up under pressure.",
    points: [
      "Strategic planning — defining direction, priorities and measurable objectives",
      "Business operations — structuring processes so delivery stays consistent as volume grows",
      "Team management — hiring, roles, accountability and day-to-day performance",
      "Decision-making — weighing cost, risk and long-term impact before committing",
      "Growth strategies — pricing, positioning and expansion planned rather than improvised",
      "Business development — partnerships, pipeline and long-cycle client relationships",
    ],
  },
  {
    title: "Digital Solutions",
    summary:
      "Turning business problems into working technology that produces measurable commercial outcomes.",
    points: [
      "Digital transformation — moving manual, offline workflows into reliable digital systems",
      "Website and digital platform development — from brochure sites to custom business platforms",
      "Technology-driven business solutions — tools chosen for the outcome, not the trend",
      "Digital strategy — aligning web presence, content and campaigns to revenue goals",
      "Efficiency through technology — automation and integration that reduce manual effort",
      "Measurement — analytics and reporting so investment can be judged on results",
    ],
  },
  {
    title: "Project Leadership",
    summary:
      "Owning a project end to end — from the first scope conversation to a delivered, working result.",
    points: [
      "Planning — scope, milestones, dependencies and realistic timelines",
      "Team coordination — designers, developers and stakeholders pulling in one direction",
      "Execution — steady delivery cadence with clear ownership at every stage",
      "Risk management — identifying blockers early and re-planning before they become failures",
      "On-time delivery — commitments treated as commitments, not estimates",
      "Objectives and outcomes — success measured by what the project changed for the business",
    ],
  },
  {
    title: "Community & Business Networking",
    summary:
      "Treating relationships as long-term infrastructure — the most durable asset any business owns.",
    points: [
      "Building professional relationships founded on delivery and trust",
      "Connecting entrepreneurs across industries and stages of growth",
      "Creating business opportunities through structured referral networks",
      "Collaboration — partnerships where both sides gain real commercial value",
      "Community development — supporting local business and workforce ecosystems",
      "Long-term professional networks that compound over years, not quarters",
    ],
  },
] as const;

export const services = [
  {
    title: "Website Design",
    detail:
      "Brand-led interface design focused on clarity, credibility and conversion — layout, hierarchy and visual language built around how the customer actually decides.",
  },
  {
    title: "Website Development",
    detail:
      "Fast, secure and scalable builds, from brochure sites to custom platforms, engineered for performance, maintainability and search visibility from day one.",
  },
  {
    title: "Web Hosting",
    detail:
      "Uptime-first infrastructure with monitoring, backups and support, so the digital presence a business depends on stays available and fast.",
  },
  {
    title: "Domain Services",
    detail:
      "Domain search, registration, transfer and DNS management handled properly — the naming and routing layer that everything else in a digital presence sits on.",
  },
  {
    title: "Digital Marketing",
    detail:
      "Performance campaigns planned around acquisition cost and return, with budgets directed to the channels that demonstrably generate qualified enquiries.",
  },
  {
    title: "SEO",
    detail:
      "Technical, on-page and content SEO that compounds — fixing crawlability and speed, then building the topical depth that earns durable organic demand.",
  },
  {
    title: "Social Media Marketing",
    detail:
      "Consistent brand presence and community growth: content planning, publishing rhythm and engagement that turns audience into recognition and trust.",
  },
  {
    title: "E-Commerce Solutions",
    detail:
      "Storefronts, payment flows, catalogue structure and order operations designed to scale without breaking the team that runs them.",
  },
  {
    title: "CMS Development",
    detail:
      "Editor-friendly content systems your own team can operate confidently, removing the developer bottleneck from routine content updates.",
  },
  {
    title: "Graphic Design",
    detail:
      "Creative assets produced inside a disciplined visual system, so every touchpoint reinforces the same premium brand impression.",
  },
  {
    title: "Logo Design",
    detail:
      "Identity design built for recognition and longevity — marks that work at every size, in every medium, for years rather than seasons.",
  },
  {
    title: "IT Solutions",
    detail:
      "Practical technology support covering systems, tooling and troubleshooting that keeps daily business operations moving without disruption.",
  },
  {
    title: "Business Digital Solutions",
    detail:
      "End-to-end digital enablement for growing organisations: strategy, build, launch and ongoing improvement under one accountable owner.",
  },
] as const;

export const areas = [
  {
    title: "Entrepreneurship",
    detail:
      "Building ventures from first idea to operating business — validating demand, structuring the offer, and taking commercial responsibility for the outcome.",
  },
  {
    title: "Business Strategy",
    detail:
      "Positioning, offer design and structured growth planning, with decisions grounded in market reality and the capacity of the team to deliver.",
  },
  {
    title: "Digital Solutions",
    detail:
      "Translating business problems into working digital products, then measuring them against commercial outcomes rather than launch dates.",
  },
  {
    title: "Recruitment & Workforce",
    detail:
      "Connecting employers with dependable blue-collar talent through direct relationships, verified candidates and practical placement support.",
  },
  {
    title: "Technology",
    detail:
      "Hosting, web platforms and technology-led operations chosen for reliability and cost discipline, not novelty.",
  },
  {
    title: "Professional Networking",
    detail:
      "Building rooms of people who create opportunity for each other — structured, reciprocal networks maintained over the long term.",
  },
  {
    title: "Brand Development",
    detail:
      "Identity, narrative and consistency across every touchpoint, so the brand a customer meets online matches the one they meet in person.",
  },
  {
    title: "Business Development",
    detail:
      "Partnerships, pipeline construction and long-cycle client growth built on credibility earned through repeated delivery.",
  },
  {
    title: "Leadership",
    detail:
      "Setting direction, holding standards and creating accountability, so teams know what good looks like without being told twice.",
  },
  {
    title: "Client Relationships",
    detail:
      "Long-term trust built on delivery rather than promises — the reason clients stay and refer others.",
  },
] as const;

export const journey = [
  {
    title: "Entrepreneurship",
    detail:
      "Started with an operator's mindset — solving real business problems commercially and learning the discipline of running a business end to end.",
  },
  {
    title: "Business Development",
    detail:
      "Built a client base through relationships, delivery discipline and referrals rather than paid acquisition alone.",
  },
  {
    title: "Digital Solutions",
    detail:
      "Formalised web design, development, hosting and marketing into a structured service practice with defined delivery standards.",
  },
  {
    title: "Recruitment & Workforce",
    detail:
      "Extended into blue-collar workforce connections, linking dependable candidates with employers who need them.",
  },
  {
    title: "Professional Networking",
    detail:
      "Invested in structured business networks and referral communities, creating opportunity for other entrepreneurs as well as his own ventures.",
  },
  {
    title: "Technology & Innovation",
    detail:
      "Adopted modern platforms, automation and performance-led marketing to raise both delivery quality and operating efficiency.",
  },
  {
    title: "Leadership & Growth",
    detail:
      "Leading teams and building businesses designed to outlast their founder, with systems and standards that scale.",
  },
] as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/harrikumargowda/" },
  { label: "Facebook", href: "https://www.facebook.com/harriborntowin/" },
  { label: "YouTube", href: "https://www.youtube.com/@harrikumar5998" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harri-kumar-6351b140/" },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Leadership", href: "#leadership" },
  { label: "Connect", href: "#connect" },
] as const;
