import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Bookstore.css";
import { useWishlist } from "../pages/Wishlist/WishlistContext";
import { useCart } from "../pages/Cart/CartContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { bookCollection } from "./BooksData"; // Import the unified book collection

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
      <div className="store-img-container">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="book-info">
        <p>{title}</p>
        <span className="price">{price} ₸</span>
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

const Bookstore = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12; // 3 books per line, 4 lines

  // Calculate the books to be displayed on the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = bookCollection.slice(indexOfFirstBook, indexOfLastBook);

  // Calculate the total number of pages
  const totalPages = Math.ceil(bookCollection.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;

    // Add "Previous" button
    pageNumbers.push(
      <button className="nav-button"
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {<ArrowLeftIcon/>}
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
        pageNumbers.push(<span key="ellipsis1" className="ellipsis">...</span>);
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
        pageNumbers.push(<span key="ellipsis2" className="ellipsis">...</span>);
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
      <button className="nav-button"
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {<ArrowRightIcon/>}
      </button>
    );

    return pageNumbers;
  };

  return (
    <div className="bookstore">
      <div className="books-container">
        {currentBooks.map((book) => (
          <Book key={book.title} {...book} />
        ))}
      </div>
      <div className="pagination">
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export { Book };

export default Bookstore;
