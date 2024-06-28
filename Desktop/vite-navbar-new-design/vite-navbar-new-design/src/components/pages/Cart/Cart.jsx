import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../Wishlist/WishlistContext';
import './Cart.css';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  const [checkedBooks, setCheckedBooks] = useState(cart.map(() => true));
  const [checkAll, setCheckAll] = useState(true);

  useEffect(() => {
    setCheckedBooks(cart.map(() => checkAll));
  }, [checkAll, cart]);

  const handleQuantityChange = (title, quantity) => {
    if (quantity < 1) return;
    updateQuantity(title, quantity);
  };

  const handleCheckAllChange = (e) => {
    const isChecked = e.target.checked;
    setCheckAll(isChecked);
    setCheckedBooks(cart.map(() => isChecked));
  };

  const handleBookCheckChange = (index) => {
    const newCheckedBooks = [...checkedBooks];
    newCheckedBooks[index] = !newCheckedBooks[index];
    setCheckedBooks(newCheckedBooks);
    setCheckAll(newCheckedBooks.every(Boolean));
  };

  const totalAmount = cart.reduce((sum, book, index) => {
    if (checkedBooks[index]) {
      return sum + book.price * book.quantity;
    }
    return sum;
  }, 0);

  const totalItems = cart.reduce((sum, book, index) => {
    if (checkedBooks[index]) {
      return sum + book.quantity;
    }
    return sum;
  }, 0);

  const isInWishlist = (title) => wishlist.some(item => item.title === title);

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="cart-page">
      <div className="cart-block">
        <div className="cart-content">
          <div className="cart-header">
            <h2>Корзина</h2>
            <label className="check-all-container">
              <input
                type="checkbox"
                checked={checkAll}
                onChange={handleCheckAllChange}
              />
              Выбрать все
            </label>
          </div>
          {cart.length === 0 ? (
            <p>Ваша корзина покупок пуста.</p>
          ) : (
            <div className="cart-items">
              {cart.map((book, index) => (
                <div key={book.title} className="cart-item">
                  <input
                    type="checkbox"
                    checked={checkedBooks[index]}
                    onChange={() => handleBookCheckChange(index)}
                    className="book-checkbox"
                  />
                  <img src={book.imageUrl} alt={book.title} />
                  <div className="cart-item-info">
                    <h3>{book.author}: {book.title}</h3>
                    <div className="quantity-control">
                      <button className="quantity-button" onClick={() => handleQuantityChange(book.title, book.quantity - 1)}>-</button>
                      <span>{book.quantity}</span>
                      <button className="quantity-button" onClick={() => handleQuantityChange(book.title, book.quantity + 1)}>+</button>
                    </div>
                    <div className="cart-action-buttons">
                      <button
                        className="cart-button"
                        onClick={() => toggleWishlist(book.title)} // Toggle wishlist action
                      >
                        {isInWishlist(book.title) ? (
                          <FavoriteOutlinedIcon className="wishlist-icon" />
                        ) : (
                          <FavoriteBorderOutlinedIcon className="wishlist-icon" />
                        )}
                      </button>
                      <button
                        className="cart-remove-button"
                        onClick={() => removeFromCart(book.title)}
                      >
                        <DeleteOutlineOutlinedIcon className="trash-bin-icon" />
                      </button>
                    </div>
                  </div>
                  <span className="cart-price">{book.price * book.quantity} ₸</span>
                </div>
              ))}
              <div className="cart-footer">
                <button className="clear-cart" onClick={clearCart}>
                  Удалить все
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {cart.length > 0 && (
        <div className="cost-info">
          <button className="purchase-button" onClick={handleProceedToPayment}>Перейти к оформлению</button>
          <h3>Товары: {totalItems}</h3>
          <p>Стоимость: {totalAmount} ₸</p>
          <hr className="total-divider" />
          <p className="total">Общая стоимость: {totalAmount} ₸</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
