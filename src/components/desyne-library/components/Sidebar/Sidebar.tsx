import React from 'react'
import { SidebarHeader } from './SidebarHeader'
import { SidebarNav } from './SidebarNav'
import { SidebarResources } from './SidebarResources'

interface SidebarProps {
  isExpanded: boolean
  activeCategory: string
  onToggle: () => void
  onCategoryChange: (category: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  isExpanded,
  activeCategory,
  onToggle,
  onCategoryChange
}) => {
  return (
    <aside 
      className={`${
        isExpanded ? 'w-64' : 'w-20'
      } flex flex-col h-screen bg-gray-900/50 border-r border-gray-800/50 transition-all duration-300`}
    >
      <div className="p-4 flex flex-col h-full">
        <SidebarHeader 
          isExpanded={isExpanded} 
          onToggle={onToggle} 
        />
        
        <SidebarNav
          isExpanded={isExpanded}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />

        <SidebarResources 
          isExpanded={isExpanded} 
        />
      </div>
    </aside>
  )
}