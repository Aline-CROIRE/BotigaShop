import React from "react";
import "../styles/vendor.css";
import { FaStar,FaFilter , FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faBars, faTh } from "@fortawesome/free-solid-svg-icons";
import image1 from "../assets/images/vendor1.png";
import image2 from "../assets/images/vendor2.png";
import image3 from "../assets/images/vendor3.png";
import image4 from "../assets/images/cropped-vendor-banner-4-2.jpg.webp";
import image5 from "../assets/images/vendor 4.png";
import image6 from "../assets/images/vendor5.png";


const stores = [
  {
    name: "John Doe's Store",
    location: "Central Park, New York, United States (US)",
    rating: 4,
    image:image1,
    avatar: image1,
  },
  {
    name: "Jessica's Store",
    location: "Central Park, New York, United States (US)",
    rating: 3.5,
    image: image2,
    avatar: image2,
  },
  {
    name: "Santa Monica's Store",
    location: "Central Park, New York, United States (US)",
    rating: 4,
    image: image3,
    avatar: image3,
  },
  {
    name: "Digital Good's Store",
    location: "Central Park, New York, United States (US)",
    rating: 4.5,
    image: image4,
    avatar:image4,
  },
  {
    name: "The Glass Store",
    location: "Central Park, New York, United States (US)",
    rating: 3,
    image: image5,
    avatar: image5,
  },
  {
    name: "Josh Doe's Store",
    location: "Central Park, New York, United States (US)",
    rating: 5,
    image: image6,
    avatar: image6,
    phone: "123456789",
  },
];

const Vendor = () => {
  return (
    <div className="vendor-list">
         <h2 className="store-list-title">Store List</h2>

<div className="filter-bar">
      {/* Total Stores Count */}
      <span className="store-count">Total stores showing: 6</span>

      {/* Filter & Sorting Controls */}
      <div className="filter-controls">
        <button className="filter-button">
          <FaFilter className="icon" /> Filter
        </button>

        <div className="sort-section">
          <span className="sort-label">Sort by:</span>
          <select className="sort-dropdown">
            <option>Most Recent</option>
          </select>
        </div>

        {/* Layout Switcher (Grid & List Icons) */}
        <div className="layout-icons">
          <faTh className="layout-icon active" />
          <faBars className="layout-icon" />
        </div>
        <div className="view-icons">
                   <FontAwesomeIcon icon={faTh}  style={{marginRight: '5px'}} />
                   <FontAwesomeIcon icon={faBars} />
              </div>
      </div>
      
    </div>   
      <div className="vendor-grid">
        {stores.map((store, index) => (
          <div className="vendor-card" key={index}>
            <img src={store.image} alt={store.name} className="store-image" />
            <div className="store-info">
              <h3>{store.name}</h3>
              <div className="rating">
                {Array.from({ length: Math.floor(store.rating) }, (_, i) => (
                  <FaStar key={i} className="star" />
                ))}
                {store.rating % 1 !== 0 && <FaStar className="half-star" />}
              </div>
              <p>{store.location}</p>
              {store.phone && <p>📞 {store.phone}</p>}
            </div>
            <div className="avatar">
              <img src={store.avatar} alt="owner" />
            </div>
            <div className="arrow">
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Vendor;