'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Asset } from './LeadContext'

export default function LeadModal({
  asset,
  onClose,
}: {
  asset: Asset
  onClose: () => void
}) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [telegram, setTelegram] = useState('')
  const [consent, setConsent] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()

    // open PDF immediately (prevents popup blocking)
    const pdfUrl = asset.fallback || 'https://bitcoin.org/bitcoin.pdf'
    const newTab = window.open('about:blank', '_blank', 'noopener')
    if (newTab) newTab.location.href = pdfUrl

    // send to /api/lead (Formspree behind the scenes)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, company, phone, telegram, consent,
          asset: asset.slug,
          ts: Date.now(),
          _honeypot: '',
          _replyto: email,
          source_path: window.location.pathname,
          source_referrer: document.referrer || '',
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        console.error('Lead send failed:', data)
      }
    } catch (err) {
      console.error('Network error sending lead:', err)
    }

    onClose()
    router.push(`/thanks?asset=${encodeURIComponent(asset.slug)}`)
  }

  return (
    <div
      id="leadModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="assetTitle"
      onClick={(e)=>{ if (e.target === e.currentTarget) onClose() }}
      style={{ display:'flex' }}
    >
      <div className="panel">
        <div className="top">
          <h3 id="assetTitle">{asset?.label || 'Download'}</h3>
          <button className="x" aria-label="Close" onClick={onClose}>×</button>
        </div>

        <p className="note">
          Tell us where to send your file. We’ll also share occasional updates. You can opt out anytime.
        </p>

        <form onSubmit={submit} className="lead-form" noValidate>
          <div className="row">
            <label> Name
              <input required name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" autoComplete="name" />
            </label>
            <label> Email
              <input required type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@company.com" autoComplete="email" />
            </label>
          </div>

          <div className="sp-12" />

          <div className="row">
            <label> Company
              <input name="company" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Company (optional)" autoComplete="organization" />
            </label>
            <label> Phone number
              <input
                required
                type="tel"
                name="phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                autoComplete="tel"
                inputMode="tel"
              />
            </label>
          </div>

          <div className="sp-12" />

          <div className="row">
            <label style={{ gridColumn: '1 / -1' }}> Telegram username
              <input name="telegram" value={telegram} onChange={(e)=>setTelegram(e.target.value)} placeholder="@username (optional)" />
            </label>
          </div>

          <div className="sp-12" />

          {/* full-width, grid-aligned consent row */}
          <div className="consent-row" style={{ gridColumn: '1 / -1' }}>
            <input
              id="consent"
              type="checkbox"
              checked={consent}
              onChange={(e)=>setConsent(e.target.checked)}
              required
            />
            <label htmlFor="consent">I agree to receive emails from MCF.DIGITAL.</label>
          </div>

          <div className="sp-16" />
          <button className="btn acc" type="submit">Get the PDF</button>
        </form>
      </div>
    </div>
  )
}
