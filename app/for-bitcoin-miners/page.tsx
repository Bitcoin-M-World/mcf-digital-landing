import DownloadButton from '@/components/DownloadButton'

export default function MinersPage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:"url('/assets/miners-hero.jpg') center/cover no-repeat"}} />
        <div className="scrim"></div>
        <div className="content wrap">
          <div className="kicker">Integration Guide</div>
          <h1>For Bitcoin Miners</h1>
          <p className="sub">Blueprints for pairing mobile data centers with variable gas and power realities.</p>
          <div className="cta-row">
            <DownloadButton label="Bitcoin Miners Integration Guide" slug="bitcoin-miners" />
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>Contents</h2>
          <div className="grid cols-3">
            <div className="card"><h3>Power</h3><p>Gensets, curtailment, and tuning.</p></div>
            <div className="card"><h3>Thermals</h3><p>Air vs immersion considerations.</p></div>
            <div className="card"><h3>Networking</h3><p>Ruggedized connectivity patterns.</p></div>
          </div>
        </section>
      </main>
    </>
  )
}
