'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactPage(){
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [telegram, setTelegram] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  async function submit(e: React.FormEvent){
    e.preventDefault()
    try{
      const res = await fetch('/api/lead', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          name, email, company, telegram, consent,
          asset: 'contact',
          message,
          ts: Date.now(),
          _honeypot:'',
          _replyto: email,
          source_path: window.location.pathname,
          source_referrer: document.referrer || '',
        })
      })
      if(!res.ok){ console.error('Contact failed', await res.text()) }
    }catch(err){
      console.error('Network error', err)
    }
    router.push('/thanks?asset=contact')
  }

  return (
    <main className="wrap" style={{padding:'80px 0'}}>
      <h1>Contact</h1>
      <p className="lead">Tell us a bit about your site or role and we’ll get back fast.</p>
      <div className="sp-16"></div>

      <form onSubmit={submit} className="card" style={{maxWidth:780}}>
        <div className="grid cols-2">
          <label> Name
            <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
          </label>
          <label> Email
            <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" />
          </label>
        </div>

        <div className="sp-12"></div>
        <div className="grid cols-2">
          <label> Company
            <input value={company} onChange={e=>setCompany(e.target.value)} placeholder="Company (optional)" />
          </label>
          <label> Telegram username
            <input value={telegram} onChange={e=>setTelegram(e.target.value)} placeholder="@username (optional)" />
          </label>
        </div>

        <div className="sp-12"></div>
        <label> Message
          <textarea rows={5} value={message} onChange={e=>setMessage(e.target.value)} placeholder="How can we help?" />
        </label>

        <div className="sp-12"></div>

        {/* full-width, grid-aligned consent row */}
        <div className="consent-row" style={{ gridColumn: '1 / -1' }}>
          <input
            id="contact-consent"
            type="checkbox"
            checked={consent}
            onChange={(e)=>setConsent(e.target.checked)}
          />
          <label htmlFor="contact-consent">Keep me in the loop on product updates.</label>
        </div>

        <div className="sp-16"></div>
        <button className="btn acc" type="submit">Send message</button>
      </form>
    </main>
  )
}