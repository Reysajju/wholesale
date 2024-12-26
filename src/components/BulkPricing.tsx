import React from 'react';

export function BulkPricing() {
  const tiers = [
    { quantity: "$500-$1,999", discount: "20% off" },
    { quantity: "$2,000-$4,999", discount: "30% off" },
    { quantity: "$5,000-$9,999", discount: "35% off" },
    { quantity: "$10,000+", discount: "40% off" }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Bulk Pricing Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div key={tier.quantity} className="bg-white border-2 border-indigo-100 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">{tier.quantity}</h3>
              <p className="text-3xl font-bold text-gray-900">{tier.discount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}