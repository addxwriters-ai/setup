"use client";

import { Container } from "@/components/layout/Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { useContent, Segments } from "@/components/content/ContentProvider";
import { ctaSecondary } from "@/components/ui/cta";

/**
 * Closing call-to-action band. Magnetic primary CTA; copy from content.json.
 */
export function CtaBand() {
  const { closingCta, contact } = useContent();

  return (
    <section className="bg-true-black">
      <Container className="py-24 text-center sm:py-28 lg:py-32">
        <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ivory sm:text-5xl sm:leading-[1.05] sm:tracking-[-0.04em] lg:text-7xl">
          <Segments parts={closingCta.heading} />
        </h2>
        <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-ash">
          {closingCta.body}
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href={closingCta.primary.href} strength={0.3}>
            {closingCta.primary.label}
          </MagneticButton>
          <Magnetic strength={0.2}>
            <a
              href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
              className={ctaSecondary}
            >
              {contact.phone}
            </a>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}
