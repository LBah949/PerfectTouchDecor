import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    images: string[];
    description: string;
    featured?: boolean;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <Link to={`/product/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-gray-100 block">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase mb-2 block">
            {product.category}
          </span>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-medium text-gray-900 line-clamp-2 hover:text-purple-700 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            to={`/product/${product.id}`}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <button
            onClick={() => addToCart({
              id: product.id,
              name: product.name,
              category: product.category,
              image: product.images[0]
            })}
            className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
