import React from 'react';
import { ProductCard } from '../ProductCard';
import type { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No products found matching your criteria</p>
        </div>
      )}
    </div>
  );
}