import React from 'react';
import { Code, Video, MonitorPlay, BookOpen, Film, Package } from 'lucide-react';

const categories = [
  { id: '1', name: '3D', icon: <Package className="w-6 h-6" /> },
  { id: '2', name: 'Développement', icon: <Code className="w-6 h-6" /> },
  { id: '3', name: 'Design', icon: <MonitorPlay className="w-6 h-6" /> },
  { id: '4', name: 'Business', icon: <BookOpen className="w-6 h-6" /> },
  { id: '5', name: 'Vidéo', icon: <Video className="w-6 h-6" /> },
  { id: '6', name: 'Films', icon: <Film className="w-6 h-6" /> },
];

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
      {categories.map((category) => (
        <button
          key={category.id}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="text-teal-600 mb-2">{category.icon}</div>
          <span className="text-gray-700 font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );
}