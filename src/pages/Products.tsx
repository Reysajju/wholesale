import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductFilters } from '../components/products/ProductFilters';
import { SearchBar } from '../components/products/SearchBar';
import { useProducts } from '../hooks/useProducts';
import { Helmet } from 'react-helmet-async';

export function Products() {
  const { products, categories, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <Layout>
      <Helmet>
        <title>Premium Pakistani Home Goods | Magnates Empire Marketplace</title>
        <meta name="description" content="Discover authentic Pakistani home goods for wholesale. Premium furniture, textiles, and decor for USA, Canada, Mexico, Brazil, and Europe." />
        <meta name="keywords" content="Pakistani home goods, wholesale furniture, home decor, textiles, artisan crafts" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="lg:col-span-1">
              <ProductFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
              />
            </aside>

            <main className="lg:col-span-3">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                </div>
              ) : (
                <ProductGrid products={filteredProducts} />
              )}
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}