import React from 'react';

export const ActionCards = () => {
  const cards = [
    {
      title: 'Tutoriais',
      description: 'Assista os tutoriais para saber como aproveitar ao máximo.',
      bgColor: 'bg-[#E91E63]',
    },
    {
      title: 'Componentes',
      description: 'Produza 5x mais rápido com componentes prontos para Elementor.',
      bgColor: 'bg-[#7C4DFF]',
    },
    {
      title: 'Efeitos prontos',
      description: 'Estilize suas páginas com efeitos e animações já digitados.',
      bgColor: 'bg-[#3D5AFE]',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
        >
          <h2 className="text-xl font-semibold text-white mb-2">{card.title}</h2>
          <p className="text-white/80 mb-4">{card.description}</p>
          <button className="text-white hover:underline flex items-center">
            Acessar agora →
          </button>
        </div>
      ))}
    </div>
  );
};