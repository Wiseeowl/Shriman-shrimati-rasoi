import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import Button from '../common/Button';
import { cn } from '../common/LiquidGlassPanel';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import logoTransparent from '../../assets/logo-transparent.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getItemCount, setIsCartOpen } = useCart();
  const { user, login } = useAuth();

  const isHome = location.pathname === '/';
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      if (!isScrolledPastHero) setIsScrolledPastHero(true);
      return;
    }

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.9;
      setIsScrolledPastHero(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, isScrolledPastHero]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/order' },
    { name: 'About Us', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolledPastHero ? 'py-2' : 'py-3'
      }`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolledPastHero ? 'bg-white/90 backdrop-blur-md shadow-sm opacity-100' : 'opacity-0'
        }`}
      />

      <div className="w-full px-2 md:px-4 lg:px-6 relative z-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoTransparent} alt="Shriman Shrimati Rasoi Logo" className="w-[80px] h-[80px] object-contain" />
          <span
            className={`font-source-serif italic text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              isScrolledPastHero ? 'text-brand-maroon' : 'text-gray-900'
            }`}
          >
            Shriman Shrimati Rasoi
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <nav
            className={`flex items-center gap-6 px-6 py-2.5 rounded-full transition-colors duration-300 ${
              isScrolledPastHero ? 'bg-transparent text-gray-800 font-semibold' : 'liquid-glass text-gray-900 text-sm font-semibold'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`transition-colors hover:text-brand-orange`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setIsCartOpen(true)}
              className={cn(
                "relative p-2 hover:text-brand-orange transition-colors",
                isScrolledPastHero || !isHome ? "text-gray-800" : "text-gray-900"
              )}
            >
              <ShoppingBag size={24} />
              {getItemCount() > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-brand-orange text-white text-xs font-bold flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4 shadow-sm">
                  {getItemCount()}
                </span>
              )}
            </button>
            <button 
              onClick={() => user ? null : login()}
              className={cn(
                "hover:text-brand-orange transition-colors flex items-center gap-2 font-bold",
                isScrolledPastHero || !isHome ? "text-gray-800" : "text-gray-900"
              )}
            >
              {user ? (
                <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <User size={18} />
                </div>
              ) : (
                'Login'
              )}
            </button>

          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsCartOpen(true)}
            className={cn(
              "relative p-2",
              isScrolledPastHero || !isHome ? "text-gray-800" : "text-gray-900"
            )}
          >
            <ShoppingBag size={24} />
            {getItemCount() > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4">
                {getItemCount()}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2",
              isScrolledPastHero || !isHome ? "text-gray-800" : "text-gray-900"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-3/4 max-w-sm liquid-glass-strong p-6 flex flex-col transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 p-2">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 text-lg font-medium text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="hover:text-brand-orange"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <button className="w-full py-3 bg-brand-orange text-white rounded-full font-medium text-lg hover:bg-brand-deepOrange transition-colors">
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
