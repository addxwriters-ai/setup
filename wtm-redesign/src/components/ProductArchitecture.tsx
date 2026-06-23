import VideoFrame from './VideoFrame'
import { products } from '../data/products'

// Heavy structural cards. Each is fully clickable (anchor-wrapped) with an
// absolute-positioned video placeholder behind a minimalist text overlay.
export default function ProductArchitecture() {
  return (
    <section id="products" className="border-b border-hairline">
      <div className="mx-auto max-w-frame px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5">Product Architecture</div>
            <h2 className="display text-4xl sm:text-5xl xl:text-6xl">
              Six Structural
              <br />
              Categories.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-concrete">
            A vertically integrated portfolio engineered for enterprise
            infrastructure — from technical surfaces to strategic metallurgy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <a
              key={p.index}
              href={p.href}
              className="group relative block aspect-[4/5] overflow-hidden bg-industrial"
            >
              {/* absolute video layer */}
              <VideoFrame
                src={p.video}
                label={`PRODUCT ${p.index}`}
                className="absolute inset-0 h-full w-full"
              />

              {/* minimalist text overlay */}
              <div className="relative z-10 flex h-full flex-col justify-between bg-gradient-to-t from-midnight/85 via-industrial/20 to-transparent p-6">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-concrete">
                    {p.index}
                  </span>
                  <span className="text-concrete transition-colors duration-200 group-hover:text-maroon">
                    {/* arrow indicator */}
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>

                <div>
                  <h3 className="display text-2xl leading-none sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-snug text-concrete">
                    {p.context}
                  </p>
                </div>
              </div>

              {/* maroon accent border on hover */}
              <span className="pointer-events-none absolute inset-0 z-20 border border-transparent transition-colors duration-200 group-hover:border-maroon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
