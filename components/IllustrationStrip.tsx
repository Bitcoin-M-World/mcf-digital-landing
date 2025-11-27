'use client'
import Image from 'next/image'

type Item = { src: string; alt: string; caption?: string }

/**
 * IllustrationStrip
 * - Keeps all images uniform using CSS aspect-ratio (default 16:9)
 * - Does not affect surrounding page copy/content
 */
export default function IllustrationStrip({
  items,
  cols = 3,
  ratio = '16 / 9',
  gap = 16,
  minColWidth,
}: {
  items: Item[]
  cols?: 2 | 3 | 4
  ratio?: `${number} / ${number}` | string
  gap?: number
  minColWidth?: number
}) {
  const gridClass =
    cols === 4 ? 'grid cols-4' : cols === 2 ? 'grid cols-2' : 'grid cols-3'
  const gridTemplateColumns = minColWidth
    ? `repeat(auto-fit, minmax(${minColWidth}px, 1fr))`
    : undefined

  return (
    <div className={gridClass} style={{ gap, gridTemplateColumns }}>
      {items.map((it, i) => {
        const centerLastSingle =
          !minColWidth && cols > 1 && items.length % cols === 1 && i === items.length - 1
        const figureStyle = centerLastSingle ? { gridColumn: '1 / -1', justifySelf: 'center', width: 'min(80%, 1100px)' } : undefined

        return (
          <figure
            key={i}
            className="card fig"
            style={figureStyle}
          >
          {/* fixed-ratio frame so every image matches */}
          <div className="fig-frame" style={{ aspectRatio: ratio }}>
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 33vw, 400px"
              style={{ objectFit: 'cover' }}
              priority={i < 2}
            />
          </div>
          {it.caption ? <figcaption>{it.caption}</figcaption> : null}
          </figure>
        )
      })}
    </div>
  )
}
