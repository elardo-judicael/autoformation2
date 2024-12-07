import React, { useState } from 'react';
import { HardDrive } from 'lucide-react';
import PromoCodeModal from './PromoCodeModal';

interface StoragePricingProps {
  selectedStorage: string;
  onStorageSelect: (storage: string) => void;
}

const storageTiers = [
  {
    id: 'small',
    name: 'Basic',
    storage: '',
    price: 'essaie gratuit',
    description: 'Parfait pour débuter',
    features: ['Accès instantané', 'Support basique', 'Validité 30 jours'],
  },
  {
    id: 'medium',
    name: 'Pro',
    storage: '1 TB',
    price: '20 000 Ar',
    description: 'Pour les professionnels',
    features: ['Accès prioritaire', 'Support premium', 'Validité à vie'],
  },
  {
    id: 'large',
    name: 'Enterprise',
    storage: '100 TB',
    price: '100 000 Ar',
    description: 'Usage intensif',
    features: ['Accès VIP', 'Support 24/7', 'Validité à vie'],
  },
];

export default function StoragePricing({
  selectedStorage,
  onStorageSelect,
}: StoragePricingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStorageSelect = (tierId: string) => {
    onStorageSelect(tierId);
    setIsModalOpen(true);
  };

  const handlePromoCodeSubmit = (code: string) => {
    if (code === '2024') {
      window.open('https://www.ygg.re/', '_blank', 'noopener,noreferrer');
    }
  };
  // const handlePromoCodeSubmit = (code: string) => {
  //   if (code === '2024') {
  //     try {
  //       window.location.href = 'https://www.ygg.re/';
  //     } catch (error) {
  //       console.error(
  //         'Redirection échouée. Veuillez utiliser le lien suivant : https://www.ygg.re/'
  //       );
  //     }
  //   } else {
  //     alert('Code promotionnel incorrect. Veuillez réessayer.');
  //   }
  // };

  // Exemple d'utilisation dans un composant React
  // return (
  //   <div>
  //     <h1>Entrez votre code promotionnel</h1>
  //     <input
  //       type="text"
  //       placeholder="Entrez le code"
  //       onBlur={(e) => handlePromoCodeSubmit(e.target.value)}
  //     />
  //     <p>
  //       Si la redirection échoue, cliquez ici :{' '}
  //       <a href="https://www.ygg.re" target="_blank" rel="noopener noreferrer">
  //         Accéder à Ygg.re
  //       </a>
  //     </p>
  //   </div>
  // );

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Choisissez votre capacité de stockage
        </h2>
        <p className="text-gray-600">Des forfaits adaptés à tous vos besoins</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {storageTiers.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-lg p-6 ${
              selectedStorage === tier.id
                ? 'bg-teal-50 border-2 border-teal-500'
                : 'bg-white border border-gray-200'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="text-sm text-gray-500">{tier.description}</p>
              </div>
              <HardDrive
                className={`w-6 h-6 ${
                  selectedStorage === tier.id
                    ? 'text-teal-500'
                    : 'text-gray-400'
                }`}
              />
            </div>

            <div className="mb-4">
              <span className="text-3xl font-bold">{tier.storage}</span>
            </div>

            <ul className="mb-6 space-y-2">
              {tier.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 flex items-center"
                >
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mb-4">
              <span className="text-2xl font-bold">{tier.price}</span>
              <span className="text-gray-500 text-sm"></span>
            </div>

            <button
              onClick={() => handleStorageSelect(tier.id)}
              className={`w-full py-2 px-4 rounded-md transition-colors ${
                selectedStorage === tier.id
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sélectionner
            </button>
          </div>
        ))}
      </div>

      <PromoCodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePromoCodeSubmit}
      />
    </div>
  );
}
