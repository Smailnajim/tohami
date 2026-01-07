import { Link } from 'react-router-dom';
import data from '../services/response.json';

function Projects() {
    const projects = data.projects;

    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Nos Projets</span>
                    <h2 className="section-title">Designs That We Created</h2>
                    <p className="section-subtitle">
                        Discover our portfolio of stunning home transformations and interior designs
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <span className="project-category">{project.category}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <Link to={`/projects/${project.id}`} className="project-link">
                                        View Project
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <Link to="/contact" className="btn btn-primary">
                        Start Your Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Projects;
