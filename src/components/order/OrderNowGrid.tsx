import { useState } from 'react';
import MenuItemCard from '../home/MenuItemCard';
import { menuItems } from '../../data/menuItems';
import Pill from '../common/Pill';

const categories = ['All', 'Thali', 'Starters', 'Main Course', 'Breads', 'Rice', 'Desserts'];

export default function OrderNowGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filters */}
      <div className="flex overflow-x-auto pb-6 -mx-6 px-6 sm:mx-0 sm:px-0 gap-3 hide-scrollbar mb-8">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            className="shrink-0 focus:outline-none"
          >
            <Pill 
              variant="solid" 
              active={activeCategory === category}
              className={activeCategory === category ? '' : 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-700'}
            >
              {category}
            </Pill>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <MenuItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            isVeg={item.isVeg}
            image={item.image}
            isLiquidGlass={true} // Enabled for V2 design
          />
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 font-medium">No items found in this category.</p>
        </div>
      )}
    </div>
  );
}
