import ScrollReveal from '../common/ScrollReveal';

const menuItems = [
  {
    id: 1,
    name: "Dum Gosht Nihari",
    category: "SIGNATURE MEAT",
    description: "Slow-cooked overnight sheep shank in a reduction of 20 exotic spices, served in a hand-crafted brass pot.",
    image: "https://images.unsplash.com/photo-1544025162-8111142154ea?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 2,
    name: "Saffron Biryani Royale",
    category: "ROYAL RICE",
    description: "Oven-sealed basmati layered with royal awadhi masala. Slow baked with premium saffron & cardamom pods.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    name: "Tandoori Seekh Kebab",
    category: "CLAY OVEN",
    description: "Minced lamb infused with roasted cumin and crushed mint, skewered and charred to perfection.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    name: "Dal Makhani Noir",
    category: "HERITAGE LENTILS",
    description: "Black lentils and kidney beans simmered for 16 hours over a slow flame, finished with churned butter.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 5,
    name: "Butter Chicken Blanc",
    category: "MODERN CLASSIC",
    description: "A post-colonial reimagining. Char-roasted chicken tikka enveloped in a velvet tomato reduction.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 6,
    name: "Shahi Tukda",
    category: "SWEET ENDINGS",
    description: "Ghee-fried bread soaked in saffron syrup, crowned with reduced milk and silver leaf.",
    image: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  }
];

export default function MenuGridSection() {
  return (
    <section id="menu" className="bg-white py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        
        <ScrollReveal>
          <div className="mb-20 text-center md:text-left">
            <h3 className="font-poppins text-xs tracking-[0.2em] uppercase text-brand-maroon mb-4">Plated History</h3>
            <h2 className="font-source-serif text-4xl md:text-6xl text-gray-900">
              Language of <span className="italic text-brand-orange">Ancestors</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {menuItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1} className={item.colSpan}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-poppins text-[10px] tracking-[0.15em] uppercase text-brand-orange mb-3">{item.category}</p>
                <h3 className="font-source-serif text-2xl text-gray-900 mb-3">{item.name}</h3>
                <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
