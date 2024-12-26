import React from 'react';
import { Building2, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">Magnates Empire</span>
            </div>
            <p className="mt-2 text-gray-400">
              Bringing Pakistani craftsmanship to American homes, one smile at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <p className="mt-4 text-gray-400">
              Gilgit-Baltistan, Pakistan<br />
              contact@magnatesempire.com<br />
              +92 XXX XXXXXXX
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-6 mt-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
            <p className="mt-4 text-gray-400">
              Subscribe to get updates about new products and special offers.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 Magnates Empire. All rights reserved.</p>
          <p className="mt-2 text-sm">
            "Making your house a home, with a side of mountain-fresh humor!"
          </p>
        </div>
      </div>
    </footer>
  );
}