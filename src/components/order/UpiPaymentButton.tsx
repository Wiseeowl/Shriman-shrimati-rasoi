
import { Smartphone, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface UpiPaymentButtonProps {
  total: number;
  orderId: string;
}

export default function UpiPaymentButton({ total, orderId }: UpiPaymentButtonProps) {
  const [hasAttemptedPay, setHasAttemptedPay] = useState(false);
  
  // Placeholder VPA
  const upiId = "shrimanshrimati@upi";
  const merchantName = encodeURIComponent("Shriman Shrimati Rasoi");
  
  // Format the deep link
  const upiDeepLink = `upi://pay?pa=${upiId}&pn=${merchantName}&am=${total}&cu=INR&tn=Order-${orderId}`;

  const handlePayClick = () => {
    setHasAttemptedPay(true);
    // On mobile, this will try to open installed UPI apps
    window.location.href = upiDeepLink;
  };

  if (hasAttemptedPay) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-sm text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">Payment Pending</h3>
        <p className="text-gray-600 mb-6">
          We've requested payment via your UPI app. Please complete the transaction on your phone.
        </p>
        <div className="bg-orange-50 rounded-lg p-4 border border-brand-orange/20 text-sm text-brand-maroon">
          Once payment is complete, we will verify and confirm your order via WhatsApp shortly.
        </div>
        
        <a 
          href={`https://wa.me/910000000000?text=Hi, I just paid for Order ${orderId} (₹${total}).`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full justify-center items-center py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
        >
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center">
      <h3 className="font-poppins font-semibold text-gray-900 mb-1">Scan & Pay</h3>
      <p className="text-gray-500 text-sm mb-6">Use any UPI app (GPay, PhonePe, Paytm)</p>
      
      {/* Mock QR Code Container - In a real app we'd use qrcode.react */}
      <div className="w-48 h-48 bg-white border-2 border-gray-100 rounded-xl p-2 mb-6 flex items-center justify-center shadow-inner relative overflow-hidden group">
        <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        {/* Placeholder SVG that looks like a QR code */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800">
          <rect x="10" y="10" width="20" height="20" fill="currentColor" />
          <rect x="15" y="15" width="10" height="10" fill="white" />
          
          <rect x="70" y="10" width="20" height="20" fill="currentColor" />
          <rect x="75" y="15" width="10" height="10" fill="white" />
          
          <rect x="10" y="70" width="20" height="20" fill="currentColor" />
          <rect x="15" y="75" width="10" height="10" fill="white" />
          
          {/* Random dots to simulate QR data */}
          <rect x="40" y="10" width="20" height="20" fill="currentColor" opacity="0.6" />
          <rect x="10" y="40" width="20" height="20" fill="currentColor" opacity="0.8" />
          <rect x="70" y="40" width="20" height="20" fill="currentColor" opacity="0.7" />
          <rect x="40" y="70" width="20" height="20" fill="currentColor" opacity="0.9" />
          <rect x="40" y="40" width="20" height="20" fill="currentColor" />
          <rect x="70" y="70" width="10" height="10" fill="currentColor" />
          <rect x="85" y="85" width="5" height="5" fill="currentColor" />
        </svg>
      </div>

      <div className="flex items-center gap-2 mb-8 text-gray-600">
        <span className="font-medium">{upiId}</span>
      </div>

      <div className="w-full relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500 uppercase font-medium">Or pay on mobile</span>
        </div>
      </div>

      <button
        onClick={handlePayClick}
        className="mt-6 w-full flex items-center justify-center gap-2 py-4 bg-brand-orange text-white rounded-xl font-medium hover:bg-brand-deepOrange transition-colors shadow-[0_4px_14px_rgba(248,143,34,0.3)]"
      >
        <Smartphone size={20} />
        Open UPI App to Pay ₹{total}
      </button>
    </div>
  );
}
