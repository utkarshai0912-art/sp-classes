import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustHighlights } from '../components/home/TrustHighlights';
import { BatchFinder } from '../components/home/BatchFinder';
import { CoursesPreview } from '../components/home/CoursesPreview';
import { ComparisonSection } from '../components/home/ComparisonSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { AboutPreview } from '../components/home/AboutPreview';
import { LearningProcess } from '../components/home/LearningProcess';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { ReviewsPreview } from '../components/home/ReviewsPreview';
import { FAQPreview } from '../components/home/FAQPreview';
import { LocationSection } from '../components/home/LocationSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <TrustHighlights />
      <BatchFinder />
      <CoursesPreview />
      <ComparisonSection />
      <WhyChooseUs />
      <AboutPreview />
      <LearningProcess />
      <GalleryPreview />
      <ReviewsPreview />
      <FAQPreview />
      <LocationSection />
      <FinalCTA />
    </main>
  );
};
