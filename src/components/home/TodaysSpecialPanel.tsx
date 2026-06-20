import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// We'll use a placeholder image here for now, or import the first one from menuItems later.
import placeholderImg from '../../assets/menu/placeholder-dish.jpg';

export default function TodaysSpecialPanel() {
  return (
    <div className="liquid-glass-strong rounded-2xl p-6 hero-anim [animation-delay:0.85s]">
      <p className="text-xs tracking-widest text-white/60 uppercase font-semibold mb-4">
        Today's Special
      </p>
      
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
        <div className="relative w-full sm:w-32 lg:w-full h-32 lg:h-48 rounded-xl overflow-hidden shrink-0">
          <img 
            src={placeholderImg} 
            alt="Laal Maas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded-md">
            ₹279
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-poppins font-semibold text-white mb-1">
              Authentic Laal Maas
            </h3>
            <p className="text-sm text-white/80 line-clamp-2 mb-4">
              Fiery mutton curry prepared with signature Mathania chillies, a true Rajasthani delicacy.
            </p>
          </div>
          
          <Link 
            to="/order" 
            className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            <span>Order Now</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
