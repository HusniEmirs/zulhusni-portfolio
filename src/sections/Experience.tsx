import { portfolio } from '../data/portfolio'
import useReveal from '../hooks/useReveal'

function Experience() {
  const revealRef = useReveal<HTMLDivElement>()

  return (
    <section
      className="section experience-section"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div
        className="page-container experience-content reveal-group"
        ref={revealRef}
      >
        <div className="section-heading" data-reveal-item data-reveal-order="0">
          <p className="section-marker" aria-hidden="true">
            <span className="section-index">03</span>
            Experience
          </p>
          <h2 id="experience-heading">Professional experience</h2>
        </div>

        <div className="experience-list">
          {portfolio.professionalExperience.map((experience, index) => (
            <article
              className="experience-entry"
              data-reveal-item
              data-reveal-order={index + 1}
              key={`${experience.company}-${experience.role}`}
            >
              <div className="experience-rail">
                <span className="experience-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="experience-period">
                  <span>{experience.period.start}</span>
                  <span aria-hidden="true">—</span>
                  <span>{experience.period.end}</span>
                </p>
              </div>

              <div className="experience-details">
                <p className="experience-company">{experience.company}</p>
                <h3>{experience.role}</h3>

                <ul className="experience-focus-list">
                  {experience.focusAreas.map((focusArea, focusIndex) => (
                    <li key={focusArea}>
                      <span aria-hidden="true">
                        {String(focusIndex + 1).padStart(2, '0')}
                      </span>
                      <p>{focusArea}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
