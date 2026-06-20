import { useState } from 'react';
import type { FormEvent } from 'react';
import Button from '../common/Button';

export default function CateringSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const text = `*New Catering Inquiry*%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Event:* ${data.eventType}%0A*Guests:* ${data.guests}%0A*Date:* ${data.date}%0A*Message:* ${data.message}`;
    
    // Open WhatsApp in new tab (replace with actual number later)
    setTimeout(() => {
      window.open(`https://wa.me/910000000000?text=${text}`, '_blank');
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      alert("Redirecting to WhatsApp to send your inquiry!");
    }, 600);
  };

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="bg-base-cream rounded-[2.5rem] overflow-hidden shadow-sm border border-brand-orange/10 flex flex-col lg:flex-row">
          
          {/* Left Pitch */}
          <div className="lg:w-5/12 p-10 sm:p-14 bg-brand-maroon text-white flex flex-col justify-center">
            <p className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-4">Catering Services</p>
            <h2 className="text-3xl sm:text-4xl font-poppins font-semibold mb-6">
              Grand Rajasthani Feasts for Your Celebrations
            </h2>
            <p className="text-white/80 leading-relaxed mb-10 text-lg">
              From intimate family gatherings to grand weddings, let us bring the royal taste of Rajasthan to your special events in Deoghar. 
              Our expert chefs prepare everything fresh, ensuring a memorable culinary experience for your guests.
            </p>
            <div className="space-y-4 text-white/90 font-medium">
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold" /> Customized Menus
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold" /> Bulk Delivery Available
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold" /> Professional Setup
              </p>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="lg:w-7/12 p-10 sm:p-14">
            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-8">
              Request a Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input required type="text" id="name" name="name" className="w-full rounded-xl border-gray-200 px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none bg-white border transition-shadow" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input required type="tel" id="phone" name="phone" className="w-full rounded-xl border-gray-200 px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none bg-white border transition-shadow" placeholder="+91 00000 00000" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1.5">Event Type</label>
                  <select required id="eventType" name="eventType" className="w-full rounded-xl border-gray-200 px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none bg-white border transition-shadow">
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Festival">Festival</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1.5">Guest Count</label>
                  <input required type="number" id="guests" name="guests" min="10" className="w-full rounded-xl border-gray-200 px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none bg-white border transition-shadow" placeholder="50" />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1.5">Event Date</label>
                  <input required type="date" id="date" name="date" className="w-full rounded-xl border-gray-200 px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none bg-white border transition-shadow" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Additional Details</label>
                <textarea required id="message" name="message" rows={4} className="w-full rounded-xl border-gray-200 px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none bg-white border transition-shadow resize-none" placeholder="Tell us about your preferences, special dietary requirements, etc."></textarea>
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-10">
                {isSubmitting ? 'Processing...' : 'Send Inquiry via WhatsApp'}
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
