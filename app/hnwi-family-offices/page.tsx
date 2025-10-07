import DownloadButton from '@/components/DownloadButton'

export default function HnwiPage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:"url('/assets/hnwi-hero.jpg') center/cover no-repeat"}} />
        <div className="scrim"></div>
        <div className="content wrap">
          <div className="kicker">Brief</div>
          <h1>HNWI & Small Family Offices</h1>
          <p className="sub">Access differentiated real‑world compute deals with clear risk frameworks.</p>
          <div className="cta-row">
            <DownloadButton label="HNWI & Family Offices Brief" slug="hnwi" />
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>At a glance</h2>
          <div className="grid cols-3">
            <div className="card"><h3>Strategy</h3><p>Return drivers & risk layering.</p></div>
            <div className="card"><h3>Diligence</h3><p>Technical, operational, and legal checks.</p></div>
            <div className="card"><h3>Reporting</h3><p>On‑site metrics, cadence, and controls.</p></div>
          </div>
        </section>
      </main>
    </>
  )
}
