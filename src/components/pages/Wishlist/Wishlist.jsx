// Wishlist.jsx
import React from 'react';
import './Wishlist.css';
import { useWishlist } from './WishlistContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h2>Your Wishlist</h2>
        <button className="clear-wishlist" onClick={clearWishlist}>
          Remove All
        </button>
      </div>
      <div className="wishlist-books">
        {wishlist.length > 0 ? (
          wishlist.map((book) => (
            <div key={book.title} className="wishlist-book">
              <img src={book.imageUrl} alt={book.title} />
              <div className="wishlist-book-info">
                <h3>{book.author}: {book.title}</h3>
                <span className="wishlist-price">{book.price} ₸</span>
                <button onClick={() => removeFromWishlist(book.title)}>
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
