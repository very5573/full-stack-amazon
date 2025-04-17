// src/pages/CartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // for navigation
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cartSlice';
import '../style/cartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleBuyNow = () => {
    navigate('/success');
  };

  const handleCloseCart = () => {
    navigate(-1); // Goes back to the previous page, like closing
  };

  return (
    <div className="cart-page">
      {/* Close Button */}
      <button className="close-cart-btn" onClick={handleCloseCart}>✕</button>

      <h2>Your Cart</h2>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>
              <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total Price: ₹{totalPrice}</h3>
          <button className="buy-now-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
