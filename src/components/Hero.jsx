function Hero() {
    return (
        <section className="hero">
            <div className="hero-pattern"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span>🌟</span>
                        <span>New Collection 2026</span>
                    </div>
                    <h1 className="hero-title">
                        Design Your <span>Dream Home</span> With Style
                    </h1>
                    <p className="hero-description">
                        Discover handcrafted furniture that brings personality to every room.
                        Premium quality, modern designs, timeless comfort.
                    </p>
                    <div className="hero-buttons">
                        <a href="#products" className="btn btn-primary">
                            Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#about" className="btn btn-secondary">Explore More</a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-value">500+</div>
                            <div className="stat-label">Premium Products</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">10K+</div>
                            <div className="stat-label">Happy Customers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">15+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
                        alt="Modern Living Room"
                        className="hero-image"
                    />
                    <div className="hero-floating-card card-1">
                        <div className="floating-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="floating-card-text">
                            <h4>Free Shipping</h4>
                            <p>On orders over $500</p>
                        </div>
                    </div>
                    <div className="hero-floating-card card-2">
                        <div className="floating-rating">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#111' }}>4.9/5 Rating</h4>
                        <p style={{ fontSize: '0.8rem', color: '#737373' }}>2,500+ Reviews</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
