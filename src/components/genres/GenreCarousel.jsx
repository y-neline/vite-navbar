import React, { useState } from "react";
import "./GenreCarousel.css";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { bestSellers, classics, children } from "./Books"; // Import from new file

const Book = ({ title, author, price, imageUrl }) => {
    return (
        <div className="book">
            <img src={imageUrl} alt={title} />

            <div className="book-info">
                <span className="price">{price}</span>
                <h3>
                    {author}: {title}
                </h3>{" "}
                {/* Combine author and title */}
                <div className="button-container">
                    {" "}
                    {/* New container for buttons */}
                    <button className="add-to-cart">В корзину</button>{" "}
                    {/* New button */}
                    <FavoriteBorderOutlinedIcon className="wishlist-icon" />
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

const Bookstore = () => {
    return (
        <div className="bookstore">
            <Genre
                title="Best Seller"
                books={bestSellers}
                viewAllLink="/best-sellers"
            />

            <Genre title="Classics" books={classics} viewAllLink="/classics" />

            <Genre title="Children" books={children} viewAllLink="/children" />
        </div>
    );
};

export default Bookstore;
