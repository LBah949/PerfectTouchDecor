import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const featuredProducts = productsData.products.filter(p => p.featured).slice(0, 4);
  
  const categories = [
    { name: 'Office Décor', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
    { name: 'Office Furniture', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
    { name: 'IT Equipment', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800' },
    { name: 'Air Conditioners', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800' },
    { name: 'Florals', image: 'https://images.unsplash.com/photo-1565081500236-e8fb3c896844?auto=format&fit=crop&q=80&w=800' },
    { name: 'General Merchandise', image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Office Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-purple-300 font-semibold tracking-widest uppercase text-sm mb-4 block">
            Welcome to Perfect Touch Décor
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Elevate Your <br className="hidden md:block" /> Workspace
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Premium supplier of office décor, furniture, IT equipment, and florals. We help businesses enhance their spaces with stylish, functional products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/shop"
              className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-900/20 w-full sm:w-auto justify-center"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/categories"
              className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Categories
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do / Specialties */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              What We Do
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              We specialize in delivering comprehensive solutions to elevate your residential and commercial spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Package office furniture solutions",
              "Home décor and improvements",
              "Top of the line procurement and installation",
              "Supply and fit high quality carpets and tiles",
              "Supply and fit high quality curtains and blinds",
              "Complete furnishing solution",
              "Supply of top of the line IT equipment",
              "Supply of high grade office stationary"
            ].map((specialty, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  {specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                <p className="text-sm text-gray-500 mt-1">Curated selection of high-end products</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Trusted Supplier</h3>
                <p className="text-sm text-gray-500 mt-1">Reliable partner for corporate offices</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Nationwide Delivery</h3>
                <p className="text-sm text-gray-500 mt-1">Fast and secure shipping options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
                Curated Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Featured Products
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center gap-2 text-purple-600 font-medium hover:text-purple-800 transition-colors"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-800 transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Explore
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Shop by Category
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className={`group relative overflow-hidden rounded-2xl aspect-[4/3] block ${
                  index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {category.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    Explore Collection
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            The Perfect Touch Difference
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed">
            We believe that a well-designed workspace inspires creativity, boosts productivity, and leaves a lasting impression. Our curated selection of premium office décor, furniture, and IT equipment is designed to transform ordinary offices into extraordinary environments.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
