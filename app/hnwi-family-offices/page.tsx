import Link from 'next/link'
import type { Metadata } from 'next'
import DownloadButton from '../../components/DownloadButton'
import InvestorsForm from '../../components/InvestorsForm'

export const metadata: Metadata = {
  title: 'White-Glove Bitcoin Production, Backed by Real Assets | MCF.DIGITAL',
  description:
    'Deploy capital into projects that convert stranded energy into daily BTC flow. Custody-first payouts, depreciable hardware, optional hedging for stability.',
  openGraph: {
    title: 'White-Glove Bitcoin Production, Backed by Real Assets | MCF.DIGITAL',
    description:
      'Deploy capital into projects that convert stranded energy into daily BTC flow. Custody-first payouts, depreciable hardware, optional hedging for stability.',
    type: 'article',
  },
  alternates: {
    canonical: '/investors',
  },
}

export default function HnwiPage() {
  return (
    <main>
      <section className="hero investors-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="scrim" />
        <div className="content wrap hero-inner">
          <div className="hero-copy">
            <div className="kicker">HNWI &amp; Family Offices</div>
            <h1>White-glove bitcoin production, backed by real assets</h1>
            <p className="lead">
              Deploy capital into projects that convert stranded energy into daily BTC flow. Custody-first payouts, depreciation
              on hardware, optional hedging for stability.
            </p>
          </div>
          <div className="hero-actions card">
            <div className="hero-actions-title">Start with the overview</div>
            <div className="hero-actions-grid">
              <DownloadButton
                label="Investment Overview"
                slug="hnwi"
                text="Request the Investment Overview"
              />
              <Link className="btn acc" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">
                Schedule a 20-minute LP briefing
              </Link>
              <DownloadButton
                label="Tax & Depreciation Primer"
                slug="tax-depreciation-primer"
                text="Download the Tax and Depreciation Primer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>Why production, not just buying</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Cost basis advantage</h3><p>Produce coins at energy cost plus ops instead of paying retail premiums.</p></div>
          <div className="card"><h3>Real assets</h3><p>Miners, power equipment, and containers are depreciable assets you can own.</p></div>
          <div className="card"><h3>Custody discipline</h3><p>Pool payouts route to your wallets with optional multisig controls.</p></div>
          <div className="card"><h3>Risk controls</h3><p>Modular sites, conservative sizing to minimum flows, staged spares, uptime SLAs.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>What we do for you</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Sourcing &amp; diligence</h3><p>We secure O&amp;G sites with deliverability and clean lease rights, running assay and P90 flow checks.</p></div>
          <div className="card"><h3>Build &amp; operate</h3><p>Powertrain, electrical, containers, miners, monitoring, and reporting—delivered turnkey.</p></div>
          <div className="card"><h3>Reporting &amp; governance</h3><p>Monthly meter-to-wallet reconciliations, incident logs, KPI dashboards, audits on request.</p></div>
          <div className="card"><h3>Hedging option</h3><p>Partial hashrate hedges available for steadier distributions if desired.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Structures that fit family offices</h2>
        <div className="grid cols-3">
          <div className="card"><h3>Hosted exposure</h3><p>You own hardware, we run it, you receive BTC direct.</p></div>
          <div className="card"><h3>Project JV SPVs</h3><p>Fund capex into a site-level SPV, we operate, production splits by waterfall.</p></div>
          <div className="card"><h3>Managed self-mining</h3><p>A dedicated site with your branding, built and run for you.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Taxes and accounting, at a glance</h2>
        <ul>
          <li>Depreciation: miners and power equipment may qualify for Section 168 or 179—consult your CPA.</li>
          <li>Cost segregation: containers and certain improvements can be segmented for depreciation schedules.</li>
          <li>Reporting: clean statements your controller and CPA can use without extra work.</li>
        </ul>
      </section>

      <section className="wrap">
        <h2>Risk and mitigation</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Commodity risk</h3><p>Hashprice and BTC price move—we present base and downside cases and offer optional hedging.</p></div>
          <div className="card"><h3>Uptime risk</h3><p>We stock spares, define SLAs, and publish incident logs.</p></div>
          <div className="card"><h3>Site risk</h3><p>Dedication exclusions, clear royalty language, and sizing to minimum flows reduce surprises.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>What you get in the first 30 to 60 days</h2>
        <ol>
          <li>Week 1–2: site selection shortlist, assumptions sheet, draft term sheets.</li>
          <li>Week 3–6: mobilization of power and containers, wallet setup, pool selection.</li>
          <li>Go-live: daily BTC begins to your custody.</li>
          <li>Month end: first meter-to-wallet reconciliation.</li>
        </ol>
      </section>

      <section className="wrap">
        <h2>FAQ, investors</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Is this a security?</h3><p>No. JVs are structured by your counsel; we do not sell securities.</p></div>
          <div className="card"><h3>Can I take BTC or USD?</h3><p>Your choice. Payouts default to your wallet.</p></div>
          <div className="card"><h3>Can we audit?</h3><p>Yes—data room access and third-party checks are available.</p></div>
        </div>
      </section>

      <section className="wrap">
        <div className="cta-stack">
          <div className="cta-copy">
            <h2>Put stranded energy to work for your balance sheet.</h2>
            <p className="lead">Request the overview, line up a briefing, or grab the tax primer—then step into production.</p>
          </div>
          <div className="cta-buttons card">
            <DownloadButton
              label="Investment Overview"
              slug="hnwi"
              text="Request the Investment Overview"
            />
            <Link className="btn acc" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">
              Schedule a 20-minute LP briefing
            </Link>
            <DownloadButton
              label="Tax & Depreciation Primer"
              slug="tax-depreciation-primer"
              text="Download the Tax and Depreciation Primer"
            />
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>Start an investor intake</h2>
        <p className="lead">
          Share your capital range, structure preferences, and custody posture. We’ll respond with a tailored path.
        </p>
        <div className="sp-16" />
        <InvestorsForm id="investors-form" />
        <div className="sp-8" />
        <p>
          <small>Not tax or investment advice. All forward projections are illustrative.</small>
        </p>
      </section>
    </main>
  )
}
