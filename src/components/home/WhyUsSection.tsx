import { useEffect, useRef, useState } from 'react';
import { ChefHat, Leaf, Sprout, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <ChefHat size={32} />,
    title: 'Generational Recipes',
    description: 'Authentic Rajasthani recipes passed down through generations of our family.'
  },
  {
    icon: <Sprout size={32} />,
    title: 'Premium Spices',
    description: 'We source the finest Mathania chillies and spices directly from Rajasthan.'
  },
  {
    icon: <Leaf size={32} />,
    title: 'Home-Style Cooking',
    description: 'Every dish tastes exactly like it was made in a traditional Rajasthani home kitchen.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Hygiene First',
    description: 'FSSAI certified, 100% hygienic cloud kitchen where cleanliness is our top priority.'
  }
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            Why <span className="text-brand-orange font-source-serif italic">Choose</span> Us
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 transition-all duration-1000 delay-[${index * 150}ms] hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold text-brand-maroon mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
