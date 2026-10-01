import Section from './Section'
import { projects } from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <div className="projects">
        {projects.map((project) => (
          <article key={project.title} className="project">
            <header className="project__header">
              <h3 className="project__title">{project.title}</h3>
              {project.status && (
                <span className="project__status">{project.status}</span>
              )}
            </header>

            <p className="project__description">{project.description}</p>

            <ul className="project__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            {project.repo && (
              <a
                className="project__link"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                Ver código →
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects