"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollVideo from "./ScrollVideo";

const HEADLINE = ["Your Product Videos", "Are Premium.", "Why Is Your", "Website Static?"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.2 })
        .from(".hero-line span", {
          yPercent: 115,
          rotate: 3,
          duration: 1.1,
          stagger: 0.1,
          ease: "power4.out",
        })
        .from(".hero-sub", { y: 36, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");

      // Cinematic exit: headline recedes like a rack-focus pull as the demo begins.
      gsap.to(".hero-copy", {
        yPercent: -22,
        opacity: 0,
        scale: 0.96,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <ScrollVideo
        src="/loops/hf-hero-ui-grid.mp4"
        scrub
        triggerSelector="#hero"
        hfSpec="Higgsfield Cinema Studio · abstract 3D UI grid, planes shifting on z-axis · 35mm anamorphic · slow crane-down bound to scroll · 10s seamless loop · 3840x2160"
      />

      <div className="hero-copy relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
        <p className="mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          <span className="inline-block h-px w-12 bg-accent" aria-hidden />
          Highly Animated UX/UI Web Design
        </p>

        <h1 className="font-display text-[clamp(2.6rem,7.2vw,6.5rem)] font-bold uppercase leading-[0.95] tracking-tightest">
          {HEADLINE.map((line, i) => (
            <span key={line} className="hero-line block overflow-hidden">
              <span className={`inline-block ${i >= 2 ? "text-accent" : ""}`}>{line}</span>
            </span>
          ))}
        </h1>

        <p className="hero-sub mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          ADDX Studio brings your interface to life. We build highly animated, immersive web
          experiences with the exact same motion choreography, cinematic pacing, and fluid
          transitions as our launch videos.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        Scroll — the demo has already started
      </div>
    </section>
  );
}
