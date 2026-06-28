import Link from "next/link";
import { Container } from "./Container";
import { linkFade } from "@/components/ui/cta";
import { NAV, BRAND, CONTACT, COMPLIANCE } from "@/lib/content";

/**
 * Contact & Compliance footer. Static layout/typography only for Round 1 —
 * no hover, transition, or motion. Four structured columns over a compliance
 * band carrying corporate registration details.
 */
export function Footer() {
  return (
    <footer className="border-t border-hairline bg-true-black">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-[0.12em] text-ivory">
              {BRAND.mark}
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-ash">
              {BRAND.tagline}. {BRAND.established}.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
              Explore
            </p>
            <ul className="mt-6 space-y-3">
              {NAV.map((item) => (
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
              Concierge
            </p>
            <ul className="mt-6 space-y-3 font-sans text-sm text-ash">
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>

          {/* Corporate office */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
              Corporate Office
            </p>
            <address
              className={`mt-6 block not-italic font-sans text-sm leading-relaxed text-ash ${linkFade}`}
            >
              {CONTACT.address.line1}
              <br />
              {CONTACT.address.suite}
              <br />
              {CONTACT.address.city}, {CONTACT.address.region}{" "}
              {CONTACT.address.postal}
            </address>
          </div>
        </div>

        {/* Compliance band */}
        <div className="mt-16 grid gap-6 border-t border-hairline pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <dl className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4">
            <div>
              <dt className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-steel">
                Registered Entity
              </dt>
              <dd className={`mt-2 font-sans text-xs text-ash ${linkFade}`}>
                {COMPLIANCE.entity}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-steel">
                Registration
              </dt>
              <dd className={`mt-2 font-sans text-xs text-ash ${linkFade}`}>
                {COMPLIANCE.registration}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-steel">
                Tax ID
              </dt>
              <dd className={`mt-2 font-sans text-xs text-ash ${linkFade}`}>
                {COMPLIANCE.taxId}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-steel">
                Jurisdiction
              </dt>
              <dd className={`mt-2 font-sans text-xs text-ash ${linkFade}`}>
                {COMPLIANCE.jurisdiction}
              </dd>
            </div>
          </dl>

          <p className="font-sans text-xs uppercase tracking-[0.18em] text-smoke lg:text-right">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
