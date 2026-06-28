import { Container } from "@/components/layout/Container";
import { SectionLabel } from "./SectionLabel";

/**
 * Shared interior-page header. Static typographic hierarchy only.
 */
export function PageHeader({
  eyebrow,
  index,
  title,
  intro,
}: {
  eyebrow: string;
  index?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-hairline">
      <Container className="py-16 sm:py-24 lg:py-32">
        <SectionLabel index={index}>{eyebrow}</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-ivory sm:text-5xl sm:leading-[1.0] sm:tracking-[-0.04em] lg:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-ash">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
