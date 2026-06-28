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

/** A single staggered child. Must live inside <Stagger>. */
export function StaggerItem({
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
    <M className={className} variants={reduce ? undefined : item}>
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
