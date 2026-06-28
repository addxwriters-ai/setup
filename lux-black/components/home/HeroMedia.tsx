"use client";

/**
 * Hero background media (Round 2).
 *
 * A muted, looping, autoplaying video sits behind the hero text with a dark
 * overlay to protect typography contrast against the obsidian aesthetic.
 * Scroll-linked parallax gives the loop a subtle, cinematic delay as the hero
 * leaves the viewport. Reduced-motion users get a static, un-parallaxed frame.
 *
 * ASSET: drop the compressed Kling AI loop into public/media/ as
 *   hero-loop.mp4 (+ optional hero-loop.webm, hero-poster.jpg).
 * Until then the layer renders as solid obsidian — the hero stays legible.
 */
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

// public/ assets need the Pages basePath prefix when served from a subpath.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: the loop drifts down slightly and scales a touch as the
  // hero scrolls away. Scale prevents edge reveal from the translation.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden bg-obsidian"
    >
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        style={reduce ? undefined : { y, scale }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={`${BASE}/media/hero-loop.mp4`} type="video/mp4" />
      </motion.video>

      {/* Dark overlay + bottom fade into the obsidian canvas for contrast. */}
      <div className="absolute inset-0 bg-true-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian" />
    </div>
  );
}
