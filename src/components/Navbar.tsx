import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-teal-600 text-white p-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 cursor-pointer md:hidden" />
          <h1 className="text-xl font-bold">Compte Gasy Autoformation</h1>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-teal-200">
            Accueil
          </a>
          <a href="#" className="hover:text-teal-200">
            Formations
          </a>
          <a href="#" className="hover:text-teal-200">
            Logiciels
          </a>
          <a href="#" className="hover:text-teal-200">
            Films
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
