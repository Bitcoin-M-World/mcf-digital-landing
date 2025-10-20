'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type NetbackFormProps = {
  id?: string
}

const modelOptions = [
  { value: 'compute-offtake', label: 'Compute Offtake at the pad' },
  { value: 'pad-host-plus', label: 'Pad-Host Plus' },
  { value: 'jv-share', label: 'JV share' },
] as const

export default function NetbackForm({ id }: NetbackFormProps) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [pads, setPads] = useState('')
  const [avgMcf, setAvgMcf] = useState('')
  const [minMcf, setMinMcf] = useState('')
  const [netbackInputs, setNetbackInputs] = useState('')
  const [preferredModel, setPreferredModel] = useState<typeof modelOptions[number]['value']>('compute-offtake')
  const [notes, setNotes] = useState('')

  const formatModel = (value: typeof modelOptions[number]['value']) => {
    const match = modelOptions.find(option => option.value === value)
    return match ? match.label : value || 'n/a'
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (submitting) return

    setSubmitting(true)
    setError(null)

    const summaryLines = [
      'NETBACK INTAKE',
      `Role: ${role || 'n/a'}`,
      `State: ${state || 'n/a'}`,
      `Pads of interest: ${pads || 'n/a'}`,
      `Average MCF/day: ${avgMcf || 'n/a'}`,
      `Minimum MCF/day: ${minMcf || 'n/a'}`,
      `Preferred model: ${formatModel(preferredModel)}`,
      `Netback inputs or files: ${netbackInputs || 'n/a'}`,
      `Notes: ${notes || 'n/a'}`,
    ]

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          state,
          pads,
          avgMcf,
          minMcf,
          netbackInputs,
          preferredModel,
          notes,
          message: summaryLines.join('\n'),
          asset: 'netback-intake',
          role,
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

      router.push('/thanks?asset=netback-intake')
    } catch (err) {
      console.error('Netback form error', err)
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
        <label> Company
          <input
            required
            value={company}
            onChange={e => setCompany(e.target.value)}
            placeholder="Company"
            autoComplete="organization"
            disabled={submitting}
          />
        </label>
      </div>

      <div className="sp-12" />
      <div className="grid cols-2">
        <label> Role
          <input
            required
            value={role}
            onChange={e => setRole(e.target.value)}
            placeholder="Commercial lead, midstream, finance..."
            autoComplete="organization-title"
            disabled={submitting}
          />
        </label>
        <label> State
          <input
            required
            value={state}
            onChange={e => setState(e.target.value)}
            placeholder="State"
            autoComplete="address-level1"
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
            placeholder="you@company.com"
            autoComplete="email"
            disabled={submitting}
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
            disabled={submitting}
          />
        </label>
      </div>

      <div className="sp-12" />
      <label> Pads of interest
        <input
          required
          value={pads}
          onChange={e => setPads(e.target.value)}
          placeholder="Which pads or areas are we looking at?"
          autoComplete="off"
          disabled={submitting}
        />
      </label>

      <div className="sp-12" />
      <div className="grid cols-2">
        <label> Avg MCF/day
          <input
            required
            value={avgMcf}
            onChange={e => setAvgMcf(e.target.value)}
            placeholder="Example: 820"
            inputMode="decimal"
            disabled={submitting}
          />
        </label>
        <label> Minimum MCF/day
          <input
            required
            value={minMcf}
            onChange={e => setMinMcf(e.target.value)}
            placeholder="Example: 540"
            inputMode="decimal"
            disabled={submitting}
          />
        </label>
      </div>

      <div className="sp-12" />
      <label> Netback inputs or files
        <textarea
          required
          rows={4}
          value={netbackInputs}
          onChange={e => setNetbackInputs(e.target.value)}
          placeholder="Paste link to netback spreadsheet or outline basis, G&P, transport, taxes, royalty, shrink, POP split..."
          disabled={submitting}
        />
      </label>

      <div className="sp-12" />
      <label> Preferred model
        <select
          required
          value={preferredModel}
          onChange={e => setPreferredModel(e.target.value as typeof preferredModel)}
          disabled={submitting}
        >
          {modelOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className="sp-12" />
      <label> Notes
        <textarea
          rows={4}
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Anything else we should know?"
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
        {submitting ? 'Sending…' : 'Send netback details'}
      </button>
    </form>
  )
}
