// GenrePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { bestSellers, classics, children } from "../BooksData";
import { Book } from "../Bookstore";// This should import only the Book component
import "./GenrePage.css"

const GenrePage = () => {
    const { genre } = useParams();
  
    const getBooksByGenre = (genre) => {
        switch (genre) {
            case "best-sellers":
                return bestSellers;
            case "classics":
                return classics;
            case "children":
                return children;
            default:
                return [];
        }
    };
  
    const books = getBooksByGenre(genre);
  
    return (
        <div className="genre-page">
            <h2>{genre.replace("-", " ").toUpperCase()}</h2>
            <div className="books-container">
                {books.map((book) => (
                    <Book key={book.title} {...book} />
                ))}
            </div>
        </div>
    );
};

export default GenrePage;
