import React from "react";
import { FiUser, FiShoppingCart, FiHeart, FiSearch, FiPhone } from "react-icons/fi";
import "../styles/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Top Navbar */}
      <div className="navbar-top">
        {/* Logo */}
        <h1 className="logo">Botiga</h1>

        {/* Search & Categories */}
        <div className="search-container">
          <select className="category-dropdown">
            <option>All Categories</option>
          </select>
          <div className="search-box">
            <input type="text" placeholder="Search products..." />
            <FiSearch className="search-icon" />
          </div>
        </div>

        {/* Icons */}
        <div className="icons-container">
          <FiUser className="icon" />
          <div className="icon-container">
            <FiShoppingCart className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="icon-container">
            <FiHeart className="icon" />
            <span className="badge">0</span>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="navbar-bottom">
        <button className="trending-btn">Trending Categories ▼</button>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/shop">Shop</a>
          <a href="/vendor">Vendors</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="contact">
          <FiPhone />
          <span>800-123-4567</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
