import DownloadButton from '@/components/DownloadButton'
import IllustrationStrip from '@/components/IllustrationStrip'

export default function ForMinersPage() {
  return (
    <main>
      <section className="wrap">
        <div className="kicker">Compute that ships</div>
        <h1>For Bitcoin Miners</h1>
        <p className="lead">
          On-lease power and mobile data centers built for real pads—not show floors. Air paths, thermals, and service
          access that actually work.
        </p>
        <div className="sp-16" />
        <DownloadButton label="Download: BTU → BTC Quick-Start" slug="for-bitcoin-miners" />
      </section>

      <section className="wrap">
        <h2>Built for the field</h2>
        <div className="grid cols-3">
          <div className="card"><h3>Thermal honesty</h3><p>Intake, hot aisle, and exhaust designed to hold up under heat and dust with realistic derates.</p></div>
          <div className="card"><h3>Serviceability</h3><p>Racks and cabling arranged so humans can actually work—fast swap, safe clearances.</p></div>
          <div className="card"><h3>Uptime over sizzle</h3><p>Protections and spares where they matter. Less “cool renders,” more stable hash.</p></div>
        </div>
      </section>

      {/* Miners illustrations */}
      <section className="wrap">
        <h2>Containers that actually work</h2>
        <p className="lead">Air paths, racking, and serviceability—shown in plain English diagrams.</p>
        <div className="sp-16" />
        <IllustrationStrip
          cols={2}
          ratio="16 / 9"
          items={[
            { src: '/assets/illustrations/bitcoin-miners.png', alt: 'Miner container design', caption: 'Container design' },
            { src: '/assets/illustrations/home-2.png', alt: 'Thermal & air path', caption: 'Thermal & air path' },
          ]}
        />
      </section>
    </main>
  )
}