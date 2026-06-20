import { X } from 'lucide-react';
import Button from '../common/Button';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-[heroFadeUp_0.3s_ease-out]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-poppins font-semibold text-gray-900 mb-2">Welcome</h2>
          <p className="text-gray-500 text-sm">Login to track orders and save addresses</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("OTP Sent! (Mock)"); onClose(); }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-medium">
                +91
              </span>
              <input 
                required 
                type="tel" 
                pattern="[0-9]{10}"
                className="w-full rounded-r-xl border-gray-300 px-4 py-3 border focus:ring-brand-orange focus:border-brand-orange outline-none bg-white transition-shadow" 
                placeholder="98765 43210" 
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full py-3.5">
            Send OTP
          </Button>
        </form>
        
        <p className="text-center text-xs text-gray-400 mt-6">
          By continuing, you agree to our Terms of Service & Privacy Policy
        </p>
      </div>
    </div>
  );
}
