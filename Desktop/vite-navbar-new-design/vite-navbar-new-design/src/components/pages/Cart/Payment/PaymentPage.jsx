/* PaymentPage.jsx */

import React, { useState } from 'react';
import { useCart } from '../CartContext';
import './PaymentPage.css';
import { SettingsAccessibility } from '@mui/icons-material';

const PaymentPage = () => {
    const { cart } = useCart();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('delivery'); // default to delivery

    const DELIVERY_COST = 500; // Example delivery cost

    const totalItemsCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalCost = deliveryOption === 'delivery' ? totalItemsCost + DELIVERY_COST : totalItemsCost;

    const handlePayment = () => {
        // Logic for payment process
        console.log("Payment processed successfully!");
        console.log({ name, phone, address, comment, totalCost, deliveryOption });
        // Redirect or display success message
    };

    return (
        <div className="payment-page">
            <div className="main-content">
            <div className="delivery-info">
                <h2>Оформление заказа</h2>
                <div className="delivery-options">
                    <button
                        className={`option-button ${deliveryOption === 'delivery' ? 'active' : ''}`}
                        onClick={() => setDeliveryOption('delivery')}
                    >
                        Курьером
                    </button>
                    <button
                        className={`option-button ${deliveryOption === 'pickup' ? 'active' : ''}`}
                        onClick={() => setDeliveryOption('pickup')}
                    >
                        Самовывоз
                    </button>
                </div>
                {deliveryOption === 'delivery' && (
                    <div className="delivery-details">
                        <label>
                            Имя:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            Номер телефона:
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <label>
                            Город:
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </label>
                        <label>
                            Адрес:
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>
                    </div>
                )}
                <div className="comment-section">
                    <label>
                        Комментарий к заказу:
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </label>
                </div>
            </div>
        </div>
            <div className="payment-info">
                <h2>Детали оплаты</h2>
                <div className="payment-summary">
                    <ul>
                        {cart.map((item) => (
                            <li key={item.title}>
                                {item.title} - {item.quantity} x {item.price} ₸
                            </li>
                        ))}
                    </ul>
                    <p>Стоимость товаров: {totalItemsCost} ₸</p>
                    {deliveryOption === 'delivery' && <p>Стоимость доставки: {DELIVERY_COST} ₸</p>}
                    <p className="total">Total: {totalCost} ₸</p>
                    <button onClick={handlePayment} className="payment-button">Подтвердить заказ</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
