import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — The Lux Black",
  description:
    "Airport transfers, corporate travel, events, and hourly as-directed chauffeur service.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        index="01"
        title="Every journey, considered in advance."
        intro="From the gate to the gala, our service lines are built around discretion and precision. Copy below is placeholder pending migration."
      />

      <section>
        <Container className="py-20">
          <Stagger as="ul" className="grid gap-px">
            {SERVICES.map((service) => (
              <StaggerItem
                as="li"
                key={service.slug}
                className="border-b border-hairline py-16 first:pt-0"
              >
                <div className="grid gap-10 lg:grid-cols-[0.3fr_1.4fr_1fr]">
                  <p className="font-serif text-5xl text-metallic">
                    {service.index}
                  </p>

                  <div>
                    <h2 className="font-serif text-3xl tracking-[-0.02em] text-ivory lg:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-ash">
                      {service.summary}
                    </p>
                  </div>

                  <ul className="space-y-3 border-l border-hairline pl-8">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="font-sans text-sm tracking-[0.04em] text-ash"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
