"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClosingCTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".cta-line span", {
        yPercent: 120,
        stagger: 0.1,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      gsap.from(".cta-tail", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 60%" },
      });
      gsap.to(".cta-glow", {
        scale: 1.25,
        opacity: 0.9,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div
        className="cta-glow pointer-events-none absolute left-1/2 top-1/2 h-[55vmax] w-[55vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(46,126,247,0.28), rgba(79,196,248,0.08) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[1.02] tracking-tightest">
          <span className="cta-line block overflow-hidden py-[0.05em]"><span className="inline-block">Make your site</span></span>
          <span className="cta-line block overflow-hidden py-[0.05em]"><span className="inline-block">move like your <em className="serif-accent">films</em>.</span></span>
        </h2>

        <p className="cta-tail mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          One build closes the loop between the ad and the conversion. Let&apos;s scope yours.
        </p>

        <div className="cta-tail mt-10">
          <a
            href="https://addxstudio.com"
            className="inline-block rounded-full bg-cta px-9 py-4 font-display text-base font-semibold text-white shadow-[0_0_50px_-8px_rgba(46,126,247,0.7)] transition-transform duration-300 hover:scale-[1.04]"
          >
            Book a Build
          </a>
        </div>
      </div>
    </section>
  );
}
