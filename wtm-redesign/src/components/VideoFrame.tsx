interface VideoFrameProps {
  src: string
  label?: string
  className?: string
}

// Isolated, performant video wrapper. Round 1 = placeholder frame only:
// metadata-only preload, muted/loop/inline so upcoming Higgsfield loops
// drop in without re-architecting the layout.
export default function VideoFrame({ src, label = 'VIDEO', className = '' }: VideoFrameProps) {
  return (
    <div className={`relative overflow-hidden bg-midnight ${className}`}>
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Structural placeholder marker (removed once real loops land) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[0.62rem] tracking-[0.4em] text-concrete/40">{label}</span>
      </div>
      {/* corner registration ticks for the architectural grid feel */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-concrete/25" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-concrete/25" />
    </div>
  )
}
