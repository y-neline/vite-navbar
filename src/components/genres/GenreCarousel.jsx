import React, { useState } from "react";
import "./GenreCarousel.css";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Book = ({ title, author, price, imageUrl }) => {

    
    return (
        <div className="book">
            <img src={imageUrl} alt={title} />
            
            
            <div className="book-info">
                <span className="price">{price}</span>
            
                <h3>{author}: {title}</h3> {/* Combine author and title */}

                <div className="button-container"> {/* New container for buttons */}
                    <button className="add-to-cart">В корзину</button>  {/* New button */}
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
    const bestSellers = [
        {
            title: "Ikigai: The Japanese Secret to a Long and Happy Life",
            author: "Héctor García, Francesc Miralles",
            price: "$23.50",
            imageUrl: "../../../public/images/ikigaii.jpeg",
        },
        {
            title: "1984",
            author: "George Orwell",
            price: "$7.24",
            imageUrl: "../../../public/images/1984.jpg",
        },
        {
            title: "The 48 Laws of Power",
            author: "Robert Greene",
            price: "$14.55",
            imageUrl: "../../../public/images/power.jpg",
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            price: "$16.50",
            imageUrl: "../../../public/images/ato.jpeg",
        },
        {
            title: "Бегущий в Лабиринте. Испытание огнем. Лекарство от смерти",
            author: "Дэшнер Дж.",
            price: "5170₸",
            imageUrl: "../../../public/images/maze-runner.jpg",
        },
        
        // ... other best sellers
    ];

    const classics = [
        {
            title: "Romeo and Juliet",
            author: "William Shakespeare",
            price: "$11.24",
            imageUrl: "../../../public/images/romeo-and-juliet.jpg",
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: "$8.89",
            imageUrl: "../../../public/images/to-kill-a-mockingbird.jpg",
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            price: "$5.59",
            imageUrl: "../../../public/images/pride-prejudice.jpg",
        },
        {
            title: "Fahrenheit 451",
            author: "Ray Bradbury",
            price: "$8.36",
            imageUrl: "../../../public/images/fahrenheit.jpg",
        },
        {
            title: "Fahrenheit 451",
            author: "Ray Bradbury",
            price: "$8.36",
            imageUrl: "../../../public/images/fahrenheit.jpg",
        },
        // ... other classics
    ];

    const children = [
        {
            title: "Alice's Adventures in Wonderland",
            author: "Lewis Carroll",
            price: "$5.24",
            imageUrl: "../../../public/images/al.jpeg",
        },
        {
            title: "Aesop's Fables",
            author: "Aesop",
            price: "$13.99",
            imageUrl: "../../../public/images/aesope.jpg",
        },
        {
            title: "The Little Mermaid",
            author: "Hans Christian Andersen",
            price: "$6.99",
            imageUrl: "../../../public/images/little-mermaid.jpeg",
        },
        {
            title: "The Ugly Duckling",
            author: "Hans Christian Andersen",
            price: "$4.99",
            imageUrl: "../../../public/images/ugly-duckling.jpg",
        },
        {
            title: "The Ugly Duckling",
            author: "Hans Christian Andersen",
            price: "$4.99",
            imageUrl: "../../../public/images/ugly-duckling.jpg",
        }
        // ... other children's books
    ];

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
