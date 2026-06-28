import { HeroStage } from "@/components/home/HeroStage";
import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FleetPreview } from "@/components/home/FleetPreview";
import { ExperienceStatement } from "@/components/home/ExperienceStatement";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      {/* Anchored video backdrop; every opaque block below slides over it. */}
      <HeroStage>
        <Hero />
        <StatsBand />
        <ServicesPreview />
        <FleetPreview />
        <ExperienceStatement />
        <CtaBand />
      </HeroStage>
    </>
  );
}
