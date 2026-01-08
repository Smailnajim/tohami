import { useState } from 'react';
import { addToCart } from '../utils/cart';

function ProductModal({ product, formatPrice, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [added, setAdded] = useState(false);

    if (!product) return null;

    // Support both images array and single image
    const images = product.images || [product.image];
    const currentImage = images[currentImageIndex];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);

        // Notify header to update cart count
        window.dispatchEvent(new Event('cartUpdated'));

        // Reset after 2 seconds
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="modal-grid">
                    <div className="modal-image">
                        <img src={currentImage} alt={product.name} />
                        {product.badge && (
                            <span className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
                                {product.badge}
                            </span>
                        )}

                        {/* Image navigation arrows */}
                        {images.length > 1 && (
                            <>
                                <button className="image-nav prev" onClick={prevImage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button className="image-nav next" onClick={nextImage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image thumbnails */}
                        {images.length > 1 && (
                            <div className="image-thumbnails">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    >
                                        <img src={img} alt={`${product.name} view ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Image counter */}
                        {images.length > 1 && (
                            <div className="image-counter">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        )}
                    </div>

                    <div className="modal-details">
                        <span className="modal-category">{product.category}</span>
                        <h2 className="modal-title">{product.name}</h2>

                        <div className="modal-rating">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={i < Math.floor(product.rating) ? 'filled' : ''}>
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <span>{product.rating} / 5</span>
                        </div>

                        <p className="modal-description">{product.description}</p>

                        <div className="modal-price">{formatPrice(product.price)}</div>

                        <div className="modal-features">
                            <div className="feature">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Free Shipping</span>
                            </div>
                            <div className="feature">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span>30-Day Returns</span>
                            </div>
                            <div className="feature">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span>2-Year Warranty</span>
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button
                                className={`btn btn-primary btn-large ${added ? 'added' : ''}`}
                                onClick={handleAddToCart}
                            >
                                {added ? (
                                    <>
                                        Added to Cart!
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        Add to Cart
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
