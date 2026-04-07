// src/utilis/cart/CartProvider.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { CartContext } from '../../data/Cart';
import type { CartItem } from '../../data/Cart';
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  calculateTotalItems,
  calculateTotalPrice,
  formatPrice,
} from './Cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = calculateTotalItems(cartItems);
  const totalPrice = calculateTotalPrice(cartItems);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = useCallback((product: { title: string; price: string; image: string }) => {
    setCartItems(prev => addToCart(prev, product));
    setIsCartOpen(true);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const removeItem = useCallback((id: number) => {
    setCartItems(prev => removeFromCart(prev, id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    setCartItems(prev => updateCartItemQuantity(prev, id, quantity));
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  return (
    <CartContext.Provider value={{
      cartItems,
      totalItems,
      totalPrice,
      formattedTotalPrice: formatPrice(totalPrice),
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};