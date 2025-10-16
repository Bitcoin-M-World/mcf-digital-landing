'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type FlarePadFormProps = {
  id?: string
}

const yesNoOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unknown', label: "Don't know yet" },
] as const

const modelOptions = [
  { value: 'gas-sale', label: 'Gas sale at the pad' },
  { value: 'host-fee', label: 'Host fee on your pad' },
  { value: 'flarehash-jv', label: 'FlareHash JV' },
] as const

export default function FlarePadForm({ id }: FlarePadFormProps) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [stateProvince, setStateProvince] = useState('')
  const [telegram, setTelegram] = useState('')
  const [avgMcf, setAvgMcf] = useState('')
  const [minMcf, setMinMcf] = useState('')
  const [btuKnown, setBtuKnown] = useState<typeof yesNoOptions[number]['value']>('yes')
  const [h2sPresent, setH2sPresent] = useState<typeof yesNoOptions[number]['value']>('no')
  const [startTiming, setStartTiming] = useState('')
  const [preferredModel, setPreferredModel] = useState<typeof modelOptions[number]['value']>('gas-sale')
  const [notes, setNotes] = useState('')

  const formatYesNo = (value: typeof yesNoOptions[number]['value']) => {
    const match = yesNoOptions.find(option => option.value === value)
    return match ? match.label : value || 'n/a'
  }

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
      'FLARE PAD INTAKE',
      `Role: ${role || 'n/a'}`,
      `State or Province: ${stateProvince || 'n/a'}`,
      `Average MCF/day: ${avgMcf || 'n/a'}`,
      `Minimum MCF/day: ${minMcf || 'n/a'}`,
      `BTU known: ${formatYesNo(btuKnown)}`,
      `H₂S present: ${formatYesNo(h2sPresent)}`,
      `Start timing: ${startTiming || 'n/a'}`,
      `Preferred model: ${formatModel(preferredModel)}`,
      `Telegram: ${telegram || 'n/a'}`,
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
          telegram,
          message: summaryLines.join('\n'),
          asset: 'flare-pad-intake',
          role,
          stateProvince,
          avgMcf,
          minMcf,
          btuKnown,
          h2sPresent,
          startTiming,
          preferredModel,
          notes,
          ts: Date.now(),
          _honeypot: '',
          _replyto: email,
          source_path: window.location.pathname,
          source_referrer: document.referrer || '',
        }),
      })

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`)
      }

      router.push('/thanks?asset=flare-pad-intake')
    } catch (err) {
      console.error('Flare pad form error', err)
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
            placeholder="Owner, landman, superintendent..."
            autoComplete="organization-title"
            disabled={submitting}
          />
        </label>
        <label> State or Province
          <input
            required
            value={stateProvince}
            onChange={e => setStateProvince(e.target.value)}
            placeholder="State or province"
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
      <label> Telegram handle
        <input
          value={telegram}
          onChange={e => setTelegram(e.target.value)}
          placeholder="@username (optional)"
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
            placeholder="Example: 450"
            inputMode="decimal"
            disabled={submitting}
          />
        </label>
        <label> Minimum MCF/day
          <input
            required
            value={minMcf}
            onChange={e => setMinMcf(e.target.value)}
            placeholder="Example: 275"
            inputMode="decimal"
            disabled={submitting}
          />
        </label>
      </div>

      <div className="sp-12" />
      <div className="grid cols-2">
        <label> BTU known?
          <select
            required
            value={btuKnown}
            onChange={e => setBtuKnown(e.target.value as typeof btuKnown)}
            disabled={submitting}
          >
            {yesNoOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label> H₂S present?
          <select
            required
            value={h2sPresent}
            onChange={e => setH2sPresent(e.target.value as typeof h2sPresent)}
            disabled={submitting}
          >
            {yesNoOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="sp-12" />
      <div className="grid cols-2">
        <label> Start timing
          <input
            required
            value={startTiming}
            onChange={e => setStartTiming(e.target.value)}
            placeholder="Example: 30-45 days"
            disabled={submitting}
          />
        </label>
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
      </div>

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
        {submitting ? 'Sending…' : 'Send pad details'}
      </button>
    </form>
  )
}
