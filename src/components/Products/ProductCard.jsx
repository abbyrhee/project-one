import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import '../../styles/components/ProductCard.css';

const ProductCard = ({ product, showDetails = false }) => {
  // Access addToCart function from cart context hook
  const { addToCart } = useCart();
  
  // Local state to manage details section visibility
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Returns detailed product information based on category
  const getProductDetails = (category) => {
    // Switch statement to return category-specific details
    switch (category) {
      case 'beauty':
        return {
          description: "Experience the transformative power of our premium beauty formula.",
          features: ["Dermatologist tested", "Cruelty-free", "Paraben-free"],
          ingredients: "Natural and organic ingredients",
          usage: "Apply daily for best results"
        };
      case 'clothing':
        return {
          description: "Elevate your wardrobe with our thoughtfully designed pieces.",
          features: ["Premium fabric", "Comfortable fit", "Easy care"],
          material: "High-quality sustainable materials",
          care: "Machine washable"
        };
      case 'decor':
        return {
          description: "Add a touch of elegance to your living space.",
          features: ["Handcrafted", "Unique design", "Durable"],
          material: "Premium quality materials",
          care: "Easy to clean and maintain"
        };
      default:
        return {
          description: "Quality product for your lifestyle.",
          features: ["Premium quality", "Carefully selected", "Great value"]
        };
    }
  };

  // Get product details based on category
  const details = getProductDetails(product.category);

  return (
    <div className="product-card">
      // Product Image Section
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      // Product Information Section
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <span className="product-category">{product.category}</span>
        
        // Conditional Details Section
        {showDetails && (
          <div className="product-details-section">
            // Details Toggle Button
            <button 
              className="details-toggle"
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            >
              {isDetailsOpen ? 'Hide Details' : 'Show Details'}
            </button>
            
            // Expanded Details Content
            {isDetailsOpen && (
              <div className="details-content">
                <p className="description">{details.description}</p>
                <div className="features">
                  <h4>Features:</h4>
                  <ul>
                    {details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                // Category-Specific Details
                {details.ingredients && (
                  <p className="ingredients">
                    <strong>Ingredients:</strong> {details.ingredients}
                  </p>
                )}
                {details.material && (
                  <p className="material">
                    <strong>Material:</strong> {details.material}
                  </p>
                )}
                {details.care && (
                  <p className="care">
                    <strong>Care:</strong> {details.care}
                  </p>
                )}
                {details.usage && (
                  <p className="usage">
                    <strong>Usage:</strong> {details.usage}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        
        // Add to Cart Button
        <button 
          className="add-to-cart-btn" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
