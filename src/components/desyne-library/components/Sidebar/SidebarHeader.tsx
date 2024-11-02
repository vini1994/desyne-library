import React from 'react'
import { Code, Menu } from 'lucide-react'

interface SidebarHeaderProps {
  isExpanded: boolean
  onToggle: () => void
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  isExpanded,
  onToggle
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className={`flex items-center gap-3 ${!isExpanded && 'justify-center'}`}>
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <Code className="w-5 h-5 text-white" />
        </div>
        {isExpanded && (
          <div>
            <h1 className="font-semibold text-white">Desyne Library</h1>
            <p className="text-xs text-gray-400">Componentes rápidos</p>
          </div>
        )}
      </div>
      <button 
        onClick={onToggle}
        className="p-2 rounded-lg hover:bg-gray-800/50 text-gray-400"
      >
        <Menu className="w-5 h-5" />
      </button>
    </div>
  )
}