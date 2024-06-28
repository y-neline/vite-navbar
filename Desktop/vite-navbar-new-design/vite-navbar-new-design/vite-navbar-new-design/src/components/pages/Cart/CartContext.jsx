// CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingBook = prevCart.find((item) => item.title === book.title);
      if (existingBook) {
        return prevCart.map((item) =>
          item.title === book.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (title) => {
    setCart((prevCart) =>
      prevCart.filter((book) => book.title !== title)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (title, quantity) => {
    setCart((prevCart) =>
      prevCart.map((book) =>
        book.title === title ? { ...book, quantity } : book
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
