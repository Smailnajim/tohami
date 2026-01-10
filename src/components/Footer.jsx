import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">TOUHAMI<span>DECOR</span></Link>
                        <p>
                            Crafting beautiful living spaces with premium furniture and exceptional design.
                            Your home deserves the best.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Pinterest">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.99s-.36-.72-.36-1.78c0-1.67.96-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.14 0 3.78-2.26 3.78-5.52 0-2.88-2.07-4.9-5.03-4.9-3.42 0-5.43 2.57-5.43 5.23 0 1.04.4 2.15.9 2.75a.36.36 0 0 1 .08.35l-.34 1.36c-.05.22-.18.27-.41.16-1.54-.72-2.5-2.97-2.5-4.78 0-3.89 2.83-7.46 8.15-7.46 4.28 0 7.6 3.05 7.6 7.12 0 4.26-2.68 7.68-6.4 7.68-1.25 0-2.43-.65-2.83-1.42l-.77 2.94c-.28 1.08-1.04 2.43-1.55 3.26A12 12 0 1 0 12 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/projects">Our Projects</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Categories</h4>
                        <ul>
                            <li><Link to="/products">Sofas & Couches</Link></li>
                            <li><Link to="/products">Dining Tables</Link></li>
                            <li><Link to="/products">Coffee Tables</Link></li>
                            <li><Link to="/products">Accent Chairs</Link></li>
                            <li><Link to="/products">All Furniture</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Track Order</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Touhami Decor. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
