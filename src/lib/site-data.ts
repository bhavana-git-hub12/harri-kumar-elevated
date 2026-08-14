import logo from "@/assets/logo.png.asset.json";
import harriSuit from "@/assets/harri-suit.jpg.asset.json";
import harriFormal from "@/assets/harri-formal.jpg.asset.json";
import harriLifestyle from "@/assets/harri-lifestyle.jpg.asset.json";
import svcDigital from "@/assets/svc-digital.jpg";
import jbWorkforce from "@/assets/jb-workforce.jpg";
import networking from "@/assets/networking.jpg";
import strategy from "@/assets/strategy.jpg";

export const media = {
  logo: logo.url,
  harriSuit: harriSuit.url,
  harriFormal: harriFormal.url,
  harriLifestyle: harriLifestyle.url,
  svcDigital,
  jbWorkforce,
  networking,
  strategy,
};

export const HOSTING_BABA_URL = "https://webhostingbaba.com/";

export const services = [
  {
    title: "Website Design",
    detail: "Brand-led interfaces engineered around conversion, clarity and credibility.",
  },
  {
    title: "Website Development",
    detail: "Fast, secure and scalable builds — from brochure sites to custom platforms.",
  },
  { title: "Web Hosting", detail: "Reliable, monitored hosting with uptime-first infrastructure." },
  { title: "Domain Services", detail: "Domain search, registration, transfer and DNS management." },
  {
    title: "Digital Marketing",
    detail: "Performance campaigns built on measurable acquisition outcomes.",
  },
  { title: "SEO", detail: "Technical, on-page and content SEO that compounds organic demand." },
  {
    title: "Social Media Marketing",
    detail: "Consistent brand presence and community growth across platforms.",
  },
  {
    title: "E-Commerce Solutions",
    detail: "Storefronts, payments and catalogue systems ready to scale.",
  },
  {
    title: "CMS Development",
    detail: "Editor-friendly content systems your team can actually run.",
  },
  { title: "Graphic Design", detail: "Creative assets with a disciplined, premium visual system." },
  { title: "Logo Design", detail: "Identity design built for recognition and longevity." },
  { title: "IT Solutions", detail: "Practical technology support that keeps operations moving." },
  {
    title: "Business Digital Solutions",
    detail: "End-to-end digital enablement for growing organisations.",
  },
] as const;

export const areas = [
  { title: "Entrepreneurship", detail: "Building ventures from first idea to operating business." },
  { title: "Business Strategy", detail: "Positioning, offer design and structured growth planning." },
  { title: "Digital Solutions", detail: "Turning business problems into working digital products." },
  {
    title: "Recruitment & Workforce",
    detail: "Connecting employers with dependable blue-collar talent.",
  },
  { title: "Technology", detail: "Hosting, web platforms and technology-led operations." },
  { title: "Professional Networking", detail: "Building rooms of people who create opportunity." },
  { title: "Brand Development", detail: "Identity, narrative and consistency across touchpoints." },
  { title: "Business Development", detail: "Partnerships, pipelines and long-cycle client growth." },
  { title: "Leadership", detail: "Direction, accountability and standards for the team." },
  { title: "Client Relationships", detail: "Long-term trust built on delivery, not promises." },
] as const;

export const journey = [
  {
    title: "Entrepreneurship",
    detail: "Started with an operator's mindset — solving real business problems commercially.",
  },
  {
    title: "Business Development",
    detail: "Built a client base through relationships, delivery discipline and referrals.",
  },
  {
    title: "Digital Solutions",
    detail: "Formalised web, hosting and digital services under Hosting Baba.",
  },
  {
    title: "Recruitment & Workforce",
    detail: "Extended into blue-collar workforce connections through JB.",
  },
  {
    title: "Professional Networking",
    detail: "Invested in structured business networks and referral communities.",
  },
  {
    title: "Technology & Innovation",
    detail: "Adopted modern platforms, automation and performance-led marketing.",
  },
  {
    title: "Leadership & Growth",
    detail: "Leading teams and building businesses designed to outlast their founder.",
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
  { label: "Hosting Baba", href: "#hosting-baba" },
  { label: "Businesses", href: "#businesses" },
  { label: "Leadership", href: "#leadership" },
  { label: "Connect", href: "#connect" },
] as const;