import React from 'react';
import { Globe, Mountain, Truck } from 'lucide-react';

export function Features() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="features-heading" className="sr-only">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mountain className="h-12 w-12 mx-auto text-indigo-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold">Mountain-Made Quality</h3>
            <p className="mt-2 text-gray-600">
              Crafted in the heart of Gilgit-Baltistan
            </p>
          </div>
          <div className="text-center">
            <Truck className="h-12 w-12 mx-auto text-indigo-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold">Global Shipping</h3>
            <p className="mt-2 text-gray-600">
              Reliable delivery to USA, Canada, Mexico, Brazil, and Europe
            </p>
          </div>
          <div className="text-center">
            <Globe className="h-12 w-12 mx-auto text-indigo-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold">International Style</h3>
            <p className="mt-2 text-gray-600">
              Pakistani craft meets global design trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}