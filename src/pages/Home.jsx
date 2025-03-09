import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/Products/ProductCard';
import '../styles/pages/Home.css';

const Home = () => {
  // Sample featured products - replace with your actual data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Watch",
      price: 199.99,
      image: "/images/watch.jpg",
      discount: 20
    },
    {
      id: 2,
      name: "Designer Bag",
      price: 299.99,
      image: "/images/bag.jpg",
      discount: 15
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 149.99,
      image: "/images/headphones.jpg",
      discount: 25
    }
  ];

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Yeppo</h1>
          <p>Discover our curated collection of premium products</p>
          <Link to="/shop" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotions */}
      <section className="promotions-section">
        <h2>Special Offers</h2>
        <div className="promotions-grid">
          <div className="promo-card">
            <h3>Summer Sale</h3>
            <p>Up to 50% off on selected items</p>
            <Link to="/shop" className="promo-link">Shop Sale</Link>
          </div>
          <div className="promo-card">
            <h3>New Arrivals</h3>
            <p>Check out our latest collection</p>
            <Link to="/products" className="promo-link">View Collection</Link>
          </div>
          <div className="promo-card">
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
            <Link to="/shop" className="promo-link">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
