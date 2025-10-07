export default function AboutPage(){
  return (
    <>
      <header className="hero">
        <div className="poster" style={{background:"url('/assets/about-hero.jpg') center/cover no-repeat"}} />
        <div className="scrim"></div>
        <div className="content wrap">
          <div className="kicker">Studio</div>
          <h1>About MCF.DIGITAL</h1>
          <p className="sub">A tight, senior team building useful design for energy & frontier‑tech operators.</p>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>Capabilities</h2>
          <div className="grid cols-3">
            <div className="card"><h3>Web</h3><p>Design systems, marketing sites, and product pages.</p></div>
            <div className="card"><h3>Motion & 3D</h3><p>Explainers, renders, and event visuals.</p></div>
            <div className="card"><h3>Content</h3><p>Campaigns, assets, and repeatable templates.</p></div>
          </div>
        </section>
      </main>
    </>
  )
}
