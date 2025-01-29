import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faArrowRight, faBars, faTh } from "@fortawesome/free-solid-svg-icons";
import '../styles/vendor.css';
import image1 from '../assets/images/product-water-bottle-420x420.jpg.webp';
import image2 from '../assets/images/amazone-alexa.webp';
import image3 from '../assets/images/product-wireless-headset-420x420.jpg.webp';
import image4 from '../assets/images/product-headset-2-420x420.jpg1.webp';
import image5 from '../assets/images/wathch.webp';
import image11 from '../assets/images/product-water-bottle-420x420.jpg.webp';
import image22 from '../assets/images/amazone-alexa.webp';
import image33 from '../assets/images/product-wireless-headset-420x420.jpg.webp';
import image44 from '../assets/images/product-headset-2-420x420.jpg1.webp';
import image55 from '../assets/images/wathch.webp';

const Vendors = () => {

     const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
          stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
        }
        
        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon key={`empty${i}`} icon={faStar} style={{ color: '#ccc' }}/>);
        }
    
        return <div className="star-container">{stars}</div>;
    };


  return (
    <div className="store-list-container">
      <h2 className="store-list-title">Store List</h2>
      <div className="store-list-header">
        <p>Total stores showing: 6</p>
        <div className="store-list-options">
            <button className="filter-button">  <FontAwesomeIcon icon={faBars} style={{marginRight: '5px'}} />Filter</button>
            <div className='sorting'>
               <p>Sort by:</p> <select>
                    <option>Most Recent</option>
                    <option>Name</option>
                </select>
            </div>
           <div className="view-icons">
                   <FontAwesomeIcon icon={faTh}  style={{marginRight: '5px'}} />
                   <FontAwesomeIcon icon={faBars} />
              </div>
         </div>
      </div>
      <div className="stores-grid">
          <div className="store-card">
            <div className="store-image">
                  <img src={image1} alt="John Doe's Store" />
                <div className="store-avatar">
                    <img src={image11} alt="store avatar"/>
               </div>
            </div>
            <div className="store-details">
              <h3>John Doe Store</h3>
                {renderStars(4.5)}
                <p className="store-address">Central Park, New York, New York, United States (US)</p>
                 <button className='store-button'> <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
          </div>

          <div className="store-card">
            <div className="store-image">
                <img src={image2} alt="Jessica's Store" />
                 <div className="store-avatar">
                    <img src={image22} alt="store avatar"/>
                </div>
            </div>
            <div className="store-details">
              <h3>Jessica  Store</h3>
                {renderStars(4)}
              <p className="store-address">Central Park, New York, New York, United States (US)</p>
               <button className='store-button'> <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
          </div>

          <div className="store-card">
            <div className="store-image">
              <img src={image3} alt="Santa Monica's Store" />
               <div className="store-avatar">
                 <img src={image33} alt="store avatar"/>
                </div>
            </div>
            <div className="store-details">
              <h3>Santa Monica Store</h3>
                {renderStars(5)}
              <p className="store-address">Central Park, New York, New York, United States (US)</p>
              <button className='store-button'> <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
          </div>
           
            <div className="store-card">
            <div className="store-image">
                  <img src={image4} alt="Digital Good's Store" />
                  <div className="store-avatar">
                    <img src={image44} alt="store avatar"/>
                </div>
            </div>
            <div className="store-details">
              <h3>Digital Good  Store</h3>
                 {renderStars(4.5)}
              <p className="store-address">Central Park, New York, New York, United States (US)</p>
               <button className='store-button'> <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
            </div>

         <div className="store-card">
            <div className="store-image">
                  <img src={image5} alt="The Glass Store" />
                  <div className="store-avatar">
                    <img src={image55} alt="store avatar"/>
                </div>
            </div>
            <div className="store-details">
              <h3>The Glass Store</h3>
                {renderStars(4)}
              <p className="store-address">Central Park, New York, New York, United States (US)</p>
               <button className='store-button'> <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
          </div>

        <div className="store-card">
            <div className="store-image">
                  <img src={image4} alt="Josh Doe's Store" />
                  <div className="store-avatar">
                    <img src={image11} alt="store avatar"/>
                </div>
            </div>
            <div className="store-details">
              <h3>Josh Doe Store</h3>
                {renderStars(5)}
              <p className="store-address">Central Park, New York, New York, United States (US)</p>
                <p className="store-address">123456789</p>
               <button className='store-button'> <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Vendors;