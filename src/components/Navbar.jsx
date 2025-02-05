import { FiUser, FiShoppingCart, FiHeart, FiSearch, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import "../styles/Navbar.css"; 
import Registration from "../components/Registration"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [model, setModel1] = useState(0);

  const handleRegister = () => {
    setModel1(1); // Show registration modal
  };

  const closeRegister = () => {
    setModel1(0); // Hide registration modal
  };

  return (
    <>
      <nav className="navbar">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Top Navbar */}
        <div className="navbar-top">
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
            <FiUser className="icon" onClick={handleRegister} />
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

        {/* Bottom Navbar */}
        <div className={`navbar-bottom ${menuOpen ? "open" : ""}`}>
          <button className="trending-btn">Trending Categories ▼</button>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/vendor">Vendors</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            <a href='/view'>View</a>
          </div>
          <div className="contact">
            <FiPhone />
            <span>800-123-4567</span>
          </div>
        </div>
      </nav>

      {/* Show Registration Modal Only When model is 1 */}
      {model === 1 && <Registration closeRegister={closeRegister} />}
    </>
  );
};

export default Navbar;
