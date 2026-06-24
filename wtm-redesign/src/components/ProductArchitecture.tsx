import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VideoFrame from './VideoFrame'
import { products } from '../data/products'

gsap.registerPlugin(ScrollTrigger)

export default function ProductArchitecture() {
  const section = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    // Lightweight reveals run on all viewports (no pin, no scrub).
    mm.add('all', () => {
      gsap.from('.pa-heading', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pa-heading',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.utils.toArray<HTMLElement>('.product-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: 'power2.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })
    })

    // Complex parallax scrub: desktop only (≥1024px) to avoid mobile stutter.
    mm.add('(min-width: 1024px)', () => {
      gsap.utils.toArray<HTMLElement>('.product-card').forEach((card) => {
        const video = card.querySelector('.pv-frame')
        if (!video) return
        gsap.fromTo(
          video,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      })
    })

    return () => mm.revert()
  }, { scope: section })

  return (
    <section ref={section} id="products" className="border-b-[3px] border-maroon">
      <div className="mx-auto max-w-frame px-6 py-16 md:px-12 md:py-24">
        <div className="pa-heading mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5">Product Architecture</div>
            <h2 className="display text-4xl sm:text-5xl xl:text-6xl">
              Six Structural
              <br />
              Categories.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stark">
            A vertically integrated portfolio engineered for enterprise
            infrastructure — from technical surfaces to strategic metallurgy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <a
              key={p.index}
              href={p.href}
              className="product-card group relative block aspect-[4/5] overflow-hidden bg-industrial"
            >
              {/* absolute video layer — parallax target (over-sized
                  vertically so the scrub shift never reveals edges) */}
              <div className="pv-frame absolute left-0 right-0 -top-[16%] h-[132%]">
                <VideoFrame
                  src={p.video}
                  label={`PRODUCT ${p.index}`}
                  className="h-full w-full"
                />
              </div>

              {/* minimalist text overlay — shifts right 8px on hover */}
              <div className="relative z-10 flex h-full flex-col justify-between bg-gradient-to-t from-midnight/85 via-industrial/20 to-transparent p-6">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-concrete">
                    {p.index}
                  </span>
                  <span className="text-concrete transition-colors duration-200 group-hover:text-maroon">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>

                <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                  <h3 className="display text-2xl leading-none sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-snug text-concrete">
                    {p.context}
                  </p>
                </div>
              </div>

              {/* hover: video opacity 0.4 → 0.8 */}
              <div className="pointer-events-none absolute inset-0 z-[5] bg-midnight/60 transition-opacity duration-500 group-hover:opacity-20" />

              {/* maroon accent border on hover */}
              <span className="pointer-events-none absolute inset-0 z-20 border border-transparent transition-colors duration-200 group-hover:border-maroon" />

              {/* center-outward maroon accent line */}
              <span className="accent-line" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
