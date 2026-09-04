import { portfolio, type SelectedProject } from '../data/portfolio'
import useReveal from '../hooks/useReveal'

function Projects() {
  const revealRef = useReveal<HTMLDivElement>()
  const projects: readonly SelectedProject[] = portfolio.selectedProjects

  return (
    <section
      className="section projects-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div
        className="page-container projects-content reveal-group"
        ref={revealRef}
      >
        <div className="section-heading" data-reveal-item data-reveal-order="0">
          <p className="section-marker" aria-hidden="true">
            <span className="section-index">04</span>
            Selected work
          </p>
          <h2 id="projects-heading">Selected projects</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const hasTechnologies = Boolean(project.technologies?.length)

            return (
              <article
                className={`project-panel${index === 0 ? ' project-panel-featured' : ''}${project.contributionContext ? ' project-panel-supporting' : ''}`}
                data-reveal-item
                data-reveal-order={index + 1}
                key={project.name}
              >
                <header
                  className={`project-header${project.logo ? ' project-header-with-logo' : ''}`}
                >
                  <p className="project-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <div className="project-heading-group">
                    <h3>{project.portfolioTitle}</h3>
                    <p className="project-name">{project.name}</p>
                    <p className="project-organization">
                      <span>Organization</span>
                      {project.organization}
                    </p>
                    {project.contributionContext && (
                      <p className="project-context">
                        {project.contributionContext}
                      </p>
                    )}
                  </div>

                  {project.logo && (
                    <div className="project-logo">
                      <span className="project-logo-label" aria-hidden="true">
                        Project identity
                      </span>
                      <span className="project-logo-media">
                        <img
                          src={project.logo.src}
                          alt={project.logo.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    </div>
                  )}
                </header>

                <div
                  className={`project-body${hasTechnologies ? '' : ' project-body-without-technologies'}`}
                >
                  <div className="project-contributions">
                    <p className="project-detail-label">Contribution areas</p>
                    <ul>
                      {project.contributionAreas.map((contribution) => (
                        <li key={contribution}>
                          <span aria-hidden="true">↳</span>
                          <p>{contribution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {hasTechnologies && (
                    <div className="project-technologies">
                      <div className="project-technologies-heading">
                        <p className="project-detail-label">Technologies</p>
                        {project.technologyContext && (
                          <p className="project-technology-context">
                            {project.technologyContext}
                          </p>
                        )}
                      </div>
                      <ul aria-label={`${project.portfolioTitle} technologies`}>
                        {project.technologies?.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
