import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Large editorial statement block. Pure typography composition.
 */
export function ExperienceStatement() {
  return (
    <section className="border-b border-hairline">
      <Container className="py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <SectionLabel index="03">The Standard</SectionLabel>
          <p className="font-serif text-3xl leading-[1.25] tracking-[-0.02em] text-ivory lg:text-4xl">
            We do not sell rides. We protect time, privacy, and composure —
            arriving early, waiting quietly, and disappearing the moment the
            door closes. <span className="text-metallic">Anything less is a taxi.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
