/**
 * Shop Page
 * Displays the full catalog of products. Includes functionality to search
 * by keyword and filter by category.
 */
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';

export function Shop() {
  // useSearchParams allows us to read and update the URL query string (e.g., ?category=Décor)
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  // Local state for search input, selected category, and mobile filter drawer
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique categories from the products JSON data dynamically
  const categories = ['All', ...Array.from(new Set(productsData.products.map(p => p.category)))];

  // useMemo ensures we only recalculate the filtered products when 
  // the search query or selected category actually changes, improving performance.
  const filteredProducts = useMemo(() => {
    return productsData.products.filter(product => {
      // Check if product name or description matches the search query
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Check if product matches the selected category
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Handle category selection and update the URL parameter
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    
    setSearchParams(searchParams);
    setIsFilterOpen(false); // Close mobile filter drawer if open
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Catalog</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse our premium selection of office furniture, décor, IT equipment, and more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop Only) */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-purple-50 text-purple-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search Bar and Mobile Filter Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow bg-white shadow-sm"
                />
              </div>
              {/* Button to open filters on mobile screens */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>

            {/* Active Filters Display (Shows what the user is currently filtering by) */}
            {(selectedCategory !== 'All' || searchQuery) && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-gray-500">Active filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    {selectedCategory}
                    <button onClick={() => handleCategoryChange('All')} className="hover:text-purple-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="hover:text-gray-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              // Empty State (When no products match the search/filter)
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    handleCategoryChange('All');
                  }}
                  className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer (Overlay) */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl flex flex-col">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-lg text-gray-900">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)} className="p-2 text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <h4 className="font-medium text-gray-900 mb-4">Categories</h4>
              <ul className="space-y-3">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left flex items-center justify-between ${
                        selectedCategory === category ? 'text-purple-600 font-medium' : 'text-gray-600'
                      }`}
                    >
                      {category}
                      {selectedCategory === category && <div className="w-2 h-2 rounded-full bg-purple-600" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border-t border-gray-100">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
