import React from 'react'
import { HelpCircle } from 'lucide-react'

interface SidebarResourcesProps {
  isExpanded: boolean
}

export const SidebarResources: React.FC<SidebarResourcesProps> = ({
  isExpanded
}) => {
  if (!isExpanded) return null

  return (
    <>
      <div className="mt-8">
        <h2 className="text-xs font-semibold text-gray-400 px-3 mb-2">MEUS RECURSOS</h2>
        <div className="space-y-1">
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-blue-400 hover:bg-gray-800/30">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            Meus componentes
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-purple-400 hover:bg-gray-800/30">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            Meus efeitos
          </button>
        </div>
      </div>

      <div className="mt-auto">
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:bg-gray-800/30 rounded-lg">
          <HelpCircle className="w-4 h-4" />
          Suporte
        </button>
      </div>
    </>
  )
}