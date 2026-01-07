import { Header, Footer } from '../components';
import data from '../services/response.json';

function ProjectsPage() {
    const projects = data.projects;

    return (
        <>
            <Header />
            <main className="page-content">
                <section className="projects-page">
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
                                            <a href="#" className="project-link">
                                                View Project
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="projects-cta">
                            <a href="/contact" className="btn btn-primary">
                                Start Your Project
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ProjectsPage;
