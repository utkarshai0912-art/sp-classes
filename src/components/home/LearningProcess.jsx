import React from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight, BookOpen, PenTool, HelpCircle, TrendingUp } from 'lucide-react';

export const LearningProcess = () => {
  const { config } = useSite();

  const stepIcons = [BookOpen, PenTool, HelpCircle, TrendingUp];

  return (
    <section className="py-16 lg:py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Structured Methodology"
          title="A Clearer Path From Learning to Progress"
          subtitle="A simple, proven 4-step learning cycle that helps students move from confusion to complete confidence."
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {config.learningProcess.map((item, index) => {
            const Icon = stepIcons[index] || BookOpen;
            return (
              <div
                key={item.step}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-amber/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-amber/20 border border-brand-amber/40 text-brand-amber flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading font-extrabold text-3xl text-brand-amber/40 group-hover:text-brand-amber transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 text-[11px] text-brand-amber/80 font-mono">
                  Stage {item.step} / 04
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto">
          * Each stage is tailored to individual batch levels and syllabus requirements to ensure steady academic improvement.
        </div>

      </div>
    </section>
  );
};
