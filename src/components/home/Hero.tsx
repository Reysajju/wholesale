import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-r from-navy-800 to-navy-900 flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
          alt="Modern living room showcasing Pakistani craftsmanship"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-white">
            Premium Pakistani<br />
            <span className="text-gold-400">Home Goods</span> for<br />
            Global Wholesale
          </h1>
          <p className="text-xl mb-8 text-gold-300 max-w-2xl">
            Bringing authentic craftsmanship from Pakistan to homes across North America and Europe
          </p>
          <button 
            className="btn-secondary"
            aria-label="Browse our collection"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}