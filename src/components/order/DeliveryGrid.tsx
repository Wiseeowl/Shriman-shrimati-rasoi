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
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group flex flex-col h-full hover:shadow-md transition-shadow">
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
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold font-poppins text-brand-orange mb-1 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-4">
          {item.description}
        </p>
        
        {/* Unit Selector */}
        <div className="flex flex-wrap gap-2 mb-4">
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
                    ? 'bg-brand-orange text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              >
                {opt.label}
              </Pill>
            </button>
          ))}
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-brand-orange">
              ₹{selectedUnit.price}
            </span>
          </div>
          
          {quantity === 0 ? (
            <Button 
              size="sm" 
              onClick={() => addItem({
                id: item.id,
                name: item.name,
                price: selectedUnit.price,
                image: item.image,
                type: 'delivery',
                unitOption: selectedUnit.label
              })} 
              className="px-5"
            >
              Add
            </Button>
          ) : (
            <div className="flex items-center gap-3 bg-brand-orange/10 rounded-full px-1 py-1">
              <button 
                onClick={() => updateQuantity(item.id, quantity - 1, selectedUnit.label)}
                className="w-7 h-7 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-orange/80 transition-colors shadow-sm"
              >
                <Minus size={14} strokeWidth={3} />
              </button>
              <span className="font-semibold w-3 text-center text-brand-orange">{quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, quantity + 1, selectedUnit.label)}
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
