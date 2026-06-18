"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * The Continuity Principle — a calm, clean reveal (no pin, no shudder):
 * a premium film and a flat template sit side by side; a signal line draws
 * between them and the destination resolves into a living ADDX build.
 */
export default function Continuity() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const base = (trigger: Element) => ({ trigger, start: "top 75%" });

      gsap.from(".cont-head span", {
        yPercent: 110,
        stagger: 0.08,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: base(ref.current!),
      });
      gsap.from(".cont-lede", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: base(ref.current!),
      });
      gsap.from(".cont-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: { trigger: ".cont-stage", start: "top 78%" },
      });

      // the signal line draws across as the stage centers
      gsap.fromTo(
        ".cont-signal",
        { strokeDashoffset: 240 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: { trigger: ".cont-stage", start: "top 70%", end: "center 55%", scrub: 0.6 },
        }
      );
      // destination resolves from flat to living ADDX build
      gsap.to(".cont-flat", {
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ".cont-stage", start: "center 65%", end: "center 40%", scrub: 0.6 },
      });
      gsap.to(".cont-live", {
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: ".cont-stage", start: "center 65%", end: "center 40%", scrub: 0.6 },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="continuity" className="relative px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          <span className="inline-block h-px w-12 bg-accent" aria-hidden />
          The Continuity Principle
        </p>

        <h2 className="cont-head font-display text-[clamp(2.2rem,5.5vw,4.4rem)] font-semibold leading-[1.05] tracking-tightest">
          <span className="block overflow-hidden"><span className="block">Seal the gap between</span></span>
          <span className="block overflow-hidden"><span className="block">the ad and the <em className="serif-accent">click</em>.</span></span>
        </h2>

        <p className="cont-lede mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          A viewer clicks a cinematic ADDX film, then lands on a flat, generic template —
          and the momentum dies on impact. We extend the motion straight onto the page so the
          experience never breaks stride.
        </p>

        {/* stage */}
        <div className="cont-stage relative mt-16 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          {/* premium film */}
          <div className="cont-card glass relative aspect-[4/3] overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_20%,rgba(79,196,248,0.18),transparent_70%),radial-gradient(60%_70%_at_80%_85%,rgba(46,126,247,0.24),transparent_70%)]" />
            <span className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              ADDX Launch Film
            </span>
            <span className="absolute bottom-6 left-6 font-display text-xl font-semibold leading-tight">
              Premium motion.<br />Click-through earned.
            </span>
            <span className="absolute right-5 top-5 flex items-center gap-2 font-mono text-[10px] text-accent">
              <span className="pulse-dot" aria-hidden /> LIVE
            </span>
          </div>

          {/* connecting signal */}
          <svg viewBox="0 0 240 40" className="hidden w-32 md:block" aria-hidden>
            <path
              className="cont-signal"
              d="M0 20 H240"
              fill="none"
              stroke="#4fc4f8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="240"
              strokeDashoffset="240"
            />
          </svg>

          {/* destination — resolves flat → living */}
          <div className="cont-card relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="cont-flat glass absolute inset-0 rounded-2xl p-6">
              <div className="h-3 w-2/5 rounded bg-white/15" />
              <div className="mt-3 h-2 w-4/5 rounded bg-white/10" />
              <div className="mt-2 h-2 w-3/5 rounded bg-white/10" />
              <div className="mt-6 h-9 w-28 rounded bg-white/10" />
              <span className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                Generic template. Static. Cold.
              </span>
            </div>
            <div className="cont-live absolute inset-0 rounded-2xl border border-accent/50 p-6 opacity-0 shadow-[0_0_60px_-15px_rgba(79,196,248,0.5)]">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(70%_60%_at_70%_30%,rgba(79,196,248,0.18),transparent_70%)]" />
              <span className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                ADDX Build
              </span>
              <span className="absolute bottom-6 left-6 font-display text-xl font-semibold leading-tight">
                The motion never stops.<br />Neither does the funnel.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
