import { createFileRoute } from "@tanstack/react-router";
import { Backdrop } from "@/components/site/Backdrop";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Businesses } from "@/components/site/Businesses";
import { Leadership } from "@/components/site/Leadership";
import { Connect } from "@/components/site/Connect";
import { Footer } from "@/components/site/Footer";

const title = "Mr. Harri Kumar — Entrepreneur & Digital Business Leader";
const description =
  "Mr. Harri Kumar: entrepreneur, business management professional and digital project leader building businesses, digital solutions and stronger professional communities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Backdrop />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Businesses />
        <Leadership />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
