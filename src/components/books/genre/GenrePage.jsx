// GenrePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { bookCollection } from "../BooksData";
import Bookstore, {Book} from "../Bookstore"; // Ensure this is the correct import
import "./GenrePage.css"; // Ensure styles are applied

const GenrePage = () => {
    const { genre } = useParams();
    const decodedGenre = decodeURIComponent(genre); // Decode the genre parameter
  
    // Filter books based on genre
    const filteredBooks = bookCollection.filter(book => book.genre === decodedGenre);
  
    return (
      <div>
        <h2 className="genre-name">{decodedGenre}</h2>
        <Bookstore books={filteredBooks} /> {/* Pass the filtered books to Bookstore */}
      </div>
    );
  };
  
  export default GenrePage;