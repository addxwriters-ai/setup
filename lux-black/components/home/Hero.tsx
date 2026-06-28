import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BRAND } from "@/lib/content";

/**
 * Home hero. Round 1: typographic hierarchy + grid composition only.
 * No parallax, no entrance animation — those arrive in a later round.
 */
export function Hero() {
  return (
    <section className="border-b border-hairline">
      <Container className="py-28 lg:py-40">
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
            <Link
              href="/contact"
              className="border border-chrome px-7 py-4 text-center font-sans text-xs uppercase tracking-[0.18em] text-ivory"
            >
              Reserve a Chauffeur
            </Link>
            <Link
              href="/fleet"
              className="border border-hairline px-7 py-4 text-center font-sans text-xs uppercase tracking-[0.18em] text-ash"
            >
              View the Fleet
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
