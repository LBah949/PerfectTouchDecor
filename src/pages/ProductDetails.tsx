import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingBag, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = productsData.products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-24">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-purple-600 hover:text-purple-800 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      image: product.images[0]
    }, quantity);
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12">
            
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 relative group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        selectedImage === idx ? 'border-purple-600 ring-2 ring-purple-600/20' : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-8">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-gray-700 font-medium">Quantity</span>
                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-l-lg"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium text-gray-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={added}
                    className={`flex-1 py-4 px-8 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                      added
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
                        : 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-600/20'
                    }`}
                  >
                    {added ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" /> Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" /> Add to Cart Request
                      </>
                    )}
                  </button>
                  <Link
                    to="/cart"
                    className="flex-1 py-4 px-8 bg-gray-900 text-white rounded-xl font-medium text-center hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
                  >
                    View Cart
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  * Prices are provided upon request via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
