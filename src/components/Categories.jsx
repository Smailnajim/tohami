function Categories() {
    return (
        <section className="categories" id="categories">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Browse By Category</span>
                    <h2 className="section-title">Explore Our Collections</h2>
                    <p className="section-subtitle">
                        From elegant sofas to stunning tables, find the perfect pieces to complete your space
                    </p>
                </div>

                <div className="categories-grid">
                    <div className="category-card">
                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
                            alt="Couches & Sofas"
                        />
                        <div className="category-overlay">
                            <div className="category-content">
                                <h3>Couches & Sofas</h3>
                                <p>Discover comfort redefined with our luxurious seating collection</p>
                                <a href="#products" className="category-link">
                                    View Collection
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="category-card">
                        <img
                            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800"
                            alt="Tables"
                        />
                        <div className="category-overlay">
                            <div className="category-content">
                                <h3>Tables</h3>
                                <p>Functional elegance for dining, coffee breaks, and more</p>
                                <a href="#products" className="category-link">
                                    View Collection
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
