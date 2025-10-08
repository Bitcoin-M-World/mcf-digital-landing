import DownloadButton from '@/components/DownloadButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Bitcoin Miners — Produce at cost, not retail | MCF.DIGITAL',
  description:
    'Integration guide for pairing mobile data centers with variable gas and power realities. Custody-first layouts, thermal choices, and JV options.',
  openGraph: {
    title: 'For Bitcoin Miners — Integration Guide | MCF.DIGITAL',
    description:
      'Lock in cost power at the pad. Air vs. immersion, custody, networking, and field-serviceable BOMs built for dust, heat, and churn.',
    type: 'article',
  },
}

export default function MinersPage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:"url('/assets/miners-hero.jpg') center/cover no-repeat"}} />
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">Integration Guide</div>
          <h1>Produce at cost, not retail.</h1>
          <p className="sub">
            Pair mobile data centers to real-world gas and power. Custody-first deployments with correct protections,
            service runbooks, and MRV-ready reporting—so sites keep hashing when weather and supply swing.
          </p>
          <div className="cta-row">
            <DownloadButton label="Bitcoin Miners Integration Guide" slug="bitcoin-miners" />
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>What’s inside</h2>
          <div className="grid cols-3">
            <div className="card">
              <h3>Power & interconnect</h3>
              <p>Right-size gensets, protection, grounding, and sync. Clearances that satisfy lease and safety.</p>
            </div>
            <div className="card">
              <h3>Thermals: air vs immersion</h3>
              <p>When to go sealed vs. open-loop air, fluid selection, pump curves, and service implications.</p>
            </div>
            <div className="card">
              <h3>Custody & controls</h3>
              <p>Metering, custody frameworks, and remote ops that avoid “hostage hosting.”</p>
            </div>
            <div className="card">
              <h3>Networking in the wild</h3>
              <p>Ruggedized connectivity patterns, failover, latency budgets, and telemetry that actually works.</p>
            </div>
            <div className="card">
              <h3>BOM that survives</h3>
              <p>UL-class equipment, filters, spares, and maintenance cadence tuned for dust, heat, and mud.</p>
            </div>
            <div className="card">
              <h3>Commercial options</h3>
              <p>JV carve-outs, revenue splits, depreciation, and hedging approaches for different counterparties.</p>
            </div>
          </div>
        </section>

        <section className="wrap">
          <h2>Deployment steps</h2>
          <div className="grid cols-3">
            <div className="card"><h3>1) Scope</h3><p>Fuel curve, site constraints, lease terms, and uptime targets.</p></div>
            <div className="card"><h3>2) Layout</h3><p>Pad map, power path, airflow or immersion loop, and interconnect points.</p></div>
            <div className="card"><h3>3) Build</h3><p>Rack & power assembly, protections, QA/Burn-in, shipping list & spares.</p></div>
            <div className="card"><h3>4) Commission</h3><p>Setbacks checked, sync & phasing, burn-in window, telemetry validated.</p></div>
            <div className="card"><h3>5) Operate</h3><p>Runbooks, spares, service cadence, and MRV + revenue reporting.</p></div>
          </div>
        </section>

        <section className="wrap">
          <h2>Get the integration guide</h2>
          <p className="lead">Power, thermals, custody, networking, and BOM—ready to share with ops and finance.</p>
          <div className="sp-12" />
          <DownloadButton label="Bitcoin Miners Integration Guide" slug="bitcoin-miners" />
        </section>
      </main>
    </>
  )
}
