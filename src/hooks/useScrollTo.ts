import { useCallback } from 'react';

export const useScrollTo = () => {
  return useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const navbar = document.querySelector('nav');
    const navbarHeight = navbar?.getBoundingClientRect().height || 96;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: elementId === 'home' ? 0 : offsetPosition,
      behavior: 'smooth'
    });
  }, []);
};