import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { cardSheen, linkFade } from "@/components/ui/cta";
import { FLEET } from "@/lib/content";

/**
 * Home → fleet preview. Round 2 stagger-reveal + Round 3 hover polish
 * (subtle scale and metallic edge illumination).
 */
export function FleetPreview() {
  return (
    <section className="border-b border-hairline bg-true-black">
      <Container className="py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="02">The Fleet</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl tracking-[-0.02em] text-ivory lg:text-5xl">
              A garage curated, not assembled.
            </h2>
          </div>
          <Link
            href="/fleet"
            className={`font-sans text-xs uppercase tracking-[0.18em] text-chrome ${linkFade}`}
          >
            Explore the Fleet →
          </Link>
        </div>

        <Stagger
          as="ul"
          className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3"
        >
          {FLEET.map((vehicle) => (
            <StaggerItem
              as="li"
              key={vehicle.slug}
              hover
              className={`border border-hairline bg-onyx p-8 ${cardSheen}`}
            >
              <div className="aspect-[4/3] w-full border border-hairline bg-graphite" />
              <p className="mt-6 font-sans text-xs uppercase tracking-[0.18em] text-steel">
                {vehicle.klass}
              </p>
              <h3 className="mt-2 font-serif text-xl text-ivory">
                {vehicle.name}
              </h3>
              <p className="mt-4 font-sans text-xs tracking-[0.12em] text-ash">
                {vehicle.seats} seats · {vehicle.luggage} bags
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
