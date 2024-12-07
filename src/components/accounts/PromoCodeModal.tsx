import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PromoCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
}

export default function PromoCodeModal({ isOpen, onClose, onSubmit }: PromoCodeModalProps) {
  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (promoCode === '2024') {
      onSubmit(promoCode);
    } else {
      setError('Code promo invalide. Veuillez réessayer.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-xl font-semibold mb-4">Entrez votre code promo</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-1">
              Code Promo
            </label>
            <input
              type="text"
              id="promoCode"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Entrez votre code promo"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}