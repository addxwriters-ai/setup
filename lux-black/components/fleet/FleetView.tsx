"use client";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { useContent, asset } from "@/components/content/ContentProvider";

/**
 * Fleet page body. Each vehicle row carries a looping video and the Round 3
 * group-hover metallic illumination. Copy/media from content.json.
 */
export function FleetView() {
  const { fleet } = useContent();

  return (
    <>
      <PageHeader
        eyebrow={fleet.eyebrow}
        index={fleet.index}
        title={fleet.heading}
        intro={fleet.intro}
      />

      <section>
        <Container className="py-20">
          <Stagger as="ul" className="grid gap-px">
            {fleet.items.map((vehicle, i) => (
              <StaggerItem
                as="li"
                key={vehicle.slug}
                className="group border-b border-hairline py-16 first:pt-0"
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                  <div className="aspect-[16/10] w-full overflow-hidden border border-hairline bg-graphite transition-[border-color,box-shadow] duration-700 ease-out group-hover:border-chrome/35 group-hover:shadow-[0_24px_70px_-30px_rgba(207,210,214,0.25)]">
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

                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
                      {String(i + 1).padStart(2, "0")} · {vehicle.klass}
                    </p>
                    <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] text-ivory lg:text-5xl">
                      {vehicle.name}
                    </h2>
                    <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ash">
                      {vehicle.blurb}
                    </p>

                    <dl className="mt-8 grid max-w-sm grid-cols-2 gap-px border-t border-hairline pt-8">
                      <div>
                        <dt className="font-sans text-xs uppercase tracking-[0.18em] text-steel">
                          Passengers
                        </dt>
                        <dd className="mt-2 font-serif text-2xl text-metallic">
                          {vehicle.seats}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-sans text-xs uppercase tracking-[0.18em] text-steel">
                          Luggage
                        </dt>
                        <dd className="mt-2 font-serif text-2xl text-metallic">
                          {vehicle.luggage}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
