// GenreCarousel.jsx
import React, { useState } from "react";
import "./GenreCarousel.css";
import { useWishlist } from "../pages/Wishlist/WishlistContext"; // Import the wishlist context
import { useCart } from "../pages/Cart/CartContext"; // Import the cart context

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { bestSellers, classics, children } from "./Books";

const Book = ({ title, author, price, imageUrl }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart, removeFromCart } = useCart();

  const isWishlisted = wishlist.some((book) => book.title === title);
  const isInCart = cart.some((book) => book.title === title);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(title);
    } else {
      addToWishlist({ title, author, price, imageUrl });
    }
  };

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(title);
    } else {
      addToCart({ title, author, price, imageUrl });
    }
  };

  return (
    <div className="book">
      <img src={imageUrl} alt={title} />

      <div className="book-info">
        
        <h3>{author}: {title}</h3>
        <span className="price">{price}</span>
        <div className="button-container">
          <button className={isInCart ? "remove-from-cart" : "add-to-cart"} onClick={handleCartClick}>
            {isInCart ? "Убрать из корзины" : "В корзину"}
          </button>
          {isWishlisted ? (
            <FavoriteIcon className="wishlist-icon" onClick={handleWishlistClick} style={{ color: 'red' }} />
          ) : (
            <FavoriteBorderOutlinedIcon className="wishlist-icon" onClick={handleWishlistClick} />
          )}
        </div>
      </div>
    </div>
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
