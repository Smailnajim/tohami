import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCart, getCartCount } from '../utils/cart';
import CartSidebar from './CartSidebar';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Load cart on mount and when cart updates
    const loadCart = () => {
        setCart(getCart());
        setCartCount(getCartCount());
    };

    useEffect(() => {
        loadCart();

        // Listen for storage changes (from other components)
        window.addEventListener('storage', loadCart);

        // Custom event for same-page updates
        window.addEventListener('cartUpdated', loadCart);

        return () => {
            window.removeEventListener('storage', loadCart);
            window.removeEventListener('cartUpdated', loadCart);
        };
    }, []);

    // Refresh cart when sidebar opens
    useEffect(() => {
        if (isCartOpen) {
            loadCart();
        }
    }, [isCartOpen]);

    const isActive = (path) => location.pathname === path;

    const handleCartUpdate = () => {
        loadCart();
        // Dispatch custom event for other components
        window.dispatchEvent(new Event('cartUpdated'));
    };

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <nav className="nav-container">
                    <Link to="/" className="logo">LUXE<span>HOME</span></Link>

                    {/* Hamburger Icon for Mobile */}
                    <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="nav-menu">
                        <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
                        <li><Link to="/categories" className={`nav-link ${isActive('/categories') ? 'active' : ''}`}>Categories</Link></li>
                        <li><Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>Products</Link></li>
                        <li><Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link></li>
                        <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
                        <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link></li>
                    </ul>

                    {/* Mobile Navigation Drawer */}
                    <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="mobile-nav-links">
                            <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li><Link to="/categories" className={`nav-link ${isActive('/categories') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Categories</Link></li>
                            <li><Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                            <li><Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                            <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link></li>
                            <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="nav-actions">
                        <button
                            className="nav-icon-btn cart-btn"
                            onClick={() => setIsCartOpen(true)}
                            title="View Cart"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="cart-count">{cartCount}</span>
                            )}
                        </button>
                        <a
                            href="https://wa.me/212708563812"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-icon-btn whatsapp-btn"
                            title="Contact us on WhatsApp"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                </nav>
            </header>

            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cart={cart}
                onCartUpdate={handleCartUpdate}
            />
        </>
    );
}

export default Header;
