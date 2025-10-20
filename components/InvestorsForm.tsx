'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type InvestorsFormProps = {
  id?: string
}

const structureOptions = [
  { value: 'hosted', label: 'Hosted exposure' },
  { value: 'jv', label: 'Project JV SPV' },
  { value: 'self', label: 'Managed self-mining' },
] as const

const custodyOptions = [
  { value: 'self', label: 'Self-custody (my wallets)' },
  { value: 'shared', label: 'Shared custody / multisig' },
  { value: 'managed', label: 'Managed custody support' },
] as const

export default function InvestorsForm({ id }: InvestorsFormProps) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState('')
  const [entity, setEntity] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [capitalRange, setCapitalRange] = useState('')
  const [startDate, setStartDate] = useState('')
  const [structure, setStructure] = useState<typeof structureOptions[number]['value']>('hosted')
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
      'INVESTOR INTAKE',
      `Family office or individual: ${entity || 'n/a'}`,
      `Capital range: ${capitalRange || 'n/a'}`,
      `Target start date: ${startDate || 'n/a'}`,
      `Preferred structure: ${formatOption(structureOptions, structure)}`,
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
          phone,
          entity,
          capitalRange,
          startDate,
          structure,
          custody,
          notes,
          message: summaryLines.join('\n'),
          asset: 'investor-intake',
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

      router.push('/thanks?asset=investor-intake')
    } catch (err) {
      console.error('Investor form error', err)
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
        <label> Family office or individual
          <input
            required
            value={entity}
            onChange={e => setEntity(e.target.value)}
            placeholder="Family office, small fund, individual"
            autoComplete="organization"
            disabled={submitting}
          />
        </label>
      </div>

      <div className="sp-12" />
      <div className="grid cols-2">
        <label> Email
          <input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@office.com"
            autoComplete="email"
            disabled={submitting}
          />
        </label>
        <label> Phone
          <input
            required
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="(555) 123-4567"
            autoComplete="tel"
            inputMode="tel"
            disabled={submitting}
          />
        </label>
      </div>

      <div className="sp-12" />
      <div className="grid cols-2">
        <label> Capital range
          <input
            required
            value={capitalRange}
            onChange={e => setCapitalRange(e.target.value)}
            placeholder="Example: $2M – $5M"
            disabled={submitting}
          />
        </label>
        <label> Target start date
          <input
            required
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            placeholder="Example: Q2 2025"
            disabled={submitting}
          />
        </label>
      </div>

      <div className="sp-12" />
      <div className="grid cols-2">
        <label> Preferred structure
          <select
            required
            value={structure}
            onChange={e => setStructure(e.target.value as typeof structure)}
            disabled={submitting}
          >
            {structureOptions.map(option => (
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
          placeholder="Anything else? Preferred jurisdictions, tax considerations, partners involved..."
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
        {submitting ? 'Sending…' : 'Send investment profile'}
      </button>
    </form>
  )
}
