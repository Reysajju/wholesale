import React from 'react';
import { Layout } from '../components/Layout';
import { Globe, Target, Users, Award } from 'lucide-react';

export function About() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About Magnates Empire</h1>
          <p className="text-xl">Bridging Pakistani Craftsmanship with Global Homes</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in the heart of Gilgit-Baltistan, Magnates Empire began with a vision to bring
                the exquisite craftsmanship of Pakistani artisans to homes across the globe. Our journey
                started with a small collection of handcrafted items and has grown into a comprehensive
                range of premium home goods.
              </p>
              <p className="text-gray-600">
                Today, we proudly serve customers across the USA, Canada, Mexico, Brazil, and Europe,
                maintaining our commitment to quality, authenticity, and sustainable practices.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86"
                alt="Artisan crafting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Connecting Pakistani artisans with homes across North America and Europe.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in every piece we deliver.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p className="text-gray-600">
                Supporting artisan communities while serving global customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Target Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">North America</h3>
              <p className="text-gray-600">USA, Canada, Mexico</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">South America</h3>
              <p className="text-gray-600">Brazil</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Europe</h3>
              <p className="text-gray-600">All European Union countries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center">
              <Award className="h-16 w-16 text-gray-400" />
              <span className="ml-2 text-xl text-gray-600">Luxury Hotels</span>
            </div>
            <div className="flex items-center justify-center">
              <Award className="h-16 w-16 text-gray-400" />
              <span className="ml-2 text-xl text-gray-600">Interior Designers</span>
            </div>
            <div className="flex items-center justify-center">
              <Award className="h-16 w-16 text-gray-400" />
              <span className="ml-2 text-xl text-gray-600">Retail Chains</span>
            </div>
            <div className="flex items-center justify-center">
              <Award className="h-16 w-16 text-gray-400" />
              <span className="ml-2 text-xl text-gray-600">Design Studios</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}