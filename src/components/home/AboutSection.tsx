import ScrollReveal from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 px-6 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Main Large Typography */}
          <div className="w-full lg:w-2/3">
            <ScrollReveal>
              <h2 className="font-source-serif text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
                Born from the whispers of <span className="text-brand-maroon italic">palace kitchens</span>, perfected through a century of devotion.
              </h2>
            </ScrollReveal>
          </div>

          {/* Secondary Text and Mandala */}
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-8 mt-4 lg:mt-24">
            <ScrollReveal delay={0.2}>
              <div className="flex items-start gap-6">
                {/* Rotating SVG Graphic */}
                <motion.svg 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="text-brand-maroon flex-shrink-0 mt-1"
                >
                  <circle cx="50" cy="50" r="10" fill="currentColor"/>
                  <path d="M50 0L53.5 35L85.3 14.6L65 46.5L100 50L65 53.5L85.3 85.3L53.5 65L50 100L46.5 65L14.6 85.3L35 53.5L0 50L35 46.5L14.6 14.6L46.5 35L50 0Z" fill="currentColor"/>
                </motion.svg>
                
                <div>
                  <h3 className="font-poppins text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">The Genesis</h3>
                  <div className="space-y-4 font-montserrat text-sm text-gray-700 leading-relaxed">
                    <p>
                      Shriman Shrimati Rasoi was conceived not in a boardroom, but in the heart of traditional Rajasthani households. It began with a singular mission: to bring authentic, unfiltered flavors to the holy city of Deoghar.
                    </p>
                    <p>
                      Located near AIIMS Deoghar, our kitchen serves pilgrims, locals, and families with the same home-cooked warmth found in Rajasthan. Every dish, from Dal Baati Churma to Ghevar, uses secret spices sourced directly from the desert state.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
