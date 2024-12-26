import { useState, useEffect } from 'react';
import { allProducts } from '../data/products/index';
import { categories } from '../data/products/categories';

export function useProducts() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return {
    products: allProducts,
    categories,
    loading
  };
}