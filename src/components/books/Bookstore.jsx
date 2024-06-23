// Bookstore.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Bookstore.css";
import { useWishlist } from "../pages/Wishlist/WishlistContext";
import { useCart } from "../pages/Cart/CartContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Book from "./book/Book";

const Bookstore = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const booksPerPage = 12; // 3 books per line, 4 lines

  useEffect(() => {
    setTotalPages(Math.ceil(books.length / booksPerPage));
  }, [books]);

  // Calculate the books to be displayed on the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Update total pages if books change
  useEffect(() => {
    setTotalPages(Math.ceil(books.length / booksPerPage));
  }, [books, booksPerPage]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Adjust current page if it becomes empty
  useEffect(() => {
    if (currentPage > 1 && currentBooks.length === 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, currentBooks]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;

    if (totalPages === 0) {
      return <p>Empty!</p>;
    }

    // Add "Previous" button
    pageNumbers.push(
      <button
        className="nav-button"
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon />
      </button>
    );

    // Add page numbers
    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={currentPage === i ? "active" : ""}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show first page, ellipsis, and last pages
      pageNumbers.push(
        <button
          key={1}
          className={currentPage === 1 ? "active" : ""}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pageNumbers.push(
          <span key="ellipsis1" className="ellipsis">
            ...
          </span>
        );
      }

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={currentPage === i ? "active" : ""}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(
          <span key="ellipsis2" className="ellipsis">
            ...
          </span>
        );
      }

      pageNumbers.push(
        <button
          key={totalPages}
          className={currentPage === totalPages ? "active" : ""}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    // Add "Next" button
    pageNumbers.push(
      <button
        className="nav-button"
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowRightIcon />
      </button>
    );

    return pageNumbers;
  };

  return (
    <div className="bookstore">
      <div className="books-container">
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => <Book key={book.id} {...book} />)
        ) : (
          <p>Empty!</p>
        )}
      </div>
      {totalPages > 0 && (
        <div className="pagination">
          {renderPageNumbers()}
        </div>
      )}
    </div>
  );
};


export default Bookstore;
