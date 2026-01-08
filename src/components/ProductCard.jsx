import { useState } from 'react';
import { addToCart } from '../utils/cart';

function ProductCard({ product, formatPrice, onQuickView }) {
    const [added, setAdded] = useState(false);

    // Use first image from array or fallback
    const mainImage = product.images ? product.images[0] : product.image;

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
        setAdded(true);

        // Notify header to update cart count
        window.dispatchEvent(new Event('cartUpdated'));

        // Reset after 2 seconds
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="product-card">
            <div
                className="product-image-wrapper"
                onClick={() => onQuickView(product)}
                style={{ cursor: 'pointer' }}
            >
                <img
                    src={mainImage}
                    alt={product.name}
                    className="product-image"
                />
                {product.badge && (
                    <span className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
                        {product.badge}
                    </span>
                )}
                {/* Image count indicator */}
                {product.images && product.images.length > 1 && (
                    <div className="image-count">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{product.images.length}</span>
                    </div>
                )}
                <div className="product-actions">
                    <button
                        className="product-action-btn"
                        title="Quick View"
                        onClick={(e) => {
                            e.stopPropagation();
                            onQuickView(product);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                    <button
                        className={`product-action-btn ${added ? 'added' : ''}`}
                        title={added ? 'Added!' : 'Add to Cart'}
                        onClick={handleAddToCart}
                    >
                        {added ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        )}
                    </button>
                </div>
                {/* Mobile tap indicator */}
                <div className="tap-to-view">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Tap to view</span>
                </div>
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <span className="product-price">{formatPrice(product.price)}</span>
                    <div className="product-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span>{product.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
