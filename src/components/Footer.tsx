import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">PT</span>
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">
                Perfect Touch
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium supplier of office décor, furniture, IT equipment, and florals. Enhancing spaces with stylish, functional, and high-quality products.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors text-sm">Shop Catalog</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors text-sm">Browse Categories</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/shop?category=Office Furniture" className="text-gray-400 hover:text-white transition-colors text-sm">Office Furniture</Link></li>
              <li><Link to="/shop?category=Office Décor" className="text-gray-400 hover:text-white transition-colors text-sm">Office Décor</Link></li>
              <li><Link to="/shop?category=IT Equipment" className="text-gray-400 hover:text-white transition-colors text-sm">IT Equipment</Link></li>
              <li><Link to="/shop?category=Florals" className="text-gray-400 hover:text-white transition-colors text-sm">Florals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 shrink-0 text-purple-500" />
                <span>76 Campbell St, Freetown </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 shrink-0 text-purple-500" />
                <span>+232 (76) 400-414</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 shrink-0 text-purple-500" />
                <span>perfecttouchdecor1@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Perfect Touch Décor. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
