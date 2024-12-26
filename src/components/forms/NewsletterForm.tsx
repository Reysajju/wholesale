import React from 'react';
import { NetlifyForm } from './NetlifyForm';
import { Mail } from 'lucide-react';

export function NewsletterForm() {
  return (
    <NetlifyForm name="newsletter" className="mt-4">
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="flex-1 bg-navy-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
        <button 
          type="submit"
          className="bg-gold-500 text-navy-900 px-4 py-2 rounded-r-md hover:bg-gold-600 transition-colors flex items-center gap-2"
        >
          <Mail className="h-5 w-5" />
          Subscribe
        </button>
      </div>
    </NetlifyForm>
  );
}