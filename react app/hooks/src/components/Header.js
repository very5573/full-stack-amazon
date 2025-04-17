// components/Header.jsx
import React from 'react';
import '../style/header.css';
import { FaLocationDot, FaMagnifyingGlass, FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Header({ searchTerm, onSearch }) {
  return (
    <div className="navbar">
      <div className="nav-logo border">
        <div className="logo"></div>
      </div>

      <div className="nav-address border">
        <p className="add-first">Deliver to</p>
        <div className="add-icon">
          <FaLocationDot />
          <p className="add-second">India</p>
        </div>
      </div>

      <div className="nav-search">
        <select className="search-select">
          <option>All</option>
          <option>Mobile</option>
          <option>Laptop</option>
          <option>Fashion</option>
          <option>Electronics Deals</option>
        </select>
        <input
          placeholder="Search Amazon"
          className="search-input"
          value={searchTerm}
          onChange={onSearch}
        />
        <div className="search-icon">
          <FaMagnifyingGlass />
        </div>
      </div>

      {/* ✅ Hello, sign in -> goes to /register */}
      <div className="nav-signin">
        <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
          <p><span>Hello, sign in</span></p>
          <p className="nav-second">Account & Lists</p>
        </Link>
      </div>

      <div className="nav-return">
        <p><span>Returns</span></p>
        <p className="nav-second">& Orders</p>
      </div>

      <div className="nav-cart border">
        <Link to="/cart">
          <FaCartShopping />
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
