import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';
import { useState } from 'react';
import BillingForm from './BillingForm';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, getSubtotal } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  // Close completely or go back to cart view from checkout
  const handleClose = () => {
    if (isCheckout) {
      setIsCheckout(false);
    } else {
      setIsCartOpen(false);
    }
  };

  if (!isCartOpen) return null;

  const subtotal = getSubtotal();

  return (
    <div className="fixed inset-0 z-[200]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className={`absolute top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-poppins font-semibold text-gray-900 flex items-center gap-2">
            <ShoppingBag size={24} className="text-brand-orange" />
            {isCheckout ? 'Checkout' : 'Your Order'}
          </h2>
          <button 
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-800 transition-colors rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        {isCheckout ? (
          <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
            <BillingForm onBack={() => setIsCheckout(false)} />
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-gray-500">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <p className="text-lg font-medium text-gray-700 mb-2">Your cart is empty</p>
            <p className="text-sm mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button onClick={() => setIsCartOpen(false)}>
              Start Ordering
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.unitOption || 'default'}`} className="flex gap-4 border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                  
                  {/* Item Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-poppins font-medium text-gray-900 line-clamp-2 pr-4">{item.name}</h4>
                      <button 
                        onClick={() => removeItem(item.id, item.unitOption)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    {item.unitOption && (
                      <p className="text-sm text-gray-500 mb-2">{item.unitOption}</p>
                    )}
                    
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-semibold text-brand-orange">
                        ₹{item.price * item.quantity}
                      </span>
                      
                      {/* Stepper */}
                      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.unitOption)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-brand-orange shadow-sm transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-medium w-4 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.unitOption)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-brand-orange shadow-sm transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary */}
            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">₹{subtotal}</span>
              </div>
              <div className="flex justify-between mb-6 text-gray-600 text-sm">
                <span>Taxes & Delivery</span>
                <span>Calculated at checkout</span>
              </div>
              
              <Button 
                className="w-full text-lg" 
                onClick={() => setIsCheckout(true)}
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
