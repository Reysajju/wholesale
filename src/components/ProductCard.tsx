import React from 'react';
import type { Product } from '../types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="hover-card bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-serif font-semibold text-navy-800">{product.name}</h3>
        <p className="mt-1 text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gold-600">
            ${product.price.toFixed(2)}
          </span>
          <button className="btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}