"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { useContent, asset } from "@/components/content/ContentProvider";
import { cardSheen, linkFade } from "@/components/ui/cta";

/**
 * Home → fleet preview. Cards carry a looping vehicle video, stagger-reveal on
 * entry, and the Round 3 hover polish (scale + metallic edge). Copy/media from
 * content.json.
 */
export function FleetPreview() {
  const { fleet } = useContent();

  return (
    <section className="border-b border-hairline bg-true-black">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index={fleet.index}>{fleet.eyebrow}</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl tracking-[-0.02em] text-ivory lg:text-5xl">
              {fleet.heading}
            </h2>
          </div>
          <Link
            href="/fleet"
            className={`font-sans text-xs uppercase tracking-[0.18em] text-chrome ${linkFade}`}
          >
            {fleet.previewCta}
          </Link>
        </div>

        <Stagger
          as="ul"
          className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3"
        >
          {fleet.items.map((vehicle) => (
            <StaggerItem
              as="li"
              key={vehicle.slug}
              hover
              className={`border border-hairline bg-onyx p-8 ${cardSheen}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden border border-hairline bg-graphite">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  <source src={asset(vehicle.video)} type="video/mp4" />
                </video>
              </div>
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
