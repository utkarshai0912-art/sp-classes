import React, { useEffect } from 'react';
import { useSite } from '../../context/SiteContext';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export const LightboxModal = () => {
  const { lightboxData, closeLightbox, setLightboxData } = useSite();
  const { isOpen, items, index } = lightboxData;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        setLightboxData(prev => ({
          ...prev,
          index: (prev.index - 1 + prev.items.length) % prev.items.length
        }));
      } else if (e.key === 'ArrowRight') {
        setLightboxData(prev => ({
          ...prev,
          index: (prev.index + 1) % prev.items.length
        }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, setLightboxData]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[index];

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxData(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.items.length) % prev.items.length
    }));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxData(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.items.length
    }));
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image Gallery Lightbox"
      onClick={closeLightbox}
    >
      {/* Top Bar with Counter & Close */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20 text-white pointer-events-auto">
        <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/10">
          Photo {index + 1} of {items.length}
        </div>
        
        <button
          onClick={closeLightbox}
          className="p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition focus:outline-none focus:ring-2 focus:ring-brand-amber"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition z-20 focus:outline-none focus:ring-2 focus:ring-brand-amber"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition z-20 focus:outline-none focus:ring-2 focus:ring-brand-amber"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Central Image and Caption Card */}
      <div 
        className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.url}
          alt={currentItem.alt || currentItem.title}
          className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
        />
        
        {/* Caption */}
        <div className="mt-3 text-center max-w-xl text-white bg-black/60 px-4 py-2.5 rounded-lg backdrop-blur-sm border border-white/10">
          <h3 className="font-heading font-bold text-sm text-brand-amber">
            {currentItem.title}
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
