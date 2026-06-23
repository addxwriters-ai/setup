import VideoFrame from './VideoFrame'

// Full-bleed asymmetric grid: 40% structural copy block / 60% containment video.
export default function Hero() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto grid max-w-frame grid-cols-1 lg:grid-cols-5">
        {/* Left panel — 40% (2/5) fixed structural block */}
        <div className="flex flex-col justify-between border-hairline px-6 py-12 md:px-10 lg:col-span-2 lg:border-r lg:py-20">
          <div className="eyebrow mb-10 flex items-center gap-4">
            <span className="h-px w-10 bg-maroon" />
            WTM Industrial Group
          </div>

          <div>
            <h1 className="display text-6xl sm:text-7xl xl:text-8xl">
              Industrial
              <br />
              <span className="text-concrete">Redefined.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-concrete md:text-lg">
              Premium building materials, engineered stones, and structural
              mineral solutions for large-scale enterprise infrastructure.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <a
              href="#products"
              className="bg-stark px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-industrial transition-colors duration-200 hover:bg-maroon hover:text-stark"
            >
              Explore Capabilities
            </a>
            <span className="text-xs uppercase tracking-[0.2em] text-concrete/60">
              Est. Enterprise B2B
            </span>
          </div>
        </div>

        {/* Right panel — 60% (3/5) massive containment video frame */}
        <div className="relative lg:col-span-3">
          <VideoFrame
            src="/assets/hero-industrial.mp4"
            label="HERO · CINEMATIC LOOP"
            className="aspect-[16/11] h-full w-full lg:aspect-auto lg:min-h-[640px]"
          />
        </div>
      </div>
    </section>
  )
}
