export default function Footer() {
  return (
    <footer id="contact" className="bg-industrial">
      <div className="mx-auto max-w-frame px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="display text-5xl sm:text-6xl">
              Build at
              <br />
              <span className="text-maroon">Scale.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="max-w-sm text-sm leading-relaxed text-concrete">
              Enterprise procurement, structural specification, and supply-chain
              enquiries for large-scale infrastructure programs.
            </p>
            <a
              href="mailto:enquiries@wtm.com.pk"
              className="self-start bg-stark px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-industrial transition-colors duration-200 hover:bg-maroon hover:text-stark"
            >
              enquiries@wtm.com.pk
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-hairline pt-8 text-xs uppercase tracking-[0.18em] text-concrete/60 md:flex-row">
          <span>© {new Date().getFullYear()} WTM Industrial Group</span>
          <span>wtm.com.pk</span>
        </div>
      </div>
    </footer>
  )
}
