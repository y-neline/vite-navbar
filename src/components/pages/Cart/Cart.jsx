// CartPage.jsx
import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((book) => (
            <div key={book.title} className="cart-item">
              <img src={book.imageUrl} alt={book.title} />
              <div className="cart-item-info">
                <h3>{book.author}: {book.title}</h3>
                <span className="price">{book.price}</span>
                <button className="cart-button" onClick={() => removeFromCart(book.title)}>Remove from Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
