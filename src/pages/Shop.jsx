import React, { useState } from 'react';
import ProductCard from '../components/Products/ProductCard';
import '../styles/pages/Shop.css';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    // Beauty Products
    {
      id: 1,
      name: "Natural Face Cream",
      price: 29.99,
      image: "/images/face-cream.jpg",
      category: "beauty"
    },
    {
      id: 2,
      name: "Organic Lipstick",
      price: 19.99,
      image: "/images/lipstick.jpg",
      category: "beauty"
    },
    {
      id: 3,
      name: "Facial Serum",
      price: 34.99,
      image: "/images/serum.jpg",
      category: "beauty"
    },
    {
      id: 4,
      name: "Eye Shadow Palette",
      price: 45.99,
      image: "/images/eyeshadow.jpg",
      category: "beauty"
    },
    {
      id: 5,
      name: "Mascara",
      price: 24.99,
      image: "/images/mascara.jpg",
      category: "beauty"
    },
    {
      id: 6,
      name: "Foundation",
      price: 39.99,
      image: "/images/foundation.jpg",
      category: "beauty"
    },

    // Clothing Products
    {
      id: 7,
      name: "Cotton T-Shirt",
      price: 24.99,
      image: "/images/tshirt.jpg",
      category: "clothing"
    },
    {
      id: 8,
      name: "Denim Jeans",
      price: 59.99,
      image: "/images/jeans.jpg",
      category: "clothing"
    },
    {
      id: 9,
      name: "Summer Dress",
      price: 49.99,
      image: "/images/dress.jpg",
      category: "clothing"
    },
    {
      id: 10,
      name: "Casual Blazer",
      price: 79.99,
      image: "/images/blazer.jpg",
      category: "clothing"
    },
    {
      id: 11,
      name: "Knit Sweater",
      price: 54.99,
      image: "/images/sweater.jpg",
      category: "clothing"
    },
    {
      id: 12,
      name: "Leather Jacket",
      price: 129.99,
      image: "/images/jacket.jpg",
      category: "clothing"
    },

    // Decor Products
    {
      id: 13,
      name: "Ceramic Vase",
      price: 39.99,
      image: "/images/vase.jpg",
      category: "decor"
    },
    {
      id: 14,
      name: "Wall Art Print",
      price: 49.99,
      image: "/images/wall-art.jpg",
      category: "decor"
    },
    {
      id: 15,
      name: "Decorative Pillows",
      price: 29.99,
      image: "/images/pillows.jpg",
      category: "decor"
    },
    {
      id: 16,
      name: "Table Lamp",
      price: 69.99,
      image: "/images/lamp.jpg",
      category: "decor"
    },
    {
      id: 17,
      name: "Mirror Set",
      price: 89.99,
      image: "/images/mirror.jpg",
      category: "decor"
    },
    {
      id: 18,
      name: "Woven Basket",
      price: 44.99,
      image: "/images/basket.jpg",
      category: "decor"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'decor', name: 'Decor' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Our Products</h1>
        <div className="category-filters">
          {categories.map(category => (
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
