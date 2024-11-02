import React from 'react';
import { components } from '../../config/components';
import { WelcomeSection } from './WelcomeSection';
import { ActionCards } from './ActionCards';
import { ContentTabs } from './ContentTabs';
import { ContentGrid } from './ContentGrid';

interface HomePageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ activeTab, onTabChange }) => {
  const filteredContent = components.filter(item => {
    if (activeTab === 'components') {
      return item.category === 'components';
    }
    return item.category === 'effects';
  }).slice(0, 12);

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-[2000px] mx-auto p-8">
        <WelcomeSection />
        <ActionCards />
        <ContentTabs activeTab={activeTab} onTabChange={onTabChange} />
        <ContentGrid items={filteredContent} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default HomePage;