import React from 'react';
import { Card } from '../Card';
import { Button } from '@/components/ui/button';
import { ComponentData } from '../../types';

interface ComponentsPageProps {
  components: ComponentData[];
  onOpenModal: () => void;
  onCopy: (id: number) => void;
  onPreview: (id: number) => void;
  onFavorite: (id: number) => void;
}

export const ComponentsPage: React.FC<ComponentsPageProps> = ({
  components,
  onOpenModal,
  onCopy,
  onPreview,
  onFavorite,
}) => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-[2000px] mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Biblioteca de componentes
            </h2>
            <p className="text-gray-400 mt-1">
              O que você vai criar hoje?
            </p>
          </div>
          
          <Button 
            onClick={onOpenModal}
            className="group relative bg-gray-950 text-white rounded-[12px] px-6 py-2.5 border border-[#2563eb] hover:border-[#2563eb]/30 transition-all duration-300 ease-in-out overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#2563eb]/20 group-hover:bg-[#2563eb]/10 transition-colors duration-300" />
            <span className="absolute -left-10 top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-30 group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
            <span className="relative flex items-center gap-2">
              <span className="text-white group-hover:text-[#2563eb] transition-colors duration-300">+</span>
              Adicionar componente
            </span>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {components.map((component) => (
            <Card 
              key={component.id} 
              {...component}
              onCopy={() => onCopy(component.id)}
              onPreview={() => onPreview(component.id)}
              onFavorite={() => onFavorite(component.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};