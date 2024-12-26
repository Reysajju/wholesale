import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { calculateBulkPrice } from '../../utils/pricing';

export function BulkOrderCalculator({ basePrice }: { basePrice: number }) {
  const [quantity, setQuantity] = useState<number>(0);
  const total = calculateBulkPrice(basePrice, quantity);

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <div className="flex items-center mb-4">
        <Calculator className="h-5 w-5 text-indigo-600 mr-2" />
        <h3 className="font-semibold">Bulk Order Calculator</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Unit Price: ${basePrice.toFixed(2)}</p>
          <p className="text-lg font-bold text-indigo-600">Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}