import { Leaf, Navigation, Phone, Mail, Camera, Users, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-poppins">
      {/* Trust Badge Row */}
      <div className="bg-brand-maroon py-4 px-6">
        <div className="container mx-auto flex flex-wrap justify-center gap-x-12 gap-y-4 text-white/90 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <Leaf size={12} className="text-green-600" />
            </div>
            <span>Pure Veg Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-red-600 bg-white flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
            </div>
            <span>Non-Veg Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span>100% Hygienic Kitchen</span>
          </div>
          <div className="flex items-center gap-2">
            <span>FSSAI License No.: XXXXXXXXXXXXXX</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Explore */}
          <div>
            <h3 className="text-xl font-source-serif font-semibold text-brand-gold mb-6">Explore More</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="/#menu" className="hover:text-brand-orange transition-colors">Menu</a></li>
              <li><a href="/order" className="hover:text-brand-orange transition-colors">Order Online</a></li>
              <li><a href="/#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-xl font-source-serif font-semibold text-brand-gold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Navigation className="text-brand-orange shrink-0 mt-1" size={20} />
                <span>Near AIIMS Deoghar,<br />Deoghar, Jharkhand 814152</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={20} />
                <a href="tel:+910000000000" className="hover:text-brand-orange transition-colors">+91 00000 00000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={20} />
                <a href="mailto:hello@shrimanshrimatirasoi.com" className="hover:text-brand-orange transition-colors">hello@shrimanshrimatirasoi.com</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow & Logo */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-xl font-source-serif font-semibold text-brand-gold mb-6">Follow Us</h3>
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                <Users size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
            
            {/* Minimal Brand Mark for Footer */}
            <div className="mt-auto text-left md:text-right">
              <p className="font-source-serif italic text-xl text-white/50">Shriman Shrimati Rasoi</p>
              <p className="text-sm text-gray-400 mt-2">The Taste of Rajasthan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4 px-6 border-t border-white/10 relative">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 Shriman Shrimati Rasoi, Deoghar. All rights reserved.</p>
        </div>
        
        {/* Back to top button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-6 -top-5 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center hover:bg-brand-deepOrange transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
