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
      <Container className="py-24 lg:py-32">
        <SectionLabel index={index}>{eyebrow}</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.0] tracking-[-0.04em] text-ivory lg:text-7xl">
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
