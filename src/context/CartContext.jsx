import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(undefined);

const STORAGE_KEY = "a2microtech-cart";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setCartItems(JSON.parse(stored));
    } catch {
      // ignore unreadable storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore storage write failures
    }
  }, [cartItems, loaded]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((items) =>
      items.find((item) => item.id === product.id)
        ? items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
          )
        : [...items, { ...product, quantity }],
    );
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
