import Link from "next/link";
import { Container } from "./Container";
import { NAV, BRAND, CONTACT } from "@/lib/content";

/**
 * Site footer. Static layout/typography only for Round 1.
 */
export function Footer() {
  return (
    <footer className="border-t border-hairline bg-true-black">
      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl tracking-[0.12em] text-ivory">
              {BRAND.mark}
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-ash">
              {BRAND.tagline}. {BRAND.established}.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-steel">
              Explore
            </p>
            <ul className="mt-6 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-ash"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

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
        </div>

        <div className="mt-16 border-t border-hairline pt-8">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-smoke">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
