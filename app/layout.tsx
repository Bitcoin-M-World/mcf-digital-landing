// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { LeadProvider } from '@/components/LeadContext'
import ProgressBar from '@/components/ProgressBar'
import SiteNav from '@/components/SiteNav'
import ContactFab from '@/components/ContactFab'

export const metadata: Metadata = {
  title: 'MCF.DIGITAL — Creative Energy for Industrial Brands',
  description:
    'MCF.DIGITAL builds premium creative and digital experiences for energy, industrial, and frontier-tech brands.',
  openGraph: {
    title: 'MCF.DIGITAL — Oil, Gas & Bitcoin Infrastructure',
    description:
      'On-lease power and compute for flare sites, weak netbacks, bitcoin miners, and HNWI/Family Offices.',
    type: 'website',
    url: 'https://mcf.digital/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear()
  return (
    <html lang="en">
      <body>
        <ProgressBar />

        {/* Top Navigation (desktop + mobile) */}
        <SiteNav />

        {/* Page content + global lead modal provider */}
        <LeadProvider>{children}</LeadProvider>

        {/* Floating contact button on all screens */}
        <ContactFab />

        {/* Global footer */}
        <footer className="wrap">
          <div className="foot">
            <small>© {year} MCF.DIGITAL</small>
            <div className="links">
              <a href="/contact">Contact</a>
              <a href="#top">Back to top</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}