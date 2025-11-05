'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [telegram, setTelegram] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [topicPrefix, setTopicPrefix] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const topic = params.get('topic')
    if (!topic) return

    const topicMap: Record<string, string> = {
      'netbacks-upload': 'LOW NETBACK',
      'pad-check': 'FLARE SITE OPERATIONS',
    }

    const normalized = topicMap[topic] || topic.replace(/[-_]+/g, ' ').toUpperCase()
    setTopicPrefix(normalized)
  }, [])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const trimmedMessage = message.trim()
      const noteLines = [
        topicPrefix ? `${topicPrefix} CONTACT FORM` : 'CONTACT FORM',
        trimmedMessage || 'No additional message provided.',
      ]

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          telegram,
          consent,
          asset: 'contact',
          message: noteLines.join('\n'),
          ts: Date.now(),
          _honeypot: '',
          _replyto: email,
          source_path: window.location.pathname,
          source_referrer: document.referrer || '',
        }),
      })
      if (!res.ok) {
        console.error('Contact failed', await res.text())
      }
    } catch (err) {
      console.error('Network error', err)
    }
    router.push('/thanks?asset=contact')
  }

  return (
    <main className="wrap" style={{ padding: '80px 0' }}>
      <h1>Contact</h1>
      <p className="lead">Tell us a bit about your site or role and we’ll get back fast.</p>
      <div className="sp-16"></div>

      <form onSubmit={submit} className="card" style={{ maxWidth: 780 }}>
        <div className="grid cols-2">
          <label> Name
            <input
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
          </label>
          <label> Email
            <input
              required
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </label>
        </div>

        <div className="sp-12"></div>
        <div className="grid cols-2">
          <label> Company
            <input
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder="Company (optional)"
              autoComplete="organization"
            />
          </label>
          <label> Phone number
            <input
              required
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              autoComplete="tel"
              inputMode="tel"
            />
          </label>
        </div>

        <div className="sp-12"></div>
        <div className="grid cols-2">
          <label style={{ gridColumn: '1 / -1' }}> Telegram username
            <input
              value={telegram}
              onChange={e => setTelegram(e.target.value)}
              placeholder="@username (optional)"
            />
          </label>
        </div>

        <div className="sp-12"></div>
        <label> Message
          <textarea
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="How can we help?"
          />
        </label>

        <div className="sp-12"></div>

        {/* full-width, grid-aligned consent row */}
        <div className="consent-row" style={{ gridColumn: '1 / -1' }}>
          <input
            id="contact-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <label htmlFor="contact-consent">Keep me in the loop on product updates.</label>
        </div>

        <div className="sp-16"></div>
        <button className="btn acc" type="submit">Send message</button>
      </form>
    </main>
  )
}
