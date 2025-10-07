'use client'
import React, { createContext, useContext, useState } from 'react'
import LeadModal from './LeadModal'

export type Asset = { slug: string; label: string; fallback?: string }

type Ctx = {
  open: (a: Asset) => void
}

const LeadCtx = createContext<Ctx>({ open: () => {} })

export function LeadProvider({ children }: { children: React.ReactNode }){
  const [asset, setAsset] = useState<Asset | null>(null)
  const open = (a: Asset) => setAsset(a)
  const close = () => setAsset(null)
  return (
    <LeadCtx.Provider value={{ open }}>
      {children}
      <LeadModal asset={asset} onClose={close} />
    </LeadCtx.Provider>
  )
}

export function useLead(){
  return useContext(LeadCtx)
}
