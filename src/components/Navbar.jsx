import React, { useState } from "react";
import {
  FiUser,
  FiShoppingCart,
  FiHeart,
  FiSearch,
  FiPhone,
  FiMenu,
  FiX,
} from "react-icons/fi";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const handleSearchSubmit = (event) => {
      event.preventDefault(); // Prevents the default form submission behavior
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };


  const handleCategoryChange = (event) => {
      const selectedCategory = event.target.value;
       if (selectedCategory !== "Trending Categories" && selectedCategory !== "All Categories" ) {
           navigate(`/shop?category=${encodeURIComponent(selectedCategory)}`);
    }
  };


  return (
    <nav className="navbar">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Top Navbar */}
      <div className="navbar-top">
        {/* Logo */}
        <h1 className="logo">Botiga</h1>
        {/* Search & Categories */}
        <div className="search-container">
          <select className="category-dropdown" onChange={handleCategoryChange}>
            <option>All Categories</option>
            <option>Un Categorised</option>
              <option>Body Lotion</option>
              <option>Electronics</option>
              <option>General</option>
              <option>Shoes</option>
              <option>Watches</option>
              <option>Women Clothes</option>
              <option>Fashion</option>
              <option>Sports</option>
              <option>Computer Gadgets</option>
          </select>
          <form className="search-box" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-icon-button">
               <FiSearch className="search-icon" />
            </button>
           </form>
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
        <select className="trending-btn" onChange={handleCategoryChange}>
            <option>Trending Categories</option>
            <option>Body Lotion</option>
            <option>Electronics</option>
            <option>General</option>
            <option>Shoes</option>
            <option>Watches</option>
            <option>Women Clothes</option>
            <option>Fashion</option>
            <option>Sports</option>
          </select>
        <div className="nav-links">
          <a href="/">Home</a>
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