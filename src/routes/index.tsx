import { createFileRoute } from "@tanstack/react-router";
import { Backdrop } from "@/components/site/Backdrop";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { HostingBaba } from "@/components/site/HostingBaba";
import { Businesses } from "@/components/site/Businesses";
import { Leadership } from "@/components/site/Leadership";
import { Connect } from "@/components/site/Connect";
import { Footer } from "@/components/site/Footer";

const title = "Harri Kumar — CEO of Hosting Baba | Entrepreneur & Business Leader";
const description =
  "Mr. Harri Kumar, CEO of Hosting Baba: entrepreneur, business strategist and digital business leader building digital solutions, workforce initiatives and lasting client relationships.";

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
        <HostingBaba />
        <Businesses />
        <Leadership />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
