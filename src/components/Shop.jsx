import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faBars, faTh } from "@fortawesome/free-solid-svg-icons";
import '../styles/shop.css';

import image1 from '../assets/images/product-water-bottle-420x420.jpg.webp';
import image2 from '../assets/images/amazone-alexa.webp';
import image3 from '../assets/images/product-wireless-headset-420x420.jpg.webp';
import image4 from '../assets/images/product-headset-2-420x420.jpg1.webp';
import image5 from '../assets/images/wathch.webp';
import image6 from '../assets/images/product-cam-recorder-420x420.jpg.webp';




const Shop = () => {

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
    <div className="shop-container">
      <h2 className="shop-title">Shop</h2>
      <div className="shop-content">
        <div className="filters">
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

          <div className="filter-group">
            <h3>Color</h3>
            <div className="color-filter">
              <div className="color-circle" style={{backgroundColor: "#e0e0e0"}} />
              <div className="color-circle" style={{backgroundColor: "#d45500"}} />
              <div className="color-circle" style={{backgroundColor: "#4a94d6"}} />
                <div className="color-circle" style={{ backgroundColor: "#a0a0a0" }}/>
                <div className="color-circle" style={{ backgroundColor: "#8c5b2d" }}/>
                
            </div>
          </div>


           <div className="filter-group">
            <h3>Rating</h3>
             <div className="rating-filter">
                 <div> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <span>(8)</span></div>
                <div>  <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <span>(4)</span></div>
                <div>  <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <span>(1)</span></div>
                </div>
          </div>

            <div className="filter-group">
              <h3>Price</h3>
              <div className="price-filter">
                  <div className='price-slider-container'>
                        <input type="range" min="0" max="79" />
                    <div className="price-range">
                     <span>$0</span> <span>$79</span>
                  </div>
              </div>
             </div>
            </div>
        </div>

        <div className="products">
           <div className="products-header">
            <p>Showing 1-9 of 13 results</p>
              <div className="sorting">
                  <select>
                  <option>Default sorting</option>
                    <option>Sort by Price</option>
                  </select>
                 <div className="view-icons">
                   <FontAwesomeIcon icon={faBars} style={{marginRight: '5px'}} />
                   <FontAwesomeIcon icon={faTh} />
                   </div>
            </div>
           </div>
            
            <div className="products-grid">
                <div className="product">
                    <img src={image1} alt="All In One Bottle" />
                    <p className="product-title">All In One Bottle</p>
                    <p className="product-price">$22.00 - $55.00</p>
                    {renderStars(4.5)}
                    <div className='color-options'>
                            <div className='color-option' style={{backgroundColor: "#8c5b2d"}}></div>
                            <div className='color-option' style={{backgroundColor: "#43674b"}}></div>
                            <div className='color-option' style={{ backgroundColor: "#e0e0e0" }}></div>
                      </div>
                  </div>

                <div className="product">
                  <img src={image2} alt="Amazon Alexa" />
                  <p className="product-title">Amazon Alexa</p>
                  <p className="product-price">$49.00 - $69.00</p>
                     {renderStars(5)}
                    <div className='color-options'>
                        <div className='color-option' style={{ backgroundColor: "#e0e0e0" }}></div>
                    </div>
                </div>

                <div className="product">
                <img src={image3} alt="Headset Gamer Legion" />
                    <p className="product-title">Headset Gamer Legion</p>
                <p className="product-price">$22.00 - $55.00</p>
                     {renderStars(4)}
                    <div className='color-options'>
                          <div className='color-option' style={{ backgroundColor: "#8c5b2d" }}></div>
                          <div className='color-option' style={{ backgroundColor: "#e0e0e0" }}></div>
                          <div className='color-option' style={{ backgroundColor: "#a0a0a0" }}></div>
                    </div>
                </div>
                
              <div className="product">
                    <img src={image4} alt="Headset Gamer Legion Plus" />
                    <p className="product-title">Headset Gamer Legion Plus</p>
                    <p className="product-price">$22.00 - $55.00</p>
                    {renderStars(4)}
                    <div className='color-options'>
                        <div className='color-option' style={{ backgroundColor: "#8c5b2d" }}></div>
                        <div className='color-option' style={{ backgroundColor: "#e0e0e0" }}></div>
                        <div className='color-option' style={{ backgroundColor: "#a0a0a0" }}></div>
                    </div>
                </div>
                
                <div className="product">
                <img src={image1} alt="Jdoe's Styling Watch" />
                    <p className="product-title">Jdoes Styling Watch</p>
                    <p className="product-price">$22.00 - $33.00</p>
                    {renderStars(5)}
                      <div className='color-options'>
                         <div className='color-option' style={{ backgroundColor: "#4a94d6" }}></div>
                        <div className='color-option' style={{ backgroundColor: "#e0e0e0" }}></div>
                    </div>
                </div>
                
                <div className="product">
                <img src={image5} alt="Jessi Cam Recorder" />
                    <p className="product-title">Jessi Cam Recorder</p>
                    <p className="product-price">$22.00 - $55.00</p>
                     {renderStars(4)}
                     <div className='color-options'>
                         <div className='color-option' style={{ backgroundColor: "#8c5b2d" }}></div>
                        <div className='color-option' style={{ backgroundColor: "#e0e0e0" }}></div>
                         <div className='color-option' style={{ backgroundColor: "#a0a0a0" }}></div>
                    </div>
                </div>
                
                <div className="product">
                  <img src={image6} alt="John Sport Shoes" />
                    <p className="product-title">John Sport Shoes</p>
                    <p className="product-price">$22.00 - $55.00</p>
                     {renderStars(5)}
                     <div className='color-options'>
                            <div className='color-option' style={{ backgroundColor: "#e0e0e0" }}></div>
                            <div className='color-option' style={{ backgroundColor: "#a0a0a0" }}></div>
                         <div className='color-option' style={{ backgroundColor: "#d45500" }}></div>
                     </div>
                </div>
                
                <div className="product">
                <img src={image3} alt="Mouse Razer 3000DPI" />
                    <p className="product-title">Mouse Razer 3000DPI</p>
                    <p className="product-price">$22.00 - $55.00</p>
                     {renderStars(4)}
                     <div className='color-options'>
                         <div className='color-option' style={{ backgroundColor: "#8c5b2d" }}></div>
                         <div className='color-option' style={{ backgroundColor: "#e0e0e0" }}></div>
                           <div className='color-option' style={{ backgroundColor: "#a0a0a0" }}></div>
                    </div>
                </div>
                
                <div className="product">
                  <img src={image5} alt="Santa Monica Facial Cream" />
                    <p className="product-title">Santa Monica Facial Cream</p>
                    <p className="product-price">$22.00 - $55.00</p>
                     {renderStars(4)}
                      <div className='color-options'>
                          <div className='color-option' style={{ backgroundColor: "#d45500" }}></div>
                          <div className='color-option' style={{ backgroundColor: "#8c5b2d" }}></div>
                           <div className='color-option' style={{ backgroundColor: "#e0e0e0" }}></div>
                    </div>
                </div>
            </div>
              <div className='pagination'>
                <span>1</span> <span>2</span> <span style={{color: "#ccc"}}>→</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;