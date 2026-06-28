"use client";

import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useContent, Segments } from "@/components/content/ContentProvider";

/**
 * Large editorial statement block. Pure typography; copy from content.json.
 */
export function ExperienceStatement() {
  const { experience } = useContent();

  return (
    <section className="border-b border-hairline bg-obsidian">
      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <SectionLabel index={experience.index}>{experience.label}</SectionLabel>
          <p className="font-serif text-2xl leading-[1.3] tracking-[-0.02em] text-ivory sm:text-3xl sm:leading-[1.25] lg:text-4xl">
            <Segments parts={experience.body} />
          </p>
        </div>
      </Container>
    </section>
  );
}
