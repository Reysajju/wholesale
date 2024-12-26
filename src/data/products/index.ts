import { products } from './products';
import { additionalProducts } from './additional-products';
import { categories } from './categories';

export const allProducts = [...products, ...additionalProducts];
export { categories };