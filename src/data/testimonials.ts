export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  { 
    id: 't1', 
    name: "Rajesh K.", 
    quote: "Best Dal Baati Churma I've had outside Rajasthan! The authentic flavor is unmistakable.", 
    rating: 5 
  },
  { 
    id: 't2', 
    name: "Priya S.", 
    quote: "The thali is incredibly generous and tastes exactly like home cooking. Highly recommended.", 
    rating: 5 
  },
  { 
    id: 't3', 
    name: "Dr. Amit M.", 
    quote: "Perfect lunch spot near AIIMS. Clean, hygienic, and quick delivery too. We order every week.", 
    rating: 4 
  },
  { 
    id: 't4', 
    name: "Sunita D.", 
    quote: "Their mango achar is addictive. I ordered 1kg for the whole family after tasting it once!", 
    rating: 5 
  }
];
