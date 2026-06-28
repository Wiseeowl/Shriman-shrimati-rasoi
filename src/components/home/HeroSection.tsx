import { Link } from 'react-router-dom';
import HeroVideoBackground from './HeroVideoBackground';
import TodaysSpecialPanel from './TodaysSpecialPanel';
import { featureFlags } from '../../config/featureFlags';

export default function HeroSection() {
  return (
    <section className="relative w-full h-dvh min-h-[600px] overflow-hidden flex items-center justify-center">
      <HeroVideoBackground />
      {/* Content Layer */}
      <div className="w-full px-2 md:px-8 relative z-10 pt-20 pb-10 flex flex-col justify-center h-full pointer-events-none">
        
        <div className={`flex flex-col lg:flex-row gap-8 w-full ${!featureFlags.SHOW_TODAYS_SPECIAL ? 'w-[95%] max-w-none mx-auto items-center text-center' : 'w-full mx-auto'}`}>
          
          {/* Main Glass Panel */}
          <div className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 flex flex-col justify-center pointer-events-auto ${featureFlags.SHOW_TODAYS_SPECIAL ? 'lg:w-[65%]' : 'w-full items-center text-center'}`}>
            
            <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] leading-tight mb-4">
              <span className="block text-gray-900 font-poppins font-semibold hero-reveal [animation-delay:0.25s]">
                The Taste of
              </span>
              <span className="block text-gray-800 font-source-serif italic font-bold hero-reveal [animation-delay:0.42s]">
                Rajasthan
              </span>
            </h1>
            
            {/* Action Row */}
            <div className={`relative z-10 flex flex-wrap gap-4 mb-10 hero-fade [animation-delay:0.7s] ${!featureFlags.SHOW_TODAYS_SPECIAL ? 'justify-center' : ''}`}>
              <Link 
                to="/order" 
                className="text-white rounded-full px-8 py-3.5 font-medium transition-all hover:scale-105 active:scale-95 border border-white/30"
                style={{ 
                  backgroundColor: '#F88F22',
                  boxShadow: '0 12px 30px rgba(248,143,34,0.6), inset 0 2px 4px rgba(255,255,255,0.4)' 
                }}
              >
                Order Now
              </Link>
            </div>
            
            {/* Quote Block */}
            <div className="relative z-10 mt-auto border-t border-white/20 pt-6 hero-anim [animation-delay:0.85s]">
              <p className="text-xs tracking-widest text-white/60 uppercase font-semibold mb-2">
                Our Heritage
              </p>
              <p className="font-source-serif italic text-gray-900 font-medium text-lg">
                "Recipes passed down through generations of Rajasthani cooking."
              </p>
              <p className="text-sm text-gray-800 mt-1 font-medium">— Shriman Shrimati Rasoi</p>
            </div>
            
          </div>
          
          {/* Today's Special Panel (Feature Flagged) */}
          {featureFlags.SHOW_TODAYS_SPECIAL && (
            <div className="lg:w-[35%] flex flex-col justify-end pointer-events-auto">
              <TodaysSpecialPanel />
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
