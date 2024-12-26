import React from 'react';
import { ClipboardList } from 'lucide-react';

export function SampleRequest() {
  return (
    <div className="p-6 border rounded-lg">
      <div className="flex items-center mb-4">
        <ClipboardList className="h-6 w-6 text-indigo-600 mr-2" />
        <h3 className="text-lg font-semibold">Request Samples</h3>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Products</label>
          <select multiple className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            {/* Products will be populated dynamically */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
          <textarea 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Request Samples
        </button>
      </form>
    </div>
  );
}