import React from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { MapPin, CheckCircle, ChevronRight, GraduationCap, Sparkles, BookOpen, Users, Award } from 'lucide-react';

export const AboutPreview = () => {
  const { config, openEnquiry, navigateTo } = useSite();

  return (
    <section className="py-16 lg:py-24 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual & Mentorship Frame (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-br from-brand-navy to-brand-amber rounded-3xl opacity-15 blur"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80"
                  alt="Teacher explaining academic concepts on whiteboard at S.P. Classes"
                  className="w-full h-84 sm:h-96 object-cover object-center"
                />

                <div className="absolute bottom-3 inset-x-3 bg-brand-navy/90 backdrop-blur-md p-4 rounded-2xl text-white border border-white/10 text-xs">
                  <div className="font-bold text-brand-amber flex items-center gap-1.5 mb-1 text-sm">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic Guidance at S.P. Classes</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-snug">
                    Shivpuri, Pachawali Rd, Pachaoli, Etawah 206002
                  </p>
                </div>
              </div>

              {/* Faculty Experience Badge */}
              <div className="mt-4 p-4 bg-white rounded-2xl border border-brand-border shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-brand-amber" />
                </div>
                <div>
                  <div className="font-bold text-xs text-brand-navy">Experienced Faculty Mentors</div>
                  <div className="text-[11px] text-slate-500">Focused on Concept Mastery & Board Success</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy & Values (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber/15 text-brand-amber border border-brand-amber/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About S.P. Classes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              {config.about.heading}
            </h2>

            <p className="text-base text-brand-slate leading-relaxed">
              {config.about.storyP1}
            </p>

            <p className="text-base text-brand-slate leading-relaxed">
              {config.about.storyP2}
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Small Batch Focus & Personal Care</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Concept-Centred Problem Solving</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Easily Accessible in Shivpuri</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Regular Parent-Teacher Briefings</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigateTo('about')}
                className="px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white font-bold text-sm transition shadow-md flex items-center gap-2"
              >
                <span>Read Our Teaching Methodology</span>
                <ChevronRight className="w-4 h-4 text-brand-amber" />
              </button>

              <button
                onClick={() => openEnquiry()}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-brand-navy font-bold text-sm border border-brand-border shadow-sm transition"
              >
                Ask About Admissions
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
