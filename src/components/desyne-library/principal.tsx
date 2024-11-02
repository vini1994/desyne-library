import React, { useCallback, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ComponentModal } from './components/ComponentModal';
import { components } from './config/components';
import { useModal } from './hooks/useModal';
import { useSidebar } from './hooks/useSidebar';
import HomePage from './components/HomePage/HomePage';
import { ComponentsPage } from './components/ComponentsPage/ComponentsPage';

const Principal: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { isExpanded, toggle } = useSidebar();
  const { isOpen: isModalOpen, setIsOpen: setIsModalOpen } = useModal();
  const [activeHomeTab, setActiveHomeTab] = useState('components');

  const handleCopy = useCallback((id: number) => {
    console.log('Copy component:', id);
  }, []);

  const handlePreview = useCallback((id: number) => {
    console.log('Preview component:', id);
  }, []);

  const handleFavorite = useCallback((id: number) => {
    console.log('Favorite component:', id);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            activeTab={activeHomeTab}
            onTabChange={setActiveHomeTab}
          />
        );
      case 'components':
        return (
          <ComponentsPage 
            components={components.filter(c => c.category === 'components')}
            onOpenModal={() => setIsModalOpen(true)}
            onCopy={handleCopy}
            onPreview={handlePreview}
            onFavorite={handleFavorite}
          />
        );
      case 'effects':
        return (
          <ComponentsPage 
            components={components.filter(c => c.category === 'effects')}
            onOpenModal={() => setIsModalOpen(true)}
            onCopy={handleCopy}
            onPreview={handlePreview}
            onFavorite={handleFavorite}
          />
        );
      case 'favorites':
        return (
          <ComponentsPage 
            components={components.filter(c => c.favorite)}
            onOpenModal={() => setIsModalOpen(true)}
            onCopy={handleCopy}
            onPreview={handlePreview}
            onFavorite={handleFavorite}
          />
        );
      default:
        return (
          <HomePage 
            activeTab={activeHomeTab}
            onTabChange={setActiveHomeTab}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar
        isExpanded={isExpanded}
        activeCategory={currentPage}
        onToggle={toggle}
        onCategoryChange={setCurrentPage}
      />
      
      {renderContent()}
      
      <ComponentModal 
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default Principal;