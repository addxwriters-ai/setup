"use client";

/**
 * Magnetic Button (Magic UI / 21st.dev style) — Phase 5.
 *
 * The primary CTA with a heavy, physical pull toward the cursor (via <Magnetic>)
 * and the slow obsidian→charcoal background shift from Round 3.
 */
import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "./Magnetic";
import { ctaPrimary } from "@/components/ui/cta";

export function MagneticButton({
  href,
  children,
  className,
  strength = 0.35,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  return (
    <Magnetic strength={strength} className={className}>
      <Link href={href} className={ctaPrimary}>
        {children}
      </Link>
    </Magnetic>
  );
}
