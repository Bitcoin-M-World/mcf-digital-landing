'use client'
import { createContext, useContext, useState, type ReactNode } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the modal so it only renders on the client
const LeadModal = dynamic(() => import('./LeadModal'), { ssr: false })

export type Asset = {
  slug: string
  label: string
  fallback?: string
}

type LeadCtx = {
  asset: Asset | null
  open: (a: Asset) => void
  close: () => void
}

const Ctx = createContext<LeadCtx | null>(null)

export function LeadProvider({ children }: { children: ReactNode }) {
  const [asset, setAsset] = useState<Asset | null>(null)
  const open = (a: Asset) => setAsset(a)
  const close = () => setAsset(null)

  return (
    <Ctx.Provider value={{ asset, open, close }}>
      {children}
      {asset ? <LeadModal asset={asset} onClose={close} /> : null}
    </Ctx.Provider>
  )
}

export function useLead() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useLead must be used inside LeadProvider')
  return v
}