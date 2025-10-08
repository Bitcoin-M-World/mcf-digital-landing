import DownloadButton from '@/components/DownloadButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flare Site Operators — Capture waste gas, cut emissions, mint bitcoin | MCF.DIGITAL',
  description:
    'Blueprint for on-lease power + compute at flare sites. Screen, structure, deploy, and operate with MRV-ready reporting and weeks-to-first-hash timelines.',
  openGraph: {
    title: 'Flare Site Operators — Blueprint | MCF.DIGITAL',
    description:
      'Stop burning money. Capture waste gas, reduce emissions, and generate pad revenue with a proven on-lease power + compute stack.',
    type: 'article',
  },
}

export default function FlarePage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:"url('/assets/flare-hero.jpg') center/cover no-repeat"}} />
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">Blueprint</div>
          <h1>Stop burning money. Start minting.</h1>
          <p className="sub">
            Turn waste gas into on-pad revenue with on-lease power and compute. We fit within your lease,
            safety, and offtake realities—then deliver weeks-to-first-hash with audit-ready MRV.
          </p>
          <div className="cta-row">
            <DownloadButton label="Flare Site Operators Blueprint" slug="flare-site-operators" />
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>What you get</h2>
          <div className="grid cols-3">
            <div className="card">
              <h3>Clear carve-outs</h3>
              <p>Structures that respect existing offtake & MVC so partners stay aligned and deals actually clear.</p>
            </div>
            <div className="card">
              <h3>Custody-first stack</h3>
              <p>On-lease power + compute with proper metering, custody, and auditability—no black-box hosting.</p>
            </div>
            <div className="card">
              <h3>MRV that stands up</h3>
              <p>Measurement & reporting mapped to OGMP-style frameworks. Show real emissions reduction.</p>
            </div>
            <div className="card">
              <h3>Weeks to first hash</h3>
              <p>Standardized mobile kits and a tight deployment playbook collapse timelines and risk.</p>
            </div>
            <div className="card">
              <h3>Tax & depreciation</h3>
              <p>Capex ownership and accelerated depreciation options where applicable; clean reporting flows.</p>
            </div>
            <div className="card">
              <h3>Field-serviceable gear</h3>
              <p>UL-class equipment, correct protections, and layouts built for dust, heat, and weather.</p>
            </div>
          </div>
        </section>

        <section className="wrap">
          <h2>How it works</h2>
          <div className="grid cols-3">
            <div className="card"><h3>1) Screen</h3><p>Flow, pressure, composition, access, permitting. Fast go/no-go.</p></div>
            <div className="card"><h3>2) Structure</h3><p>Carve-out %, custody, depreciation, and reporting agreed up-front.</p></div>
            <div className="card"><h3>3) Kit</h3><p>Right-size power + compute; air or immersion; correct setbacks and clearances.</p></div>
            <div className="card"><h3>4) Deploy</h3><p>Pad prep, interconnect, sync, burn-in. Weeks to first hash with defined hand-offs.</p></div>
            <div className="card"><h3>5) Operate</h3><p>Runbooks, service cadence, MRV & revenue reporting. No mystery boxes.</p></div>
          </div>
        </section>

        <section className="wrap">
          <h2>Get the blueprint</h2>
          <p className="lead">Technical overview, deployment checklist, and reporting templates.</p>
          <div className="sp-12" />
          <DownloadButton label="Flare Site Operators Blueprint" slug="flare-site-operators" />
        </section>
      </main>
    </>
  )
}
