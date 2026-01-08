// Cart utility functions for localStorage

const CART_KEY = 'luxehome_cart';

// Get cart from localStorage
export const getCart = () => {
    try {
        const cart = localStorage.getItem(CART_KEY);
        return cart ? JSON.parse(cart) : [];
    } catch {
        return [];
    }
};

// Save cart to localStorage
export const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Add product to cart
export const addToCart = (product, quantity = 1) => {
    const cart = getCart();

    // Check if product already exists in cart
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
        // Update quantity if product exists
        cart[existingIndex].quantity += quantity;
    } else {
        // Add new product to cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images ? product.images[0] : product.image,
            quantity: quantity
        });
    }

    saveCart(cart);
    return cart;
};

// Remove product from cart
export const removeFromCart = (productId) => {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    return updatedCart;
};

// Update product quantity in cart
export const updateQuantity = (productId, quantity) => {
    const cart = getCart();
    const index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
        if (quantity <= 0) {
            return removeFromCart(productId);
        }
        cart[index].quantity = quantity;
        saveCart(cart);
    }

    return cart;
};

// Clear entire cart
export const clearCart = () => {
    localStorage.removeItem(CART_KEY);
    return [];
};

// Get cart total
export const getCartTotal = () => {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Get cart item count
export const getCartCount = () => {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
};
