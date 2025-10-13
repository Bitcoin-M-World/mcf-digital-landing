import { NextResponse } from 'next/server'

const ENDPOINT = process.env.FORMSPREE_ENDPOINT || ''

type LeadPayload = {
  name?: string
  email?: string
  company?: string
  phone?: string
  telegram?: string
  message?: string
  consent?: boolean
  asset?: string
  ts?: number
  _honeypot?: string
  source_path?: string
  source_referrer?: string
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as LeadPayload
  const { email } = body

  if (!email) return NextResponse.json({ ok: false, error: 'missing_email' }, { status: 400 })
  if (!ENDPOINT) return NextResponse.json({ ok: false, error: 'missing_endpoint' }, { status: 500 })

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      console.error('[Formspree error]', data)
      return NextResponse.json({ ok: false, error: 'formspree_error', details: data }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Formspree fetch_failed]', err)
    return NextResponse.json({ ok: false, error: 'fetch_failed' }, { status: 502 })
  }
}
