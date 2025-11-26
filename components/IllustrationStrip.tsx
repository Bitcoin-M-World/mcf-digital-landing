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
}: {
  items: Item[]
  cols?: 2 | 3 | 4
  ratio?: `${number} / ${number}` | string
  gap?: number
}) {
  const gridClass =
    cols === 4 ? 'grid cols-4' : cols === 2 ? 'grid cols-2' : 'grid cols-3'

  return (
    <div className={gridClass} style={{ gap }}>
      {items.map((it, i) => (
        <figure key={i} className="card fig">
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
      ))}
    </div>
  )
}
