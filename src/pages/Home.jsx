import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/Products/ProductCard';
import '../styles/pages/Home.css';

const Home = () => {
  console.log('Home component rendering');
  
  const featuredProducts = [
    {
      id: 1,
      name: "Radiance-Boosting Face Serum",
      price: 29.99,
      image: "/project-one/images/serum.png",
      category: "beauty"
    },
    {
      id: 12,
      name: "Minimalist Midi Dress",
      price: 129.99,
      image: "/project-one/images/dress.png",
      category: "clothing"
    },
    {
      id: 15,
      name: "Minimalist Ceramic Vase",
      price: 29.99,
      image: "/project-one/images/vase.png",
      category: "decor"
    }
  ];

  return (
    <div className="home">
      /*Banner */
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to <span className="brand-name">Yeppo</span></h1>
          <p>Embracing the Simple, Celebrating the Little, Finding the Beautiful</p>
          <Link to="/shop" className="cta-button">Shop Now</Link>
        </div>
      </section>

      /* Featured Products */
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      /* Promotions */
      <section className="promotions-section">
        <h2>Special Offers</h2>
        <div className="promotions-grid">
          <div className="promo-card">
            <h3>Spring Refresh</h3>
            <p>Brighten up your closet with new season styles</p>
            <Link to="/shop" className="promo-link">Shop Sale</Link>
          </div>
          <div className="promo-card">
            <h3>New Arrivals</h3>
            <p>Check out our latest collection</p>
            <Link to="/products" className="promo-link">View Collection</Link>
          </div>
          <div className="promo-card">
            <h3>Free Shipping</h3>
            <p>On orders over $200</p>
            <Link to="/shop" className="promo-link">Start Shopping</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
