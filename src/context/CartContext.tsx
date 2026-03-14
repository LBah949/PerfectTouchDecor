/**
 * Cart Context
 * This file manages the global state of the shopping cart.
 * It uses React Context to share cart data across different components
 * without having to pass props down manually.
 */
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the structure of a single item in the shopping cart
export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  image: string;
  category: string;
}

// Define the structure of the context data and functions available to components
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

// Create the context (initially undefined)
const CartContext = createContext<CartContextType | undefined>(undefined);

// The Provider component that wraps our app
export function CartProvider({ children }: { children: ReactNode }) {
  // Initialize cart state from localStorage so data persists across page reloads
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('ptd_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Whenever the cart state changes, save the new cart to localStorage
  useEffect(() => {
    localStorage.setItem('ptd_cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add a new item or increase quantity if it already exists
  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        // Item exists, update its quantity
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      // New item, add to the end of the array
      return [...prev, { ...item, quantity }];
    });
  };

  // Function to completely remove an item from the cart by its ID
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Function to update the exact quantity of an item
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id); // Remove item if quantity drops to 0 or below
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  // Function to empty the cart
  const clearCart = () => setCart([]);

  // Calculate the total number of items in the cart (for the navbar badge)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to easily use the cart context in any component
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
