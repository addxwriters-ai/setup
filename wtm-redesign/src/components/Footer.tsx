export default function Footer() {
  return (
    <footer id="contact" className="bg-industrial">
      <div className="mx-auto max-w-frame px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="display text-5xl sm:text-6xl">
              Build at
              <br />
              <span className="text-maroon">Scale.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="max-w-sm text-sm leading-relaxed text-stark">
              Enterprise procurement, structural specification, and supply-chain
              enquiries for large-scale infrastructure programs.
            </p>
            <a href="mailto:enquiries@wtm.com.pk" className="btn-industrial self-start">
              enquiries@wtm.com.pk
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t-[2px] border-maroon pt-8 text-xs uppercase tracking-[0.18em] text-stark/60 md:flex-row">
          <span>© {new Date().getFullYear()} WTM Industrial Group</span>
          <span>wtm.com.pk</span>
        </div>
      </div>
    </footer>
  )
}
