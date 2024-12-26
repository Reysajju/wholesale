import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    company: 'Modern Spaces LLC',
    location: 'New York, USA',
    content: 'The quality of Magnates Empire products has exceeded our expectations. Their attention to detail and commitment to authenticity has made them our go-to supplier for unique home decor items.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marco Rossi',
    role: 'Procurement Manager',
    company: 'European Home Collection',
    location: 'Milan, Italy',
    content: 'Working with Magnates Empire has been a game-changer for our business. Their wholesale program is efficient, and the products resonate well with our European clientele.',
    rating: 5
  },
  {
    id: 3,
    name: 'Carlos Mendoza',
    role: 'CEO',
    company: 'Casa Bella',
    location: 'Mexico City, Mexico',
    content: 'The unique blend of traditional craftsmanship and modern design has helped us create distinctive spaces for our clients. Excellent service and reliable delivery.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}