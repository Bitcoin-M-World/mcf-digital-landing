import DownloadButton from '@/components/DownloadButton'

export default function HomePage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:
          "radial-gradient(80% 60% at 50% 40%, #1116 0%, #0b0f13 60%), url('/assets/hero-poster.jpg') center/cover no-repeat"}} />
        <div className="scrim" aria-hidden="true"></div>
        <div className="content wrap">
          <div className="kicker">Creative — Strategy — Production</div>
          <h1>Industrial-grade design for energy & frontier tech.</h1>
          <p className="sub">We turn complex products into crisp stories, sites, and motion. From concept to ship, our team delivers web, 3D, and content systems that perform.</p>
          <div className="cta-row">
            <a className="btn acc" href="/flare-site-operators">Explore Flare Site Operators</a>
            <a className="btn" href="/for-bitcoin-miners">For Bitcoin Miners</a>
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>Download center</h2>
          <p className="lead">Fast access to our briefs, blueprints, and whitepapers. We’ll send a copy to your inbox.</p>
          <div className="sp-16"></div>
          <div className="grid cols-3">
            <div className="card">
              <h3>Flare Site Operators — Blueprint</h3>
              <p className="note">Technical overview & deployment checklist.</p>
              <div className="sp-12"></div>
              <DownloadButton label="Flare Site Operators Blueprint" slug="flare-site-operators" />
            </div>
            <div className="card">
              <h3>Low Netback Sites — Playbook</h3>
              <p className="note">Site economics, offtake, and risk controls.</p>
              <div className="sp-12"></div>
              <DownloadButton label="Low Netback Playbook" slug="low-netback" />
            </div>
            <div className="card">
              <h3>Bitcoin Miners — Integration Guide</h3>
              <p className="note">From flare to hash: integration best practices.</p>
              <div className="sp-12"></div>
              <DownloadButton label="Bitcoin Miners Integration Guide" slug="bitcoin-miners" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
