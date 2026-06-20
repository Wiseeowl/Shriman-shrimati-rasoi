import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import WhyUsSection from '../components/home/WhyUsSection';
import MenuPreviewCarousel from '../components/home/MenuPreviewCarousel';
import MenuGridSection from '../components/home/MenuGridSection';
import ChefQuoteSection from '../components/home/ChefQuoteSection';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CateringSection from '../components/home/CateringSection';
import FAQSection from '../components/home/FAQSection';
import ContactSection from '../components/home/ContactSection';
import IntroLoader from '../components/common/IntroLoader';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden relative">
      <IntroLoader />
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <MenuPreviewCarousel />
        <MenuGridSection />
        <ChefQuoteSection />
        <TestimonialsSection />
        <CateringSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
