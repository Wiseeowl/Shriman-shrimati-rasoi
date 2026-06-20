import { useState } from 'react';
import { Plus, Minus, Flame } from 'lucide-react';
import { deliveryItems } from '../../data/deliveryItems';
import Pill from '../common/Pill';
import Button from '../common/Button';
import { useCart } from '../../context/CartContext';

export default function DeliveryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {deliveryItems.map(item => (
        <DeliveryItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function DeliveryItemCard({ item }: { item: typeof deliveryItems[0] }) {
  const { items, addItem, updateQuantity } = useCart();
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);

  const selectedUnit = item.unitOptions[selectedUnitIndex];

  // Find if this specific unit of this item is in the cart
  const cartItem = items.find(i => i.id === item.id && i.unitOption === selectedUnit.label);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="liquid-glass-strong rounded-2xl overflow-hidden group flex flex-col h-full relative">
      {item.isSpicy && (
        <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-md">
          <Flame size={12} /> Spicy
        </div>
      )}

      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay at bottom of image for contrast */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10 -mt-6 bg-white/10 backdrop-blur-md rounded-t-3xl">
        <h3 className="text-xl font-semibold font-poppins text-brand-orange mb-2 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-white/80 text-sm line-clamp-2 leading-relaxed mb-5">
          {item.description}
        </p>
        
        {/* Unit Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.unitOptions.map((opt, idx) => (
            <button
              key={opt.label}
              onClick={() => setSelectedUnitIndex(idx)}
              className="focus:outline-none"
            >
              <Pill 
                variant="solid" 
                active={selectedUnitIndex === idx}
                className={
                  selectedUnitIndex === idx 
                    ? 'bg-brand-gold text-brand-maroon shadow-md' 
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }
              >
                {opt.label}
              </Pill>
            </button>
          ))}
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-white/60 text-xs uppercase tracking-wider mb-0.5">Price</span>
            <span className="text-2xl font-bold text-brand-gold drop-shadow-sm">
              ₹{selectedUnit.price}
            </span>
          </div>
          
          {quantity === 0 ? (
            <Button 
              size="md" 
              onClick={() => addItem({
                id: item.id,
                name: item.name,
                price: selectedUnit.price,
                image: item.image,
                type: 'delivery',
                unitOption: selectedUnit.label
              })} 
              className="bg-brand-gold text-brand-maroon hover:bg-brand-gold hover:text-brand-maroon shadow-lg"
            >
              Add to Cart
            </Button>
          ) : (
            <div className="flex items-center gap-4 bg-white/20 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/30 shadow-inner">
              <button 
                onClick={() => updateQuantity(item.id, quantity - 1, selectedUnit.label)}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-maroon hover:bg-brand-gold transition-colors shadow-sm"
              >
                <Minus size={16} strokeWidth={3} />
              </button>
              <span className="font-bold w-4 text-center text-white text-lg">{quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, quantity + 1, selectedUnit.label)}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-maroon hover:bg-brand-gold transition-colors shadow-sm"
              >
                <Plus size={16} strokeWidth={3} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
