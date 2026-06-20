import galleryInterior from '../assets/gallery/interior.png';
import galleryThali from '../assets/gallery/thali.png';
import gallerySpices from '../assets/gallery/spices.png';
import galleryKitchen from '../assets/gallery/kitchen.png';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: galleryInterior,
    alt: 'Restaurant Interior',
    caption: 'Warm, traditional Rajasthani ambiance',
  },
  {
    id: 'g2',
    src: galleryThali,
    alt: 'Authentic Thali',
    caption: 'Our signature Dal Baati Churma',
  },
  {
    id: 'g3',
    src: gallerySpices,
    alt: 'Premium Spices',
    caption: 'Locally sourced Rajasthani spices',
  },
  {
    id: 'g4',
    src: galleryKitchen,
    alt: 'Live Kitchen',
    caption: 'Fresh preparation every day',
  },
];
