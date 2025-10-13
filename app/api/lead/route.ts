import { NextResponse } from 'next/server'
const MONDAY_API_ENDPOINT = 'https://api.monday.com/v2'

const MONDAY_CONFIG = {
  token: process.env.MONDAY_API_TOKEN || process.env.MONDAY_TOKEN || '',
  boardId: process.env.MONDAY_BOARD_ID || '',
  groupId: process.env.MONDAY_GROUP_ID || '',
  columns: {
    name: process.env.MONDAY_COL_NAME,
    email: process.env.MONDAY_COL_EMAIL,
    phone: process.env.MONDAY_COL_PHONE,
    company: process.env.MONDAY_COL_COMPANY,
    telegram: process.env.MONDAY_COL_TELEGRAM,
    message: process.env.MONDAY_COL_MESSAGE,
    consent: process.env.MONDAY_COL_CONSENT,
    asset: process.env.MONDAY_COL_ASSET,
    sourcePath: process.env.MONDAY_COL_SOURCE_PATH || process.env.MONDAY_COL_SOURCE,
    referrer: process.env.MONDAY_COL_REFERRER,
    timestamp: process.env.MONDAY_COL_TIMESTAMP || process.env.MONDAY_COL_DATE,
  },
} as const

const MONDAY_TIMESTAMP_IS_DATE = Boolean(process.env.MONDAY_COL_DATE)
const MONDAY_ENABLED =
  Boolean(MONDAY_CONFIG.token && MONDAY_CONFIG.boardId && MONDAY_CONFIG.groupId)

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

type MondayGraphQLResponse = {
  data?: {
    create_item?: { id: string }
  }
  account_id?: number
  errors?: Array<{ message: string }>
}

function buildMondayColumnValues(payload: LeadPayload) {
  const columnValues: Record<string, unknown> = {}
  const { columns } = MONDAY_CONFIG

  const set = (columnId: string | undefined, value: unknown) => {
    if (!columnId) return
    if (value === undefined || value === null) return
    if (typeof value === 'string' && value.trim() === '') return
    columnValues[columnId] = value
  }

  set(columns.name, payload.name?.trim())
  set(columns.email, payload.email?.trim())
  set(columns.phone, payload.phone?.trim())
  set(columns.company, payload.company?.trim())
  set(columns.telegram, payload.telegram?.trim())
  set(columns.message, payload.message?.trim())
  set(columns.asset, payload.asset?.trim())
  set(columns.sourcePath, payload.source_path?.trim() || payload.asset?.trim())
  set(columns.referrer, payload.source_referrer?.trim())

  if (columns.consent) {
    columnValues[columns.consent] = payload.consent ? 'true' : 'false'
  }

  if (columns.timestamp) {
    const ts = payload.ts ?? Date.now()
    const timestampIso = new Date(ts).toISOString()

    if (MONDAY_TIMESTAMP_IS_DATE) {
      const datePart = timestampIso.slice(0, 10)
      const timePart = timestampIso.slice(11, 19)
      columnValues[columns.timestamp] = { date: datePart, time: timePart }
    } else {
      columnValues[columns.timestamp] = timestampIso
    }
  }

  return columnValues
}

async function sendToMonday(payload: LeadPayload) {
  if (!MONDAY_ENABLED) return false

  const columnValues = buildMondayColumnValues(payload)
  const createItemMutation = `
    mutation CreateLead($boardId: ID!, $groupId: String!, $itemName: String!, $columnVals: JSON!) {
      create_item(board_id: $boardId, group_id: $groupId, item_name: $itemName, column_values: $columnVals) {
        id
      }
    }
  `

  const itemName =
    payload.name?.trim() ||
    payload.email?.trim() ||
    payload.company?.trim() ||
    `Lead ${new Date().toISOString()}`

  const response = await fetch(MONDAY_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: MONDAY_CONFIG.token,
    },
    body: JSON.stringify({
      query: createItemMutation,
      variables: {
        boardId: MONDAY_CONFIG.boardId,
        groupId: MONDAY_CONFIG.groupId,
        itemName,
        columnVals: JSON.stringify(columnValues),
      },
    }),
  })

  const result = (await response.json().catch(() => ({}))) as MondayGraphQLResponse

  if (!response.ok || result.errors) {
    console.error('[Monday error]', result.errors || result)
    throw new Error('monday_error')
  }

  return true
}

export async function POST(req: Request) {
  if (!MONDAY_ENABLED) {
    console.error('[Lead] Monday configuration missing')
    return NextResponse.json({ ok: false, error: 'monday_not_configured' }, { status: 500 })
  }

  const body = (await req.json().catch(() => ({}))) as LeadPayload
  const { email, _honeypot } = body

  if (_honeypot) {
    // silent success for spam bots
    return NextResponse.json({ ok: true })
  }

  if (!email) return NextResponse.json({ ok: false, error: 'missing_email' }, { status: 400 })

  try {
    await sendToMonday(body)
    return NextResponse.json({ ok: true, mondaySync: true })
  } catch (err) {
    console.error('[Monday sync failed]', err)
    return NextResponse.json({ ok: false, error: 'monday_error' }, { status: 502 })
  }
}
