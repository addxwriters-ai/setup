const links = ['Products', 'Projects', 'Capabilities', 'Contact']

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-industrial/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-frame items-center justify-between px-6 py-5 md:px-12">
        <a href="/" className="display text-xl leading-none">
          WTM<span className="text-maroon">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-concrete transition-colors duration-200 hover:text-stark"
            >
              {l}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-industrial px-5 py-2.5">
          Enquire
        </a>
      </div>
    </header>
  )
}
