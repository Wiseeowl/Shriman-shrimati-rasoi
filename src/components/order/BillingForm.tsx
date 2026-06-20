import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../common/Button';
import UpiPaymentButton from './UpiPaymentButton';
import { useCart } from '../../context/CartContext';

interface BillingFormProps {
  onBack: () => void;
}

export default function BillingForm({ onBack }: BillingFormProps) {
  const { items, getSubtotal } = useCart();
  const [fulfillment, setFulfillment] = useState<'delivery' | 'pickup'>('delivery');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentPending, setPaymentPending] = useState(false);

  const subtotal = getSubtotal();
  const hasHotFood = items.some(item => item.type === 'order');
  const hasBulkGoods = items.some(item => item.type === 'delivery');
  
  // Calculate delivery fee
  let deliveryFee = 0;
  if (fulfillment === 'delivery') {
    if (subtotal >= 500) {
      deliveryFee = 0; // Free delivery over 500
    } else {
      // Hot food is priority for fee. If both, just charge the higher one (50 for bulk)
      if (hasBulkGoods) deliveryFee = 50;
      else if (hasHotFood) deliveryFee = 30;
    }
  }

  const total = subtotal + deliveryFee;

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate validation and processing
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentPending(true);
    }, 800);
  };

  const [orderId] = useState(() => `ORD-${Math.floor(1000 + Math.random() * 9000)}`);

  if (paymentPending) {
    return (
      <div className="animate-[heroFade_0.4s_ease-out]">
        <UpiPaymentButton total={total} orderId={orderId} />
        <button 
          onClick={() => setPaymentPending(false)}
          className="w-full mt-4 text-sm text-gray-500 hover:text-gray-800 font-medium"
        >
          Cancel and go back
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleProceedToPayment} className="animate-[heroFade_0.3s_ease-out]">
      <button 
        type="button" 
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-orange transition-colors mb-6 font-medium"
      >
        <ArrowLeft size={16} /> Back to Cart
      </button>

      {/* Fulfillment Toggle */}
      <div className="flex bg-white rounded-lg p-1 border border-gray-200 mb-8 shadow-sm">
        <button
          type="button"
          onClick={() => setFulfillment('delivery')}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
            fulfillment === 'delivery' ? 'bg-brand-orange text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Delivery
        </button>
        <button
          type="button"
          onClick={() => setFulfillment('pickup')}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
            fulfillment === 'pickup' ? 'bg-brand-orange text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Pickup
        </button>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input required type="text" className="w-full rounded-lg border-gray-300 px-4 py-2.5 border focus:ring-brand-orange focus:border-brand-orange outline-none bg-white" placeholder="John Doe" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input required type="tel" className="w-full rounded-lg border-gray-300 px-4 py-2.5 border focus:ring-brand-orange focus:border-brand-orange outline-none bg-white" placeholder="+91 00000 00000" />
        </div>

        {fulfillment === 'delivery' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Locality (Deoghar Only) *</label>
              <select required className="w-full rounded-lg border-gray-300 px-4 py-2.5 border focus:ring-brand-orange focus:border-brand-orange outline-none bg-white">
                <option value="">Select Area</option>
                <option value="aiims">Near AIIMS Deoghar</option>
                <option value="tower">Tower Chowk Area</option>
                <option value="baba">Baidyanath Dham Area</option>
                <option value="other">Other (Within City Limits)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Complete Address *</label>
              <textarea required rows={2} className="w-full rounded-lg border-gray-300 px-4 py-2.5 border focus:ring-brand-orange focus:border-brand-orange outline-none bg-white resize-none" placeholder="House/Flat No., Street, Landmark"></textarea>
            </div>
          </>
        )}
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-xl p-5 border border-gray-200 mb-8 shadow-sm">
        <h3 className="font-poppins font-medium text-gray-900 mb-4">Order Summary</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Item Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-600 border-b border-gray-100 pb-3">
            <span>Delivery Fee</span>
            {deliveryFee === 0 ? (
              <span className="text-green-600 font-medium">Free</span>
            ) : (
              <span>₹{deliveryFee}</span>
            )}
          </div>
          <div className="flex justify-between font-bold text-gray-900 pt-1 text-lg">
            <span>Total to Pay</span>
            <span className="text-brand-orange">₹{total}</span>
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full py-4 text-lg"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : `Pay ₹${total} via UPI`}
      </Button>
    </form>
  );
}
