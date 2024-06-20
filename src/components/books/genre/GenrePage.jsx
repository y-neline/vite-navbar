// GenrePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { bookCollection } from "../BooksData";
import {Book} from "../Bookstore"; // Ensure this is the correct import
import "../Bookstore.css"; // Ensure styles are applied

const GenrePage = () => {
  const { genre } = useParams();
  const decodedGenre = decodeURIComponent(genre); // Decode the genre parameter

  // Debug: Log genre and bookCollection
  console.log("Selected Genre:", decodedGenre);
  console.log("Book Collection:", bookCollection);

  const filteredBooks = bookCollection.filter(book => book.genre === decodedGenre);

  // Debug: Log filtered books
  console.log("Filtered Books:", filteredBooks);

  return (
    <div className="bookstore">
      <h2>{decodedGenre}</h2>
      <div className="books-container">
        {filteredBooks.map(book => (
          <Book key={book.id} {...book} /> // Ensure key is unique and valid
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
