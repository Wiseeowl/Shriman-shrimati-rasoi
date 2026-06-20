import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OrderDeliveryToggle from '../components/order/OrderDeliveryToggle';
import OrderNowGrid from '../components/order/OrderNowGrid';

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-base-cream/20 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-24 px-6 relative">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-[heroFadeUp_0.8s_ease-out_forwards]">
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-6">
              Hot & Fresh <span className="font-source-serif italic text-brand-orange">Meals</span>
            </h1>
            <OrderDeliveryToggle />
          </div>

          <div className="animate-[heroFadeUp_0.8s_ease-out_forwards] [animation-delay:0.2s] opacity-0">
            <OrderNowGrid />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
