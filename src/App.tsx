/**
 * Main Application Component
 * This file sets up the routing and global state providers for the app.
 */
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Categories } from './pages/Categories';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    // CartProvider wraps the app to make cart data available to all components
    <CartProvider>
      {/* 
        We use HashRouter instead of BrowserRouter because GitHub Pages 
        does not support single-page application (SPA) routing natively.
        HashRouter adds a '#' to the URL (e.g., yoursite.com/#/shop), 
        which prevents 404 errors when users refresh the page on static hosts.
      */}
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
          {/* Navbar appears on every page */}
          <Navbar />
          
          {/* Main content area where different pages are rendered based on the URL */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          {/* Footer and floating WhatsApp button appear on every page */}
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}
