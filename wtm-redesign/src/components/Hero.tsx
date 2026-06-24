import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VideoFrame from './VideoFrame'
import { useContent } from '../content/ContentContext'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const section = useRef<HTMLElement>(null)
  const { hero } = useContent()

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // --- text mask reveal: each .line-mask > span slides up ---
      gsap.to('.hero-line', {
        y: 0,
        duration: 1.4,
        ease: 'power3.out',
        stagger: 0.18,
        delay: 0.3,
      })

      // --- sub-copy + CTA fade in ---
      gsap.from('.hero-fade', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.15,
        delay: 0.9,
      })

      // --- video frame: scale 95% → 100% on scroll scrub ---
      gsap.fromTo(
        '.hero-video',
        { scale: 0.95 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        }
      )

      // --- eyebrow line wipe ---
      gsap.from('.hero-rule', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        ease: 'power3.inOut',
        delay: 0.2,
      })
    }, section)

    return () => ctx.revert()
  }, { scope: section })

  return (
    <section ref={section} className="border-b-[3px] border-maroon">
      <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12">
        {/* Left panel — strict vertical center via flex on a grid child */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start px-6 py-12 lg:px-16 h-full bg-[#5A1818]">
          <div className="eyebrow mb-6 flex items-center gap-4">
            <span className="hero-rule h-px w-10 bg-stark/50" />
            {hero.eyebrow}
          </div>

          <h1 className="display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="line-mask">
              <span className="hero-line">{hero.headlineLine1}</span>
            </span>
            <span className="line-mask">
              <span className="hero-line text-stark/80">{hero.headlineLine2}</span>
            </span>
          </h1>
          <p className="hero-fade mt-6 max-w-md text-base leading-relaxed text-stark md:text-lg">
            {hero.subcopy}
          </p>

          <div className="hero-fade mt-8 flex flex-wrap items-center gap-4">
            <a href="#products" className="btn-industrial">
              {hero.ctaPrimary}
            </a>
            <span className="text-xs uppercase tracking-[0.2em] text-stark/60">
              {hero.ctaTag}
            </span>
          </div>
        </div>

        {/* Right panel — video fills remaining 7 cols */}
        <div className="hero-video lg:col-span-7 relative h-full min-h-[50vh] lg:min-h-screen origin-center">
          <VideoFrame
            src="/assets/hero-industrial.mp4"
            label={hero.videoLabel}
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
