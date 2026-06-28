import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { ctaPrimary, ctaSecondary } from "@/components/ui/cta";
import { BRAND } from "@/lib/content";

/**
 * Home hero — transparent, full-height text layer that sits over the anchored
 * video backdrop provided by <HeroStage>. Typography unchanged from Round 1.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center border-b border-hairline">
      <Container className="relative z-10 py-28 lg:py-40">
        <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
          {BRAND.established} · Private Chauffeur Collective
        </p>

        <h1 className="mt-10 max-w-5xl font-serif text-6xl leading-[0.95] tracking-[-0.04em] text-ivory sm:text-7xl lg:text-8xl">
          The art of arriving,
          <br />
          <span className="text-metallic">without a sound.</span>
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-end">
          <p className="max-w-xl font-sans text-lg leading-relaxed text-ash">
            {BRAND.name} is a private chauffeur service for those who measure
            luxury in discretion. A vetted driver, an immaculate vehicle, and an
            itinerary that bends to you — nothing less.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Magnetic strength={0.3}>
              <Link href="/contact" className={ctaPrimary}>
                Reserve a Chauffeur
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link href="/fleet" className={ctaSecondary}>
                View the Fleet
              </Link>
            </Magnetic>
          </div>
        </div>
      </Container>
    </section>
  );
}
