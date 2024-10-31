// src/components/desyne-library/hooks/useCategories.ts
import { useState, useCallback } from 'react';

export const useCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  return {
    activeCategory,
    setActiveCategory: handleCategoryChange
  };
};

export default useCategories;