import Link from "next/link";
import { Container } from "./Container";
import { NAV, BRAND } from "@/lib/content";

/**
 * Top navigation. Round 1: static structure only — no sticky behavior,
 * no hover states, no scroll triggers.
 */
export function Header() {
  return (
    <header className="border-b border-hairline">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.18em] text-ivory"
        >
          {BRAND.mark}
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-xs uppercase tracking-[0.18em] text-ash"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden border border-hairline-strong px-5 py-2.5 font-sans text-xs uppercase tracking-[0.18em] text-ivory sm:inline-block"
        >
          Reserve
        </Link>
      </Container>
    </header>
  );
}
