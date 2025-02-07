import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import bottle from '../assets/images/product-water-bottle-420x420.jpg.webp';
import alexa from '../assets/images/product-alexa-420x420.jpg.webp';
import headset from '../assets/images/product-wireless-headset-420x420.jpg.webp';
import { FaStar, FaRegStar, FaHeart, FaMapMarkerAlt, FaPhone, FaSearch, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import '../styles/product.css';
import { FaMinus, FaPlus } from 'react-icons/fa';
import relatedProduct1 from '../assets/images/amazone-alexa.webp';
import relatedProduct2 from '../assets/images/amazone-alexa.webp';
import thumbnail1 from '../assets/images/amazone-alexa.webp';
import thumbnail2 from '../assets/images/amazone-alexa.webp';
import thumbnail3 from '../assets/images/amazone-alexa.webp';
import vendorImage from '../assets/images/amazone-alexa.webp';
import image4 from '../assets/images/shop4.webp';
import image5 from '../assets/images/shop5.webp';
import image6 from '../assets/images/shop6.webp';
import image7 from '../assets/images/shop12.webp';
import image8 from '../assets/images/shop13.webp';
import image9 from '../assets/images/shop14.webp';
import ss1 from '../assets/images/s1.jpg'
import ss2 from '../assets/images/s2.jpg'
import mm1 from '../assets/images/m1.webp'
import mm2 from '../assets/images/m2.webp'
import ll1 from '../assets/images/l1.webp'
import ll2 from '../assets/images/l2.jpg'
import ll3 from '../assets/images/l3.jpg'
import cc1 from '../assets/images/c1.jpg'
import { Headset } from 'lucide-react';
import ww1 from '../assets/images/w1.jpg'
import ww2 from '../assets/images/w2.jpg'








const newArrivalProducts = [
    {
        id: 1, name: "All In One Bottle", priceRange: "$22.00 – $55.00", image: bottle, rating: 3, colors: ["#fff", "#8c5b2d", "#43674b", "#e0e0e0"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", vendor: { name: "Jessica Doe", image: vendorImage, address: "Central Park, New York, NY" }, additionalInfo: "Weight: 0.5 kg, Dimensions: 10 x 10 x 20 cm", sku: "N/A", category: "General, Sports",
        relatedProducts: [
            { id: 101, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
            { id: 102, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
        ],
        thumbnails: [bottle, thumbnail2, thumbnail3], vendorRating: 4.0, vendorReviews: 2,
    },
    {
        id: 2, name: "Amazon Alexa", priceRange: "$49.00 – $69.00", image: alexa, rating: 3, colors: ["#e0e0e0", "#8c5b2d"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", vendor: { name: "Rebecca Doe", image: vendorImage, address: "Central Park, New York, NY" }, additionalInfo: "Connectivity: Bluetooth, Wi-Fi", sku: "N/A", category: "Electronics",
        relatedProducts: [
            { id: 201, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
            { id: 202, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
        ],
        thumbnails: [alexa, ll2, headset], vendorRating: 4.5, vendorReviews: 5,
    },
    {
        id: 3, name: "Headset Gamer Legion", priceRange: "$22.00 – $55.00", image: headset, rating: 5, colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"], description: "Description of the gaming headset.", vendor: { name: "Legion Gaming", image: vendorImage, address: "Los Angeles, CA" }, additionalInfo: "Impedance: 32 Ohms, Frequency Response: 20Hz-20kHz", sku: "N/A", category: "Electronics",
        relatedProducts: [
            { id: 301, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
            { id: 302, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
        ],
        thumbnails: [headset, cc1, alexa], vendorRating: 5.0, vendorReviews: 10,
    },

 {
      id: 4,
      name: "Headset Gamer Legion Plus",
      price: "$22.00 - $55.00",
      rating: 4,
      image: image4,
      rating: 5, colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"], description: "Description of the gaming headset.", vendor: { name: "Legion Gaming", image: vendorImage, address: "Los Angeles, CA" }, additionalInfo: "Impedance: 32 Ohms, Frequency Response: 20Hz-20kHz", sku: "N/A", category: "Electronics",
        relatedProducts: [
            { id: 301, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
            { id: 302, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
        ],
        thumbnails: [image4, headset, Headset], vendorRating: 5.0, vendorReviews: 10,
    },
    {
      id: 5,
      name: "Jdoes Styling Watch",
      price: "$22.00 - $33.00",
      rating: 5,
      image: image5,
      rating: 5, colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"], description: "Description of the gaming headset.", vendor: { name: "Legion Gaming", image: vendorImage, address: "Los Angeles, CA" }, additionalInfo: "Impedance: 32 Ohms, Frequency Response: 20Hz-20kHz", sku: "N/A", category: "Electronics",
        relatedProducts: [
            { id: 301, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
            { id: 302, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
        ],
        thumbnails: [image5, ww1, ww2], vendorRating: 5.0, vendorReviews: 10,

    },
    {
      id: 6,
      name: "Jessi Cam Recorder",
      price: "$22.00 - $55.00",
      rating: 4,
      image: image6,
      rating: 5, colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"], description: "Description of the gaming headset.", vendor: { name: "Legion Gaming", image: vendorImage, address: "Los Angeles, CA" }, additionalInfo: "Impedance: 32 Ohms, Frequency Response: 20Hz-20kHz", sku: "N/A", category: "Electronics",
        relatedProducts: [
            { id: 301, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
            { id: 302, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
        ],
        thumbnails: [image6, cc1, headset], vendorRating: 5.0, vendorReviews: 10,
    },
    {
      id: 7,
      name: "John Sport Shoes",
      price: "$22.00 - $55.00",
      rating: 5,
      image: image7,
      crating: 5, colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"], description: "Description of the gaming headset.", vendor: { name: "Legion Gaming", image: vendorImage, address: "Los Angeles, CA" }, additionalInfo: "Impedance: 32 Ohms, Frequency Response: 20Hz-20kHz", sku: "N/A", category: "Electronics",
      relatedProducts: [
          { id: 301, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
          { id: 302, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
      ],
      thumbnails: [image7,ss1,ss2], vendorRating: 5.0, vendorReviews: 10,
    },
    {
      id: 8,
      name: "Mouse Razer 3000DPI",
      price: "$22.00 - $55.00",
      rating: 4,
      image: image8,
      colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"],
      category: "Computer Gadgets",
      popularity: 2,
      dateAdded: new Date('2023-12-25'),
      description: "High-precision gaming mouse with customizable DPI.",rating: 5, colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"], description: "Description of the gaming headset.", vendor: { name: "Legion Gaming", image: vendorImage, address: "Los Angeles, CA" }, additionalInfo: "Impedance: 32 Ohms, Frequency Response: 20Hz-20kHz", sku: "N/A", category: "Electronics",
      relatedProducts: [
          { id: 301, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
          { id: 302, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
      ],
      thumbnails: [image8, mm1,alexa,mm2], vendorRating: 5.0, vendorReviews: 10,
    },
    {
      id: 9,
      name: "Santa Monica Facial Cream",
      image:image9,
      price: "$22.00 - $55.00",
      rating: 4,
      rating: 5, colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"], description: "Description of the gaming headset.", vendor: { name: "Legion Gaming", image: vendorImage, address: "Los Angeles, CA" }, additionalInfo: "Impedance: 32 Ohms, Frequency Response: 20Hz-20kHz", sku: "N/A", category: "Electronics",
      relatedProducts: [
          { id: 301, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
          { id: 302, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
      ],
      thumbnails: [image9,ll1,ll2,ll3], vendorRating: 5.0, vendorReviews: 10,
    }












];

const exploreProducts = [...newArrivalProducts];

const ProductDetails = () => {
    const { id } = useParams();
    const product = newArrivalProducts.find(p => p.id === parseInt(id)) || exploreProducts.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product ? product.image : null);
    const [sortOrder, setSortOrder] = useState('newest');
    const [reviews, setReviews] = useState([
        { rating: 3, name: "rodrigo", date: "December 22, 2022", comment: "Lorem ipsum dolor sit amet dolor sit a le quat" }
    ]);
    const [activeSection, setActiveSection] = useState('description'); // Start with description open

    if (!product) return <div className="product-not-found">Product not found</div>;

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => { if (quantity > 1) setQuantity(quantity - 1); };

    const handleColorClick = (color) => {
        setSelectedImage(product.thumbnails[product.colors.indexOf(color)]);
    };

    const handleSectionToggle = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const ReviewStars = ({ rating }) => (
        [...Array(5)].map((_, i) => (i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />))
    );

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length > 0 ? (totalRating / reviews.length).toFixed(2) : "0.00";

    const ratingCounts = {
        5: reviews.filter(review => review.rating === 5).length,
        4: reviews.filter(review => review.rating === 4).length,
        3: reviews.filter(review => review.rating === 3).length,
        2: reviews.filter(review => review.rating === 2).length,
        1: reviews.filter(review => review.rating === 1).length
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedReviews = [...reviews].sort((a, b) => {
        if (sortOrder === 'newest') {
            return new Date(b.date) - new Date(a.date);
        } else {
            return new Date(a.date) - new Date(b.date);
        }
    });

    return (
        <div className="product-details-page">
            <div className="content-wrapper">
                <div className="main-content">
                    <div className="product-details-container">
                        <div className="product-image">
                            <img src={selectedImage} alt={product.name} className="main-image" />
                            <div className="thumbnail-images">
                                {product.thumbnails.map((thumbnail, index) => (
                                    <img key={index} src={thumbnail} alt={`Thumbnail ${index + 1}`} onClick={() => setSelectedImage(thumbnail)} className={selectedImage === thumbnail ? 'active' : ''} />
                                ))}
                            </div>
                        </div>
                        <div className="product-info">
                            <h1>{product.name}</h1>
                            <div className="rating-and-reviews">
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />))}
                                </div>
                                <a href="#reviews" className="review-link">(1 customer review)</a>
                            </div>
                            <p className="price">{product.priceRange}</p>
                            <p className="description">{product.description}</p>
                            <div className="color-options">
                                <p>Color</p>
                                <div className="colors-wrapper">
                                    {product.colors.map((color, index) => (
                                        <div key={index} className="color-option" style={{ backgroundColor: color }} onClick={() => handleColorClick(color)}></div>
                                    ))}
                                </div>
                            </div>
                            <div className="quantity-selector">
                                <button onClick={decrementQuantity}><FaMinus /></button>
                                <input type="number" value={quantity} readOnly className="quantity-input" />
                                <button onClick={incrementQuantity}><FaPlus /></button>
                            </div>
                            <button className="add-to-cart-button">ADD TO CART</button>
                            <div className="sku-category">
                                <p>SKU: {product.sku}</p>
                                <p>CATEGORY: {product.category}</p>
                            </div>
                            <button className="wishlist-button"><FaHeart /> Add to Wishlist</button>
                        </div>
                    </div>

                    <div className="product-tabs">
                        <button className={`tab-button ${activeSection === 'description' ? 'active' : ''}`} onClick={() => handleSectionToggle('description')}>Description</button>
                        <button className={`tab-button ${activeSection === 'additionalInfo' ? 'active' : ''}`} onClick={() => handleSectionToggle('additionalInfo')}>Additional Information</button>
                        <button className={`tab-button ${activeSection === 'vendorInfo' ? 'active' : ''}`} onClick={() => handleSectionToggle('vendorInfo')}>Vendor Info</button>
                    </div>

                    <div className="tab-content">
                        {activeSection === 'description' && (
                            <div className="tab-panel">
                                <p>{product.description}</p>
                            </div>
                        )}
                        {activeSection === 'additionalInfo' && (
                            <div className="tab-panel">
                                <p>{product.additionalInfo}</p>
                            </div>
                        )}
                        {activeSection === 'vendorInfo' && (
                            <div className="tab-panel vendor-info-panel">
                                <p>Store Name: {product.vendor.name}</p>
                                <p>Vendor: {product.vendor.name}</p>
                                <p>Address: <a href="#">{product.vendor.address}</a></p>
                                <p>
                                    {product.vendorRating.toFixed(1)} rating from {product.vendorReviews} reviews
                                </p>
                                <ReviewStars rating={product.vendorRating} />
                            </div>
                        )}
                    </div>

                    <div className="related-products">
                        <h3>Related Products</h3>
                        <div className="related-products-list">
                            {product.relatedProducts.map(relatedProduct => (
                                <div className="related-product" key={relatedProduct.id}>
                                    <a href={`/product/${relatedProduct.id}`}>
                                        <img src={relatedProduct.image} alt={relatedProduct.name} />
                                        <h4>{relatedProduct.name}</h4>
                                        <p>{relatedProduct.priceRange}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="vendor-info">
                    <h3>Vendor</h3>
                    <div className="vendor-details">
                        <img src={product.vendor.image} alt="Vendor Avatar" className="vendor-avatar" />
                        <p className="vendor-name">{product.vendor.name}</p>
                    </div>
                    <p><FaMapMarkerAlt /> <a href="#">{product.vendor.address}</a></p>
                    <p><FaPhone /> <a href="#">Contact</a></p>
                    <a href="#" className="vendor-products-button">See All Products</a>
                    <a href="#" className="become-vendor-button">Become a Vendor? Register Now</a>
                </div>


            </div>
            <section className="reviews-section" id="reviews">
                <h2>Why people love our products</h2>
                <p className="high-quality">High-quality, ethically sourced products at affordable prices</p>

                <div className="rating-summary">
                    <div className="average-rating">
                        <span className="rating-value">{averageRating}</span>
                        <ReviewStars rating={Math.round(parseFloat(averageRating))} />
                        <span className="review-count">({reviews.length} Reviews)</span>
                    </div>
                    <button className="write-a-review">Write a review</button>
                </div>

                <div className="rating-distribution">
                    {Object.entries(ratingCounts).sort(([, countA], [, countB]) => countB - countA).map(([star, count]) => (
                        <div className="rating-bar" key={star}>
                            <span>{star} Stars</span>
                            <div className="bar-container">
                                <div className="bar" style={{ width: `${(count / reviews.length) * 100}%` }}></div>
                            </div>
                            <span>({count})</span>
                        </div>
                    ))}
                </div>

                <div className="sort-reviews">
                    <label htmlFor="sort-order">Sort by:</label>
                    <select id="sort-order" value={sortOrder} onChange={handleSortChange} className="sort-select">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>

                <div className="reviews">
                    {sortedReviews.map((review, index) => (
                        <div className="review" key={index}>
                            <div className="review-header">
                                <ReviewStars rating={review.rating} />
                                <span className="review-author">{review.name}</span>
                                <span className="review-date">{review.date}</span>
                            </div>
                            <p className="review-comment">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;