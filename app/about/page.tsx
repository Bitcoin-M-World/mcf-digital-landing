import type { Metadata } from 'next'
import Link from 'next/link'
import HeroVideo from '../../components/HeroVideo'

export const metadata: Metadata = {
  title: 'About MCF.DIGITAL | Where Molecules Become Money',
  description:
    'MCF DIGITAL turns stranded and undervalued gas into profitable bitcoin production with custody-first operations, field-smart execution, and aligned incentives for producers, miners, and investors.',
  openGraph: {
    title: 'About MCF.DIGITAL | Where Molecules Become Money',
    description:
      'MCF DIGITAL turns stranded and undervalued gas into profitable bitcoin production with custody-first operations, field-smart execution, and aligned incentives for producers, miners, and investors.',
    type: 'profile',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <header className="hero">
        <HeroVideo poster="/assets/about-hero.jpg" />
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">About MCF.DIGITAL</div>
          <h1>Where molecules become money.</h1>
          <p className="sub">
            MCF DIGITAL exists to turn stranded and undervalued natural gas into profitable bitcoin production. We match
            flare-prone pads with miners, operators, and investors so every MCF mints value instead of getting wasted.
          </p>
          <div className="cta-row">
            <Link className="btn acc" href="/contact?topic=pad-check">
              Check my pad in 60 seconds
            </Link>
            <Link className="btn" href="/contact?topic=fit-call">
              Book a 15-minute fit call
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>Who We Are</h2>
          <p>
            MCF DIGITAL exists to turn stranded and undervalued natural gas into profitable bitcoin production. We stand
            at the intersection of oil &amp; gas and Bitcoin mining, acting as matchmakers, deal makers, and operators.
            For producers, we solve the pain of flaring, weak netbacks, and underperforming pads. For miners and
            investors, we provide access to below-grid power, custody-first payouts, and real assets with tax advantages.
          </p>
          <p>Every MCF of gas should mint value. At MCF DIGITAL, we make sure it does.</p>
        </section>

        <section className="wrap">
          <div className="grid cols-2">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To transform wasted molecules into digital value by connecting oil &amp; gas producers with bitcoin mining
                entrepreneurs and investors. We build, operate, and manage on-lease compute projects that reduce flaring,
                improve netbacks, and deliver bitcoin production at cost.
              </p>
            </div>
            <div className="card">
              <h3>Our Vision</h3>
              <p>
                A future where no MCF is wasted and where every producer, miner, and investor has a transparent,
                profitable, and sustainable pathway to participate in Bitcoin's growth. We envision a decentralized
                Bitcoin mining landscape powered by off-grid energy, cleaner operations, and aligned incentives between
                energy and digital asset markets.
              </p>
            </div>
          </div>
        </section>

        <section className="wrap">
          <h2>Our Values</h2>
          <div className="grid cols-3">
            <div className="card">
              <h3>1. Every MCF Should Mint</h3>
              <p>We believe flare gas and weak netback molecules are not liabilities - they're opportunities. Our job is to capture that value and share it.</p>
            </div>
            <div className="card">
              <h3>2. Custody First</h3>
              <p>For miners and investors, payouts go directly to your wallets. For producers, dollars or BTC are clear and auditable. Transparency builds trust.</p>
            </div>
            <div className="card">
              <h3>3. Field Smart Operations</h3>
              <p>We speak oil, gas &amp; bitcoin. We size to P90 flows, exclude carve-outs from dedications, write clean COAs, stock up on spare parts, and publish uptime logs.</p>
            </div>
            <div className="card">
              <h3>4. Simple, Actionable Deals</h3>
              <p>From Compute Offtake Agreements to JV structures, our contracts are designed to move fast, avoid MVC penalties, and maximize pad profitability.</p>
            </div>
            <div className="card">
              <h3>5. Decentralization Through Energy</h3>
              <p>Bitcoin mining strengthens on diverse, distributed energy sources. By monetizing stranded gas, we push mining away from choke points and toward resilience.</p>
            </div>
          </div>
        </section>

        <section className="wrap">
          <h2>Features &amp; Benefits</h2>
          <div className="grid cols-3">
            <div className="card">
              <h3>For Oil &amp; Gas Producers</h3>
              <ul>
                <li>Cut your flare stack, grow your sat stack</li>
                <li>Improve pad-level netbacks with dedication-safe carve-outs</li>
                <li>Get paid at the pad in dollars or take upside in bitcoin</li>
                <li>Reduce ESG risk with measurable flare mitigation</li>
              </ul>
            </div>
            <div className="card">
              <h3>For Miners &amp; Entrepreneurs</h3>
              <ul>
                <li>Power at lower cost than colocation</li>
                <li>Host your fleet, JV your container, or run managed self-mining</li>
                <li>Custody-first payouts, your pool, your firmware</li>
                <li>Optional hedging for cash flow stability</li>
              </ul>
            </div>
            <div className="card">
              <h3>For HNWI &amp; Family Offices</h3>
              <ul>
                <li>Deploy capital into real assets with depreciation</li>
                <li>Daily bitcoin production vs retail purchases</li>
                <li>Transparent SPVs, clear waterfalls, white-glove operations</li>
                <li>Meter-to-wallet reconciliation and CPA-friendly reporting</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="wrap">
          <h2>Next Steps</h2>
          <div className="grid cols-3">
            <div className="card">
              <h3>Pad triage</h3>
              <p>Drop pad data and get a go/no-go read in under a minute.</p>
              <Link className="btn acc" href="/contact?topic=pad-check">
                Check my pad in 60 seconds
              </Link>
            </div>
            <div className="card">
              <h3>Netback audit</h3>
              <p>Upload your economics and see where a carve-out can pencil.</p>
              <Link className="btn acc" href="/contact?topic=netbacks-upload">
                Upload my netbacks
              </Link>
            </div>
            <div className="card">
              <h3>Fleet hosting</h3>
              <p>Slot in your containers or miners and tap lower-cost field power.</p>
              <Link className="btn acc" href="/contact?topic=host-my-fleet">
                Host my fleet
              </Link>
            </div>
            <div className="card">
              <h3>Investor pack</h3>
              <p>Review the SPV structure, waterfalls, and risk disclosures.</p>
              <Link className="btn acc" href="/contact?topic=investment-overview">
                Request the Investment Overview
              </Link>
            </div>
            <div className="card">
              <h3>Fit call</h3>
              <p>Book a 15-minute session to see if your pad, fleet, or capital fits.</p>
              <Link className="btn acc" href="/contact?topic=fit-call">
                Book a 15-minute fit call
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
