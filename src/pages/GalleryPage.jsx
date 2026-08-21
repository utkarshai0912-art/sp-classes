import React from 'react';
import { useSite } from '../context/SiteContext';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { FinalCTA } from '../components/home/FinalCTA';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

export const GalleryPage = () => {
  return (
    <main className="py-12 bg-white min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-amber/20 text-brand-amber border border-brand-amber/30">
              <ImageIcon className="w-4 h-4" />
              <span>Visual Tour</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Classroom & Learning Gallery
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore the study environment, classroom sessions, and teaching spaces at S.P. Classes. Click on any photograph to view in full resolution.
            </p>
          </div>
        </div>
      </div>

      <GalleryPreview showAll={true} />

      <FinalCTA />
    </main>
  );
};
