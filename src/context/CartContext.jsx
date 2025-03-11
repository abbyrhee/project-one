import React, { createContext, useContext, useState, useEffect } from 'react';

// Context for cart functionality
const CartContext = createContext();

// Local storage key for persisting cart data
const CART_STORAGE_KEY = 'yeppo_cart_items';

// Error class for cart-related issues
class CartError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CartError';
  }
}
 
export const CartProvider = ({ children }) => {
  // Initialize cart state from localStorage
  // Falls back to empty array if no stored cart exists
  const [cartItems, setCartItems] = useState(() => {
    // Try to load cart from localStorage
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      throw new CartError('Failed to load cart data from storage');
    }
  });

  // Persist cart items to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      throw new CartError('Failed to save cart data to storage');
    }
  }, [cartItems]);

  // Add a product to cart or increment its quantity if it already exists
  const addToCart = (product) => {
    if (!product?.id || !product?.price) {
      throw new CartError('Invalid product data');
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Increment quantity if product already exists
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new product with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove a product from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Update quantity of a product in cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price of all items in cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculate total number of items in cart
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Provide cart functionality to children components
  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context
// error if used outside of CartProvider
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
