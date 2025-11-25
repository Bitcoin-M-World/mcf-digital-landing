import Link from 'next/link'
import DownloadButton from '../components/DownloadButton'
import IllustrationStrip from '../components/IllustrationStrip'
import HeroVideo from '../components/HeroVideo'

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <HeroVideo />

        <div className="scrim" />
        <div className="content wrap">
          <h1>Turn stranded and low-value gas into bitcoin production.</h1>
          <p className="sub">
            MCF.DIGITAL matches oil and gas operators, miners, and capital, then builds and runs on‑lease power and compute so everyone wins. Operators cut flaring and lift pad economics. Miners produce bitcoin at cost, not retail. Investors own real assets with custody‑first payouts and clean reporting.
          </p>
          <div className="cta-row">
            <Link className="btn acc" href="#choose-your-path">Choose your path</Link>
            <Link className="btn" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">Book a 15-minute fit call</Link>
            <Link className="btn" href="/contact?topic=talk-to-engineer">Talk to an engineer</Link>
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

        <section className="wrap" id="choose-your-path">
          <h2>What we do</h2>
          <p className="lead">
            We don’t sell a “thing”—we solve four different pains with four different offers. The site acts like a smart sales triage.
          </p>
          <div className="grid cols-4">
            <Link className="card" href="/flare-site-operators"><h3>Flaring sites</h3><p>Urgent compliance and optics. Want fast relief and clear steps.</p></Link>
            <Link className="card" href="/low-netback"><h3>Weak netbacks</h3><p>Commercial pain. Want parity math and a carve-out that beats pipeline take-home.</p></Link>
            <Link className="card" href="/for-bitcoin-miners"><h3>Bitcoin miners</h3><p>Reliability pain. Want pads that ship, breathe, and service easily.</p></Link>
            <Link className="card" href="/hnwi-family-offices"><h3>HNWI &amp; family offices</h3><p>Trust + custody. Want real-asset exposure without the noise.</p></Link>
          </div>
        </section>
      </main>
    </>
  )
}
