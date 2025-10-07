import { NextResponse } from 'next/server'

export async function POST(req: Request){
  const body = await req.json().catch(()=>null)
  // Demo only: log to server console. Replace with your CRM/email later.
  console.log('[Lead]', body)
  return NextResponse.json({ ok: true })
}
