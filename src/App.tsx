import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import AccountsList from './components/accounts/AccountsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Catégories</h2>
          <CategoryList />

          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Comptes Disponibles</h2>
              <div className="flex space-x-4">
                <select className="border rounded-md px-3 py-1.5 text-gray-700">
                  <option>Tous les sites</option>
                  <option>Udemy</option>
                  <option>Alphorm</option>
                  <option>LinkedIn</option>
                </select>
                <select className="border rounded-md px-3 py-1.5 text-gray-700">
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Plus récent</option>
                </select>
              </div>
            </div>
            <AccountsList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
