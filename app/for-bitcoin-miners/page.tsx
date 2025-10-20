import Link from 'next/link'
import type { Metadata } from 'next'
import IllustrationStrip from '../../components/IllustrationStrip'
import MinersForm from '../../components/MinersForm'

export const metadata: Metadata = {
  title: 'Produce Bitcoin at Cost, Not Retail | MCF.DIGITAL',
  description:
    'We match miners or capital with below-grid MCF. Custody first, clear fee stack, optional hash hedge. From flare stack to sat stack.',
  openGraph: {
    title: 'Produce Bitcoin at Cost, Not Retail | MCF.DIGITAL',
    description:
      'We match miners or capital with below-grid MCF. Custody first, clear fee stack, optional hash hedge. From flare stack to sat stack.',
    type: 'article',
  },
  alternates: {
    canonical: '/miners',
  },
}

export default function ForMinersPage() {
  return (
    <main>
      <section className="hero miners-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="scrim" />
        <div className="content wrap hero-inner">
          <div className="hero-copy">
            <div className="kicker">Bitcoin Miners &amp; Entrepreneurs</div>
            <h1>Produce bitcoin at cost, not retail</h1>
            <p className="lead">
              We match your miners or capital with below-grid MCF. Custody first, clear fee stack, optional hash hedge. From
              flare stack to sat stack.
            </p>
          </div>
          <div className="hero-actions card">
            <div className="hero-actions-title">Pick your next move</div>
            <div className="hero-actions-grid">
              <Link className="btn acc" href="#miners-form">
                Get my custom power plan
              </Link>
              <Link className="btn acc" href="#miners-form">
                Host my fleet
              </Link>
              <Link className="btn acc" href="#miners-form">
                JV my container
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>What you get with MCF.DIGITAL sites</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Cheaper power than typical colo</h3><p>Off-grid, stranded, or sour gas that pencils beats most grid tariffs.</p></div>
          <div className="card"><h3>Custody-first payouts</h3><p>Pool pays to your wallet. Multisig available on request.</p></div>
          <div className="card"><h3>Real assets</h3><p>Own hardware you can depreciate, containers on request, spares staged onsite.</p></div>
          <div className="card"><h3>Operations built by miners</h3><p>Fleet tuning, alarms, ticketing, rapid swap. Run by people who hash.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Tech stack you can actually trust</h2>
        <div className="grid cols-3">
          <div className="card"><h3>ASICs</h3><p>Next-gen fleets sized to site MW with efficiency targets in J/TH.</p></div>
          <div className="card"><h3>Cooling</h3><p>Air or immersion. Immersion for harsh climates, heat reuse options available.</p></div>
          <div className="card"><h3>Firmware</h3><p>Braiins or comparable autotuning with guardrails on voltage and temperature.</p></div>
          <div className="card"><h3>Pools</h3><p>Your choice: PPS+, PPLNS, failovers in place so payouts never stall.</p></div>
          <div className="card"><h3>Monitoring</h3><p>Dashboards, alerting, remote KVM on request, camera visibility baked in.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Your paths</h2>
        <div className="grid cols-3">
          <div className="card"><h3>Hosted mining</h3><p>Ship your S21s or comparable. We rack and run, you keep custody.</p></div>
          <div className="card"><h3>JV mining</h3><p>Invest alongside us and the operator, split production with a clean waterfall.</p></div>
          <div className="card"><h3>Managed self-mining</h3><p>We build and operate a dedicated site for you—brand it how you want.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Economics, no magic</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Transparent pricing</h3><p>We quote power in $/kWh or gas in $/MCF, whichever fits the site and structure.</p></div>
          <div className="card"><h3>Base &amp; downside cases</h3><p>Hashprice, difficulty, uptime. We show how the stack holds up.</p></div>
          <div className="card"><h3>Optional hash hedge</h3><p>Add a revenue hedge to stabilize a slice of cash flow.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Why this beats waiting for bull markets</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Produce at cost</h3><p>You don’t pay retail for coins—you produce at cost and stack daily.</p></div>
          <div className="card"><h3>Custody stays yours</h3><p>You control payout addresses and treasury policy.</p></div>
          <div className="card"><h3>Modular growth</h3><p>Scale in stages as deliverability grows. Add containers over time.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Getting started is easy</h2>
        <ol>
          <li>Tell us fleet size, models, target start date.</li>
          <li>Choose hosted, JV, or managed self-mining.</li>
          <li>Sign the docs, set wallets, ship or procure hardware.</li>
          <li>Hash online, stack sats.</li>
        </ol>
      </section>

      <section className="wrap">
        <h2>FAQ, miners</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Can I keep my pool and firmware?</h3><p>Yes. We recommend Braiins or comparable for efficiency, but it’s your fleet.</p></div>
          <div className="card"><h3>What about immersion?</h3><p>We support immersion where the climate or target density calls for it.</p></div>
          <div className="card"><h3>Do you charge mystery fees?</h3><p>No. We publish the fee stack from power to ops to networking.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Containers &amp; thermals</h2>
        <p className="lead">Air paths, racking, thermals, and service routes that actually work in the field.</p>
        <div className="sp-16" />
        <IllustrationStrip
          cols={2}
          ratio="16 / 9"
          items={[
            { src: '/assets/illustrations/bitcoin-miners.png', alt: 'Miner container design', caption: 'Container design' },
            { src: '/assets/illustrations/home-2.png', alt: 'Thermal & air path', caption: 'Thermal & air path' },
          ]}
        />
      </section>

      <section className="wrap">
        <div className="cta-stack">
          <div className="cta-copy">
            <h2>Stop renting expensive electrons. Start stacking.</h2>
            <p className="lead">Drop your fleet details, pick the path. We’ll take you from flare stack to sat stack.</p>
          </div>
          <div className="cta-buttons card">
            <Link className="btn acc" href="#miners-form">
              Get my custom power plan
            </Link>
            <Link className="btn acc" href="#miners-form">
              Host my fleet
            </Link>
            <Link className="btn acc" href="#miners-form">
              JV my container
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>Start a miners intake</h2>
        <p className="lead">
          Send your miner models, custody preference, and target start. We’ll reply fast with the right structure.
        </p>
        <div className="sp-16" />
        <MinersForm id="miners-form" />
        <div className="sp-8" />
        <p>
          <small>Not tax or investment advice. Mining results vary with price, difficulty, uptime, and site conditions.</small>
        </p>
      </section>
    </main>
  )
}
