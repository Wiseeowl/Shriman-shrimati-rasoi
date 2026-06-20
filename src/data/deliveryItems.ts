import placeholderImg from '../assets/menu/placeholder-dish.jpg';

export interface DeliveryItem {
  id: string;
  name: string;
  description: string;
  image: string;
  unitOptions: {
    label: string;
    price: number;
  }[];
  isVeg: boolean;
  isSpicy?: boolean;
}

export const deliveryItems: DeliveryItem[] = [
  {
    id: 'd1',
    name: 'Spicy Mango Achar',
    description: 'Traditional raw mango pickle spiced with fenugreek and mustard. Sun-dried and aged to perfection.',
    image: placeholderImg,
    isVeg: true,
    unitOptions: [
      { label: '250g', price: 149 },
      { label: '500g', price: 279 },
      { label: '1kg', price: 499 },
    ]
  },
  {
    id: 'd2',
    name: 'Mixed Achar',
    description: 'Seasonal vegetables including carrot, chili, and lemon preserved in aromatic cold-pressed mustard oil.',
    image: placeholderImg,
    isVeg: true,
    unitOptions: [
      { label: '250g', price: 169 },
      { label: '500g', price: 319 },
    ]
  },
  {
    id: 'd3',
    name: 'Lahsun Chutney',
    description: 'Fiery garlic and red chili paste, stone-ground to perfection. A staple in every Rajasthani meal.',
    image: placeholderImg,
    isVeg: true,
    isSpicy: true,
    unitOptions: [
      { label: '250g', price: 189 },
      { label: '500g', price: 359 },
    ]
  },
  {
    id: 'd4',
    name: 'Pudina Chutney',
    description: 'Refreshing mint and coriander blend with a tangy kick. Perfect pairing for our starters.',
    image: placeholderImg,
    isVeg: true,
    unitOptions: [
      { label: '250g', price: 129 },
    ]
  },
  {
    id: 'd5',
    name: 'Kitchen King Masala',
    description: 'Versatile signature spice blend for everyday Rajasthani curries. Hand-pounded and roasted.',
    image: placeholderImg,
    isVeg: true,
    unitOptions: [
      { label: '100g', price: 110 },
      { label: '250g', price: 250 },
    ]
  },
  {
    id: 'd6',
    name: 'Garam Masala',
    description: 'Premium roasted whole spices, intensely aromatic and warming. Use sparingly.',
    image: placeholderImg,
    isVeg: true,
    unitOptions: [
      { label: '100g', price: 180 },
      { label: '250g', price: 420 },
    ]
  }
];
