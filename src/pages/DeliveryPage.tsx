import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OrderDeliveryToggle from '../components/order/OrderDeliveryToggle';
import DeliveryGrid from '../components/order/DeliveryGrid';

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-base-cream/20 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-24 px-6 relative">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-[heroFadeUp_0.8s_ease-out_forwards]">
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-6">
              Bulk Packaged <span className="font-source-serif italic text-brand-maroon">Goods</span>
            </h1>
            <OrderDeliveryToggle />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Authentic Rajasthani pickles, chutneys, and spices prepared in our kitchen, carefully packaged and delivered to your doorstep.
            </p>
          </div>

          <div className="animate-[heroFadeUp_0.8s_ease-out_forwards] [animation-delay:0.2s] opacity-0">
            <DeliveryGrid />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
