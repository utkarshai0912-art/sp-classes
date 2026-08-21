import React from 'react';
import { useSite } from '../context/SiteContext';
import { CoursesPreview } from '../components/home/CoursesPreview';
import { FinalCTA } from '../components/home/FinalCTA';
import { BookOpen, CheckCircle, Sparkles, GraduationCap, Clock, ShieldCheck } from 'lucide-react';

export const CoursesPage = () => {
  const { config, openEnquiry } = useSite();

  return (
    <main className="py-12 bg-brand-bg min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-brand-amber/20 text-brand-amber border border-brand-amber/30">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Programs</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Classes & Courses at S.P. Classes
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Explore our curriculum tracks designed for secondary and senior secondary students. Each batch focuses on core fundamentals, active problem-solving, and regular evaluations.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Small Batch Sizes (20-25)</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>CBSE & UP State Board Aligned</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Daily Doubt Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Courses Listing with showAll=true */}
      <CoursesPreview showAll={true} />

      <FinalCTA />
    </main>
  );
};
