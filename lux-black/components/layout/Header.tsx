"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { useContent } from "@/components/content/ContentProvider";
import { linkFade } from "@/components/ui/cta";

/**
 * Top navigation. Desktop: inline links + magnetic Reserve CTA. Mobile: a
 * hamburger that opens a full-screen overlay menu. Copy from content.json.
 */
export function Header() {
  const { brand, nav } = useContent();
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-40 border-b border-hairline bg-obsidian">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="whitespace-nowrap font-serif text-base tracking-[0.18em] text-ivory sm:text-lg"
        >
          {brand.mark}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
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

        <div className="hidden md:block">
          <Magnetic strength={0.25}>
            <Link
              href="/contact"
              className="inline-block border border-chrome bg-obsidian px-5 py-2.5 font-sans text-xs uppercase tracking-[0.18em] text-ivory transition-colors duration-700 ease-out hover:border-platinum hover:bg-charcoal"
            >
              Reserve
            </Link>
          </Magnetic>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-ivory transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-6 bg-ivory transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-ivory transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-obsidian transition-opacity duration-300 sm:top-20 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col">
          <ul className="flex flex-col gap-2 px-6 pt-10">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-hairline">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 font-serif text-3xl tracking-[-0.02em] text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto px-6 pb-12">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block border border-chrome bg-obsidian px-6 py-4 text-center font-sans text-xs uppercase tracking-[0.18em] text-ivory"
            >
              Reserve a Chauffeur
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
