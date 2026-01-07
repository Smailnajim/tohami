function Newsletter() {
    return (
        <section className="newsletter" id="contact">
            <div className="newsletter-pattern"></div>
            <div className="newsletter-content">
                <h2>Join the Community</h2>
                <p>Get exclusive deals, design tips, and early access to new collections</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        className="newsletter-input"
                        placeholder="Enter your email"
                    />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;
