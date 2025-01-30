import React, { useState } from "react";
import { FiUser, FiShoppingCart, FiHeart, FiSearch, FiPhone, FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css"; 
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
        <Link to="/register"><FiUser className="icon" /></Link>
          <div className="icon-container">
          <FiShoppingCart className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="icon-container">
            <FiHeart className="icon" />
            <span className="badge">0</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Bottom Navbar - Responsive Menu */}
      <div className={`navbar-bottom ${menuOpen ? "open" : ""}`}>
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
