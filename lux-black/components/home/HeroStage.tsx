"use client";

/**
 * Hero scroll stage (Round 3 motion rebuild).
 *
 * The video is an ANCHORED backdrop: a `sticky top-0 h-screen` layer that stays
 * pinned in the viewport while the foreground blocks (hero → Fleet → Services …)
 * slide smoothly over it. Because the stage wraps the whole home content, the
 * sticky element has room to travel, so it actually pins (a stage the same
 * height as the sticky layer can't stick — that was the rigid-scroll bug).
 *
 * Every foreground block is opaque, so they cover the anchored video as they
 * scroll up; only the transparent hero reveals it.
 *
 * Scroll physics: `useScroll` reads page scroll; a spring smooths it for a
 * fluid, trailing parallax; `useTransform` maps the first viewport-height of
 * scroll to a subtle scale + Y drift on the video. Disabled for reduced-motion.
 *
 * Layering: backdrop at -z-10; foreground at z-10, pulled up 100vh to overlap.
 */
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { useContent, asset } from "@/components/content/ContentProvider";

export function HeroStage({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { media } = useContent();
  const ref = useRef<HTMLDivElement>(null);

  // Track viewport height so the parallax maps to exactly the first screen.
  const [vh, setVh] = useState(0);
  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollY } = useScroll();
  // Smooth the scroll value so the parallax trails fluidly, never rigidly.
  const smooth = useSpring(scrollY, { stiffness: 80, damping: 30, mass: 0.4 });

  const range = vh || 800;
  const scale = useTransform(smooth, [0, range], [1, 1.12], { clamp: true });
  const y = useTransform(smooth, [0, range], ["0%", "12%"], { clamp: true });

  return (
    <div ref={ref} className="relative">
      {/* Anchored video backdrop — pinned to the viewport behind the content. */}
      <div className="sticky top-0 -z-10 h-screen w-full overflow-hidden bg-obsidian">
        <motion.video
          className="absolute inset-0 h-full w-full object-cover"
          style={reduce ? undefined : { scale, y }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={asset(media.heroVideo)} type="video/mp4" />
        </motion.video>

        {/* Obsidian overlay + bottom fade for typography contrast. */}
        <div className="absolute inset-0 bg-true-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian" />
      </div>

      {/* Foreground (opaque blocks) slides over the anchored video. */}
      <div className="relative z-10 -mt-[100vh]">{children}</div>
    </div>
  );
}
