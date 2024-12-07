export interface Course {
  id: string;
  title: string;
  platform: 'udemy' | 'alphorm' | 'linkedin' | 'tuto';
  price: number;
  originalPrice: number;
  category: string;
  description: string;
  imageUrl: string;
}

export interface CartItem extends Course {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}