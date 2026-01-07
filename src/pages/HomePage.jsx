import { Header, Footer, Hero, Categories, Features, Newsletter } from '../components';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Categories />

            {/* Featured Products Preview */}
            <section className="products-preview">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-label">Our Products</span>
                        <h2 className="section-title">Featured Collection</h2>
                        <p className="section-subtitle">
                            Handpicked furniture pieces that blend style with exceptional craftsmanship
                        </p>
                    </div>

                    <div className="preview-cta">
                        <Link to="/products" className="btn btn-primary">
                            View All Products
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects Preview */}
            <section className="projects-preview">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-label">Nos Projets</span>
                        <h2 className="section-title">Our Latest Work</h2>
                        <p className="section-subtitle">
                            Discover stunning home transformations we've created
                        </p>
                    </div>

                    <div className="preview-cta">
                        <Link to="/projects" className="btn btn-secondary">
                            View All Projects
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <Features />
            <Newsletter />
            <Footer />
        </>
    );
}

export default HomePage;
