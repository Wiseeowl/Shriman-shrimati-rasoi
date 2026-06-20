import { Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';

export interface MenuItemCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  isVeg: boolean;
  isLiquidGlass?: boolean; // V2 feature
  readOnly?: boolean;
}

export default function MenuItemCard({ id, name, image, price, isVeg, isLiquidGlass = false, readOnly = false }: MenuItemCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  
  // Find if this item is in the cart
  const cartItem = items.find(item => item.id === id);
  const quantity = cartItem?.quantity || 0;

  const containerClass = isLiquidGlass 
    ? "liquid-glass-strong rounded-2xl overflow-hidden group flex flex-col h-full cursor-pointer"
    : "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group flex flex-col h-full hover:shadow-md transition-shadow cursor-pointer";

  const handleCardClick = () => {
    if (readOnly) {
      window.location.href = '/order';
    }
  };

  return (
    <div className={containerClass} onClick={handleCardClick}>
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Veg/Non-Veg Badge */}
        <div className="absolute top-3 right-3 w-6 h-6 rounded-md bg-white flex items-center justify-center shadow-sm">
          <div className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold font-poppins mb-1 line-clamp-1 text-brand-orange">
          {name}
        </h3>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className={`text-lg font-bold text-brand-orange`}>
            ₹{price}
          </span>
          
          {readOnly ? (
            <Button 
              size="sm" 
              className="px-4 pointer-events-none"
            >
              Order
            </Button>
          ) : quantity === 0 ? (
            <Button 
              size="sm" 
              onClick={(e) => { e.stopPropagation(); addItem({ id, name, price, image, type: 'order' }); }} 
              className="px-5"
            >
              Add
            </Button>
          ) : (
            <div className="flex items-center gap-3 bg-brand-orange/10 rounded-full px-1 py-1" onClick={e => e.stopPropagation()}>
              <button 
                onClick={(e) => { e.stopPropagation(); updateQuantity(id, quantity - 1); }}
                className="w-7 h-7 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-orange/80 transition-colors shadow-sm"
              >
                <Minus size={14} strokeWidth={3} />
              </button>
              <span className={`font-semibold w-3 text-center text-brand-orange`}>{quantity}</span>
              <button 
                onClick={(e) => { e.stopPropagation(); updateQuantity(id, quantity + 1); }}
                className="w-7 h-7 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-orange/80 transition-colors shadow-sm"
              >
                <Plus size={14} strokeWidth={3} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
