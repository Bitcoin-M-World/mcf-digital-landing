import Link from 'next/link'
import type { Metadata } from 'next'
import DownloadButton from '../../components/DownloadButton'
import FlarePadForm from '../../components/FlarePadForm'
import IllustrationStrip from '../../components/IllustrationStrip'

export const metadata: Metadata = {
  title: 'Cut Your Flare Stack, Grow Your Sat Stack | MCF.DIGITAL',
  description:
    'Turn fuel gas into on-lease power and compute. From flare to fair value, from BTUs to BTC.',
  openGraph: {
    title: 'Cut Your Flare Stack, Grow Your Sat Stack | MCF.DIGITAL',
    description:
      'Turn fuel gas into on-lease power and compute. From flare to fair value, from BTUs to BTC.',
    type: 'article',
  },
  alternates: {
    canonical: '/flare',
  },
}

export default function FlareSiteOperatorsPage() {
  return (
    <main>
      <section className="hero flare-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">Flare Sites</div>
          <h1>Cut your flare stack, grow your sat stack</h1>
          <p className="lead">
            Turn fuel gas into on-lease power and compute. From flare to fair value, from BTUs to BTC.
          </p>
          <div className="sp-16" />
          <div className="cta-row">
            <Link className="btn acc" href="/contact?topic=pad-check">
              Check my pad in 60 seconds
            </Link>
            <DownloadButton
              label="Flare to Bitcoin Blueprint"
              slug="flare-site-operators"
              text="Download the Flare → Bitcoin Blueprint"
            />
            <Link className="btn" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">
              Book a 15-minute fit call
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>Why this is a no-brainer for a flare pad</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Flares are pure cost</h3>
            <p>
              Compliance exposure, neighbor optics, and lost value stack up every hour the flare burns. We flip that burn
              into measurable mitigation.
            </p>
          </div>
          <div className="card">
            <h3>Fuel gas familiarity</h3>
            <p>
              We upsize your existing fuel gas carve-out and meter a take-in-kind base volume to run pad-level power for mining.
            </p>
          </div>
          <div className="card">
            <h3>Containerized and fast</h3>
            <p>
              Gensets or turbines, switchgear, protections, and immersion-ready containers land with minimal disruption to lease operations.
            </p>
          </div>
          <div className="card">
            <h3>Measured and auditable</h3>
            <p>
              Dedicated metering, runtime reports, and wallet-level payout transparency give you receipts instead of estimates.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>How it works on your lease</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Take-in-kind base volume</h3>
            <p>
              We define a P90 flow slice in MCF per day, excluded from any gathering or processing dedication, and always behind lease ops fuel.
            </p>
          </div>
          <div className="card">
            <h3>Fuel gas to kW</h3>
            <p>
              BTU and flow translate to MWh per day. Gensets are sized for site elevation, ambient conditions, H₂S, and dew point limits.
            </p>
          </div>
          <div className="card">
            <h3>Pad power to compute</h3>
            <p>
              We match miners to true average MW, tune for climate and uptime, and route pool payouts to the wallets you specify.
            </p>
          </div>
          <div className="card">
            <h3>Reporting</h3>
            <p>
              Monthly reconciliations show gas in, kWh out, hash produced, and BTC paid so your team can audit every tranche.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>Field-ready package</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Powertrain</h3>
            <p>
              Natural gas gensets or microturbines sized to minimum flow with derate curves for temperature and elevation baked in.
            </p>
          </div>
          <div className="card">
            <h3>Gas handling</h3>
            <p>
              Dehydration, H₂S scrubbing, filter coalescers, knock-out, and pressure control matched to your assay.
            </p>
          </div>
          <div className="card">
            <h3>Electrical</h3>
            <p>
              Switchgear, grounding, overcurrent protection, one-line diagrams, and spare breakers with cabling ready to install.
            </p>
          </div>
          <div className="card">
            <h3>Compute</h3>
            <p>
              High-efficiency ASICs in air or immersion with fleet monitoring, auto-tuning, and staged spares to maintain uptime.
            </p>
          </div>
          <div className="card">
            <h3>Controls</h3>
            <p>
              24/7 telemetry, alarms, ticketing, remote hands, and site cameras keep operations transparent and responsive.
            </p>
          </div>
          <div className="card">
            <h3>Noise &amp; neighbors</h3>
            <p>
              Acoustic baffling, setback planning, fencing, and lighting plans protect the pad and calm community optics.
            </p>
          </div>
        </div>
      </section>

      {/* Flare illustrations */}
      <section className="wrap">
        <h2>Field layouts &amp; protections</h2>
        <p className="lead">Layouts that meet lease terms, safety clearances, and weather realities.</p>
        <div className="sp-16" />
        <IllustrationStrip
          cols={3}
          ratio="16 / 9"
          items={[
            { src: '/assets/illustrations/flare-sites.png', alt: 'Flare site overview', caption: 'Flare site overview' },
            { src: '/assets/illustrations/flare-sites-2.png', alt: 'Power path & setbacks', caption: 'Power path & setbacks' },
            { src: '/assets/illustrations/flare-sites-3.png', alt: 'Container & clearances', caption: 'Container & clearances' },
          ]}
        />
      </section>

      <section className="wrap">
        <h2>Commercial models you can choose</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Gas sale at the pad</h3>
            <p>
              We pay a per-MCF price for a metered base volume. You keep dollars, take no BTC exposure.
            </p>
          </div>
          <div className="card">
            <h3>Host fee on your pad</h3>
            <p>
              We pay a site fee tied to uptime if you prefer lease revenue instead of commodity uplift.
            </p>
          </div>
          <div className="card">
            <h3>FlareHash JV</h3>
            <p>
              You contribute pad and gas rights, we bring power and compute, and we split production with custody-first payouts.
            </p>
          </div>
          <div className="card">
            <h3>HashHedge add-on</h3>
            <p>
              Optional partial hashrate hedges give steadier cash flow when volatility spikes.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>What changes on your pad</h2>
        <div className="grid cols-3">
          <div className="card">
            <h3>Less flame, more value</h3>
            <p>Your flare stack idles when compute is online, showing mitigation instead of combustion.</p>
          </div>
          <div className="card">
            <h3>No impact to oil</h3>
            <p>Lease ops fuel stays priority. Compute only takes the dedicated slice behind it.</p>
          </div>
          <div className="card">
            <h3>Compliance is simpler</h3>
            <p>Measured mitigation replaces paying to destroy value, easing regulatory reporting.</p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>What we need from you</h2>
        <p className="lead">Send these details and we quote in days, not months.</p>
        <ul>
          <li>Latest gas assay: BTU, composition, H₂S ppm, CO₂, water dew point.</li>
          <li>Flow history: 60 to 90 days with averages and low days.</li>
          <li>Pad layout &amp; access: space, setbacks, noise limits, existing power.</li>
          <li>Lease &amp; midstream: confirmation of fuel gas rights and any dedications.</li>
          <li>Contact: one decision-maker for scheduling and safety.</li>
        </ul>
        <div className="sp-12" />
        <a className="btn acc" href="#flare-pad-form">
          Fill our form
        </a>
      </section>

      <section className="wrap">
        <h2>FAQ, flaring</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Will this interfere with production?</h3>
            <p>
              Lease ops fuel stays priority. We reserve pad loads plus headroom so compute only rides the dedicated slice.
            </p>
          </div>
          <div className="card">
            <h3>What about H₂S or wet gas?</h3>
            <p>
              We spec scrubbing and dehydration to match your assay. If treatment does not pencil, we say so upfront.
            </p>
          </div>
          <div className="card">
            <h3>Do I have to touch bitcoin?</h3>
            <p>
              No. Choose the gas sale or host fee model. If you want upside, step into the JV.
            </p>
          </div>
          <div className="card">
            <h3>What about MVCs?</h3>
            <p>
              Our metered slice is excluded from any G&amp;P dedication. The term sheet locks that in.
            </p>
          </div>
          <div className="card">
            <h3>Proof and reporting</h3>
            <p>
              Runtime graphs, metered gas usage, wallet-level payout statements, incident logs, and ticket times keep superintendents in the loop.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ textAlign: 'center' }}>
        <h2>Stop burning money. Start minting it.</h2>
        <div className="sp-12" />
        <div className="cta-row">
          <Link className="btn acc" href="/contact?topic=pad-check">
            Check my pad in 60 seconds
          </Link>
          <DownloadButton
            label="Flare to Bitcoin Blueprint"
            slug="flare-site-operators"
            text="Download the Flare → Bitcoin Blueprint"
          />
          <Link className="btn" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">
            Book a 15-minute fit call
          </Link>
        </div>
      </section>

      <section className="wrap">
        <h2>Start a pad check</h2>
        <p className="lead">
          Drop in the basics and we will confirm fit, timeline, and the commercial model that matches your pad.
        </p>
        <div className="sp-16" />
        <FlarePadForm id="flare-pad-form" />
        <div className="sp-8" />
        <p>
          <small>Not tax or investment advice. Royalty and ORRI handling per lease language.</small>
        </p>
      </section>
    </main>
  )
}
