import DownloadButton from '../../components/DownloadButton'
import IllustrationStrip from '../../components/IllustrationStrip'

export default function FlareSiteOperatorsPage() {
  return (
    <main>
      <section className="wrap">
        <div className="kicker">Flaring → Compute</div>
        <h1>Flare Site Operators</h1>
        <p className="lead">
          Shrink flares, improve optics, and keep production moving. We design fast, field-ready deployments that meet
          safety and lease requirements.
        </p>
        <div className="sp-16" />
        <DownloadButton label="Download: Flare → Bitcoin Blueprint" slug="flare-site-operators" />
      </section>

      <section className="wrap">
        <h2>Why operators call us</h2>
        <div className="grid cols-3">
          <div className="card"><h3>Compliance optics</h3><p>Show visible progress on emissions with a plan that can actually be executed on-lease.</p></div>
          <div className="card"><h3>Safe, simple layouts</h3><p>Setbacks, interconnects, and protections in plain English diagrams your team can follow.</p></div>
          <div className="card"><h3>Weeks-to-first-hash</h3><p>Standardized packages and vendor coordination to shorten time from decision to power-up.</p></div>
        </div>
      </section>

      {/* Flare illustrations */}
      <section className="wrap">
        <h2>Field layouts &amp; protections</h2>
        <p className="lead">Layouts that meet lease terms, safety clearances and weather realities.</p>
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
    </main>
  )
}