// src/components/desyne-library/hooks/useSidebar.ts
import { useState, useCallback } from 'react';

export const useSidebar = (initialState: boolean = true) => {
  const [isExpanded, setIsExpanded] = useState(initialState);

  const toggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const expand = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const collapse = useCallback(() => {
    setIsExpanded(false);
  }, []);

  return {
    isExpanded,
    toggle,
    expand,
    collapse
  };
};

export default useSidebar;