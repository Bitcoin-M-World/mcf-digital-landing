'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="inner wrap">
          <Link href="/" className="brand">
            <span className="dot" aria-hidden="true"></span>
            <span>MCF.DIGITAL</span>
          </Link>

          {/* Desktop links */}
          <div className="links nav-desktop" role="navigation">
            <Link href="/flare-site-operators">Flare Site Operators</Link>
            <Link href="/low-netback">Low Netback Sites</Link>
            <Link href="/for-bitcoin-miners">For Bitcoin Miners</Link>
            <Link href="/hnwi-family-offices">HNWI & Family Offices</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact" className="cta">Contact</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="mobile-panel">
            <div className="mobile-top">
              <span className="brand-mini">
                <span className="dot" />
                MCF.DIGITAL
              </span>
              <button className="mobile-x" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
            </div>
            <div className="mobile-links">
              <Link href="/flare-site-operators" onClick={() => setOpen(false)}>Flare Site Operators</Link>
              <Link href="/low-netback" onClick={() => setOpen(false)}>Low Netback Sites</Link>
              <Link href="/for-bitcoin-miners" onClick={() => setOpen(false)}>For Bitcoin Miners</Link>
              <Link href="/hnwi-family-offices" onClick={() => setOpen(false)}>HNWI & Family Offices</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
              <Link href="/contact" className="btn acc lg" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}