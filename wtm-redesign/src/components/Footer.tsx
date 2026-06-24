import { useContent } from '../content/ContentContext'

export default function Footer() {
  const { footer } = useContent()
  return (
    <footer id="contact" className="bg-industrial">
      <div className="mx-auto max-w-frame px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="display text-5xl sm:text-6xl">
              {footer.headingTop}
              <br />
              <span className="text-maroon">{footer.headingAccent}</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="max-w-sm text-sm leading-relaxed text-stark">
              {footer.copy}
            </p>
            <a href={`mailto:${footer.email}`} className="btn-industrial self-start">
              {footer.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t-[2px] border-maroon pt-8 text-xs uppercase tracking-[0.18em] text-stark/60 md:flex-row">
          <span>© {new Date().getFullYear()} {footer.legal}</span>
          <span>{footer.domain}</span>
        </div>
      </div>
    </footer>
  )
}
