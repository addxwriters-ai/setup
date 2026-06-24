interface VideoFrameProps {
  src: string
  label?: string
  className?: string
}

// Shared media frame. Renders an <img> or a <video> based on the file
// extension in `src`, so content.json can mix JPEGs and MP4s freely.
// Both tags share identical fill styling so the container looks the same
// regardless of media type.
const FILL = 'absolute inset-0 h-full w-full object-cover opacity-60'

function isImage(src: string) {
  return /\.(jpg|jpeg|png|webp|gif|avif)(\?.*)?$/i.test(src)
}

export default function VideoFrame({ src, label = 'VIDEO', className = '' }: VideoFrameProps) {
  return (
    <div className={`relative overflow-hidden bg-midnight ${className}`}>
      {isImage(src) ? (
        <img src={src} alt="" className={FILL} loading="lazy" aria-hidden="true" />
      ) : (
        <video
          className={FILL}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={src} type={src.toLowerCase().endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
        </video>
      )}
      {/* Structural placeholder marker (removed once real media lands) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[0.62rem] tracking-[0.4em] text-concrete/40">{label}</span>
      </div>
      {/* corner registration ticks for the architectural grid feel */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-concrete/25" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-concrete/25" />
    </div>
  )
}
