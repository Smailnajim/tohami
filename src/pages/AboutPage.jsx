import { Header, Footer, Features } from '../components';

function AboutPage() {
    return (
        <>
            <Header />
            <main className="page-content">
                <section className="about-hero">
                    <div className="section-container">
                        <div className="section-header">
                            <span className="section-label">About Us</span>
                            <h2 className="section-title">Crafting Dreams Into Reality</h2>
                            <p className="section-subtitle">
                                We're passionate about creating beautiful living spaces that inspire and comfort
                            </p>
                        </div>
                    </div>
                </section>

                <section className="about-story">
                    <div className="section-container">
                        <div className="about-grid">
                            <div className="about-image">
                                <img
                                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"
                                    alt="Our Workshop"
                                />
                            </div>
                            <div className="about-content">
                                <h3>Our Story</h3>
                                <p>
                                    Founded with a vision to transform how people experience their homes,
                                    we've spent over 15 years perfecting the art of interior design and
                                    furniture curation.
                                </p>
                                <p>
                                    Every piece in our collection is carefully selected for its quality,
                                    design, and ability to bring joy to everyday life. We believe that
                                    great design should be accessible to everyone.
                                </p>
                                <div className="about-stats">
                                    <div className="about-stat">
                                        <span className="stat-number">15+</span>
                                        <span className="stat-text">Years Experience</span>
                                    </div>
                                    <div className="about-stat">
                                        <span className="stat-number">500+</span>
                                        <span className="stat-text">Projects Completed</span>
                                    </div>
                                    <div className="about-stat">
                                        <span className="stat-number">10K+</span>
                                        <span className="stat-text">Happy Clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Features />

                <section className="about-team">
                    <div className="section-container">
                        <div className="section-header">
                            <span className="section-label">Our Team</span>
                            <h2 className="section-title">Meet The Experts</h2>
                            <p className="section-subtitle">
                                A dedicated team of designers and craftsmen
                            </p>
                        </div>
                        <div className="team-grid">
                            <div className="team-card">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" alt="Team Member" />
                                <h4>Ahmed Bennani</h4>
                                <p>Founder & Lead Designer</p>
                            </div>
                            <div className="team-card">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="Team Member" />
                                <h4>Sarah Alaoui</h4>
                                <p>Interior Architect</p>
                            </div>
                            <div className="team-card">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="Team Member" />
                                <h4>Youssef Tahiri</h4>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;
