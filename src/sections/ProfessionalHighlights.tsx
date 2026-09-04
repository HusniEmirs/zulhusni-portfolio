import { portfolio } from '../data/portfolio'
import useReveal from '../hooks/useReveal'

function ProfessionalHighlights() {
  const revealRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="highlights"
      className="section highlights"
      aria-labelledby="highlights-title"
    >
      <div ref={revealRef} className="page-container highlights-content reveal-group">
        <div className="section-heading" data-reveal-item data-reveal-order="0">
          <p className="section-marker">
            <span className="section-index" aria-hidden="true">
              02
            </span>
            <span>Capabilities</span>
          </p>
          <h2 id="highlights-title">Professional highlights</h2>
        </div>

        <div className="highlights-grid">
          {portfolio.professionalHighlights.map((highlight, index) => (
            <article
              className="highlight-block"
              key={highlight.title}
              data-reveal-item
              data-reveal-order={index + 1}
            >
              <span className="highlight-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfessionalHighlights
