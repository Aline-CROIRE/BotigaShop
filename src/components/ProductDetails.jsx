import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import bottle from '../assets/images/product-water-bottle-420x420.jpg.webp';
import alexa from '../assets/images/product-alexa-420x420.jpg.webp';
import headset from '../assets/images/product-wireless-headset-420x420.jpg.webp';
import { FaStar, FaRegStar, FaHeart, FaMapMarkerAlt, FaPhone, FaSearch } from "react-icons/fa";
import '../styles/product.css'
import { FaMinus, FaPlus } from 'react-icons/fa';
import relatedProduct1 from '../assets/images/amazone-alexa.webp'; // Replace with your actual image paths
import relatedProduct2 from '../assets/images/amazone-alexa.webp';
import thumbnail1 from '../assets/images/amazone-alexa.webp';
import thumbnail2 from '../assets/images/cropped-vendor-banner-2-575x276.jpg.webp';
import thumbnail3 from '../assets/images/amazone-alexa.webp';
import vendorImage from '../assets/images/amazone-alexa.webp';
const newArrivalProducts = [
    {
        id: 1, name: "All In One Bottle", priceRange: "$22.00 - $55.00", image: bottle, rating: 3, colors: ["#fff", "#8c5b2d", "#43674b", "#e0e0e0"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", vendor: { name: "Jessica Doe", image: vendorImage, address: "Central Park, New York, US" }, additionalInfo: "Weight: 0.5 kg, Dimensions: 10 x 10 x 20 cm", sku: "N/A", category: "Electronics",
        relatedProducts: [
            { id: 101, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
            { id: 102, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
        ],
        thumbnails: [thumbnail1, thumbnail2, thumbnail3]
    },
    {
        id: 2, name: "Amazon Alexa", priceRange: "$49.00 - $69.00", image: alexa, rating: 3, colors: ["#e0e0e0", "#8c5b2d"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", vendor: { name: "Rebecca Doe", image: vendorImage, address: "Central Park, New York, US" }, additionalInfo: "Connectivity: Bluetooth, Wi-Fi", sku: "N/A", category: "Electronics",
        relatedProducts: [
            { id: 101, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
            { id: 102, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
        ],
        thumbnails: [thumbnail1, thumbnail2, thumbnail3]
    },
    {
        id: 3, name: "Headset Gamer Legion", priceRange: "$22.00 - $55.00", image: headset, rating: 5, colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"], description: "Description of the gaming headset.", vendor: { name: "Legion Gaming", image: vendorImage, address: "Los Angeles, CA" }, additionalInfo: "Impedance: 32 Ohms, Frequency Response: 20Hz-20kHz", sku: "N/A", category: "Electronics",
        relatedProducts: [
            { id: 101, name: "Santa Monica Shoes Of The Year", priceRange: "$22.00 - $55.00", image: relatedProduct1, rating: 4, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
            { id: 102, name: "John Sport Shoes", priceRange: "$22.00 - $55.00", image: relatedProduct2, rating: 3, colors: ["#ffffff", "#8c5b2d", "#a0a0a0"] },
        ],
        thumbnails: [thumbnail1, thumbnail2, thumbnail3]
    },
];

const exploreProducts = [...newArrivalProducts]; // For simplicity, using the same data

const ProductDetails = () => {
    const { id } = useParams();
    const product = newArrivalProducts.find((p) => p.id === parseInt(id)) || exploreProducts.find((p) => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product ? product.image : null);
    const [sortOrder, setSortOrder] = useState('newest');
    const [reviews, setReviews] = useState([
        {
            rating: 3,
            name: "rodrigo",
            date: "December 22, 2022",
            comment: "Lorem ipsum dolor sit amet dolor sit a le quat"
        }
    ]);
    const [showDescription, setShowDescription] = useState(true);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [showVendorInfo, setShowVendorInfo] = useState(false);
    if (!product) {
        return <div>Product not found</div>;
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleColorClick = (color) => {
        setSelectedImage(color === "#fff" ? product.image : alexa)
        // Placeholder - implement logic to change the main image based on color
        console.log(`Color ${color} selected`);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const toggleAdditionalInfo = () => {
        setShowAdditionalInfo(!showAdditionalInfo);
    };

    const toggleVendorInfo = () => {
        setShowVendorInfo(!showVendorInfo);
    };
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length > 0 ? (totalRating / reviews.length).toFixed(2) : "0.00";

    const ratingCounts = {
        5: reviews.filter(review => review.rating === 5).length,
        4: reviews.filter(review => review.rating === 4).length,
        3: reviews.filter(review => review.rating === 3).length,
        2: reviews.filter(review => review.rating === 2).length,
        1: reviews.filter(review => review.rating === 1).length
    };

    const ReviewStars = ({ rating }) => {
        return [...Array(5)].map((_, i) => (
            i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
        ));
    };

    return (
        <div className="product-details-page">
            <div className="content-wrapper"> {/* Center wrapper added */}
                <div className="product-details-container">
                    <div className="product-image">
                        <img src={selectedImage} alt={product.name} className="main-image" />
                        <div className="thumbnail-images">
                            {product.thumbnails.map((thumbnail, index) => (
                                <img
                                    key={index}
                                    src={thumbnail}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setSelectedImage(thumbnail)}
                                    className={selectedImage === thumbnail ? 'active' : ''}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="product-info">
                        <h1>{product.name}</h1>
                        <div className="rating-and-reviews">
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                                ))}
                            </div>
                            <a href="#reviews" className="review-link">(1 customer review)</a>
                        </div>
                        <p className="price">{product.priceRange}</p>
                        <p className="description">{product.description}</p>
                        <div className="color-options">
                            <p>Color</p>
                            <div className="colors-wrapper">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="color-option"
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleColorClick(color)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <div className="quantity-selector">
                            <button onClick={decrementQuantity}><FaMinus /></button>
                            <input type="number" value={quantity} readOnly />
                            <button onClick={incrementQuantity}><FaPlus /></button>
                        </div>
                        <button className="add-to-cart-button">ADD TO CART</button>
                        <div className="sku-category">
                            <p>SKU: {product.sku}</p>
                            <p>CATEGORY: {product.category}</p>
                        </div>
                        <button className="wishlist-button"><FaHeart /> Add to Wishlist</button>
                    </div>

                    <div className="vendor-info">
                        <h3>Vendor</h3>
                        <div className="vendor-details">
                            <img src={product.vendor.image} alt="Vendor Avatar" className="vendor-avatar" />
                            <p>{product.vendor.name}</p>
                        </div>
                        <p><FaMapMarkerAlt /> {product.vendor.address}</p>
                        <p><FaPhone /> Contact</p> {/*  replace with actual contact info if available */}
                        <button className="vendor-products-button">See All Products</button>
                        <button className="become-vendor-button">Become a Vendor? Register Now</button>
                    </div>
                </div>
                <div className="accordion">
                <div className="additional-info-section">
                    <div className="section-header" onClick={toggleDescription}>
                        <h3>Description</h3>
                        <button>{showDescription ? <FaMinus /> : <FaPlus />}</button>
                    </div>
                    {showDescription && (
                        <div className="section-content">
                            <p>{product.description}</p>
                        </div>
                    )}
                </div>
                <div className="additional-info-section">
                    <div className="section-header" onClick={toggleAdditionalInfo}>
                        <h3>Additional information</h3>
                        <button>{showAdditionalInfo ? <FaMinus /> : <FaPlus />}</button>
                    </div>
                    {showAdditionalInfo && (
                        <div className="section-content">
                            <p>{product.additionalInfo}</p>
                        </div>
                    )}
                </div>

                <div className="additional-info-section">
                    <div className="section-header" onClick={toggleVendorInfo}>
                        <h3>Vendor Info</h3>
                        <button>{showVendorInfo ? <FaMinus /> : <FaPlus />}</button>
                    </div>
                    {showVendorInfo && (
                        <div className="section-content">
                            <p>Vendor: {product.vendor.name}</p>
                            <p>Located at: {product.vendor.address}</p>
                        </div>
                    )}
                </div>
            </div>
                <div className="related-products">
                <h3>Related Products</h3>
                <div className="related-products-list">
                    {product.relatedProducts.map((relatedProduct) => (
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
                <section className="reviews-section">
                    <h2>Why people love our products</h2>
                    <p className="high-quality">High-quality, ethically sourced products at affordable prices</p>

                    <div className="rating-summary">
                        <div className="average-rating">
                            <span className="rating-value">{averageRating}</span>
                            <ReviewStars rating={Math.round(parseFloat(averageRating))} />
                            <span className="review-count">{reviews.length} Review</span>
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
                        <select id="sort-order" value={sortOrder} onChange={handleSortChange}>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>

                    <div className="reviews">
                        {reviews.map((review, index) => (
                            <div className="review" key={index}>
                                <div className="review-header">
                                    <ReviewStars rating={review.rating} />
                                    <span>{review.name}</span>
                                    <span className="review-date">{review.date}</span>
                                </div>
                                <p className="review-comment">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductDetails;