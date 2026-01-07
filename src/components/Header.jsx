import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav-container">
                <Link to="/" className="logo">LUXE<span>HOME</span></Link>

                <ul className="nav-menu">
                    <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
                    <li><Link to="/categories" className={`nav-link ${isActive('/categories') ? 'active' : ''}`}>Categories</Link></li>
                    <li><Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>Products</Link></li>
                    <li><Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link></li>
                    <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
                    <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link></li>
                </ul>

                <div className="nav-actions">
                    <button className="nav-icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="nav-icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <button className="nav-icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="cart-count">3</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
