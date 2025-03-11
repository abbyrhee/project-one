import React from 'react';
import { Link } from 'react-router-dom';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { useCart } from '../../context/CartContext';
import '../../styles/components/Header.css';

const Header = () => {
  const { getCartCount } = useCart();

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">
            <h1 className="brand-name">Yeppo</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/cart" className="nav-link cart-link">
            <PiShoppingCartSimple className="cart-icon" />
            <span className="cart-count">{getCartCount()}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
