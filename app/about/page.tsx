import type { Metadata } from 'next'
import HeroVideo from '../../components/HeroVideo'

export const metadata: Metadata = {
  title: 'About MCF.DIGITAL | Molecules to Money',
  description:
    'We turn stranded gas into bitcoin. On-lease power and compute that cuts flaring, fixes weak netbacks, and lets miners produce at cost with custody-first reporting.',
  openGraph: {
    title: 'About MCF.DIGITAL | Molecules to Money',
    description:
      'We turn stranded gas into bitcoin. On-lease power and compute that cuts flaring, fixes weak netbacks, and lets miners produce at cost with custody-first reporting.',
    type: 'profile',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage(){
  return (
    <>
      <header className="hero">
        <HeroVideo poster="/assets/about-hero.jpg" />
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">Studio</div>
          <h1>Senior operators, not slide-ware.</h1>
          <p className="sub">
            We build useful design and reliable infrastructure for energy & frontier-tech teams. From playbooks and sites
            to 3D/motion and on-lease compute, our work is built to ship—and built to last.
          </p>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>Capabilities</h2>
          <div className="grid cols-3">
            <div className="card">
              <h3>Web systems</h3>
              <p>Design systems and marketing sites that clarify offers, reduce sales cycles, and capture leads.</p>
            </div>
            <div className="card">
              <h3>Motion & 3D</h3>
              <p>Explainers and renders that show how the pad actually works—clearances, interconnects, and flows.</p>
            </div>
            <div className="card">
              <h3>Content ops</h3>
              <p>Repeatable templates and asset packs that keep communication tight across teams and partners.</p>
            </div>
            <div className="card">
              <h3>On-lease compute</h3>
              <p>Blueprints and ops for flare & netback sites, custody, MRV, and weeks-to-first-hash deployment.</p>
            </div>
          </div>
        </section>

        <section className="wrap">
          <h2>How we work</h2>
          <div className="grid cols-3">
            <div className="card"><h3>1) Define</h3><p>Clarify goals, constraints, and success criteria with decision-makers only.</p></div>
            <div className="card"><h3>2) Design</h3><p>Propose patterns that fit the field: layout, BOM, reporting, and CTAs that matter.</p></div>
            <div className="card"><h3>3) Deliver</h3><p>Ship the thing. QA, burn-in, hand-off, and support with clear runbooks.</p></div>
          </div>
        </section>

        <section className="wrap">
          <h2>Values</h2>
          <div className="grid cols-3">
            <div className="card"><h3>No mystery boxes</h3><p>Custody and reporting are table stakes. If it’s not auditable, it’s not shippable.</p></div>
            <div className="card"><h3>Reality over theory</h3><p>We design for what the lease and weather allow—then we iterate.</p></div>
            <div className="card"><h3>Aligned incentives</h3><p>Every partner should pencil. If it doesn’t work for all, it doesn’t ship.</p></div>
          </div>
        </section>
      </main>
    </>
  )
}
