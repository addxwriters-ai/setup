"use client";

import Link from "next/link";
import { Container } from "./Container";
import { useContent } from "@/components/content/ContentProvider";
import { linkFade } from "@/components/ui/cta";

/**
 * Contact & Compliance footer. Static layout/typography with hover opacity
 * fades. All copy is sourced from content.json.
 */
export function Footer() {
  const { brand, nav, contact, compliance, footer } = useContent();
  const { address } = contact;

  return (
    <footer className="border-t border-hairline bg-true-black">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-[0.12em] text-ivory">
              {brand.mark}
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-ash">
              {brand.tagline}. {brand.established}.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
              {footer.exploreLabel}
            </p>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-sans text-sm text-ash ${linkFade}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Concierge contact */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
              {footer.conciergeLabel}
            </p>
            <ul className="mt-6 space-y-3 font-sans text-sm text-ash">
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li>{contact.hours}</li>
            </ul>
          </div>

          {/* Corporate office */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
              {footer.officeLabel}
            </p>
            <address
              className={`mt-6 block not-italic font-sans text-sm leading-relaxed text-ash ${linkFade}`}
            >
              {address.line1}
              <br />
              {address.suite}
              <br />
              {address.city}, {address.region} {address.postal}
            </address>
          </div>
        </div>

        {/* Compliance band */}
        <div className="mt-16 grid gap-6 border-t border-hairline pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <dl className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4">
            <div>
              <dt className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-steel">
                {footer.complianceLabels.entity}
              </dt>
              <dd className={`mt-2 font-sans text-xs text-ash ${linkFade}`}>
                {compliance.entity}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-steel">
                {footer.complianceLabels.registration}
              </dt>
              <dd className={`mt-2 font-sans text-xs text-ash ${linkFade}`}>
                {compliance.registration}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-steel">
                {footer.complianceLabels.taxId}
              </dt>
              <dd className={`mt-2 font-sans text-xs text-ash ${linkFade}`}>
                {compliance.taxId}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-steel">
                {footer.complianceLabels.jurisdiction}
              </dt>
              <dd className={`mt-2 font-sans text-xs text-ash ${linkFade}`}>
                {compliance.jurisdiction}
              </dd>
            </div>
          </dl>

          <p className="font-sans text-xs uppercase tracking-[0.18em] text-smoke lg:text-right">
            © {new Date().getFullYear()} {brand.name}. {footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
