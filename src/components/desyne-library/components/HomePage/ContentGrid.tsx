import React from 'react';
import { Card } from '../Card';
import { ComponentData } from '../../types';

interface ContentGridProps {
  items: ComponentData[];
  activeTab: string;
}

export const ContentGrid: React.FC<ContentGridProps> = ({ items, activeTab }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">
          {activeTab === 'components' ? 'Componentes recentes' : 'Efeitos recentes'}
        </h2>
        <button className="text-blue-500 hover:underline">
          Ver todos →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card 
            key={item.id} 
            {...item}
            onCopy={() => console.log('Copy', item.id)}
            onPreview={() => console.log('Preview', item.id)}
            onFavorite={() => console.log('Favorite', item.id)}
          />
        ))}
      </div>
    </div>
  );
};