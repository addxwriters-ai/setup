// Clean placeholder grid for enterprise B2B partner logos.
const SLOTS = 10

export default function ClientInfrastructure() {
  return (
    <section id="capabilities" className="border-b border-hairline">
      <div className="mx-auto max-w-frame px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5">Client Infrastructure Portal</div>
            <h2 className="display text-3xl sm:text-4xl">
              Trusted Across Enterprise.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-concrete">
            Supplying structural and mineral solutions to industrial operators
            and infrastructure contractors.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: SLOTS }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-[3/2] items-center justify-center bg-industrial"
            >
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-concrete/40">
                Partner {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
