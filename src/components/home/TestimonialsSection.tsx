import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="bg-base-cream/50 py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            What Our <span className="font-source-serif italic text-brand-orange">Guests</span> Say
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Horizontal scroll container on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible gap-6 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-brand-orange/10 min-w-[300px] lg:min-w-0 flex flex-col snap-center shrink-0 hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="text-6xl font-source-serif text-brand-gold/40 leading-none h-8 mb-4">
                "
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-1 font-medium">
                {testimonial.quote}
              </p>
              
              <div className="mt-auto border-t border-gray-100 pt-6">
                <p className="font-poppins font-semibold text-brand-maroon">
                  {testimonial.name}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.rating ? "text-brand-gold fill-brand-gold" : "text-gray-300"} 
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
