'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Asset } from './LeadContext'

export default function LeadModal({ asset, onClose }: { asset: Asset | null; onClose: () => void }){
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [consent, setConsent] = useState(false)
  const isOpen = !!asset

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(!asset) return
    try{
      await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, company, consent, asset: asset.slug, ts: Date.now() }) })
    }catch{}
    const url = asset.fallback || 'https://bitcoin.org/bitcoin.pdf'
    window.open(url, '_blank', 'noopener')
    onClose()
    router.push(`/thanks?asset=${encodeURIComponent(asset.slug)}`)
  }

  if(!isOpen) return null

  return (
    <div id="leadModal" role="dialog" aria-modal="true" aria-labelledby="assetTitle" onClick={(e)=>{ if(e.target === e.currentTarget) onClose() }}>
      <div className="panel">
        <div className="top">
          <h3 id="assetTitle">{asset?.label || 'Download'}</h3>
          <button className="x" aria-label="Close" onClick={onClose}>×</button>
        </div>
        <p className="note">Tell us where to send your file. We’ll also share occasional product updates. You can opt out anytime.</p>
        <form onSubmit={submit} className="lead-form" noValidate>
          <div className="row">
            <label> Name
              <input required name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
            </label>
            <label> Email
              <input required type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" />
            </label>
          </div>
          <div className="sp-12"></div>
          <label> Company
            <input name="company" value={company} onChange={e=>setCompany(e.target.value)} placeholder="Company (optional)" />
          </label>
          <div className="sp-12"></div>
          <label style={{display:'flex',gap:8,alignItems:'center'}}>
            <input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} required />
            <span>I agree to receive emails from MCF.DIGITAL.</span>
          </label>
          <div className="sp-16"></div>
          <button className="btn acc" type="submit">Get the PDF</button>
        </form>
      </div>
    </div>
  )
}
