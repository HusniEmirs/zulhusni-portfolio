import { portfolio } from '../data/portfolio'
import useReveal from '../hooks/useReveal'

const githubContact = portfolio.contact.channels.find(
  (channel) => channel.type === 'github',
)

const githubHref =
  githubContact && 'href' in githubContact ? githubContact.href : undefined

function Hero() {
  const revealRef = useReveal<HTMLDivElement>()

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="page-container hero-inner">
        <div ref={revealRef} className="hero-content reveal-group">
          <p className="section-marker" data-reveal-item data-reveal-order="0">
            <span className="section-index" aria-hidden="true">
              01
            </span>
            <span>{portfolio.siteIdentity.role}</span>
          </p>

          <h1 id="hero-title" data-reveal-item data-reveal-order="1">
            {portfolio.hero.headline}
          </h1>
          <p className="hero-summary" data-reveal-item data-reveal-order="2">
            {portfolio.hero.summary}
          </p>

          <div className="hero-actions" data-reveal-item data-reveal-order="3">
            <a className="button button-primary" href="#projects">
              <span>View Projects</span>
              <span className="button-symbol" aria-hidden="true">
                →
              </span>
            </a>
            {githubHref ? (
              <a
                className="button button-secondary"
                href={githubHref}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <span>GitHub</span>
                <span className="button-symbol" aria-hidden="true">
                  ↗
                </span>
              </a>
            ) : null}
          </div>

          <dl className="hero-metadata" data-reveal-item data-reveal-order="4">
            <div>
              <dt>Location</dt>
              <dd>{portfolio.contact.location}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{portfolio.siteIdentity.role}</dd>
            </div>
            <div className="metadata-layers">
              <dt>Layers</dt>
              <dd>{portfolio.hero.layers.join(' / ')}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Hero
