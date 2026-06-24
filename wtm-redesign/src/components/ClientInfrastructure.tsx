import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PARTNERS = [
  'CPEC Authority',
  'NLC Pakistan',
  'Frontier Works Org.',
  'DHA Holdings',
  'Nespak',
  'Descon Engineering',
  'Lucky Cement',
  'Habib Rafiq',
  'Bahria Town',
  'CSCEC Pakistan',
]

export default function ClientInfrastructure() {
  const section = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // heading reveal
      gsap.from('.ci-heading', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ci-heading',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // infinite horizontal marquee — completely linear, never hitches
      const track = document.querySelector('.marquee-track') as HTMLElement
      if (track) {
        const w = track.scrollWidth / 2
        gsap.to(track, {
          x: -w,
          duration: 40,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x: number) => x % w),
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, { scope: section })

  return (
    <section ref={section} id="capabilities" className="border-b-[3px] border-maroon">
      <div className="mx-auto max-w-frame px-6 py-16 md:px-12 md:py-20">
        <div className="ci-heading mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5">Client Infrastructure Portal</div>
            <h2 className="display text-3xl sm:text-4xl">
              Trusted Across Enterprise.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-stark">
            Supplying structural and mineral solutions to industrial operators
            and infrastructure contractors.
          </p>
        </div>
      </div>

      {/* Marquee belt — full-bleed, overflows container */}
      <div className="overflow-hidden border-y-[2px] border-maroon py-8">
        <div className="marquee-track">
          {/* two copies for seamless loop */}
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {PARTNERS.map((name, i) => (
                <div
                  key={`${copy}-${i}`}
                  className="flex h-16 items-center justify-center border-r border-hairline px-12 md:h-20 md:px-16"
                >
                  <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-concrete/50">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
