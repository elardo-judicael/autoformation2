import React from 'react';
import { ShoppingCart } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-teal-600">
            {course.platform}
          </span>
          <span className="text-sm text-gray-500">{course.category}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-teal-600">
              {course.price}
            </span>
            <span className="text-sm text-gray-500 line-through">
              {course.originalPrice}
            </span>
          </div>
          <button className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
