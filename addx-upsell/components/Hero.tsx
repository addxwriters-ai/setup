"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HEADLINE: Array<Array<string | { serif: string }>> = [
  ["Your product videos"],
  ["are ", { serif: "premium" }, "."],
  ["Your site should be"],
  [{ serif: "kinetic" }, ", too."],
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.35 })
        .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(
          ".hero-line span",
          { yPercent: 120, duration: 1.15, stagger: 0.09, ease: "power4.out" },
          "-=0.4"
        )
        .from(".hero-sub", { y: 28, opacity: 0, duration: 0.9, ease: "power3.out" }, "-=0.7")
        .from(".hero-actions > *", { y: 20, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, "-=0.6")
        .from(".hero-cue", { opacity: 0, duration: 0.8 }, "-=0.3");

      // gentle parallax handoff into the next screen
      gsap.to(".hero-copy", {
        yPercent: -14,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-orb", {
        yPercent: 30,
        scale: 1.2,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* soft focal glow behind the headline */}
      <div
        className="hero-orb pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(46,126,247,0.22), rgba(79,196,248,0.08) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="hero-copy relative z-10 mx-auto w-full max-w-6xl pt-16">
        <p className="hero-eyebrow mx-auto mb-7 flex w-fit items-center gap-3 rounded-full border border-edge bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          <span className="pulse-dot" aria-hidden />
          Highly Animated UX / UI Web Design
        </p>

        <h1 className="font-display text-[clamp(2.5rem,6.6vw,5.6rem)] font-semibold leading-[1.02] tracking-tightest">
          {HEADLINE.map((line, i) => (
            <span key={i} className="hero-line block overflow-hidden py-[0.05em]">
              <span className="inline-block">
                {line.map((part, j) =>
                  typeof part === "string" ? (
                    <span key={j}>{part}</span>
                  ) : part.serif ? (
                    <em key={j} className="serif-accent">{part.serif}</em>
                  ) : null
                )}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-sub mx-auto mt-9 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          We build immersive, motion-led web experiences with the exact same cinematic pacing
          and choreography as your launch films — so the magic never breaks on the click.
        </p>

        <div className="hero-actions mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#packages"
            className="rounded-full bg-cta px-7 py-3.5 font-display text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(46,126,247,0.7)] transition-transform duration-300 hover:scale-[1.04]"
          >
            See the packages
          </a>
          <a
            href="#continuity"
            className="rounded-full border border-edge px-7 py-3.5 font-display text-sm font-semibold text-ink transition-colors duration-300 hover:bg-white/5"
          >
            How it works
          </a>
        </div>
      </div>

      <div className="hero-cue absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        <span>Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
