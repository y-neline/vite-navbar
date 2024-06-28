// Book.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../pages/Wishlist/WishlistContext";
import { useCart } from "../../pages/Cart/CartContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
        <Link to={`/book/${encodeURIComponent(title)}`} className="book-link">
        <div className="store-img-container">
          <img src={imageUrl} alt={title} />
        </div>
        </Link>
  
        <div className="book-info">
        <Link to={`/book/${encodeURIComponent(title)}`} className="book-link-title">
          <p className="book-title">{title}</p>
          </Link>
          <span className="price">{price} ₸</span>
          <div className="button-container">
            <button
              className={isInCart ? "remove-from-cart" : "add-to-cart"}
              onClick={handleCartClick}
            >
              {isInCart ? "Убрать из корзины" : "В корзину"}
            </button>
            {isWishlisted ? (
              <FavoriteIcon
                className="wishlist-icon"
                onClick={handleWishlistClick}
                style={{ color: "red" }}
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                className="wishlist-icon"
                onClick={handleWishlistClick}
              />
            )}
          </div>
        </div>
      </div>
      
    );
  };
export default Book;
