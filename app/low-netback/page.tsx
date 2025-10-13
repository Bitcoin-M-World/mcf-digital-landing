// app/low-netback/page.tsx
import type { Metadata } from 'next'
import DownloadButton from '../../components/DownloadButton'
import IllustrationStrip from '../../components/IllustrationStrip'

export const metadata: Metadata = {
  title: 'From Basis Bite to Bitcoin, Compute Offtake | MCF.DIGITAL',
  description:
    'Carve out take-in-kind volumes excluded from dedications, price a pad-level COA that beats pipeline netbacks, and lift margins without reworking midstream.',
  openGraph: {
    title: 'From Basis Bite to Bitcoin, Compute Offtake | MCF.DIGITAL',
    description:
      'Carve out take-in-kind volumes excluded from dedications, price a pad-level COA that beats pipeline netbacks, and lift margins without reworking midstream.',
    type: 'article',
  },
  alternates: {
    canonical: '/netbacks',
  },
}

export default function LowNetbackPage() {
  return (
    <main>
      <section className="wrap">
        <div className="kicker">Weak netbacks → Parity</div>
        <h1>Low Netback Sites With Existing Offtake</h1>
        <p className="lead">
          When take-home gets squeezed, a small on-lease carve-out can pencil at parity or better. We show the math and
          deliver the kit.
        </p>
        <div className="sp-16" />
        <DownloadButton label="Download: Netback Fixer" slug="low-netback" />
      </section>

      <section className="wrap">
        <h2>What “pencils” looks like</h2>
        <div className="grid cols-3">
          <div className="card"><h3>Transparent economics</h3><p>Capex, opex, uptime, and throughput—no mystery boxes. Know your breakeven and sensitivity.</p></div>
          <div className="card"><h3>Carve-out structure</h3><p>Keep existing offtake whole while routing the marginal to on-lease power and compute.</p></div>
          <div className="card"><h3>Operations that last</h3><p>Service paths, spares, and monitoring that survive dust, heat, and staff turnover.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Illustrated economics &amp; rollout</h2>
        <p className="lead">Commercial clarity and physical reliability for weak netbacks.</p>
        <div className="sp-16" />
        <IllustrationStrip
          cols={3}
          ratio="16 / 9"
          items={[
            { src: '/assets/illustrations/low-netbacks.png', alt: 'Economics overview', caption: 'Economics overview' },
            { src: '/assets/illustrations/low-netbacks-2.png', alt: 'Deployment sequence', caption: 'Deployment sequence' },
            { src: '/assets/illustrations/low-netbacks-3.png', alt: 'On-lease protections', caption: 'On-lease protections' },
          ]}
        />
      </section>
    </main>
  )
}
