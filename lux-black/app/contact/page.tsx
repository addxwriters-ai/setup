import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Magnetic } from "@/components/motion/Magnetic";
import { ctaPrimary } from "@/components/ui/cta";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — The Lux Black",
  description: "Reserve a chauffeur or reach our 24/7 concierge desk.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        index="04"
        title="Speak with the concierge."
        intro="Tell us when and where. We handle the rest. Contact details below are placeholders pending migration."
      />

      <section>
        <Container className="py-20">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            {/* Reservation form — static markup, no interactivity in Round 1 */}
            <form className="grid gap-8">
              <div className="grid gap-3">
                <label
                  htmlFor="name"
                  className="font-sans text-xs uppercase tracking-[0.18em] text-steel"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="border-b border-hairline-strong bg-transparent pb-3 font-sans text-base text-ivory outline-none"
                />
              </div>

              <div className="grid gap-3">
                <label
                  htmlFor="email"
                  className="font-sans text-xs uppercase tracking-[0.18em] text-steel"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="border-b border-hairline-strong bg-transparent pb-3 font-sans text-base text-ivory outline-none"
                />
              </div>

              <div className="grid gap-3">
                <label
                  htmlFor="details"
                  className="font-sans text-xs uppercase tracking-[0.18em] text-steel"
                >
                  Itinerary Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="resize-none border-b border-hairline-strong bg-transparent pb-3 font-sans text-base text-ivory outline-none"
                />
              </div>

              <Magnetic className="justify-self-start" strength={0.3}>
                <button type="submit" className={ctaPrimary}>
                  Request Reservation
                </button>
              </Magnetic>
            </form>

            {/* Direct contact details */}
            <div className="grid gap-12 lg:border-l lg:border-hairline lg:pl-16">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
                  Concierge Desk
                </p>
                <p className="mt-4 font-serif text-3xl text-ivory">
                  {CONTACT.phone}
                </p>
                <p className="mt-2 font-sans text-sm text-ash">
                  {CONTACT.email}
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
                  Office
                </p>
                <address className="mt-4 not-italic font-sans text-base leading-relaxed text-ash">
                  {CONTACT.address.line1}
                  <br />
                  {CONTACT.address.suite}
                  <br />
                  {CONTACT.address.city}, {CONTACT.address.region}{" "}
                  {CONTACT.address.postal}
                </address>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
                  Hours
                </p>
                <p className="mt-4 font-sans text-base text-ash">
                  {CONTACT.hours}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
