import Link from 'next/link'
import DownloadButton from '@/components/DownloadButton'
import IllustrationStrip from '@/components/IllustrationStrip'

export default function HomePage() {
  return (
    <>
      <header className="hero">
        {/* VIDEO BACKGROUND */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/illustrations/home-2.png"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.55) saturate(1.1)',
          }}
        >
          <source src="/media/hero.mp4" type="video/mp4" />
          {/* Fallback copy if video can't load */}
          Your browser does not support the video tag.
        </video>

        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">Creative — Strategy — Production</div>
          <h1>Industrial-grade design for energy &amp; frontier tech.</h1>
          <p className="sub">
            We turn complex products into crisp stories, sites, and motion. From concept to ship, our team delivers web,
            3D, and content systems that perform.
          </p>
          <div className="cta-row">
            <DownloadButton label="Explore Flare Site Operators" slug="flare-site-operators" />
            <Link className="btn" href="/for-bitcoin-miners">For Bitcoin Miners</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>Download center</h2>
          <p className="lead">
            Fast access to our briefs, blueprints, and whitepapers. We’ll send a copy to your inbox.
          </p>
          <div className="sp-16" />
          <div className="grid cols-3">
            <div className="card">
              <h3>Flare → Bitcoin Blueprint</h3>
              <p>Compliance optics and fast relief for flaring pads. Clear steps, field-ready.</p>
              <DownloadButton label="Download PDF" slug="flare-site-operators" />
            </div>
            <div className="card">
              <h3>Netback Fixer</h3>
              <p>Beat pipeline take-home with an on-lease carve-out that pencils at parity.</p>
              <DownloadButton label="Download PDF" slug="low-netback" />
            </div>
            <div className="card">
              <h3>BTU → BTC Quick-Start</h3>
              <p>On-lease power and compute that survives dust, heat, and churn.</p>
              <DownloadButton label="Download PDF" slug="for-bitcoin-miners" />
            </div>
          </div>
        </section>

        {/* Home illustrations */}
        <section className="wrap">
          <h2>How the system fits together</h2>
          <p className="lead">From interconnects to thermals and custody—clean visuals that match the field.</p>
          <div className="sp-16" />
          <IllustrationStrip
            cols={3}
            ratio="16 / 9"
            items={[
              { src: '/assets/illustrations/home-1.png', alt: 'Primary system overview', caption: 'System overview' },
              { src: '/assets/illustrations/home-2.png', alt: 'On-lease compute container', caption: 'On-lease compute container' },
              { src: '/assets/illustrations/low-netbacks.png', alt: 'Low netbacks economics', caption: 'Economics that pencil' },
            ]}
          />
        </section>

        <section className="wrap">
          <h2>What we do</h2>
          <p className="lead">
            We don’t sell a “thing”—we solve four different pains with four different offers. The site acts like a smart sales triage.
          </p>
          <div className="grid cols-4">
            <div className="card"><h3>Flaring sites</h3><p>Urgent compliance and optics. Want fast relief and clear steps.</p></div>
            <div className="card"><h3>Weak netbacks</h3><p>Commercial pain. Want parity math and a carve-out that beats pipeline take-home.</p></div>
            <div className="card"><h3>Bitcoin miners</h3><p>Reliability pain. Want pads that ship, breathe, and service easily.</p></div>
            <div className="card"><h3>HNWI &amp; family offices</h3><p>Trust + custody. Want real-asset exposure without the noise.</p></div>
          </div>
        </section>
      </main>
    </>
  )
}