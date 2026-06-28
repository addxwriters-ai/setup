"use client";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Magnetic } from "@/components/motion/Magnetic";
import { useContent } from "@/components/content/ContentProvider";
import { ctaPrimary } from "@/components/ui/cta";

/**
 * Contact page body. Static form markup + direct contact details.
 * Copy from content.json.
 */
export function ContactView() {
  const { contact } = useContent();
  const { page, form, labels, address } = contact;

  return (
    <>
      <PageHeader
        eyebrow={page.eyebrow}
        index={page.index}
        title={page.title}
        intro={page.intro}
      />

      <section>
        <Container className="py-20">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            {/* Reservation form — static markup */}
            <form className="grid gap-8">
              <div className="grid gap-3">
                <label
                  htmlFor="name"
                  className="font-sans text-xs uppercase tracking-[0.18em] text-steel"
                >
                  {form.name}
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
                  {form.email}
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
                  {form.details}
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
                  {form.submit}
                </button>
              </Magnetic>
            </form>

            {/* Direct contact details */}
            <div className="grid gap-12 lg:border-l lg:border-hairline lg:pl-16">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
                  {labels.concierge}
                </p>
                <p className="mt-4 font-serif text-3xl text-ivory">
                  {contact.phone}
                </p>
                <p className="mt-2 font-sans text-sm text-ash">
                  {contact.email}
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
                  {labels.office}
                </p>
                <address className="mt-4 not-italic font-sans text-base leading-relaxed text-ash">
                  {address.line1}
                  <br />
                  {address.suite}
                  <br />
                  {address.city}, {address.region} {address.postal}
                </address>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
                  {labels.hours}
                </p>
                <p className="mt-4 font-sans text-base text-ash">
                  {contact.hours}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
