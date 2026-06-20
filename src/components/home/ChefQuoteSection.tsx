import ScrollReveal from '../common/ScrollReveal';

export default function ChefQuoteSection() {
  return (
    <section className="bg-base-cream py-24 md:py-32 px-6 border-y border-gray-200">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <ScrollReveal>
              <h2 className="font-source-serif text-4xl md:text-5xl lg:text-7xl text-gray-900 leading-tight mb-8">
                "I do not make food. <br />
                <span className="italic text-brand-maroon">I make memory edible.</span>"
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-poppins text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">Chef Anil Verma</h3>
                  <p className="font-poppins text-[10px] tracking-[0.1em] uppercase text-brand-orange">Executive Chef & Culinary Director, Shriman Shrimati Rasoi</p>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-[1px] bg-brand-maroon mt-3 shrink-0" />
                  <p className="font-montserrat text-sm text-gray-600 leading-relaxed max-w-md">
                    Time is the First Ingredient. Nothing worth eating was ever rushed. Our slowest dish takes 48 hours. That is not delay — that is respect.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-2/5 order-1 lg:order-2">
            <ScrollReveal delay={0.4} direction="left">
              <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative">
                {/* Fallback image */}
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
                  alt="Executive Chef"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
