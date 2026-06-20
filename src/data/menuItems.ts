import placeholderImg from '../assets/menu/placeholder-dish.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  isVeg: boolean;
  image: string;
  isTodaysSpecial?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    name: 'Dal Baati Churma',
    category: 'Main Course',
    price: 179,
    isVeg: true,
    image: placeholderImg,
  },
  {
    id: 'm2',
    name: 'Rajasthani Veg Thali',
    category: 'Thali',
    price: 199,
    isVeg: true,
    image: placeholderImg,
  },
  {
    id: 'm3',
    name: 'Rajasthani Non-Veg Thali',
    category: 'Thali',
    price: 299,
    isVeg: false,
    image: placeholderImg,
  },
  {
    id: 'm4',
    name: 'Laal Maas',
    category: 'Main Course',
    price: 279,
    isVeg: false,
    image: placeholderImg,
    isTodaysSpecial: true,
  },
  {
    id: 'm5',
    name: 'Gatte ki Sabzi',
    category: 'Main Course',
    price: 159,
    isVeg: true,
    image: placeholderImg,
  },
  {
    id: 'm6',
    name: 'Mirchi Vada',
    category: 'Starters',
    price: 89,
    isVeg: true,
    image: placeholderImg,
  },
  {
    id: 'm7',
    name: 'Pyaaz Kachori',
    category: 'Starters',
    price: 69,
    isVeg: true,
    image: placeholderImg,
  },
  {
    id: 'm8',
    name: 'Ghevar',
    category: 'Desserts',
    price: 129,
    isVeg: true,
    image: placeholderImg,
  },
];
