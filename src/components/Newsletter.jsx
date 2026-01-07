function Newsletter() {
    return (
        <section className="newsletter" id="contact">
            <div className="newsletter-pattern"></div>
            <div className="newsletter-content">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter for exclusive offers and design inspiration</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        className="newsletter-input"
                        placeholder="Enter your email address"
                    />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;
