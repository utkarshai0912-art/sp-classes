import React from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { MapPin, CheckCircle, ChevronRight, GraduationCap, Sparkles, BookOpen } from 'lucide-react';

export const AboutPreview = () => {
  const { config, openEnquiry, navigateTo } = useSite();

  return (
    <section className="py-16 lg:py-24 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual & Teacher/Classroom Frame (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-br from-brand-navy to-brand-amber rounded-3xl opacity-15 blur"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80"
                  alt="Teacher explaining academic concepts on whiteboard"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />

                <div className="absolute bottom-3 inset-x-3 bg-brand-navy/90 backdrop-blur-md p-3.5 rounded-xl text-white border border-white/10 text-xs">
                  <div className="font-semibold text-brand-amber flex items-center gap-1.5 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic Guidance at S.P. Classes</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-snug">
                    Shivpuri, Pachawali Rd, Pachaoli, Etawah 206002
                  </p>
                </div>
              </div>

              {/* Founder/Faculty Verification Note */}
              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-0.5">Faculty & Founder Story</span>
                  <span className="text-[11px] leading-tight text-amber-800">
                    {config.about.founderPlaceholder}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy & Values (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-amber/15 text-brand-amber border border-brand-amber/30">
              <span>About The Institute</span>
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
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Encouraging & Disciplined Environment</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Concept-Centred Guidance</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Accessible Location in Shivpuri</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Transparent Parent Communication</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigateTo('about')}
                className="px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white font-semibold text-sm transition shadow-sm hover:shadow flex items-center gap-2"
              >
                <span>Read Full Institute Story</span>
                <ChevronRight className="w-4 h-4 text-brand-amber" />
              </button>

              <button
                onClick={() => openEnquiry()}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-brand-navy font-semibold text-sm border border-brand-border shadow-sm hover:shadow transition"
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
