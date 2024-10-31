import React from 'react'
import { MenuItem } from '../../types'
import { menuItems } from '../../config/menuItems'

interface SidebarNavProps {
  isExpanded: boolean
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  isExpanded,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const Icon = item.icon
        return (
          <button
            key={item.value}
            onClick={() => onCategoryChange(item.value)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
              ${activeCategory === item.value 
                ? 'bg-gray-800/50 text-white' 
                : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-300'}
              ${!isExpanded && 'justify-center'}`}
          >
            <Icon className="w-5 h-5" />
            {isExpanded && item.label}
          </button>
        )
      })}
    </nav>
  )
}
