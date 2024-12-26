import type { Product } from '../../types';

export const products: Product[] = [
  {
    id: 'h1',
    name: 'Handwoven Kilim Rug',
    description: 'Traditional Pakistani kilim rug with geometric patterns, perfect for modern spaces.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843',
    category: 'Home Decor',
    minOrder: 3,
    wholesale: true
  },
  // ... rest of the products array
];