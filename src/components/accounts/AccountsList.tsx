import React, { useState } from 'react';
import AccountCard from './AccountCard';
import StoragePricing from './StoragePricing';
import type { Account } from '../../types/account';

const demoAccounts: Account[] = [
  {
    id: '1',
    username: 'premium_user1',
    platform: 'udemy',
    validUntil: '2024-12-31',
    status: 'available',
    price: '',
    storage: {
      size: 100,
      unit: 'GB'
    },
    category: 'Développement Web',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: '2',
    username: 'premium_user2',
    platform: 'alphorm',
    validUntil: '2024-12-31',
    status: 'available',
    price: '',
    storage: {
      size: 1,
      unit: 'TB'
    },
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: '3',
    username: 'premium_user3',
    platform: 'linkedin',
    validUntil: '2024-12-31',
    status: 'available',
    price: '',
    storage: {
      size: 100,
      unit: 'TB'
    },
    category: 'Business',
    imageUrl: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&h=500'
  }
];

export default function AccountsList() {
  const [selectedStorage, setSelectedStorage] = useState<string>('all');

  const filteredAccounts = selectedStorage === 'all' 
    ? demoAccounts
    : demoAccounts.filter(account => {
        const storageInGB = account.storage.unit === 'TB' 
          ? account.storage.size * 1024 
          : account.storage.size;
        
        switch(selectedStorage) {
          case 'small': return storageInGB <= 100;
          case 'medium': return storageInGB > 100 && storageInGB <= 1024;
          case 'large': return storageInGB > 1024;
          default: return true;
        }
      });

  const handlePurchase = (accountId: string) => {
    console.log('Purchase account:', accountId);
  };

  return (
    <div className="space-y-8">
      <StoragePricing 
        selectedStorage={selectedStorage}
        onStorageSelect={setSelectedStorage}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAccounts.map((account) => (
          <AccountCard
            key={account.id}
            account={account}
            onPurchase={handlePurchase}
          />
        ))}
      </div>
    </div>
  );
}