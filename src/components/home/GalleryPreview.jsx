import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { Maximize2, ChevronRight, Image as ImageIcon } from 'lucide-react';

export const GalleryPreview = ({ showAll = false }) => {
  const { config, openLightbox, navigateTo } = useSite();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Classrooms', 'Teaching', 'Students', 'Material'];

  const filteredItems = selectedCategory === 'All'
    ? config.gallery
    : config.gallery.filter(item => item.category === selectedCategory);

  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const handleImageClick = (index) => {
    openLightbox(filteredItems, index);
  };

  return (
    <section id="gallery-section" className="py-16 lg:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Classroom Environment"
          title="Inside S.P. Classes"
          subtitle="A glimpse into the disciplined, focused learning spaces and academic environment at our centre."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                selectedCategory === category
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-brand-bg text-brand-slate hover:text-brand-navy border border-brand-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(index)}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-brand-border cursor-pointer bg-slate-100 transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={item.url}
                alt={item.alt || item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-amber text-brand-navy uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>

              {/* Temporary Demo Asset Indicator Badge */}
              <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-mono text-amber-300 border border-white/10 sm:hidden">
                Demo Asset
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigateTo('gallery')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-bg hover:bg-slate-100 text-brand-navy font-semibold text-sm border border-brand-border shadow-sm transition"
            >
              <ImageIcon className="w-4 h-4 text-brand-amber" />
              <span>View All Classroom Photographs</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
