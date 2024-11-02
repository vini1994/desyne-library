import React from 'react';
import { Boxes, Wand2 } from 'lucide-react';

interface ContentTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ContentTabs: React.FC<ContentTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="inline-flex items-center gap-2 p-1 bg-gray-800/30 rounded-lg mb-6">
      <button
        onClick={() => onTabChange('components')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          activeTab === 'components'
            ? 'bg-gray-900 text-white'
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        <Boxes className="w-4 h-4" />
        Componentes
      </button>
      <button
        onClick={() => onTabChange('effects')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          activeTab === 'effects'
            ? 'bg-gray-900 text-white'
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        <Wand2 className="w-4 h-4" />
        Efeitos
      </button>
    </div>
  );
};