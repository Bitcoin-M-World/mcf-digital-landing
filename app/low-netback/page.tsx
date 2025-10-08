import DownloadButton from '@/components/DownloadButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Low Netback Sites — From basis bite to bitcoin | MCF.DIGITAL',
  description:
    'Playbook to route a slice of flow to compute without breaking offtake. Parity math, carve-outs, and risk controls that pencil for every counterparty.',
  openGraph: {
    title: 'Low Netback Sites — Playbook | MCF.DIGITAL',
    description:
      'Improve realized value on weak netbacks by pairing on-lease power + compute with existing offtake and MVC realities.',
    type: 'article',
  },
}

export default function NetbackPage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:"url('/assets/netback-hero.jpg') center/cover no-repeat"}} />
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">Playbook</div>
          <h1>From basis bite to bitcoin.</h1>
          <p className="sub">
            When realized value is getting chewed up by basis and fees, route a defined slice to compute—without
            disturbing offtake. We model parity, carve-outs, and service to improve pad economics.
          </p>
          <div className="cta-row">
            <DownloadButton label="Low Netback Playbook" slug="low-netback" />
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>Highlights</h2>
          <div className="grid cols-3">
            <div className="card">
              <h3>Parity math</h3>
              <p>Side-by-side scenarios vs. status quo. Sensitivities for flow, uptime, BTC, and power input cost.</p>
            </div>
            <div className="card">
              <h3>Offtake-friendly</h3>
              <p>Carve-outs that respect MVC and counterparty alignment so contracts keep working.</p>
            </div>
            <div className="card">
              <h3>Risk controls</h3>
              <p>Operational, regulatory, and counterparty frameworks that protect the base business.</p>
            </div>
          </div>
        </section>

        <section className="wrap">
          <h2>What we need to scope</h2>
          <div className="grid cols-3">
            <div className="card"><h3>COA inputs</h3><p>Gather flow/pressure/composition bands plus offtake related terms to size the carve-out.</p></div>
            <div className="card"><h3>Site constraints</h3><p>Lease boundaries, setbacks, access, interconnect, and permitting status.</p></div>
            <div className="card"><h3>Commercial goals</h3><p>Target carve-out %, custody preference, depreciation, and reporting cadence.</p></div>
          </div>
        </section>

        <section className="wrap">
          <h2>Get the playbook</h2>
          <p className="lead">Economics, carve-out structures, and risk controls—ready to share with stakeholders.</p>
          <div className="sp-12" />
          <DownloadButton label="Low Netback Playbook" slug="low-netback" />
        </section>
      </main>
    </>
  )
}
