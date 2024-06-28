// Cart.jsx
import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const handleQuantityChange = (title, quantity) => {
    if (quantity < 1) return;
    updateQuantity(title, quantity);
  };

  const totalAmount = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="clear-cart" onClick={clearCart}>
          Remove All
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((book) => (
            <div key={book.title} className="cart-item">
              <img src={book.imageUrl} alt={book.title} />
              <div className="cart-item-info">
                <h3>{book.author}: {book.title}</h3>
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(book.title, book.quantity - 1)}>-</button>
                  <span>{book.quantity}</span>
                  <button onClick={() => handleQuantityChange(book.title, book.quantity + 1)}>+</button>
                </div>
                <span className="price">{book.price * book.quantity} ₸</span>
                <button className="cart-button" onClick={() => removeFromCart(book.title)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total Amount: {totalAmount} ₸</h3>
          <button className="purchase-button">Proceed to Purchase</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
