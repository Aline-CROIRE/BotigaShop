import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faBars, faTh, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import '../styles/shop.css';
import { useLocation, useNavigate } from 'react-router-dom';

import image1 from '../assets/images/product-water-bottle-420x420.jpg.webp';
import image2 from '../assets/images/amazone-alexa.webp';
import image3 from '../assets/images/product-wireless-headset-420x420.jpg.webp';
import image4 from '../assets/images/shop4.webp';
import image5 from '../assets/images/shop5.webp';
import image6 from '../assets/images/shop6.webp';
import image7 from '../assets/images/shop12.webp';
import image8 from '../assets/images/shop13.webp';
import image9 from '../assets/images/shop14.webp';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 79]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState('default');
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "All In One Bottle",
      price: "$22.00 - $55.00",
      rating: 4.5,
      image: image1,
      colors: ["#8c5b2d", "#43674b", "#e0e0e0"],
      category: "General",
      popularity: 3,
      dateAdded: new Date('2024-01-15'),
      description: "A versatile bottle for all your hydration needs."
    },
    {
      id: 2,
      title: "Amazon Alexa",
      price: "$49.00 - $69.00",
      rating: 5,
      image: image2,
      colors: ["#e0e0e0"],
      category: "Electronics",
      popularity: 1,
      dateAdded: new Date('2024-02-01'),
      description: "Smart home assistant with voice control."
    },
    {
      id: 3,
      title: "Headset Gamer Legion",
      price: "$22.00 - $55.00",
      rating: 4,
      image: image3,
      colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"],
      category: "Computer Gadgets",
      popularity: 5,
      dateAdded: new Date('2024-02-10'),
      description: "Immersive gaming headset for competitive play."
    },
    {
      id: 4,
      title: "Headset Gamer Legion Plus",
      price: "$22.00 - $55.00",
      rating: 4,
      image: image4,
      colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"],
      category: "Computer Gadgets",
      popularity: 2,
      dateAdded: new Date('2024-01-25'),
      description: "Enhanced gaming headset with premium features."
    },
    {
      id: 5,
      title: "Jdoes Styling Watch",
      price: "$22.00 - $33.00",
      rating: 5,
      image: image5,
      colors: ["#4a94d6", "#e0e0e0"],
      category: "Watches",
      popularity: 4,
      dateAdded: new Date('2024-02-15'),
      description: "Stylish watch for any occasion."

    },
    {
      id: 6,
      title: "Jessi Cam Recorder",
      price: "$22.00 - $55.00",
      rating: 4,
      image: image6,
      colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"],
      category: "Electronics",
      popularity: 3,
      dateAdded: new Date('2023-12-30'),
      description: "Compact and reliable camera recorder."
    },
    {
      id: 7,
      title: "John Sport Shoes",
      price: "$22.00 - $55.00",
      rating: 5,
      image: image7,
      colors: ["#e0e0e0", "#a0a0a0", "#d45500"],
      category: "Shoes",
      popularity: 5,
      dateAdded: new Date('2024-02-20'),
      description: "Comfortable and durable sport shoes for athletes."
    },
    {
      id: 8,
      title: "Mouse Razer 3000DPI",
      price: "$22.00 - $55.00",
      rating: 4,
      image: image8,
      colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"],
      category: "Computer Gadgets",
      popularity: 2,
      dateAdded: new Date('2023-12-25'),
      description: "High-precision gaming mouse with customizable DPI."
    },
    {
      id: 9,
      title: "Santa Monica Facial Cream",
      price: "$22.00 - $55.00",
      rating: 4,
      image: image9,
      colors: ["#d45500", "#8c5b2d", "#e0e0e0"],
      category: "Body Lotion",
      popularity: 3,
      dateAdded: new Date('2024-01-10'),
      description: "Rejuvenating facial cream for healthy skin."
    }
  ]);  // Moved products to state

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const searchParam = params.get('search');

    setSelectedCategory(categoryParam || null);
    setSearchQuery(searchParam || '');

  }, [location.search]); //Only update category and search on location change

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, searchQuery, selectedColors, selectedRating, priceRange, sortOption, products]);  //Now apply filter when these change

  const applyFilters = () => {
    let filtered = [...products]; // Create a copy to avoid modifying the original

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product =>
        product.category && product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Rating filter
    if (selectedRating) {
      filtered = filtered.filter(product => Math.floor(product.rating) === selectedRating);
    }

    //Price filter
    filtered = filtered.filter(product => {
      const productPrice = parseFloat(product.price.split(" - ")[1].replace("$", ""));
      return productPrice >= priceRange[0] && productPrice <= priceRange[1];
    });

    // Sorting
    if (sortOption === 'price-low-to-high') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.split(" - ")[0].replace("$", ""));
        const priceB = parseFloat(b.price.split(" - ")[0].replace("$", ""));
        return priceA - priceB;
      });
    } else if (sortOption === 'price-high-to-low') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.split(" - ")[0].replace("$", ""));
        const priceB = parseFloat(b.price.split(" - ")[0].replace("$", ""));
        return priceB - priceA;
      });
    } else if (sortOption === 'popularity') {
      filtered.sort((a, b) => b.popularity - a.popularity);
    }
    else if (sortOption === 'latest') {
      filtered.sort((a, b) => b.dateAdded - a.dateAdded);
    }

    setFilteredProducts(filtered);
  };

  const updateQueryParam = (newParams) => {
    const currentParams = new URLSearchParams(location.search);
    for (const [key, value] of Object.entries(newParams)) {
      if (value) {
        currentParams.set(key, value);
      } else {
        currentParams.delete(key);
      }
    }
    navigate(`?${currentParams.toString()}`);
  };

  const handleCategoryClick = (category) => {
    updateQueryParam({ category: category === selectedCategory ? null : category });
  }

  const handleColorClick = (color) => {
    let newColors = [...selectedColors];
    if (selectedColors.includes(color)) {
      newColors = newColors.filter(c => c !== color);
    } else {
      newColors.push(color);
    }
    setSelectedColors(newColors);
    // updateQueryParam({ colors: newColors.length > 0 ? newColors.join(',') : null });  // If you wanted to persist color filter in the URL as well.
  }

  const handleRatingClick = (rating) => {
    setSelectedRating(rating === selectedRating ? null : rating);
    // updateQueryParam({ rating: rating === selectedRating ? null : rating }); // Similar to color, add rating to URL if desired
  }

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange([0, value]);
    // updateQueryParam({ priceMax: value });  // Price too if you wish
  }

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

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
      stars.push(<FontAwesomeIcon key={`empty${i}`} icon={faStar} style={{ color: '#ccc' }} />);
    }

    return <div className="star-container">{stars}</div>;
  };

  const handleSelectOptionsClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="shop-container">
      {/* Background Header Section */}
      <div className="shop-header">
        <h2 className="shop-title">Shop</h2>
      </div>
      <div className="shop-content">
        <div className="filters">
          <div className="filter-group">
            <h3>Categories</h3>
            <ul>
              <li onClick={() => handleCategoryClick("Body Lotion")} className={selectedCategory === 'Body Lotion' ? 'active' : ''}>Body Lotion <span>(1)</span></li>
              <li onClick={() => handleCategoryClick("Computer Gadgets")} className={selectedCategory === 'Computer Gadgets' ? 'active' : ''}>Computer Gadget <span>(3)</span></li>
              <li onClick={() => handleCategoryClick("Electronics")} className={selectedCategory === 'Electronics' ? 'active' : ''}>Electronics <span>(2)</span></li>
              <li onClick={() => handleCategoryClick("Fashion")} className={selectedCategory === 'Fashion' ? 'active' : ''}>Fashion <span>(0)</span></li>
              <li onClick={() => handleCategoryClick("General")} className={selectedCategory === 'General' ? 'active' : ''}>General <span>(1)</span></li>
              <li onClick={() => handleCategoryClick("Shoes")} className={selectedCategory === 'Shoes' ? 'active' : ''}>Shoes <span>(1)</span></li>
              <li onClick={() => handleCategoryClick("Sports")} className={selectedCategory === 'Sports' ? 'active' : ''}>Sports <span>(0)</span></li>
              <li onClick={() => handleCategoryClick("Watches")} className={selectedCategory === 'Watches' ? 'active' : ''}>Watch <span>(1)</span></li>
              <li onClick={() => handleCategoryClick("Woman Clothes")} className={selectedCategory === 'Woman Clothes' ? 'active' : ''}>Woman Clothes <span>(0)</span></li>
            </ul>
          </div>

          <div className="filter-group">
            <h3>Color</h3>
            <div className="color-filter">
              <div onClick={() => handleColorClick("#e0e0e0")} className={`color-circle ${selectedColors.includes("#e0e0e0") ? 'active' : ''}`} style={{ backgroundColor: "#e0e0e0" }} />
              <div onClick={() => handleColorClick("#d45500")} className={`color-circle ${selectedColors.includes("#d45500") ? 'active' : ''}`} style={{ backgroundColor: "#d45500" }} />
              <div onClick={() => handleColorClick("#4a94d6")} className={`color-circle ${selectedColors.includes("#4a94d6") ? 'active' : ''}`} style={{ backgroundColor: "#4a94d6" }} />
              <div onClick={() => handleColorClick("#a0a0a0")} className={`color-circle ${selectedColors.includes("#a0a0a0") ? 'active' : ''}`} style={{ backgroundColor: "#a0a0a0" }} />
              <div onClick={() => handleColorClick("#8c5b2d")} className={`color-circle ${selectedColors.includes("#8c5b2d") ? 'active' : ''}`} style={{ backgroundColor: "#8c5b2d" }} />
            </div>
          </div>

          <div className="filter-group">
            <h3>Rating</h3>
            <div className="rating-filter">
              <div onClick={() => handleRatingClick(5)} className={selectedRating === 5 ? 'active' : ''}> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <span>(3)</span></div>
              <div onClick={() => handleRatingClick(4)} className={selectedRating === 4 ? 'active' : ''}>  <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <span>(5)</span></div>
              <div onClick={() => handleRatingClick(3)} className={selectedRating === 3 ? 'active' : ''}>  <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <span>(0)</span></div>
            </div>
          </div>

          <div className="filter-group">
            <h3>Price</h3>
            <div className="price-filter">
              <div className='price-slider-container'>
                <input type="range" min="0" max="79" value={priceRange[1]} onChange={handlePriceChange} />
                <div className="price-range">
                  <span>$0</span> <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="products">
          <div className="products-header">
            <p>Showing 1-{filteredProducts.length} of {products.length} results</p>
            <div className="sorting">
              <select value={sortOption} onChange={handleSortChange}>
                <option value="default">Default sorting</option>
                <option value="price-low-to-high">Sort by price: Low to high</option>
                <option value="price-high-to-low">Sort by price: High to low</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="latest">Sort Latest</option>
              </select>
              <div className="view-icons">
                <FontAwesomeIcon icon={faBars} style={{ marginRight: '5px' }} />
                <FontAwesomeIcon icon={faTh} />
              </div>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div className="product" key={product.id}>
                  <div className="product-image-container">
                    <img src={product.image} alt={product.title} />
                    <div className="product-overlay">
                      <div className="overlay-buttons">
                        <button className="select-options-btn" onClick={() => handleSelectOptionsClick(product.id)}>SELECT OPTIONS</button>
                        <button className="quick-view-btn"> QUICK VIEW  <FontAwesomeIcon icon={faPencilAlt} /> </button>
                      </div>
                    </div>
                  </div>
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">{product.price}</p>
                  {renderStars(product.rating)}
                  <div className='color-options'>
                    {product.colors.map((color, index) => (
                      <div key={index} className='color-option' style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No products found here</p>
            )}
          </div>
          <div className='pagination'>
            <span>1</span> <span>2</span> <span style={{ color: "#ccc" }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;