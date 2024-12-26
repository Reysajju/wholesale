import type { Product } from '../../types';

export const initialProducts: Product[] = [
  {
    id: 'l1',
    name: 'Himalayan Salt Lamp',
    description: 'Authentic salt lamp from the mountains of Gilgit-Baltistan.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80',
    category: 'Lighting',
    minOrder: 10,
    wholesale: true
  },
  {
    id: 'l2',
    name: 'Copper Pendant Light',
    description: 'Hand-hammered copper pendant light with vintage finish.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80',
    category: 'Lighting',
    minOrder: 5,
    wholesale: true
  }
  // ... rest of initial products
];