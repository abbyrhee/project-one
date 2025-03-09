import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();
  
  // Handle route errors (404, etc)
  if (isRouteErrorResponse(error)) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h1>
            {error.status === 404 ? '404 - Page Not Found' : `${error.status} - ${error.statusText}`}
          </h1>
          <p>{error.data?.message || "We couldn't find what you were looking for."}</p>
          <div className="error-actions">
            <Link to="/" className="home-button">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Handle CartErrors specifically
  if (error.name === 'CartError') {
    return (
      <div className="error-container">
        <div className="error-content">
          <h1>Shopping Cart Error</h1>
          <p>{error.message}</p>
          <div className="error-actions">
            <button 
              onClick={() => window.location.reload()}
              className="retry-button"
            >
              Try Again
            </button>
            <Link to="/shop" className="home-button">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Handle all other errors
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Unexpected Error</h1>
        <div className="error-details">
          <p>{error.message || 'An unexpected error occurred'}</p>
          {error.stack && process.env.NODE_ENV === 'development' && (
            <pre className="error-stack">{error.stack}</pre>
          )}
        </div>
        <div className="error-actions">
          <button 
            onClick={() => window.location.reload()}
            className="retry-button"
          >
            Try Again
          </button>
          <Link to="/" className="home-button">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
