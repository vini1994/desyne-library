import React from 'react';
import { Copy, Eye, Heart } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  category: string;
  preview: string;
}

const Card: React.FC<CardProps> = ({ title, description, category, preview }) => {
  return (
    <div className="w-80 group overflow-hidden bg-gray-800/50 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-gray-600/50 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={preview}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="p-2 rounded-full bg-gray-900/90 text-white hover:bg-gray-800 transition-colors">
            <Copy className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-900/90 text-white hover:bg-gray-800 transition-colors">
            <Eye className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-900/90 text-white hover:bg-gray-800 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-3">{description}</p>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-3 py-1 rounded-full ${
            category === 'components' 
              ? 'bg-blue-500/10 text-blue-400' 
              : 'bg-purple-500/10 text-purple-400'
          }`}>
            {category === 'components' ? 'Componentes' : 'Efeitos'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;