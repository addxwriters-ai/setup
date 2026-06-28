"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.out",
        delay: 0.4,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-void/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="https://addxstudio.com"
          className="font-display text-lg font-bold tracking-tightest"
        >
          ADDX&nbsp;STUDIO<span className="text-accent">®</span>
        </a>

        <div className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:flex">
          <span className="pulse-dot" aria-hidden />
          System Status: Active
        </div>

        <a
          href="#packages"
          className="rounded-[10px] bg-cta px-5 py-2.5 font-display text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
        >
          Book a Build
        </a>
      </nav>
    </header>
  );
}
