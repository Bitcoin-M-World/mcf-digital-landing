import DownloadButton from '@/components/DownloadButton'

export default function FlarePage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:"url('/assets/flare-hero.jpg') center/cover no-repeat"}} />
        <div className="scrim"></div>
        <div className="content wrap">
          <div className="kicker">Blueprint</div>
          <h1>Flare Site Operators</h1>
          <p className="sub">Capture waste gas, generate revenue, and reduce emissions with a proven on‑site compute stack.</p>
          <div className="cta-row">
            <DownloadButton label="Flare Site Operators Blueprint" slug="flare-site-operators" />
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>What’s inside</h2>
          <div className="grid cols-3">
            <div className="card"><h3>Site prerequisites</h3><p>Pressure, flow, and composition ranges with quick checks.</p></div>
            <div className="card"><h3>Deployment steps</h3><p>Step‑by‑step schema from pad to compute.</p></div>
            <div className="card"><h3>Compliance</h3><p>Permitting, safety, and measurement notes.</p></div>
          </div>
        </section>
      </main>
    </>
  )
}
