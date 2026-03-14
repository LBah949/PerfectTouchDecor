import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Categories() {
  const categories = [
    { name: 'Office Décor', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', desc: 'Elevate your workspace with premium decorative pieces.' },
    { name: 'Office Furniture', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800', desc: 'Ergonomic and stylish furniture for modern professionals.' },
    { name: 'IT Equipment', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800', desc: 'High-performance technology to keep your business running.' },
    { name: 'Air Conditioners', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800', desc: 'Efficient cooling solutions for optimal comfort.' },
    { name: 'Florals', image: 'https://images.unsplash.com/photo-1565081500236-e8fb3c896844?auto=format&fit=crop&q=80&w=800', desc: 'Lifelike artificial arrangements to bring nature indoors.' },
    { name: 'General Merchandise', image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800', desc: 'Essential supplies and premium accessories.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Browse by Category</h1>
          <p className="text-lg text-gray-600">
            Discover our carefully curated collections designed to transform your workspace into an environment of luxury and productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-3xl font-serif font-bold text-white tracking-wide drop-shadow-lg">
                    {category.name}
                  </h2>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-600 mb-6 flex-grow">
                  {category.desc}
                </p>
                <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-800 transition-colors">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
