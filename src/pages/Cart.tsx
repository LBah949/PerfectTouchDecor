/**
 * Cart Page
 * Displays the items the user has added to their cart and allows them to
 * adjust quantities, remove items, and send the final order via WhatsApp.
 */
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, totalItems } = useCart();

  // Function to generate the WhatsApp message and open the app/web interface
  const handleWhatsAppOrder = () => {
    // The business WhatsApp number (include country code, no plus sign or spaces)
    const phoneNumber = "1234567890"; 
    
    // Start building the message string
    let message = "Hello Perfect Touch Décor,\n\nI would like to request a quotation for the following items:\n\n";
    
    // Loop through cart items and add them to the message format
    cart.forEach(item => {
      message += `• ${item.name} — Quantity: ${item.quantity}\n`;
    });
    
    message += "\nPlease contact me with the price and availability.";
    
    // Encode the message so it can be safely passed in a URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Show empty state if cart has no items
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-24 pb-16 px-4">
        <div className="w-24 h-24 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Looks like you haven't added anything to your cart yet. Browse our catalog to find premium décor for your space.
        </p>
        <Link
          to="/shop"
          className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-600/20"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Your Quote Request</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl bg-gray-100 shrink-0"
                />
                
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.name}</h3>
                </div>
                
                {/* Quantity Controls & Remove Button */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-l-lg"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-medium text-gray-900 text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Order Summary & Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-32">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-600">
                  <span>Total Items</span>
                  <span className="font-medium text-gray-900">{totalItems}</span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Prices are not displayed online. Submit this list via WhatsApp to receive a formal quotation including availability and delivery options.
                  </p>
                </div>
              </div>

              {/* Trigger WhatsApp generation */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-4 px-6 bg-green-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Send Order via WhatsApp
              </button>
              
              <Link
                to="/shop"
                className="w-full mt-4 py-4 px-6 bg-gray-50 text-gray-900 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors border border-gray-200"
              >
                Continue Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
