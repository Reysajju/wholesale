import React from 'react';
import { Package2, BadgeDollarSign, Users2, ClipboardCheck } from 'lucide-react';

export function WholesaleFeatures() {
  const features = [
    {
      icon: Package2,
      title: "Bulk Ordering",
      description: "Minimum order quantity: $500. Volume discounts available on orders over $2000."
    },
    {
      icon: BadgeDollarSign,
      title: "Wholesale Pricing",
      description: "Special pricing for registered wholesale buyers. Save up to 40% off retail."
    },
    {
      icon: Users2,
      title: "Dedicated Support",
      description: "Personal account manager for orders over $5000. Because VIP treatment shouldn't be optional."
    },
    {
      icon: ClipboardCheck,
      title: "Easy Reordering",
      description: "Quick reorder from your purchase history. Because ain't nobody got time for repetitive forms."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Wholesale Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}