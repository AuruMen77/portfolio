import { useState, useEffect } from 'react';

function useVisibleSection(sectionIds: string[]): string[] {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const updatedVisibleSections: string[] = [];

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updatedVisibleSections.push(entry.target.id);
        }
      });

      setVisibleSections(updatedVisibleSections);
    }, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return visibleSections;
}

export default useVisibleSection;
