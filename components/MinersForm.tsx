'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type MinersFormProps = {
  id?: string
}

const engagementOptions = [
  { value: 'hosted', label: 'Hosted mining' },
  { value: 'jv', label: 'JV mining' },
  { value: 'managed', label: 'Managed self-mining' },
] as const

const custodyOptions = [
  { value: 'self', label: 'Self-custody (my wallet)' },
  { value: 'shared', label: 'Shared custody / multisig' },
  { value: 'managed', label: 'Managed custody (MCF.DIGITAL assists)' },
] as const

export default function MinersForm({ id }: MinersFormProps) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [handle, setHandle] = useState('')
  const [models, setModels] = useState('')
  const [startDate, setStartDate] = useState('')
  const [engagement, setEngagement] = useState<typeof engagementOptions[number]['value']>('hosted')
  const [custody, setCustody] = useState<typeof custodyOptions[number]['value']>('self')
  const [notes, setNotes] = useState('')

  const formatOption = <T extends { value: string; label: string }>(options: readonly T[], value: string) => {
    const match = options.find(option => option.value === value)
    return match ? match.label : value || 'n/a'
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (submitting) return

    setSubmitting(true)
    setError(null)

    const summaryLines = [
      'MINERS INTAKE',
      `Telegram/X handle: ${handle || 'n/a'}`,
      `Miner models and count: ${models || 'n/a'}`,
      `Desired start date: ${startDate || 'n/a'}`,
      `Engagement: ${formatOption(engagementOptions, engagement)}`,
      `Custody preference: ${formatOption(custodyOptions, custody)}`,
      `Notes: ${notes || 'n/a'}`,
    ]

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          telegram: handle,
          models,
          startDate,
          engagement,
          custody,
          notes,
          message: summaryLines.join('\n'),
          asset: 'miners-intake',
          ts: Date.now(),
          _honeypot: '',
          _replyto: email,
          source_path: typeof window !== 'undefined' ? window.location.pathname : '',
          source_referrer: typeof document !== 'undefined' ? document.referrer : '',
        }),
      })

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`)
      }

      router.push('/thanks?asset=miners-intake')
    } catch (err) {
      console.error('Miners form error', err)
      setError('Something went wrong sending your details. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <form id={id} onSubmit={submit} className="card" style={{ maxWidth: 900 }}>
      <div className="grid cols-2">
        <label> Name
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            disabled={submitting}
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
            disabled={submitting}
          />
        </label>
      </div>

      <div className="sp-12" />
      <label> Telegram or X handle
        <input
          value={handle}
          onChange={e => setHandle(e.target.value)}
          placeholder="@username"
          autoComplete="off"
          disabled={submitting}
        />
      </label>

      <div className="sp-12" />
      <label> Miner models and count
        <textarea
          required
          rows={3}
          value={models}
          onChange={e => setModels(e.target.value)}
          placeholder="Example: 150x S21, 60x M60. Include power specs if you have them."
          disabled={submitting}
        />
      </label>

      <div className="sp-12" />
      <label> Desired start date
        <input
          required
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          placeholder="Example: Q1 2025"
          disabled={submitting}
        />
      </label>

      <div className="sp-12" />
      <div className="grid cols-2">
        <label> Hosted or JV
          <select
            required
            value={engagement}
            onChange={e => setEngagement(e.target.value as typeof engagement)}
            disabled={submitting}
          >
            {engagementOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label> Custody preference
          <select
            required
            value={custody}
            onChange={e => setCustody(e.target.value as typeof custody)}
            disabled={submitting}
          >
            {custodyOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="sp-12" />
      <label> Notes
        <textarea
          rows={4}
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Anything else we should know? Financing status, location preference, etc."
          disabled={submitting}
        />
      </label>

      {error ? (
        <>
          <div className="sp-8" />
          <div role="status" aria-live="polite" style={{ color: 'var(--red-500)' }}>
            {error}
          </div>
        </>
      ) : null}

      <div className="sp-16" />
      <button className="btn acc" type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send mining details'}
      </button>
    </form>
  )
}
