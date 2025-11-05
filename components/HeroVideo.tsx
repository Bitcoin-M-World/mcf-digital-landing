type HeroVideoProps = {
  poster?: string
  className?: string
  /** Adjust filter intensity per page if needed */
  filter?: string
}

export default function HeroVideo({
  poster = '/assets/illustrations/home-2.png',
  className,
  filter,
}: HeroVideoProps) {
  return (
    <video
      className={`hero-video${className ? ` ${className}` : ''}`}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      style={filter ? { filter } : undefined}
      aria-hidden="true"
    >
      <source src="/media/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
