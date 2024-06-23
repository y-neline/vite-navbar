import React from "react";
import { useParams } from "react-router-dom";
import { bookCollection } from "../BooksData"; // Import the unified book collection
import { useCart } from "../../pages/Cart/CartContext";
import { useWishlist } from "../../pages/Wishlist/WishlistContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./BookDetailsPage.css";
import { Description } from "@mui/icons-material";

const BookDetailsPage = () => {
    const { title } = useParams(); // Get 'title' parameter from URL
    const { cart, addToCart, removeFromCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

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

    // Find the specific book based on 'title'
    const book = bookCollection.find(
        (book) => book.title === decodeURIComponent(title)
    );

    // Handle case where book is not found
    if (!book) {
        return <div>Book not found for title: {title}</div>;
    }

    // Destructure book properties
    const {
        author,
        price,
        imageUrl,
        description,
        ISBN,
        publicationDate,
        publisher,
        genre,
        subgenre,
        language,
        stockQuantity,
        characteristics,
    } = book;

    return (
        <div className="book-details-container">
            <h2 className="book-details-title">{title}</h2>
            <div className="info">
                <div className="book-details-book-cover">
                    <div className="book-cover-background">
                        <div className="det-image">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="book-details-cover-image"
                        />
                        </div>
                        <div className="details-button-container">
                            <button
                                className={
                                    isInCart
                                        ? "details-remove-from-cart"
                                        : "details-add-to-cart"
                                }
                                onClick={handleCartClick}
                            >
                                {isInCart ? "Убрать из корзины" : "В корзину"}
                            </button>
                            {isWishlisted ? (
                                <FavoriteIcon
                                    className="details-wishlist-icon"
                                    onClick={handleWishlistClick}
                                    style={{ color: "red" }}
                                />
                            ) : (
                                <FavoriteBorderOutlinedIcon
                                    className="details-wishlist-icon"
                                    onClick={handleWishlistClick}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="book-details-right">
                    <div className="book-details-header">
                        <h3>Description</h3>
                        <p>{description}</p>
                    </div>
                    <div className="characteristics">
                        <h3>Characteristics:</h3>
                        <ul>
                            <li>ISBN: {ISBN}</li>
                            <li>Publication Date: {publicationDate}</li>
                            <li>Publisher: {publisher}</li>
                            <li>Genre: {genre}</li>
                            <li>Subgenre: {subgenre}</li>
                            <li>Language: {language}</li>
                            <li>Stock Quantity: {stockQuantity}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
