"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { useContent } from "@/components/content/ContentProvider";
import { linkFade } from "@/components/ui/cta";

/**
 * Top navigation. Nav links fade on hover; the Reserve CTA is magnetic with a
 * slow obsidian→charcoal background shift. Copy is sourced from content.json.
 */
export function Header() {
  const { brand, nav } = useContent();

  return (
    <header className="border-b border-hairline">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.18em] text-ivory"
        >
          {brand.mark}
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
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
