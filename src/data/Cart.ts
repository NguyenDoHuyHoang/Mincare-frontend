export interface CartItem {
  id: number;
  title: string;
  price: string;        // giữ dạng string vì có thể chứa ₫ hoặc $
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}


import { createContext } from 'react';


export interface CartContextValue {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
  formattedTotalPrice: string;
  isCartOpen: boolean;
  addItem: (product: { title: string; price: string; image: string }) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);