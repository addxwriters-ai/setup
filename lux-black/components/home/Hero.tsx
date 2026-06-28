"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { TextReveal } from "@/components/motion/TextReveal";
import { useContent } from "@/components/content/ContentProvider";
import { ctaSecondary } from "@/components/ui/cta";

/**
 * Home hero — transparent, full-height text layer over the anchored video
 * backdrop (HeroStage). The heading uses the Phase 5 staggered Text Reveal on
 * mount; the primary CTA is the Magnetic Button. Copy from content.json.
 */
export function Hero() {
  const { hero } = useContent();

  return (
    <section className="relative flex min-h-screen items-center border-b border-hairline">
      <Container className="relative z-10 py-28 lg:py-40">
        <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
          {hero.eyebrow}
        </p>

        <h1 className="mt-10 max-w-5xl font-serif text-6xl leading-[0.95] tracking-[-0.04em] text-ivory sm:text-7xl lg:text-8xl">
          <TextReveal lines={hero.heading} />
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-end">
          <p className="max-w-xl font-sans text-lg leading-relaxed text-ash">
            {hero.intro}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <MagneticButton href={hero.primaryCta.href} strength={0.35}>
              {hero.primaryCta.label}
            </MagneticButton>
            <Magnetic strength={0.2}>
              <Link href={hero.secondaryCta.href} className={ctaSecondary}>
                {hero.secondaryCta.label}
              </Link>
            </Magnetic>
          </div>
        </div>
      </Container>
    </section>
  );
}
