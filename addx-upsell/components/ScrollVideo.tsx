"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollVideoProps = {
  /** Higgsfield render. Until delivered, the component degrades to a live CSS fallback. */
  src: string;
  poster?: string;
  /** Bind the playhead to scroll progress of `triggerSelector` (or own parent). */
  scrub?: boolean;
  triggerSelector?: string;
  className?: string;
  /** Production note rendered as a data-attribute for the Higgsfield handoff. */
  hfSpec?: string;
};

/**
 * Scroll-bound video surface. Native playback contract: inline, muted, looped,
 * metadata-preloaded. In scrub mode the playhead is a lerped proxy driven by
 * ScrollTrigger progress, so seeking stays smooth under inertia scrolling.
 */
export default function ScrollVideo({
  src,
  poster,
  scrub = false,
  triggerSelector,
  className = "",
  hfSpec,
}: ScrollVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      if (!failed && video && scrub) {
        video.pause();
        const playhead = { t: 0 };
        const apply = () => {
          if (video.duration) video.currentTime = playhead.t * video.duration;
        };
        ScrollTrigger.create({
          trigger: triggerSelector ?? wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            gsap.to(playhead, {
              t: self.progress,
              duration: 0.4,
              ease: "power2.out",
              overwrite: true,
              onUpdate: apply,
            });
          },
        });
      }

      // Fallback grid stays scroll-reactive so the binding is demonstrable
      // before Higgsfield renders are dropped in.
      if (failed) {
        gsap.to(wrap.querySelector(".hf-grid"), {
          backgroundPosition: "0px 640px",
          rotateZ: 3,
          ease: "none",
          scrollTrigger: {
            trigger: triggerSelector ?? wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, wrap);

    return () => ctx.revert();
  }, [failed, scrub, triggerSelector]);

  return (
    <div
      ref={wrapRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      data-higgsfield-spec={hfSpec}
    >
      {failed ? (
        <div className="hf-fallback">
          <div className="hf-grid" />
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay={!scrub}
          preload="metadata"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent to-void" />
    </div>
  );
}
