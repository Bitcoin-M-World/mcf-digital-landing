// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

// ⬇️ switch alias imports to relative paths
import { LeadProvider } from '../components/LeadContext'
import ProgressBar from '../components/ProgressBar'
import SiteNav from '../components/SiteNav'
import ContactFab from '../components/ContactFab'

export const metadata: Metadata = {
  title: 'Turn Stranded Gas Into Bitcoin Production | MCF.DIGITAL',
  description:
    'We match producers, miners, and capital to build on-lease power and compute that cuts flaring, lifts pad netbacks, and lets miners produce BTC at cost.',
  openGraph: {
    title: 'Turn Stranded Gas Into Bitcoin Production | MCF.DIGITAL',
    description:
      'We match producers, miners, and capital to build on-lease power and compute that cuts flaring, lifts pad netbacks, and lets miners produce BTC at cost.',
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
