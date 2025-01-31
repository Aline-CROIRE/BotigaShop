import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import '../styles/shop.css';

import image1 from '../assets/images/product-water-bottle-420x420.jpg.webp';
import image2 from '../assets/images/amazone-alexa.webp';
import image3 from '../assets/images/product-wireless-headset-420x420.jpg.webp';
import image4 from '../assets/images/product-headset-2-420x420.jpg1.webp';
import image5 from '../assets/images/wathch.webp';
import image6 from '../assets/images/product-cam-recorder-420x420.jpg.webp';

// Function to render star ratings with colors
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FFD700' }} />);
    }

    if (hasHalfStar) {
        stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} style={{ color: '#FFD700' }} />);
    }

    while (stars.length < 5) {
        stars.push(<FontAwesomeIcon key={`empty${stars.length}`} icon={faStar} style={{ color: '#ccc' }} />);
    }

    return <div className="star-container">{stars}</div>;
};

const Shop = () => {
    return (
        <div className="shop-container">
           {/* Background Header Section */}
           <div className="shop-header">
                <h2 className="shop-title">Shop</h2>
            </div>
            <div className="shop-content">
                {/* Sidebar Filters */}
                <div className="filters">
                    {/* Categories Filter */}
                    <div className="filter-group">
                        <h3>Categories</h3>
                        <ul>
                            <li>Body Lotion <span>(1)</span></li>
                            <li>Computer Gadget <span>(3)</span></li>
                            <li>Electronics <span>(5)</span></li>
                            <li>Fashion <span>(3)</span></li>
                            <li>General <span>(1)</span></li>
                            <li>Shoes <span>(2)</span></li>
                            <li>Sports <span>(3)</span></li>
                            <li>Watch <span>(1)</span></li>
                            <li>Woman Clothes <span>(3)</span></li>
                        </ul>
                    </div>

                    {/* Color Filter */}
                    <div className="filter-group">
                        <h3>Color</h3>
                        <div className="color-options">
                            <span className="color-circle" style={{ backgroundColor: "#A52A2A" }}></span> {/* Brown */}
                            <span className="color-circle" style={{ backgroundColor: "#000000" }}></span> {/* Black */}
                            <span className="color-circle" style={{ backgroundColor: "#808080" }}></span> {/* Gray */}
                            <span className="color-circle" style={{ backgroundColor: "#FFFFFF", border: "1px solid #000" }}></span> {/* White */}
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div className="filter-group">
                        <h3>Rating</h3>
                        <div className="rating-filter">
                            {renderStars(5)} <span>(8)</span>
                        </div>
                        <div className="rating-filter">
                            {renderStars(4)} <span>(4)</span>
                        </div>
                        <div className="rating-filter">
                            {renderStars(3)} <span>(1)</span>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="products-container">
                    {/* Sorting & Results Info */}
                    <div className="products-header">
                        <span className="store-count">Showing 1-9 of 13 results</span>
                        <div className="sorting">
                            <select>
                                <option>Default sorting</option>
                                <option>Sort by Price</option>
                            </select>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="products-grid">
                        {[image1, image2, image3, image4, image5, image6].map((img, index) => (
                            <div className="product" key={index}>
                                <img src={img} alt="Product" />
                                <p className="product-title">Sample Product {index + 1}</p>
                                <p className="product-price">$22.00 - $55.00</p>
                                {renderStars(4)}
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <div className='pagination'>
                        <span>1</span> <span>2</span> <span style={{color: "#ccc"}}>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
