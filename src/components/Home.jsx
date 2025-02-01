
import '../styles/home.css';
import { FaChevronRight, FaStar,FaRegStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import bodyLotion from '../assets/images/body_Lotion.jpg.webp';
import sports from '../assets/images/cropped-vendor-banner-4-2.jpg.webp';
import computerGadget from '../assets/images/product-category-3.jpg.webp';
import electronics from '../assets/images/product-category-8-1.jpg.webp';
import watch from '../assets/images/product-category-9.jpg.webp';
import womanClothes from '../assets/images/product-category-10.jpg.webp';
import bottle from '../assets/images/product-water-bottle-420x420.jpg.webp';
import alexa from '../assets/images/product-alexa-420x420.jpg.webp';
import headset from '../assets/images/product-wireless-headset-420x420.jpg.webp';
import store1 from '../assets/images/cropped-vendor-banner-5-575x276.jpg.webp';
import store2 from '../assets/images/cropped-vendor-banner-4-2.jpg.webp';
import store3 from '../assets/images/cropped-vendor-banner-6-575x276.jpg.webp';
import store4 from '../assets/images/cropped-vendor-banner-1-1-575x276.jpg.webp';
import store5 from '../assets/images/cropped-vendor-banner-2-575x276.jpg.webp';
import store6 from '../assets/images/cropped-vendor-banner-3-575x276.jpg.webp';
import instagram1 from '../assets/images/instagram-1-380x404.jpg.webp';
import instagram2 from '../assets/images/instagram-2-380x406.jpg.webp';
import instagram3 from '../assets/images/instagram-3-380x404.jpg.webp';
import instagram4 from '../assets/images/instagram-4-380x404.jpg.webp';
import instagram5 from '../assets/images/instagram-5-380x406.jpg.webp';
import instagram6 from '../assets/images/instagram-6-380x404.jpg.webp';

const vendors = [
    { name: "Santa Monica’s Store", location: "New York, NY", image: store1 },
    { name: "Josh Doe’s Store", location: "New York, NY", image: store2 },
    { name: "Digital Good’s Store", location: "New York, NY", image: store3 },
    { name: "Jessica’s Store", location: "New York, NY", image: store4 },
    { name: "The Glass Store", location: "New York, NY", image: store5 },
    { name: "John Doe’s Store", location: "New York, NY", image: store6 },
  ];


const Home = () => {
  return (
    <div className="botiga-container">
        <div className="top-section">
            <div className="sidebar">
                <ul>
                    <li>Electronics</li>
                    <li>Computer Gadget</li>
                    <li>Fashion</li>
                    <li>Body Lotion</li>
                    <li>Woman Clothes</li>
                    <li>Shoes</li>
                    <li>Watches</li>
                </ul>

            </div>
            <section className="hero">
                <h1>Explore our latest and<br/> greatest electronics</h1>
                <button className="shop-btn">SHOP NOW</button>
            </section>
        </div>
        <section className="categories">
            <h2>Popular Categories</h2>
            <div className="category-list">
                <div className="category"><img src={bodyLotion} alt="Body Lotion" /><p>Body Lotion</p></div>
                <div className="category"><img src={sports} alt="Sports" /><p>Sports</p></div>
                <div className="category"><img src={computerGadget} alt="Computer Gadget" /><p>Computer Gadget</p></div>
                <div className="category"><img src={electronics} alt="Electronics" /><p>Electronics</p></div>
                <div className="category"><img src={watch} alt="Watch" /><p>Watch</p></div>
                <div className="category"><img src={womanClothes} alt="Woman Clothes" /><p>Woman Clothes</p></div>
            </div>
        </section>

        <section className="products">
            <h2>New Arrival Products</h2>
            <div className="product-list">
                <div className="product">
                      <div className="image-container">
                          <img src={bottle} alt="All In One Bottle" />
                          <div className='overlay-options'>
                                <button>SELECT OPTIONS</button>
                              </div>
                            <div className='quick-view'>
                                  QUICK VIEW <FaSearch/>
                              </div>
                       </div>

                    <p>All In One Bottle</p><span>$22.00 - $35.00</span><div className="rating-color"><div className="rating">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div><div className="color-options">
                        <div className="color-option" style={{ backgroundColor: "#8c5b2d" }}></div>
                        <div className="color-option" style={{ backgroundColor: "#43674b" }}></div>
                        <div className="color-option" style={{ backgroundColor: "#e0e0e0" }}></div>
                    </div></div>

                  </div>
                <div className="product">
                      <div className="image-container">
                          <img src={alexa} alt="Amazon Alexa" />
                            <div className='overlay-options'>
                                <button>SELECT OPTIONS</button>
                            </div>
                             <div className='quick-view'>
                                  QUICK VIEW <FaSearch/>
                              </div>
                    </div>

                  <p>Amazon Alexa</p><span>$49.00 - $60.00</span><div className="rating-color"><div className="rating">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
                        <div className="color-options">
                            <div className="color-option" style={{ backgroundColor: "#e0e0e0" }}></div>
                       </div></div>

                  </div>
                <div className="product">
                       <div className="image-container">
                          <img src={headset} alt="Headset Gamer Legion" />
                              <div className='overlay-options'>
                                <button>SELECT OPTIONS</button>
                             </div>
                           <div className='quick-view'>
                                  QUICK VIEW <FaSearch/>
                              </div>
                        </div>
                  <p>Headset Gamer Legion</p><span>$22.00 - $55.00</span><div className="rating-color"><div className="rating">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
                        <div className="color-options">
                            <div className="color-option" style={{ backgroundColor: "#8c5b2d" }}></div>
                            <div className="color-option" style={{ backgroundColor: "#e0e0e0" }}></div>
                            <div className="color-option" style={{ backgroundColor: "#a0a0a0" }}></div>
                       </div></div>

                </div>
            </div>
            <button className="shop-btn">SHOP NOW</button>
        </section>
        <section className="vendor-section">
      <h2 className="vendor-title">Our Vendor List</h2>
      <ul className="vendor-grid">
        {vendors.map((vendor, index) => (
          <li key={index} className="vendor-item">
            <img src={vendor.image} alt={vendor.name} className="vendor-image" />
            <div className="vendor-info">
              <p className="vendor-name">{vendor.name}</p>
              <span className="vendor-location">{vendor.location}</span>
            </div>
            <FaChevronRight className="vendor-icon" />
          </li>
        ))}
      </ul>
      </section>
       

        <section className="why-choose-us">
            <h2>Why People Choose Us</h2>
            <div className="why-list">
                <div className="why-item">
                    <h3>Easy Returns</h3>
                    <p>Our return policy is simple and that is why customers love our shop.</p>
                </div>
                <div className="why-item">
                    <h3>Customer Service</h3>
                    <p>Our team helps by finding and solving any issues customers face.</p>
                </div>
                <div className="why-item">
                    <h3>High Quality</h3>
                    <p>We guarantee top quality products that our customers trust.</p>
                </div>
            </div>
        </section>

        <section className="products">
            <h2>Explore Our Products</h2>
            <div className="product-list">
                <div className="product">
                       <div className="image-container">
                            <img src={bottle} alt="All In One Bottle" />
                              <div className='overlay-options'>
                                  <button>SELECT OPTIONS</button>
                              </div>
                           <div className='quick-view'>
                                  QUICK VIEW <FaSearch/>
                              </div>
                          </div>
                    <h4>All In One Bottle</h4>
                    <p>$22.00 - $35.00</p>
                      <div className="rating-color">
                    <div className="rating">
                      <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
                       </div>
                   <div className="color-options">
                        <div className="color-option" style={{ backgroundColor: "#8c5b2d" }}></div>
                        <div className="color-option" style={{ backgroundColor: "#43674b" }}></div>
                        <div className="color-option" style={{ backgroundColor: "#e0e0e0" }}></div>
                    </div>
                      </div>
                </div>
                <div className="product">
                     <div className="image-container">
                             <img src={alexa} alt="Amazon Alexa" />
                           <div className='overlay-options'>
                                <button>SELECT OPTIONS</button>
                              </div>
                             <div className='quick-view'>
                                  QUICK VIEW <FaSearch/>
                              </div>
                       </div>
                    <h4>Amazon Alexa</h4>
                    <p>$49.00 - $60.00</p>
                      <div className="rating-color">
                         <div className="rating">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                      </div>
                         <div className="color-options">
                            <div className="color-option" style={{ backgroundColor: "#e0e0e0" }}></div>
                       </div>
                      </div>

                </div>
                <div className="product">
                       <div className="image-container">
                           <img src={headset} alt="Headset Gamer Legion" />
                             <div className='overlay-options'>
                                <button>SELECT OPTIONS</button>
                             </div>
                            <div className='quick-view'>
                                  QUICK VIEW <FaSearch/>
                              </div>
                        </div>
                    <h4>Headset Gamer Legion</h4>
                    <p>$22.00 - $55.00</p>
                     <div className="rating-color">
                        <div className="rating">
                           <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                     <div className="color-options">
                         <div className="color-option" style={{ backgroundColor: "#8c5b2d" }}></div>
                            <div className="color-option" style={{ backgroundColor: "#e0e0e0" }}></div>
                         <div className="color-option" style={{ backgroundColor: "#a0a0a0" }}></div>
                      </div>
                     </div>
                </div>
            </div>
        </section>

        <section className="instagram-section">
            <h2>Follow us on @instagram</h2>
            <div className="instagram-list">
                <img src={instagram1} alt="Instagram 1" />

                <img src={instagram2} alt="Instagram 2" />
                <img src={instagram3} alt="Instagram 3" />
                <img src={instagram4} alt="Instagram 4" />
                <img src={instagram5} alt="Instagram 5" />
                <img src={instagram6} alt="Instagram 6" />
            </div>
        </section>
    </div>


  );
};

export default Home;