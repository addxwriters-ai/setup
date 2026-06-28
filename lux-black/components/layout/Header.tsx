import Link from "next/link";
import { Container } from "./Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { linkFade } from "@/components/ui/cta";
import { NAV, BRAND } from "@/lib/content";

/**
 * Top navigation. Round 3: nav links fade on hover; the Reserve CTA is magnetic
 * with a slow obsidian→charcoal background shift.
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
                  className={`font-sans text-xs uppercase tracking-[0.18em] text-ash ${linkFade}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Magnetic className="hidden sm:inline-block" strength={0.25}>
          <Link
            href="/contact"
            className="inline-block border border-chrome bg-obsidian px-5 py-2.5 font-sans text-xs uppercase tracking-[0.18em] text-ivory transition-colors duration-700 ease-out hover:border-platinum hover:bg-charcoal"
          >
            Reserve
          </Link>
        </Magnetic>
      </Container>
    </header>
  );
}
