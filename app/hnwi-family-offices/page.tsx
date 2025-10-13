import DownloadButton from '../../components/DownloadButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bitcoin Mining, Real Assets and Depreciation | MCF.DIGITAL',
  description:
    'White-glove build-operate-report. SPVs, daily BTC to your wallets, hardware depreciation, evidence-grade reporting, and an optional hedge for predictability.',
  openGraph: {
    title: 'Bitcoin Mining, Real Assets and Depreciation | MCF.DIGITAL',
    description:
      'White-glove build-operate-report. SPVs, daily BTC to your wallets, hardware depreciation, evidence-grade reporting, and an optional hedge for predictability.',
    type: 'article',
  },
  alternates: {
    canonical: '/investors',
  },
}

export default function HnwiPage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:"url('/assets/hnwi-hero.jpg') center/cover no-repeat"}} />
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">Brief</div>
          <h1>White-glove production backed by real assets.</h1>
          <p className="sub">
            Exposure to on-lease power and compute with controls you can diligence. Capex with depreciation where applicable,
            clear custody, and on-site MRV—delivered by a team that ships working pads.
          </p>
          <div className="cta-row">
            <DownloadButton label="HNWI & Family Offices Brief" slug="hnwi" />
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>What this brief covers</h2>
          <div className="grid cols-3">
            <div className="card">
              <h3>Structures that pencil</h3>
              <p>SPV or JV carve-outs with aligned incentives, custody, and audit-ready reporting flows.</p>
            </div>
            <div className="card">
              <h3>Depreciation & tax</h3>
              <p>Ownership models and accelerated depreciation options where applicable. Clean books.</p>
            </div>
            <div className="card">
              <h3>Risk layering</h3>
              <p>Operational, regulatory, counterparty, and price risk handled in the structure—not hand-waved.</p>
            </div>
            <div className="card">
              <h3>Hedging choices</h3>
              <p>When to hedge, when to stack sats, and how to communicate risk posture to stakeholders.</p>
            </div>
            <div className="card">
              <h3>Reporting cadence</h3>
              <p>On-site metrics, uptime, emissions reduction (MRV), revenue, and service activity.</p>
            </div>
            <div className="card">
              <h3>Partner diligence</h3>
              <p>What we look for in producers and miners; why certain sites are “no, thanks.”</p>
            </div>
          </div>
        </section>

        <section className="wrap">
          <h2>Get the brief</h2>
          <p className="lead">A clear overview to bring to your IC: structure, controls, and reporting.</p>
          <div className="sp-12" />
          <DownloadButton label="HNWI & Family Offices Brief" slug="hnwi" />
        </section>
      </main>
    </>
  )
}
