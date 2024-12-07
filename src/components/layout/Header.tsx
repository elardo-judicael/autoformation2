import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 cursor-pointer md:hidden text-gray-600" />
            <span className="ml-4 text-xl font-bold text-teal-600">
              Autoformation Compte Gasy
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-teal-600">
              Formations
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600">
              Logiciels
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600">
              Films
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600">
              Support
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-teal-600">
              <User className="h-6 w-6" />
            </button>
            <button className="relative text-gray-600 hover:text-teal-600">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
