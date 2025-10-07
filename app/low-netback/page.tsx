import DownloadButton from '@/components/DownloadButton'

export default function NetbackPage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:"url('/assets/netback-hero.jpg') center/cover no-repeat"}} />
        <div className="scrim"></div>
        <div className="content wrap">
          <div className="kicker">Playbook</div>
          <h1>Low Netback Sites with Existing Offtake</h1>
          <p className="sub">Improve realized value by routing part of your stream to compute without disturbing offtake agreements.</p>
          <div className="cta-row">
            <DownloadButton label="Low Netback Playbook" slug="low-netback" />
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>Highlights</h2>
          <div className="grid cols-3">
            <div className="card"><h3>Economics</h3><p>Side‑by‑side scenarios, sensitivity analysis.</p></div>
            <div className="card"><h3>Offtake</h3><p>Integrating compute with existing offtake.</p></div>
            <div className="card"><h3>Risk</h3><p>Operational, regulatory, and counterparty risks.</p></div>
          </div>
        </section>
      </main>
    </>
  )
}
