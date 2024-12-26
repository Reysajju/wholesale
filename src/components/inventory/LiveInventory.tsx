import React from 'react';
import { Package, AlertCircle } from 'lucide-react';
import { useInventory } from '../../hooks/useInventory';

export function LiveInventory({ productId }: { productId: string }) {
  const { stock, loading, error } = useInventory(productId);

  if (loading) return <div className="animate-pulse">Loading inventory...</div>;
  if (error) return (
    <div className="flex items-center text-red-600">
      <AlertCircle className="h-4 w-4 mr-2" />
      Error loading inventory
    </div>
  );

  return (
    <div className="flex items-center space-x-2">
      <Package className="h-5 w-5 text-gray-500" />
      <span className={`font-medium ${stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
        {stock} units in stock
      </span>
    </div>
  );
}