import React from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { BookOpenCheck, Lightbulb, HelpCircle, FileCheck } from 'lucide-react';

export const WhyChooseUs = () => {
  const { config } = useSite();

  const iconMap = {
    BookOpenCheck: BookOpenCheck,
    Lightbulb: Lightbulb,
    HelpCircle: HelpCircle,
    FileCheck: FileCheck,
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Approach"
          title="A Better Way to Stay Focused on Your Studies"
          subtitle="Education becomes more effective when structured learning meets genuine concept clarity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.whyChoose.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Lightbulb;
            return (
              <div
                key={item.id}
                className="bg-brand-bg rounded-2xl p-6 border border-brand-border hover:border-brand-amber/40 transition-all duration-300 hover:shadow-card group relative flex flex-col justify-between"
              >
                <div>
                  {/* Step / Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-navy-light text-brand-amber flex items-center justify-center shadow-sm transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-heading font-extrabold text-slate-300 group-hover:text-brand-amber/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-brand-navy mb-1">
                    {item.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-brand-amber mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-brand-border/60 flex items-center text-[11px] text-slate-500 font-medium">
                  <span>Student Centred</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
