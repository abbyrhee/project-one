import React, { useState } from 'react';
import ProductDetails from '../components/Products/ProductDetails';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    // Beauty Products
    {
      id: 1,
      name: "Natural Face Cream",
      price: 29.99,
      image: "/images/face-cream.jpg",
      category: "beauty",
      description: "A gentle, all-natural face cream that nourishes and hydrates your skin. Made with organic ingredients and suitable for all skin types.",
      features: [
        "100% natural ingredients",
        "Suitable for sensitive skin",
        "24-hour hydration",
        "Non-comedogenic",
        "Paraben-free"
      ],
      ingredients: "Aqua, Aloe Vera, Jojoba Oil, Vitamin E, Natural Extracts"
    },
    {
      id: 2,
      name: "Organic Lipstick",
      price: 19.99,
      image: "/images/lipstick.jpg",
      category: "beauty",
      description: "Long-lasting, organic lipstick that provides rich color and moisturizing benefits. Made with natural waxes and oils.",
      features: [
        "Long-lasting color",
        "Organic ingredients",
        "Moisturizing formula",
        "Available in 12 shades",
        "Cruelty-free"
      ],
      ingredients: "Organic Castor Oil, Beeswax, Natural Pigments, Vitamin E"
    },
    // Add more beauty products...

    // Clothing Products
    {
      id: 7,
      name: "Cotton T-Shirt",
      price: 24.99,
      image: "/images/tshirt.jpg",
      category: "clothing",
      description: "Premium quality cotton t-shirt with a comfortable fit. Perfect for everyday wear and easy to style.",
      features: [
        "100% organic cotton",
        "Breathable fabric",
        "Available in multiple colors",
        "Sizes XS-XXL",
        "Pre-shrunk material"
      ],
      care: "Machine wash cold, Tumble dry low"
    },
    {
      id: 8,
      name: "Denim Jeans",
      price: 59.99,
      image: "/images/jeans.jpg",
      category: "clothing",
      description: "Classic fit denim jeans with premium quality construction. Features comfortable stretch and durable design.",
      features: [
        "Premium stretch denim",
        "5-pocket design",
        "Available in multiple washes",
        "Sizes 26-38",
        "Reinforced stitching"
      ],
      care: "Machine wash cold, Line dry"
    },
    // Add more clothing products...

    // Decor Products
    {
      id: 13,
      name: "Ceramic Vase",
      price: 39.99,
      image: "/images/vase.jpg",
      category: "decor",
      description: "Handcrafted ceramic vase with a modern design. Perfect for fresh or dried flower arrangements.",
      features: [
        "Handmade ceramic",
        "Modern design",
        "Waterproof interior",
        "Multiple size options",
        "Unique glazing technique"
      ],
      dimensions: "H: 12\", W: 6\", D: 6\""
    },
    {
      id: 14,
      name: "Wall Art Print",
      price: 49.99,
      image: "/images/wall-art.jpg",
      category: "decor",
      description: "Contemporary wall art print featuring original artwork. Printed on high-quality paper with archival inks.",
      features: [
        "Original artwork",
        "Archival quality print",
        "Multiple size options",
        "Ready to frame",
        "Certificate of authenticity"
      ],
      dimensions: "Available in 12\"x16\", 18\"x24\", 24\"x36\""
    }
    // Add more decor products...
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
    <div className="products-page">
      <div className="products-header">
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

      <div className="products-grid-detailed">
        {filteredProducts.map(product => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
