import { FiUser, FiShoppingCart, FiHeart, FiSearch, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import "../styles/Navbar.css"; 
import { useNavigate } from "react-router";
import Registration from "../components/Registration"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [model, setModel1] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location object


  useEffect(() => {
    // Extract search query or category from URL when the location changes
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    const category = params.get('category');

    if (search) {
      setSearchQuery(search); // Update search input if needed
    }

    // You might want to update the selected category in the dropdown as well
    // if the category param is present in the URL
  }, [location.search]); //  Dependency array:  Only run when location.search changes


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
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/vendor">Vendors</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
           
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
