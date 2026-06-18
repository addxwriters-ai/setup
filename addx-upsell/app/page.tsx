import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Continuity from "@/components/Continuity";
import Capabilities from "@/components/Capabilities";
import Packages from "@/components/Packages";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="atmosphere" aria-hidden>
        <div className="veil" />
      </div>
      <ScrollProgress />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <Continuity />
        <Capabilities />
        <Packages />
        <ClosingCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
