import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VideoFrame from './VideoFrame'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function CompletedProjects() {
  const section = useRef<HTMLElement>(null)
  const count = projects.length

  useGSAP(() => {
    const mm = gsap.matchMedia()

    // Pinned split-scrub only on desktop (lg+)
    mm.add('(min-width: 1024px)', () => {
      const panels = gsap.utils.toArray<HTMLElement>('.proj-panel')

      // Pin the section while we crossfade all project nodes
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          // each panel gets 1 scroll-height of distance
          end: `+=${count * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      panels.forEach((panel, i) => {
        const text = panel.querySelector('.proj-text')
        const media = panel.querySelector('.proj-media')

        if (i === 0) {
          // First panel starts visible
          gsap.set(panel, { autoAlpha: 1, zIndex: count - i })
        } else {
          gsap.set(panel, { autoAlpha: 0, zIndex: count - i })
          gsap.set(text, { y: 40 })
          gsap.set(media, { yPercent: 20 })
        }

        if (i > 0) {
          // crossfade: previous out, current in
          const pos = (i - 0.5) / count
          tl.to(panels[i - 1], { autoAlpha: 0, duration: 0.3 }, pos)
          tl.to(panel, { autoAlpha: 1, duration: 0.3 }, pos)
          tl.fromTo(text!, { y: 40 }, { y: 0, duration: 0.4, ease: 'power2.out' }, pos)
          tl.fromTo(media!, { yPercent: 20 }, { yPercent: 0, duration: 0.4, ease: 'power2.out' }, pos)
        }
      })
    })

    // Mobile: simple staggered reveal, no pin
    mm.add('(max-width: 1023px)', () => {
      gsap.utils.toArray<HTMLElement>('.proj-panel').forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    })

    return () => mm.revert()
  }, { scope: section })

  return (
    <section ref={section} id="projects" className="border-b border-hairline bg-midnight">
      <div className="mx-auto max-w-frame px-6 py-16 md:px-12 md:py-24">
        <div className="mb-12">
          <div className="eyebrow mb-5">Completed Projects</div>
          <h2 className="display text-4xl sm:text-5xl xl:text-6xl">
            Operational Scale.
          </h2>
        </div>

        {/* Stacked panels — on lg+ they are absolutely positioned and crossfaded */}
        <div className="relative lg:min-h-[520px]">
          {projects.map((p) => (
            <article
              key={p.index}
              className="proj-panel border-b border-hairline last:border-b-0 lg:absolute lg:inset-0 lg:border-b-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:h-full">
                {/* Left — bold text indicators */}
                <div className="proj-text flex flex-col justify-between border-hairline p-6 sm:border-r md:p-8">
                  <span className="text-xs font-bold tracking-[0.2em] text-maroon">
                    {p.index}
                  </span>
                  <div className="mt-10">
                    <h3 className="display text-2xl leading-none md:text-3xl">
                      {p.name}
                    </h3>
                    <dl className="mt-5 space-y-1.5 text-sm text-concrete">
                      <div className="flex gap-2">
                        <dt className="text-concrete/50">Scale</dt>
                        <dd>{p.scale}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-concrete/50">Location</dt>
                        <dd>{p.location}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Right — preview viewport */}
                <div className="proj-media">
                  <VideoFrame
                    src={p.media}
                    label="PROJECT PREVIEW"
                    className="aspect-video w-full sm:aspect-auto sm:min-h-[260px] lg:h-full"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Scroll progress dots (desktop only) */}
        <div className="mt-8 hidden items-center justify-center gap-3 lg:flex" aria-hidden="true">
          {projects.map((p) => (
            <span key={p.index} className="h-1.5 w-1.5 rounded-full bg-concrete/30" />
          ))}
        </div>
      </div>
    </section>
  )
}
