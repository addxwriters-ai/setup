"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ITEMS = [
  {
    k: "01",
    title: "Scroll choreography",
    body: "Every section enters on a tuned easing curve — pinned reveals, parallax depth, and momentum that feels designed, never default.",
  },
  {
    k: "02",
    title: "Cinematic backdrops",
    body: "Higgsfield-rendered 3D loops and WebGL fields sit behind your content, bound to scroll so the world moves as the visitor reads.",
  },
  {
    k: "03",
    title: "Micro-interactions",
    body: "Lottie and Rive details on every control — buttons, toggles, cursors — so the interface feels alive under the hand.",
  },
  {
    k: "04",
    title: "Brand-true motion",
    body: "We rebuild the exact pacing and physics of your launch films in the browser, so ad and site read as one continuous experience.",
  },
];

export default function Capabilities() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".cap-head span", {
        yPercent: 110,
        stagger: 0.08,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".cap-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: { trigger: ".cap-grid", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          <span className="inline-block h-px w-12 bg-accent" aria-hidden />
          What we build
        </p>
        <h2 className="cap-head font-display text-[clamp(2.2rem,5.5vw,4.4rem)] font-semibold leading-[1.05] tracking-tightest">
          <span className="block overflow-hidden"><span className="block">Motion, engineered</span></span>
          <span className="block overflow-hidden"><span className="block">into every <em className="serif-accent">layer</em>.</span></span>
        </h2>

        <div className="cap-grid mt-16 grid gap-5 md:grid-cols-2">
          {ITEMS.map((item) => (
            <div
              key={item.k}
              className="cap-card group relative overflow-hidden rounded-2xl p-8 transition-colors duration-500 glass hover:border-accent/40"
            >
              <div className="absolute right-6 top-6 font-mono text-sm text-muted/60 transition-colors duration-500 group-hover:text-accent">
                {item.k}
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tightest">{item.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
                {item.body}
              </p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
