import React from 'react';
import { NetlifyForm } from './NetlifyForm';
import { Mail } from 'lucide-react';

export function ContactForm() {
  return (
    <NetlifyForm name="contact" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-navy-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy-700">Subject</label>
        <input
          type="text"
          name="subject"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-navy-700">Message</label>
        <textarea
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        <Mail className="h-5 w-5" />
        Send Message
      </button>
    </NetlifyForm>
  );
}