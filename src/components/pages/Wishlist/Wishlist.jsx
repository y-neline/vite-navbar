// WishlistPage.jsx
import React from 'react';
import { useWishlist } from './WishlistContext';
import './Wishlist.css'; // Create this file to style your wishlist page

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      <div className="wishlist-books">
        {wishlist.map((book) => (
          <div key={book.title} className="wishlist-book">
            <img src={book.imageUrl} alt={book.title} />
            <div className="wishlist-book-info">
              <h3>{book.author}: {book.title}</h3>
              <span className="price">{book.price}</span>
              <div className="wishlist-button-container">
                <button className="wishlist-add-to-cart" onClick={() => removeFromWishlist(book.title)}>Remove from Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
