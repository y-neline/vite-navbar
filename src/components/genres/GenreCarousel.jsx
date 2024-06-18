// GenreCarousel.jsx
import React, { useState, useContext } from "react";
import "./GenreCarousel.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { bestSellers, classics, children } from "./Books";
import { useWishlist, WishlistProvider } from '../pages/Wishlist/WishlistContext';


const Book = ({ title, author, price, imageUrl }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some(book => book.title === title);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(title);
    } else {
      addToWishlist({ title, author, price, imageUrl });
    }
  };

  return (
    <div className="book">
      <img src={imageUrl} alt={title} />
      <div className="book-info">
        <span className="price">{price}</span>
        <h3>
          {author}: {title}
        </h3>
        <div className="button-container">
          <button className="add-to-cart">В корзину</button>
          <WishlistItemIcon isFilled={isInWishlist} onClick={handleWishlistClick} />
        </div>
      </div>
    </div>
  );
};

const WishlistItemIcon = ({ isFilled, onClick }) => {
  return isFilled ? (
    <FavoriteIcon className="wishlist-icon" onClick={onClick} style={{ color: 'red' }} />
  ) : (
    <FavoriteBorderOutlinedIcon className="wishlist-icon" onClick={onClick} />
  );
};

const Genre = ({ title, books, viewAllLink }) => {
  return (
    <div className="genre">
      <div className="genre-header">
        <h2>{title}</h2>
        <a href={viewAllLink}>View All</a>
      </div>
      <div className="books-container">
        {books.map((book) => (
          <Book key={book.title} {...book} />
        ))}
      </div>
    </div>
  );
};

const GenreCarousel = () => {
  return (
    <div className="bookstore">
      <Genre title="Best Seller" books={bestSellers} viewAllLink="/best-sellers" />
      <Genre title="Classics" books={classics} viewAllLink="/classics" />
      <Genre title="Children" books={children} viewAllLink="/children" />
    </div>
  );
};

export default GenreCarousel;

