"use client";

/**
 * Staggered Text Reveal (Magic UI / 21st.dev style) — Phase 5.
 *
 * Splits the heading into words and eases each up smoothly on page MOUNT
 * (initial → animate, not scroll-triggered). Restrained and cinematic — a soft
 * rise with a long ease, no bounce. Honors prefers-reduced-motion.
 *
 * Whole-line metallic styling is preserved via the `metallic` flag per line.
 */
import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { Segment } from "@/lib/content-types";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function TextReveal({
  lines,
  className,
}: {
  lines: Segment[];
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={i} className={line.metallic ? "text-metallic" : undefined}>
            {i > 0 ? <br /> : null}
            {line.text}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {lines.map((line, i) => (
        <span key={i} className={line.metallic ? "text-metallic" : undefined}>
          {i > 0 ? <br /> : null}
          {line.text.split(" ").map((w, j) => (
            <Fragment key={j}>
              <motion.span className="inline-block" variants={word}>
                {w}
              </motion.span>{" "}
            </Fragment>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
