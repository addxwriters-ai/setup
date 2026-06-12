import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EcosystemLeak from "@/components/EcosystemLeak";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="grid-overlay" aria-hidden />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <EcosystemLeak />
        <Packages />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
