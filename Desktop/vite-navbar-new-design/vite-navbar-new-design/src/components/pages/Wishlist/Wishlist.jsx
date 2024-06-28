// Wishlist.jsx
import React from 'react';
import './Wishlist.css';
import { useWishlist } from './WishlistContext';
import Bookstore from '../../books/Bookstore';  // Import the Bookstore component

const Wishlist = () => {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h2>Избранное</h2>
      
        <button className="clear-wishlist" onClick={clearWishlist}>
          Удалить все
        </button>
        
      </div>
      <Bookstore books={wishlist} />
    </div>
    
  );
};

export default Wishlist;
