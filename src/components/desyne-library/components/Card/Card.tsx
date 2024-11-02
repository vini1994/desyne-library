// src/components/desyne-library/components/Card/Card.tsx
import React, { memo } from 'react';
import { Copy, Eye, Heart } from 'lucide-react';
import { ComponentData } from '../../types';

interface CardProps extends ComponentData {
  onCopy?: () => void;
  onPreview?: () => void;
  onFavorite?: () => void;
}

export const Card = memo(({ 
  title, 
  description, 
  category, 
  preview, 
  bgColor,
  onCopy,
  onPreview,
  onFavorite 
}: CardProps) => {
  return (
    <div className="h-full group relative bg-gray-800/40 rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:-translate-y-1">
      <div className={`aspect-video relative overflow-hidden ${bgColor}`}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            src={preview}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-white/10"></div>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button 
            onClick={onCopy}
            className="p-2 rounded-full bg-gray-900/90 text-white hover:bg-gray-800 transition-colors"
          >
            <Copy className="w-5 h-5" />
          </button>
          <button 
            onClick={onPreview}
            className="p-2 rounded-full bg-gray-900/90 text-white hover:bg-gray-800 transition-colors"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button 
            onClick={onFavorite}
            className="p-2 rounded-full bg-gray-900/90 text-white hover:bg-gray-800 transition-colors"
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-3 py-1 rounded-full ${
            category === 'components' 
              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
              : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
          }`}>
            {category === 'components' ? 'Componentes' : 'Efeitos'}
          </span>
        </div>
      </div>
    </div>
  );
});

Card.displayName = 'Card';