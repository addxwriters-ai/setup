"use client";

/**
 * Round 2 macro-motion primitives (motion.dev).
 *
 * Restrained, cinematic entrance motion: a gentle fade with a slight upward
 * translation, optionally staggered across children. No bounce, no snap.
 * Honors prefers-reduced-motion by rendering content statically.
 */
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// easeOutExpo-style curve — smooth deceleration, no overshoot.
const EASE = [0.22, 1, 0.36, 1] as const;
const DISTANCE = 24;
const DURATION = 0.8;

type Tag = "div" | "ul" | "li" | "section";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  show: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

/** Container that orchestrates a staggered reveal of its <StaggerItem> children. */
export function Stagger({
  as = "div",
  className,
  children,
}: {
  as?: Tag;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      variants={container}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
    >
      {children}
    </M>
  );
}

/**
 * A single staggered child. Must live inside <Stagger>.
 *
 * `hover` adds a very subtle scale on hover via motion's whileHover — used for
 * the Round 3 card polish. (A Tailwind hover:scale class would be overridden by
 * motion's inline transform, so the scale lives here.)
 */
export function StaggerItem({
  as = "div",
  className,
  hover = false,
  children,
}: {
  as?: Tag;
  className?: string;
  hover?: boolean;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  const interactive = hover && !reduce;
  return (
    <M
      className={className}
      variants={reduce ? undefined : item}
      whileHover={interactive ? { scale: 1.03 } : undefined}
      transition={interactive ? { duration: 0.5, ease: EASE } : undefined}
    >
      {children}
    </M>
  );
}

/** Standalone single-element reveal (no stagger). */
export function Reveal({
  as = "div",
  className,
  delay = 0,
  children,
}: {
  as?: Tag;
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  if (reduce) return <M className={className}>{children}</M>;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: DISTANCE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}
