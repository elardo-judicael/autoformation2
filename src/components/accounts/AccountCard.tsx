import React from 'react';
import { Lock, ShieldCheck, HardDrive } from 'lucide-react';
import type { Account } from '../../types/account';

interface AccountCardProps {
  account: Account;
  onPurchase: (accountId: string) => void;
}

export default function AccountCard({ account, onPurchase }: AccountCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img 
          src={account.imageUrl} 
          alt={account.category}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-teal-600">
          {account.platform}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{account.category}</h3>
            <p className="text-sm text-gray-500">Compte Premium</p>
          </div>
          <ShieldCheck className="w-6 h-6 text-green-500" />
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Accès garanti</span>
          </div>
          <div className="flex items-center space-x-2">
            <HardDrive className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              {account.storage.size} {account.storage.unit}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Valide jusqu'au {new Date(account.validUntil).toLocaleDateString()}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-teal-600">{account.price}€</span>
          <button
            onClick={() => onPurchase(account.id)}
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
            disabled={account.status === 'sold'}
          >
            {account.status === 'available' ? 'Acheter' : 'Vendu'}
          </button>
        </div>
      </div>
    </div>
  );
}