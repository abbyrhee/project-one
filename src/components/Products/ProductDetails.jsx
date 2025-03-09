import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductDetails = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info-detailed">
        <h2>{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <span className="category-tag">{product.category}</span>
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-features">
          <h3>Features</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button 
          className="add-to-cart-large" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
