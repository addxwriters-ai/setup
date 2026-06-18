"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEXT =
  "Your ad earns the click. Your landing page should earn the conversion — with the same motion, the same pacing, the same intent.";

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".manifesto-word",
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center px-6 py-32">
      <p className="mx-auto max-w-5xl text-center font-display text-[clamp(1.9rem,4.6vw,3.6rem)] font-medium leading-[1.25] tracking-tightest">
        {TEXT.split(" ").map((word, i) => (
          <span key={i} className="manifesto-word inline-block">
            {word}&nbsp;
          </span>
        ))}
      </p>
    </section>
  );
}
