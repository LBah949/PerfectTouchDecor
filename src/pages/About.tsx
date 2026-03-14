import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900 text-white overflow-hidden mb-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About Perfect Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Elevating workspaces with premium décor, furniture, and technology since 2010.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Perfect Touch Décor began with a simple vision: to transform sterile, uninspiring offices into vibrant, productive environments. We recognized that a well-designed workspace is not just about aesthetics; it's about fostering creativity, improving employee well-being, and making a lasting impression on clients.
              </p>
              <p>
                Over the years, we have grown from a small boutique décor supplier to a comprehensive provider of premium office solutions. Today, we offer an extensive catalog that includes high-end furniture, state-of-the-art IT equipment, efficient air conditioning units, and lifelike floral arrangements.
              </p>
              <p>
                Our commitment to quality, style, and exceptional service has made us the trusted partner for countless businesses, from innovative startups to established corporate enterprises.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Office Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
              <div className="text-4xl font-serif font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* CEO / Founder Section */}
        <div className="mb-24 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Ms. Hannah Bangalie - CEO and Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Meet Our Founder</h2>
              <h3 className="text-xl text-purple-600 font-medium mb-6">Ms. Hannah Bangalie <span className="text-gray-400 mx-2">|</span> CEO & Lead Designer</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                With a passion for transforming ordinary spaces into extraordinary environments, our founder established Perfect Touch Décor to bridge the gap between functionality and high-end design. Her keen eye for detail and commitment to excellence has driven the company's expansion from a boutique décor supplier to a comprehensive provider of premium office solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light italic">
                "We believe that the environment you work in profoundly impacts your success. Our goal is to create spaces that not only look beautiful but also inspire greatness every single day."
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The principles that guide everything we do at Perfect Touch Décor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We source only the finest materials and partner with reputable manufacturers to ensure every product meets our exacting standards.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exceptional Design</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of aesthetics. Our curated collections reflect modern elegance and timeless sophistication.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. We provide personalized service and expert advice to help you create your ideal space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
