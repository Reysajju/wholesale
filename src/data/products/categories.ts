export const categories = [
  'All Products',
  'Kitchen Essentials',
  'Home Decor',
  'Textiles',
  'Lighting',
  'Storage Solutions',
  'Bathroom',
  'Furniture',
  'Outdoor Living'
] as const;

export type ProductCategory = typeof categories[number];