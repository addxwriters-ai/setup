"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * The Continuity Principle — a pinned, scrubbed diagram in three beats:
 * 1. A premium ADDX launch film card emits a live signal.
 * 2. The signal hits a flat generic template and the line breaks. The leak.
 * 3. The destination card is rebuilt as an ADDX page; the signal flows through.
 */
export default function EcosystemLeak() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=2400",
          pin: true,
          scrub: 0.6,
        },
      });

      tl.from(".leak-heading span", { yPercent: 110, stagger: 0.06, duration: 0.5, ease: "power3.out" })
        .from(".card-video", { x: -80, opacity: 0, duration: 0.6, ease: "power3.out" })
        // beat 1 — signal travels
        .fromTo(".signal-path", { strokeDashoffset: 600 }, { strokeDashoffset: 300, duration: 0.8, ease: "none" })
        .from(".card-site", { x: 80, opacity: 0, duration: 0.6, ease: "power3.out" }, "<0.2")
        // beat 2 — the leak: line dies against the flat template
        .to(".signal-path", { stroke: "#ff3b3b", duration: 0.25 })
        .to(".card-site", { x: 8, duration: 0.06, repeat: 5, yoyo: true, ease: "none" }, "<")
        .to(".leak-label", { opacity: 1, y: 0, duration: 0.4 }, "<")
        .to(".leak-copy-a", { opacity: 1, y: 0, duration: 0.5 }, "<0.2")
        .addLabel("broken", "+=0.4")
        // beat 3 — continuity restored
        .to(".leak-label", { opacity: 0, duration: 0.3 }, "broken")
        .to(".card-site .site-flat", { opacity: 0, duration: 0.5 }, "broken")
        .to(".card-site .site-addx", { opacity: 1, duration: 0.5 }, "broken")
        .to(".card-site", { borderColor: "rgba(79,196,248,0.5)", duration: 0.5 }, "broken")
        .to(".signal-path", { strokeDashoffset: 0, stroke: "#4fc4f8", duration: 0.8, ease: "none" }, "broken")
        .to(".leak-copy-a", { opacity: 0.25, duration: 0.4 }, "broken")
        .to(".leak-copy-b", { opacity: 1, y: 0, duration: 0.5 }, "broken+=0.3");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          <span className="inline-block h-px w-12 bg-accent" aria-hidden />
          The Continuity Principle
        </p>

        <h2 className="leak-heading font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-semibold leading-[1.05] tracking-tightest">
          <span className="block overflow-hidden"><span className="block">The ecosystem</span></span>
          <span className="block overflow-hidden"><span className="block"><em className="serif-accent">leak</em>.</span></span>
        </h2>

        {/* diagram */}
        <div className="relative mt-16 grid grid-cols-[1fr_minmax(80px,220px)_1fr] items-center gap-0">
          <div className="card-video hairline relative aspect-[4/3] overflow-hidden bg-panel p-5">
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_20%,rgba(79,196,248,0.16),transparent_70%),radial-gradient(60%_70%_at_80%_85%,rgba(46,126,247,0.22),transparent_70%)]" />
            <span className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-muted">ADDX Launch Film</span>
            <span className="absolute bottom-5 left-5 font-display text-xl font-bold">Premium motion.<br />Click-through earned.</span>
            <span className="absolute right-4 top-4 flex items-center gap-2 font-mono text-[10px] text-accent">
              <span className="pulse-dot" aria-hidden /> LIVE
            </span>
          </div>

          <svg viewBox="0 0 220 60" className="w-full" aria-hidden>
            <path
              className="signal-path"
              d="M0 30 H220"
              fill="none"
              stroke="#4fc4f8"
              strokeWidth="2"
              strokeDasharray="600"
              strokeDashoffset="600"
            />
          </svg>

          <div className="card-site hairline relative aspect-[4/3] overflow-hidden bg-panel p-5">
            <div className="site-flat absolute inset-0 bg-[#161616] p-5">
              <div className="h-3 w-2/5 bg-white/15" />
              <div className="mt-3 h-2 w-4/5 bg-white/8" />
              <div className="mt-2 h-2 w-3/5 bg-white/8" />
              <div className="mt-6 h-8 w-28 bg-white/12" />
              <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                Generic template. Static. Cold.
              </span>
            </div>
            <div className="site-addx absolute inset-0 p-5 opacity-0">
              <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_70%_30%,rgba(79,196,248,0.16),transparent_70%)]" />
              <span className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-accent">ADDX Build</span>
              <span className="absolute bottom-5 left-5 font-display text-xl font-bold">
                The motion never stops.<br />Neither does the funnel.
              </span>
            </div>
          </div>

          <span className="leak-label absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-12 translate-y-2 font-mono text-xs uppercase tracking-[0.3em] text-[#ff3b3b] opacity-0">
            ⚠ Conversion signal lost
          </span>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <p className="leak-copy-a translate-y-6 text-base leading-relaxed text-muted opacity-0 md:text-lg">
            A user clicks a high-converting ADDX video — pacing, choreography, intent all engineered —
            and lands on a flat, generic, uninspired web template. The conversion magic breaks on
            impact. That is the ecosystem leak.
          </p>
          <p className="leak-copy-b translate-y-6 text-base leading-relaxed opacity-0 md:text-lg">
            We seal it by extending the motion experience directly onto the landing page: the same
            easing curves, the same cinematic pacing, the same brand physics — from first frame of
            the ad to final click of the funnel.
          </p>
        </div>
      </div>
    </section>
  );
}
