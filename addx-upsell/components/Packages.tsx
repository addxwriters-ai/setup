"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BASE = 1500;
const STANDARD_DAYS = 15;
const RUSH_DAYS = 7;

const MAIN_INCLUDES = [
  "The Main Landing Page",
  "An About Us page",
  "A Contact Us page",
  "2 Custom Service Pages",
];

type AddOn = {
  id: string;
  name: string;
  price: number;
  note: string;
  group: string;
};

const ADDONS: AddOn[] = [
  {
    id: "seo-starter",
    name: "SEO Starter Package",
    price: 500,
    note: "Foundational on-page SEO to get you ranking.",
    group: "SEO",
  },
  {
    id: "seo-3month",
    name: "SEO 3-Month Package",
    price: 2000,
    note: "Ongoing optimization, content & reporting.",
    group: "SEO",
  },
  {
    id: "rush",
    name: "7-Day Rush Delivery",
    price: 500,
    note: "Ship in 7 days instead of the standard 15.",
    group: "Delivery",
  },
  {
    id: "extra-pages",
    name: "2 Additional Service Pages",
    price: 500,
    note: "Expand beyond the four included pages.",
    group: "Pages",
  },
];

const usd = (n: number) => "$" + n.toLocaleString("en-US");

export default function Packages() {
  const ref = useRef<HTMLElement>(null);
  const totalRef = useRef<HTMLSpanElement>(null);
  const prevTotal = useRef<number>(BASE);

  const [selected, setSelected] = useState<Set<string>>(new Set());

  const total = BASE + ADDONS.reduce((sum, a) => (selected.has(a.id) ? sum + a.price : sum), 0);
  const deliveryDays = selected.has("rush") ? RUSH_DAYS : STANDARD_DAYS;

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  // Entrance choreography. Uses fromTo with immediateRender:false so every
  // element defaults to its VISIBLE end-state — a missed ScrollTrigger (e.g.
  // from the pinned section above shifting scroll positions) can never strand
  // this conversion-critical content at opacity:0.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pkg-heading span",
        { yPercent: 110 },
        {
          yPercent: 0,
          stagger: 0.07,
          duration: 0.9,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".main-card",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".pkg-grid", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".addon-row",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".pkg-grid", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".summary-bar",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".summary-bar", start: "top 90%" },
        }
      );
      gsap.fromTo(
        ".enterprise-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".enterprise-card", start: "top 90%" },
        }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  // animate the running total whenever it changes
  useEffect(() => {
    const obj = { v: prevTotal.current };
    const tween = gsap.to(obj, {
      v: total,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        if (totalRef.current) totalRef.current.textContent = usd(Math.round(obj.v));
      },
    });
    prevTotal.current = total;
    return () => {
      tween.kill();
    };
  }, [total]);

  return (
    <section ref={ref} id="packages" className="relative px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          <span className="inline-block h-px w-12 bg-accent" aria-hidden />
          Pricing &amp; Upsells
        </p>
        <h2 className="pkg-heading font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-semibold leading-[1.05] tracking-tightest">
          <span className="block overflow-hidden"><span className="block">One core build.</span></span>
          <span className="block overflow-hidden"><span className="block">Endless <em className="serif-accent">velocity</em>.</span></span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Start with the $1,500 Kinetic Web Build, then tap the power-ups you need.
          Your total and delivery window update live.
        </p>

        <div className="pkg-grid mt-16 grid gap-6 lg:grid-cols-5">
          {/* ---- Main package ---- */}
          <div className="main-card relative flex flex-col bg-panel p-9 lg:col-span-3 border border-accent/60 shadow-[0_0_80px_-20px_rgba(79,196,248,0.35)]">
            <span className="absolute -top-3 left-9 rounded-md bg-cta px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Core Build · Everything starts here
            </span>

            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-3xl font-bold tracking-tightest">Kinetic Web Build</h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                AI + Human Polished
              </span>
            </div>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-6xl font-bold tracking-tightest text-accent">
                {usd(BASE)}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                USD · fixed
              </span>
            </div>

            <p className="mt-3 text-lg text-ink/90">A complete, motion-led site — four pages included.</p>

            <ul className="mt-8 flex-1 space-y-4 border-t border-edge pt-8">
              {MAIN_INCLUDES.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-ink/90 md:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden>▸</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 rounded-[10px] border border-edge bg-void/40 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              <span className="pulse-dot" aria-hidden />
              Standard delivery: {STANDARD_DAYS} days
            </div>
          </div>

          {/* ---- Upsell configurator ---- */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
              Power-ups — tap to add
            </p>
            {ADDONS.map((a) => {
              const on = selected.has(a.id);
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => toggle(a.id)}
                  aria-pressed={on}
                  className={`addon-row group relative flex items-start gap-4 rounded-[12px] p-5 text-left transition-all duration-300 ${
                    on
                      ? "border border-accent bg-accent/10 shadow-[0_0_40px_-18px_rgba(79,196,248,0.6)]"
                      : "border border-edge bg-panel hover:border-accent/40 hover:bg-white/5"
                  }`}
                >
                  {/* check / plus indicator */}
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-sm transition-colors duration-300 ${
                      on ? "border-accent bg-accent text-void" : "border-edge text-muted group-hover:border-accent/60"
                    }`}
                    aria-hidden
                  >
                    {on ? "✓" : "+"}
                  </span>

                  <span className="flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="font-display text-base font-semibold tracking-tight">{a.name}</span>
                      <span className={`font-display text-sm font-bold ${on ? "text-accent" : "text-ink"}`}>
                        +{usd(a.price)}
                      </span>
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted">{a.note}</span>
                    <span className="mt-2 inline-block font-mono text-[9px] uppercase tracking-[0.25em] text-muted/70">
                      {a.group}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ---- Live summary bar ---- */}
        <div className="summary-bar mt-6 flex flex-col items-start justify-between gap-6 rounded-[14px] border border-accent/50 bg-panel p-7 shadow-[0_0_90px_-30px_rgba(79,196,248,0.5)] md:flex-row md:items-center">
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Your build</p>
              <p className="mt-1 font-display text-4xl font-bold tracking-tightest text-accent md:text-5xl">
                <span ref={totalRef}>{usd(BASE)}</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Delivery</p>
              <p className="mt-1 font-display text-2xl font-semibold tracking-tightest">
                {deliveryDays} days
                {deliveryDays === RUSH_DAYS && (
                  <span className="ml-2 align-middle font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    Rush
                  </span>
                )}
              </p>
            </div>
            <div className="max-w-xs">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Included</p>
              <p className="mt-1 text-sm leading-snug text-muted">
                {selected.size === 0
                  ? "Core build — 4 pages."
                  : `Core build + ${selected.size} power-up${selected.size > 1 ? "s" : ""}.`}
              </p>
            </div>
          </div>

          <a
            href="https://addxstudio.com"
            className="w-full rounded-[10px] bg-cta px-8 py-4 text-center font-display text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03] md:w-auto"
          >
            Book this build
          </a>
        </div>

        {/* ---- Custom / Enterprise tier ---- */}
        <div className="enterprise-card mt-10 relative overflow-hidden rounded-[16px] border border-white/10 bg-panel p-9 shadow-[0_0_120px_-40px_rgba(79,196,248,0.18)]">
          {/* Subtle radial glow */}
          <div
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(46,126,247,0.6) 0%, transparent 70%)" }}
            aria-hidden
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <span className="mb-4 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-muted/60">
                Custom &amp; Enterprise
              </span>
              <h3 className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold leading-[1.08] tracking-tightest">
                Need something<br />
                <em className="serif-accent">beyond the build</em>?
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                Full-scale design systems, multi-language platforms, e-commerce, app interfaces,
                bespoke motion direction, or an ongoing retainer — we scope it together.
                No fixed menu; no ceiling.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  "Design system architecture",
                  "Multi-page / multi-language",
                  "E-commerce & web apps",
                  "Ongoing retainer",
                  "White-label delivery",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-ink/70">
                    <span className="text-accent" aria-hidden>▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 flex flex-col items-start gap-4 md:items-end">
              <div className="text-right">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Starting from</p>
                <p className="mt-1 font-display text-4xl font-bold tracking-tightest text-ink">
                  Custom
                </p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Scoped per project
                </p>
              </div>
              <a
                href="https://addxstudio.com/contact"
                className="group flex items-center gap-3 rounded-[10px] border border-white/15 bg-white/5 px-7 py-4 font-display text-sm font-semibold text-white transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_40px_-15px_rgba(79,196,248,0.5)]"
              >
                Book a Meeting
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
