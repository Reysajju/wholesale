import React from 'react';
import { Layout } from '../components/Layout';
import { Hero, Features } from '../components/home';
import { ProductCard } from '../components/ProductCard';
import { WholesaleFeatures } from '../components/WholesaleFeatures';
import { BulkPricing } from '../components/BulkPricing';
import { WholesaleRegistration } from '../components/WholesaleRegistration';
import { Testimonials } from '../components/Testimonials';
import { SEO } from '../components/SEO';
import { useProducts } from '../hooks/useProducts';

export function Home() {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <Layout>
      <SEO 
        title="Magnates Empire - Premium Pakistani Home Goods"
        description="Discover authentic Pakistani home goods and wholesale opportunities. Premium quality furniture, textiles, and decor for USA, Canada, Mexico, Brazil, and Europe."
        keywords="Pakistani home goods, wholesale furniture, home decor, textiles, artisan crafts"
      />
      
      <Hero />
      <Features />
      <WholesaleFeatures />
      <BulkPricing />
      <Testimonials />
      <WholesaleRegistration />

      <section className="py-16" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="featured-heading" className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}