import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { LeadProvider } from '@/components/LeadContext'
import ProgressBar from '@/components/ProgressBar'

export const metadata: Metadata = {
  title: 'MCF.DIGITAL — Creative Energy for Industrial Brands',
  description: 'MCF.DIGITAL builds premium creative and digital experiences for energy, industrial, and frontier-tech brands.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear()
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        <nav className="nav" aria-label="Primary">
          <div className="inner wrap">
            <Link href="/" className="brand"><span className="dot" aria-hidden="true"></span><span>MCF.DIGITAL</span></Link>
            <div className="links" role="navigation">
              <Link href="/flare-site-operators">Flare Site Operators</Link>
              <Link href="/low-netback">Low Netback Sites</Link>
              <Link href="/for-bitcoin-miners">For Bitcoin Miners</Link>
              <Link href="/hnwi-family-offices">HNWI & Family Offices</Link>
              <Link href="/about" className="cta">About Us</Link>
            </div>
          </div>
        </nav>
        <LeadProvider>
          {children}
        </LeadProvider>
        <footer className="wrap">
          <div className="foot">
            <small>© {year} MCF.DIGITAL</small>
            <div className="links"><a href="#top">Back to top</a></div>
          </div>
        </footer>
      </body>
    </html>
  )
}
