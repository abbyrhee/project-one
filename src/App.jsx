import React from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

// Layout 
const Layout = () => (
  <CartProvider>
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  </CartProvider>
);

// Using hash router for GitHub Pages compatibility
const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: 'products',
          element: <Products />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'cart',
          element: <Cart />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: 'checkout-error',
          element: null,
          errorElement: <ErrorBoundary />,
          loader: () => {
            throw new Error("Checkout functionality is not implemented yet");
          },
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
