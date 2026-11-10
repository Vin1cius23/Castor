import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { DifferentialsSection } from '../components/sections/DifferentialsSection';
import { CategoriesSection } from '../components/sections/CategoriesSection';
import { FeaturedProductsSection } from '../components/sections/FeaturedProductsSection';
import { OurStoreSection } from '../components/sections/OurStoreSection';
import { AboutCastorSection } from '../components/sections/AboutCastorSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { LocationContactSection } from '../components/sections/LocationContactSection';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <main>
      <HeroSection />
      <DifferentialsSection />
      <CategoriesSection onSelectCategory={(slug) => setSelectedCategory(slug)} />
      <FeaturedProductsSection
        selectedCategorySlug={selectedCategory}
        onCategoryChange={(slug) => setSelectedCategory(slug)}
      />
      <OurStoreSection />
      <AboutCastorSection />
      <TestimonialsSection />
      <LocationContactSection />
    </main>
  );
};
