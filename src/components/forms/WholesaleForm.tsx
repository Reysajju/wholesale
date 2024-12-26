import React from 'react';
import { NetlifyForm } from './NetlifyForm';
import { Building2, FileText, Store } from 'lucide-react';

export function WholesaleForm() {
  return (
    <NetlifyForm name="wholesale" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-navy-700">Business Name</label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Building2 className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="business-name"
              required
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700">Tax ID/EIN</label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FileText className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="tax-id"
              required
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700">Business Type</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Store className="h-5 w-5 text-gray-400" />
          </div>
          <select 
            name="business-type"
            required
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
          >
            <option value="">Select business type</option>
            <option value="retail">Retail Store</option>
            <option value="online">Online Retailer</option>
            <option value="designer">Interior Designer</option>
            <option value="hospitality">Hotel/Hospitality</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        <Building2 className="h-5 w-5" />
        Apply for Wholesale Account
      </button>
    </NetlifyForm>
  );
}