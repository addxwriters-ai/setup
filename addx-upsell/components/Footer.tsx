export default function Footer() {
  return (
    <footer className="relative border-t border-edge px-6 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <span>© 2026 ADDX Studio</span>
        <a href="https://addxstudio.com" className="transition-colors hover:text-accent">
          addxstudio.com
        </a>
        <span className="flex items-center gap-2">
          <span className="pulse-dot" aria-hidden /> All systems kinetic
        </span>
      </div>
    </footer>
  );
}
