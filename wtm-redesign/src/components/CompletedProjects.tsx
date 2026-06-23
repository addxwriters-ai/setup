import VideoFrame from './VideoFrame'
import { projects } from '../data/projects'

// Massive structural split viewport: bold project indicators (left) tracking
// alongside generous preview viewports stacked vertically (right).
export default function CompletedProjects() {
  return (
    <section id="projects" className="border-b border-hairline bg-midnight">
      <div className="mx-auto max-w-frame px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12">
          <div className="eyebrow mb-5">Completed Projects</div>
          <h2 className="display text-4xl sm:text-5xl xl:text-6xl">
            Operational Scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px border-y border-hairline lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.index}
              className="grid grid-cols-1 border-b border-hairline last:border-b-0 sm:grid-cols-2 lg:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b-0"
            >
              {/* Left — bold text indicators */}
              <div className="flex flex-col justify-between border-hairline p-6 sm:border-r md:p-8">
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

              {/* Right — generous preview viewport */}
              <VideoFrame
                src={p.media}
                label="PROJECT PREVIEW"
                className="aspect-video w-full sm:aspect-auto sm:min-h-[260px]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
