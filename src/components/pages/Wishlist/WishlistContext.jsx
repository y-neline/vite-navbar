// WishlistContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    // Retrieve wishlist from local storage if it exists
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    // Save wishlist to local storage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (book) => {
    setWishlist((prevWishlist) => [...prevWishlist, book]);
  };

  const removeFromWishlist = (title) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((book) => book.title !== title)
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
