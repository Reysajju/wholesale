import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Globe2, Target, Users2, Building2 } from 'lucide-react';

export function Vision() {
  return (
    <Layout>
      <SEO 
        title="Our Vision | Magnates Empire"
        description="Discover our vision for connecting Pakistani craftsmanship with global markets. Serving USA, Canada, Mexico, Brazil, and Europe."
        keywords="Pakistani crafts, global wholesale, home goods vision, international trade"
      />

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Vision</h1>
          <p className="text-xl">Building bridges between Pakistani artisans and global markets</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Globe2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Expanding Pakistani craftsmanship across continents</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Focus</h3>
              <p className="text-gray-600">Maintaining exceptional standards in every piece</p>
            </div>
            <div className="text-center">
              <Users2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Artisan Support</h3>
              <p className="text-gray-600">Empowering local craftsmen and communities</p>
            </div>
            <div className="text-center">
              <Building2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Growth</h3>
              <p className="text-gray-600">Expanding into new international markets</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Target Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">North America</h3>
              <ul className="space-y-2 text-gray-600">
                <li>United States</li>
                <li>Canada</li>
                <li>Mexico</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">South America</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Brazil</li>
                <li>Expanding to other regions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Europe</h3>
              <ul className="space-y-2 text-gray-600">
                <li>European Union Countries</li>
                <li>United Kingdom</li>
                <li>Switzerland</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}