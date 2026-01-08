import { getCart, removeFromCart, updateQuantity, getCartTotal, clearCart } from '../utils/cart';

function CartSidebar({ isOpen, onClose, cart, onCartUpdate }) {

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    const handleRemove = (productId) => {
        removeFromCart(productId);
        onCartUpdate();
    };

    const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity);
        onCartUpdate();
    };

    const handleClearCart = () => {
        clearCart();
        onCartUpdate();
    };

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <>
            {/* Overlay */}
            <div
                className={`cart-overlay ${isOpen ? 'open' : ''}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="cart-close" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {cart.length === 0 ? (
                    <div className="cart-empty">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <p>Your cart is empty</p>
                        <button className="btn btn-primary" onClick={onClose}>
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-item-details">
                                        <h4>{item.name}</h4>
                                        <p className="cart-item-price">{formatPrice(item.price)}</p>
                                        <div className="cart-item-quantity">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        className="cart-item-remove"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>Total:</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                            <button className="btn btn-primary btn-full">
                                Checkout
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="btn btn-secondary btn-full" onClick={handleClearCart}>
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default CartSidebar;
