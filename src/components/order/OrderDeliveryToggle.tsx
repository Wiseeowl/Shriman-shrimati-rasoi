import { Link, useLocation } from 'react-router-dom';
import { cn } from '../common/LiquidGlassPanel';

export default function OrderDeliveryToggle() {
  const location = useLocation();
  const isDelivery = location.pathname === '/delivery';

  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-white/20 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.6)] rounded-full p-1.5 flex items-center mb-4 w-[300px]">
        {/* Sliding indicator */}
        <div 
          className={cn(
            "absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white/50 backdrop-blur-xl border border-white/70 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] transition-transform duration-300 ease-in-out z-0",
            "after:content-[''] after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-1 after:bg-brand-orange after:rounded-full after:shadow-[0_0_8px_rgba(248,143,34,0.9)]",
            isDelivery ? "translate-x-full" : "translate-x-0"
          )}
        />
        
        {/* Decorative glass sphere effect on the active side */}
        <div 
          className={cn(
            "absolute top-0 bottom-0 w-1/2 rounded-full pointer-events-none transition-transform duration-300 ease-in-out z-10",
            "after:content-[''] after:absolute after:top-2 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-1.5 after:bg-white/90 after:rounded-full after:blur-[1px]",
            isDelivery ? "translate-x-full" : "translate-x-0"
          )}
        />

        <Link 
          to="/order" 
          className={cn(
            "relative z-20 flex-1 text-center py-2.5 text-sm transition-all duration-300",
            !isDelivery ? "text-gray-900 font-bold drop-shadow-sm" : "text-gray-600 font-medium hover:text-gray-900"
          )}
        >
          Order Now
        </Link>
        <Link 
          to="/delivery" 
          className={cn(
            "relative z-20 flex-1 text-center py-2.5 text-sm transition-all duration-300",
            isDelivery ? "text-gray-900 font-bold drop-shadow-sm" : "text-gray-600 font-medium hover:text-gray-900"
          )}
        >
          Delivery
        </Link>
      </div>

      <p className="text-sm font-medium tracking-widest uppercase text-brand-maroon mb-10">
        Serving Deoghar Only
      </p>
    </div>
  );
}
