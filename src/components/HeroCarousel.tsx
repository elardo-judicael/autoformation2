import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Développement Web",
    description: "Maîtrisez les dernières technologies web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=600"
  },
  {
    id: 2,
    title: "Design & Créativité",
    description: "Libérez votre créativité",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&h=600"
  },
  {
    id: 3,
    title: "Intelligence Artificielle",
    description: "Explorez le futur avec l'IA",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=600"
  },
  {
    id: 4,
    title: "Films & Séries",
    description: "Accédez à un catalogue premium",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&h=600"
  },
  {
    id: 5,
    title: "Logiciels Professionnels",
    description: "Les meilleurs outils pour vos projets",
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&w=1200&h=600"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl mb-8">{slide.description}</p>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}