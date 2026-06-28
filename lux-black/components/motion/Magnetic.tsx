"use client";

/**
 * Magnetic wrapper (Round 3 polish).
 *
 * Gives a CTA a heavy, magnetic feel — the element drifts a few pixels toward
 * the cursor and settles back on a slow, high-damping spring (no bounce).
 * Transform only; the caller styles the inner element (e.g. the slow obsidian→
 * charcoal background shift). Disabled entirely under prefers-reduced-motion.
 */
import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

export function Magnetic({
  children,
  strength = 0.2,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Heavy, slow settle — low stiffness, high damping, full mass.
  const spring = { stiffness: 90, damping: 20, mass: 1 } as const;
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  if (reduce) {
    return <span className={`inline-block ${className ?? ""}`}>{children}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}
