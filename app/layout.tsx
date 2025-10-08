// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

// ⬇️ switch alias imports to relative paths
import { LeadProvider } from '../components/LeadContext'
import ProgressBar from '../components/ProgressBar'
import SiteNav from '../components/SiteNav'
import ContactFab from '../components/ContactFab'

export const metadata: Metadata = {
  title: 'MCF.DIGITAL — Creative Energy for Industrial Brands',
  description:
    'MCF.DIGITAL builds web, content, and on-lease compute systems for energy and frontier-tech teams.',
  openGraph: {
    title: 'MCF.DIGITAL — Oil, Gas & Bitcoin Infrastructure',
    description:
      'Pads that pencil. Web and content that actually sell. Weeks-to-first-hash deployments built for the field.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="progress" aria-hidden />
        <LeadProvider>
          {/* FIX: Removed the redundant <nav> and <div> wrappers. 
                   Only the single SiteNav component is now rendered. */}
          <SiteNav />

          <ProgressBar />

          {children}

          <footer className="wrap">
            <div className="foot">
              <div>© {new Date().getFullYear()} MCF.DIGITAL</div>
              <div>Built for the field.</div>
            </div>
          </footer>

          <ContactFab />
        </LeadProvider>
      </body>
    </html>
  )
}