import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            Get in <span className="font-source-serif italic text-brand-orange">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Details */}
          <div className="lg:w-1/3 p-10 sm:p-14 flex flex-col justify-center bg-gray-50">
            <div className="space-y-10">
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Near AIIMS Deoghar,<br />
                    Deoghar, Jharkhand 814152
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-gray-900 mb-1">Contact Us</h4>
                  <p className="text-gray-600 mb-1">
                    <a href="tel:+910000000000" className="hover:text-brand-orange transition-colors">+91 00000 00000</a>
                  </p>
                  <p className="text-sm font-medium text-green-600">
                    <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp Available</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 break-all">
                    <a href="mailto:hello@shrimanshrimatirasoi.com" className="hover:text-brand-orange transition-colors">hello@shrimanshrimatirasoi.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-gray-900 mb-1">Operating Hours</h4>
                  <p className="text-gray-600">
                    Monday - Sunday<br />
                    10:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Map */}
          <div className="lg:w-2/3 min-h-[400px] lg:min-h-full bg-gray-200 relative">
            {/* Using a placeholder embed for AIIMS Deoghar area */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d14436.564531481232!2d86.66699386377488!3d24.509748684784917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f117c4613ab7f5%3A0xc66579e0018d9f1c!2sAIIMS%20Deoghar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
