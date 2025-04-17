import React, { useState } from 'react';
import "../style/FashionPage.css";
import fashionImages from "../data/fashionData";

// Redux
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const FashionPage = ({ searchTerm }) => {
  const [sortType, setSortType] = useState("");
  const dispatch = useDispatch();

  // Filter based on search term
  let filtered = fashionImages.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting
  if (sortType === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  // Add product to cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="fashion-page">
      <div className="sort-buttons">
        <button onClick={() => setSortType("low")}>Price: Low to High</button>
        <button onClick={() => setSortType("high")}>Price: High to Low</button>
      </div>

      <div className="fashion-product-grid">
        {filtered.map((item) => (
          <div className="fashion-product-card" key={item.id}>
            <div className="fashion-product-image-container">
              <img src={item.img} alt={item.title} />
              <div className="fashion-hover-overlay">
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>
                <button
                  className="fashion-add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionPage;
