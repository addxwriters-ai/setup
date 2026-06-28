import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/content";

/**
 * Home → services preview. Static editorial list, no hover/reveal.
 */
export function ServicesPreview() {
  return (
    <section className="border-b border-hairline">
      <Container className="py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="01">Services</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl tracking-[-0.02em] text-ivory lg:text-5xl">
              Every journey, considered in advance.
            </h2>
          </div>
          <Link
            href="/services"
            className="font-sans text-xs uppercase tracking-[0.18em] text-chrome"
          >
            All Services →
          </Link>
        </div>

        <ul className="mt-16 grid gap-px border-t border-hairline sm:grid-cols-2">
          {SERVICES.map((service) => (
            <li
              key={service.slug}
              className="border-b border-hairline py-10 sm:px-2"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-sans text-xs tracking-[0.18em] text-steel">
                  {service.index}
                </span>
                <h3 className="font-serif text-2xl text-ivory">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-ash">
                {service.summary}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
