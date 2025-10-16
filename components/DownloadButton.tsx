'use client'
import { useLead } from './LeadContext'

export default function DownloadButton({
  label,
  slug,
  text,
}: {
  label: string
  slug: string
  text?: string
}) {
  const { open } = useLead()
  return (
    <button
      className="btn acc"
      onClick={() => open({ slug, label, fallback: 'https://bitcoin.org/bitcoin.pdf' })}
      aria-label={`Download ${label}`}
    >
      {text || 'Download PDF'}
    </button>
  )
}
