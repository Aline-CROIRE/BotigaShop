import { FiUser, FiShoppingCart, FiHeart, FiSearch, FiPhone, FiMenu, FiX, FiLogOut, FiUserCheck } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import Registration from "../components/Registration";
import Login from "../components/Login";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);  
    const [model, setModel] = useState(null); 
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); 
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://botigashop-api.onrender.com/api/categories");
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Could not fetch categories:", error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get("search");
        if (search) setSearchQuery(search);
    }, [location.search]);

    useEffect(() => {
        const fetchUserRole = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const response = await fetch("https://botigashop-api.onrender.com/api/users/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    if (!response.ok) throw new Error("Failed to fetch user data");
                    const data = await response.json();
                    setUserRole(data.role);
                } catch (error) {
                    console.error("Error fetching user role:", error);
                }
            }
        };

        fetchUserRole();

        const handleStorageChange = () => {
            setIsLoggedIn(!!localStorage.getItem("token"));
            fetchUserRole();
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleSearchChange = (event) => setSearchQuery(event.target.value);
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    };

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if (selectedCategory !== "Trending Categories" && selectedCategory !== "All Categories") {
            navigate(`/shop?category=${encodeURIComponent(selectedCategory)}`);
        }
    };

    const handleRegister = () => {
        setModel("register");
        setShowUserMenu(false);
    };

    const handleLogin = () => {
        setModel("login");
        setShowUserMenu(false);
    };

    const closeModal = () => {
        setModel(null);
        setIsLoggedIn(!!localStorage.getItem("token"));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsLoggedIn(false);
        setUserRole(null);
        setShowUserMenu(false);
        navigate("/");
    };

    return (
        <>
            <nav className="navbar">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <div className="navbar-top">
                    <h1 className="logo">Botiga</h1>

                    <div className="search-container">
                        <select className="category-dropdown" onChange={handleCategoryChange}>
                            <option>All Categories</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
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

                    <div className="icons-container">
                        <div className="user-menu-container">
                            <FiUser className="icon" onClick={() => setShowUserMenu(!showUserMenu)} />
                            {showUserMenu && (
                                <div className="user-dropdown">
                                    {isLoggedIn ? (
                                        <>
                                            {userRole === "admin" && (
                                                <Link to="/dashboard" className="user-dropdown-item">
                                                    <FiUserCheck className="dropdown-icon" /> Dashboard
                                                </Link>
                                            )}
                                            <Link to="/profile" className="user-dropdown-item">
                                                <FiUserCheck className="dropdown-icon" /> Profile
                                            </Link>
                                            <button onClick={handleLogout} className="user-dropdown-item logout">
                                                <FiLogOut className="dropdown-icon" /> Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={handleLogin} className="user-dropdown-item">
                                                <FiUser className="dropdown-icon" /> Login
                                            </button>
                                            <button onClick={handleRegister} className="user-dropdown-item">
                                                <FiUser className="dropdown-icon" /> Register
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="icon-container">
                            <FiShoppingCart className="icon" />
                            <span className="badge">0</span>
                        </div>
                        <div className="icon-container">
                            <FiHeart className="icon" />
                            <span className="badge">0</span>
                        </div>
                    </div>

                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                <div className={`navbar-bottom ${menuOpen ? "open" : ""}`}>
                    <select className="trending-btn" onChange={handleCategoryChange}>
                        <option>Trending Categories</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/vendor">Vendors</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                        {isLoggedIn && userRole === "admin" && <Link to="/dashboard">Dashboard</Link>}
                    </div>
                    <div className="contact">
                        <FiPhone />
                        <span>800-123-4567</span>
                    </div>
                </div>
            </nav>

            {model === "register" && <Registration closeRegister={closeModal} />}
            {model === "login" && <Login closeSignin={closeModal} />}
        </>
    );
};

export default Navbar;
