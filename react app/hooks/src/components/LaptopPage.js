import React, { useState } from 'react';
import "../style/LaptopPage.css";  // Import the CSS for styling
import laptopImages from "../data/laptopData";  // Import your laptop data array
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';  // Redux action to add items to cart

const LaptopPage = ({ searchTerm }) => {
  const [sortType, setSortType] = useState("");  // State for sorting
  const dispatch = useDispatch();  // Dispatch function for Redux

  // Filter items based on search term
  let filtered = laptopImages.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())  // Search filter
  );

  // Sorting logic
  if (sortType === "low") {
    filtered.sort((a, b) => a.price - b.price);  // Sorting by price (low to high)
  } else if (sortType === "high") {
    filtered.sort((a, b) => b.price - a.price);  // Sorting by price (high to low)
  }

  // Handle "Add to Cart" button click
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="laptop-page">
      {/* Sorting buttons */}
      <div className="sort-buttons">
        <button onClick={() => setSortType("low")}>Price: Low to High</button>
        <button onClick={() => setSortType("high")}>Price: High to Low</button>
      </div>

      {/* Grid of laptop products */}
      <div className="laptop-product-grid">
        {filtered.map((item, idx) => (
          <div className="laptop-product-card" key={idx}>
            <div className="laptop-product-image-container">
              <img src={item.img} alt={item.title} />
              <div className="laptop-hover-overlay">
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>
                <button 
                  className="laptop-add-to-cart-btn"
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

export default LaptopPage;
