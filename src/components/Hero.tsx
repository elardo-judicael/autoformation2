import React from 'react';
import { Search } from 'lucide-react';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
  return (
    <div className="relative">
      <HeroCarousel />
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white"></h1>
            <p className="text-xl mb-8 text-white"></p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center bg-white mt-6 rounded-full p-2">
              <Search className="w-6 h-6 text-gray-400 mt-6 pt-4 ml-2" />
              <input
                type="text"
                placeholder="Rechercher des formations, logiciels ou films..."
                className="w-full px-4 py-2 text-gray-800 focus:outline-none rounded-full"
              />
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
