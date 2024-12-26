import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L4 8V24L16 30L28 24V8L16 2Z" fill="currentColor" className="text-navy-600" />
        <path d="M16 2L4 8L16 14L28 8L16 2Z" fill="currentColor" className="text-gold-500" />
        <path d="M16 30V14L28 8V24L16 30Z" fill="currentColor" className="text-navy-800" />
        <path d="M16 30V14L4 8V24L16 30Z" fill="currentColor" className="text-navy-600" />
      </svg>
      <span className="text-xl font-serif font-bold text-navy-800">
        Magnates<span className="text-gold-500">Empire</span>
      </span>
    </div>
  );
}