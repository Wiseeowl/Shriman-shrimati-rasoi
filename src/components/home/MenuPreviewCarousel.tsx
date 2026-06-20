import MenuItemCard from './MenuItemCard';
import LiquidGlassPanel from '../common/LiquidGlassPanel';
import { menuItems } from '../../data/menuItems';

export default function MenuPreviewCarousel() {
  // Duplicate items to create a seamless infinite marquee
  const marqueeItems = [...menuItems, ...menuItems];

  return (
    <section id="menu" className="relative bg-base-cream/30 py-24 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-orange/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            Our <span className="font-source-serif italic text-brand-orange">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* The Glassmorphism Frame without blob spots */}
        <LiquidGlassPanel variant="strong" className="p-8 sm:p-12 rounded-[2.5rem]">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-2xl font-source-serif font-bold text-gray-900">Signature Dishes</h3>
              <p className="text-gray-900 font-medium mt-1">A glimpse into our authentic offerings</p>
            </div>
            <a 
              href="/order" 
              className="hidden sm:inline-flex text-brand-orange font-medium hover:text-brand-deepOrange transition-colors"
            >
              View Full Menu &rarr;
            </a>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
              {marqueeItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="w-[280px] shrink-0">
                  <MenuItemCard
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    isVeg={item.isVeg}
                    image={item.image}
                    readOnly={true}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <a 
              href="/order" 
              className="inline-flex items-center justify-center w-full py-3 bg-brand-orange text-white rounded-full font-medium"
            >
              View Full Menu
            </a>
          </div>

        </LiquidGlassPanel>
      </div>
    </section>
  );
}
