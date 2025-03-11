import React, { useState } from 'react';
import ProductCard from '../components/Products/ProductCard';
import '../styles/pages/Shop.css';

const Shop = () => {
  // State to track currently selected category filter
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    // Beauty Products
    {
      id: 1,
      name: "Radiance-Boosting Face Serum",
      price: 29.99,
      image: "/project-one/images/serum.png",
      category: "beauty"
    },
    {
      id: 2,
      name: "Hydrating Silk Moisturizer",
      price: 19.99,
      image: "/project-one/images/moisturizer.png",
      category: "beauty"
    },
    {
      id: 3,
      name: "Nourishing Lip Balm",
      price: 34.99,
      image: "/project-one/images/lipbalm.png",
      category: "beauty"
    },
    {
      id: 4,
      name: "Refreshing Facial Mist",
      price: 45.99,
      image: "/project-one/images/facemist.png",
      category: "beauty"
    },
    {
      id: 5,
      name: "Gentle Exfoliating Cleanser",
      price: 24.99,
      image: "/project-one/images/cleanser.png",
      category: "beauty"
    },
    {
      id: 6,
      name: "Sheer Natural Blush",
      price: 39.99,
      image: "/project-one/images/blush.png",
      category: "beauty"
    },

    // Clothing Products
    {
      id: 7,
      name: "Classic Cotton T-Shirt",
      price: 24.99,
      image: "/project-one/images/tshirt.png",
      category: "clothing"
    },
    {
      id: 8,
      name: "Relaxed Fit Linen Trousers",
      price: 59.99,
      image: "/project-one/images/linen.png",
      category: "clothing"
    },
    {
      id: 9,
      name: "Lightweight Knit Cardigan",
      price: 49.99,
      image: "/project-one/images/cardigan.png",
      category: "clothing"
    },
    {
      id: 10,
      name: "Flowy Sleeveless Top",
      price: 79.99,
      image: "/project-one/images/sleeveless.png",
      category: "clothing"
    },
    {
      id: 11,
      name: "High-Waisted Straight Jeans",
      price: 54.99,
      image: "/project-one/images/jeans.png",
      category: "clothing"
    },
    {
      id: 12,
      name: "Minimalist Midi Dress",
      price: 129.99,
      image: "/project-one/images/dress.png",
      category: "clothing"
    },

    // Decor Products
    {
      id: 13,
      name: "Hand-Poured Soy Candle",
      price: 39.99,
      image: "/project-one/images/candle.png",
      category: "decor"
    },
    {
      id: 14,
      name: "Soft Woven Throw Blanket",
      price: 49.99,
      image: "/project-one/images/throw.png",
      category: "decor"
    },
    {
      id: 15,
      name: "Minimalist Ceramic Vase",
      price: 29.99,
      image: "/project-one/images/vase.png",
      category: "decor"
    },
    {
      id: 16,
      name: "Wooden Picture Frame Set",
      price: 69.99,
      image: "/project-one/images/frames.png",
      category: "decor"
    },
    {
      id: 17,
      name: "Handcrafted Clay Bowl",
      price: 89.99,
      image: "/project-one/images/bowl.png",
      category: "decor"
    },
    {
      id: 18,
      name: "Dried Floral Arrangement",
      price: 44.99,
      image: "/project-one/images/flower.png",
      category: "decor"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'decor', name: 'Decor' }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1 className="products-title">Our Products</h1>
        <div className="category-filters">
          {categories.map(category => (
            // Category Filter Buttons
            <button
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      // Product Grid
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
