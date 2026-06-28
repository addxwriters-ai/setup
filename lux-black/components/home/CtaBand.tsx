import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { ctaPrimary, ctaSecondary } from "@/components/ui/cta";
import { CONTACT } from "@/lib/content";

/**
 * Closing call-to-action band. Static layout only for Round 1.
 */
export function CtaBand() {
  return (
    <section className="bg-true-black">
      <Container className="py-32 text-center">
        <h2 className="mx-auto max-w-4xl font-serif text-5xl leading-[1.05] tracking-[-0.04em] text-ivory lg:text-7xl">
          Your car is already <span className="text-metallic">waiting.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-ash">
          Reserve a chauffeur in minutes, or speak directly with our concierge
          desk — available at every hour.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnetic strength={0.3}>
            <Link href="/contact" className={ctaPrimary}>
              Reserve Now
            </Link>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
              className={ctaSecondary}
            >
              {CONTACT.phone}
            </a>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}
