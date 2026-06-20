import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages, type GalleryImage } from '../../data/galleryImages';
import ScrollReveal from '../common/ScrollReveal';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16 relative">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl lg:text-[10rem] font-source-serif font-bold text-white/[0.02] whitespace-nowrap z-0 pointer-events-none uppercase">
              Through Our Eyes
            </h2>
            <h3 className="relative z-10 font-poppins text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">A Glimpse Inside</h3>
            <h2 className="relative z-10 text-4xl md:text-5xl font-source-serif text-white mb-4">
              <span className="italic text-brand-maroon">Shriman Shrimati's</span> Eyes
            </h2>
          </div>
        </ScrollReveal>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <ScrollReveal 
              key={image.id} 
              delay={index * 0.1}
              className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div 
                className="group relative cursor-pointer overflow-hidden h-full"
                onClick={() => setSelectedImage(image)}
              >
                <div className={`w-full ${index === 0 ? 'aspect-video md:aspect-[4/3]' : 'aspect-square md:aspect-[3/4]'} bg-[#111111]`}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                </div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="font-poppins text-[10px] tracking-[0.1em] uppercase text-white/50 mb-1 group-hover:text-brand-orange transition-colors">
                    {image.caption}
                  </p>
                  <h4 className="font-source-serif text-lg text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    {image.alt}
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md" 
            onClick={() => setSelectedImage(null)}
          />
          
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          <div className="relative w-full max-w-5xl max-h-full flex flex-col items-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl animate-[heroReveal_0.4s_ease-out_forwards]"
            />
            <div className="mt-6 text-center animate-[heroFadeUp_0.4s_ease-out_forwards] [animation-delay:0.2s] opacity-0">
              <h3 className="text-xl font-source-serif text-white mb-2">{selectedImage.alt}</h3>
              <p className="font-poppins text-[10px] tracking-[0.2em] uppercase text-gray-500">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
