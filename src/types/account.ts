export interface Account {
  id: string;
  username: string;
  platform: 'udemy' | 'alphorm' | 'linkedin' | 'tuto';
  validUntil: string;
  status: 'available' | 'sold';
  price: number;
  storage: {
    size: number;
    unit: 'GB' | 'TB';
  };
  category: string;
  imageUrl: string;
}

export interface AccountPurchase {
  id: string;
  accountId: string;
  purchaseDate: string;
  credentials: {
    username: string;
    password: string;
  };
}