"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Tier = {
  id: string;
  name: string;
  label: string;
  price: string;
  priceNote?: string;
  hook: string;
  features: string[];
  cta: string;
  flagship?: boolean;
};

const TIERS: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    label: "AI + Human Polished",
    price: "$1,500",
    priceNote: "USD · fixed",
    hook: "Speed meets elite refinement.",
    features: [
      "Rapid structural AI scaffolding",
      "Custom Figma styling curation",
      "Standard interactive scroll-animations",
      "Lightweight Lottie / Rive micro-interactions",
      "Optimized for lightning-fast deployment",
    ],
    cta: "Deploy Starter Build",
  },
  {
    id: "advanced",
    name: "Advanced",
    label: "Custom Detail",
    price: "Custom",
    priceNote: "Contact for pricing",
    hook: "Completely bespoke cinematic architecture.",
    features: [
      "Custom-tailored Figma wireframing from scratch",
      "Multi-layered GSAP scroll timelines",
      "Custom Higgsfield 3D background rendering",
      "WebGL particle interactions",
      "Advanced interactive product state-machines",
      "Premium performance optimization",
    ],
    cta: "Lock In Advanced Build",
    flagship: true,
  },
];

export default function Packages() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".pkg-head span", {
        yPercent: 110,
        stagger: 0.07,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      });
      gsap.from(".tier-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: "power4.out",
        scrollTrigger: { trigger: ".pkg-grid", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -4;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 4;
    gsap.to(card, { rotateX: rx, rotateY: ry, transformPerspective: 1000, duration: 0.5, ease: "power2.out" });
  };
  const onLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "power3.out" });
  };

  return (
    <section ref={ref} id="packages" className="relative px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          <span className="inline-block h-px w-12 bg-accent" aria-hidden />
          The Packages
        </p>
        <h2 className="pkg-head font-display text-[clamp(2.2rem,5.5vw,4.4rem)] font-semibold leading-[1.05] tracking-tightest">
          <span className="block overflow-hidden"><span className="block">Two ways</span></span>
          <span className="block overflow-hidden"><span className="block">to go <em className="serif-accent">kinetic</em>.</span></span>
        </h2>

        <div className="pkg-grid mt-16 grid gap-6 lg:grid-cols-2">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              onPointerMove={onMove}
              onPointerLeave={onLeave}
              className={`tier-card group relative flex flex-col rounded-3xl p-9 will-change-transform ${
                tier.flagship
                  ? "border border-accent/50 bg-panel shadow-[0_0_90px_-25px_rgba(79,196,248,0.45)]"
                  : "glass"
              }`}
            >
              {tier.flagship && (
                <span className="absolute -top-3 right-9 rounded-full bg-cta px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  High-Ticket · Flagship
                </span>
              )}

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl font-bold tracking-tightest">{tier.name}</h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {tier.label}
                </span>
              </div>

              <div className="mt-8 flex items-baseline gap-3">
                <span className={`font-display text-6xl font-bold tracking-tightest ${tier.flagship ? "text-accent" : ""}`}>
                  {tier.price}
                </span>
                {tier.priceNote && (
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                    {tier.priceNote}
                  </span>
                )}
              </div>

              <p className="mt-3 text-lg text-ink/90">{tier.hook}</p>

              <ul className="mt-8 flex-1 space-y-4 border-t border-edge pt-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 text-accent" aria-hidden>▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://addxstudio.com"
                className={`mt-10 block rounded-full py-4 text-center font-display text-sm font-semibold transition-transform duration-300 group-hover:scale-[1.02] ${
                  tier.flagship ? "bg-cta text-white" : "border border-edge text-ink hover:bg-white/5"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
