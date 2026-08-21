import React from 'react';
import { useSite } from '../../context/SiteContext';
import { ChevronRight, Navigation, Sparkles, ShieldCheck, MapPin, BookOpen, GraduationCap, CheckCircle, Users, Trophy } from 'lucide-react';

export const Hero = () => {
  const { config, openEnquiry } = useSite();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-bg via-white to-brand-bg pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-brand-border">
      {/* Subtle Background Pattern Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B1F3A_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Verified Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-xs font-semibold text-brand-navy shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
              <span>Shivpuri, Pachawali Rd, Etawah</span>
              <span className="text-slate-300">•</span>
              <span className="text-brand-amber font-bold">Class 8th to 12th Coaching</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
              Learn With Clarity. <br className="hidden sm:inline" />
              <span className="relative inline-block text-brand-navy">
                Prepare With Confidence.
                <span className="absolute bottom-1 left-0 w-full h-3.5 bg-brand-amber/25 -z-10 rounded-sm"></span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-brand-slate max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {config.subTagline}
            </p>

            {/* Primary and Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => openEnquiry()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white font-bold text-base shadow-lg shadow-brand-navy/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Enquire About Classes</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-brand-amber" />
              </button>

              <a
                href={config.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-brand-navy font-bold text-base border border-brand-border shadow-sm hover:shadow transition flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-brand-blue" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Factual Highlights Bar */}
            <div className="pt-4 border-t border-brand-border/70 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-brand-slate">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Small Batch Focus (20-25 Students)</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily Doubt Resolution</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Weekly Test & Parent Reports</span>
              </div>
            </div>

          </div>

          {/* Right Hero Classroom Visual (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Accent Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-navy to-brand-amber rounded-3xl opacity-15 blur-lg transform -rotate-1"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                  alt="Students engaged in structured academic learning in a classroom at S.P. Classes"
                  className="w-full h-84 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 inset-x-3 bg-brand-navy/90 backdrop-blur-md p-3.5 rounded-xl text-white text-xs flex items-center justify-between border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-amber/20 flex items-center justify-center text-brand-amber shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold leading-tight text-white">Interactive Classroom Environment</div>
                      <div className="text-[11px] text-slate-300">Pachawali Road, Shivpuri, Etawah</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">
                      Active Batches
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Card */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-xl shadow-xl border border-brand-border max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-amber/15 flex items-center justify-center text-brand-amber">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-navy">Structured Syllabus</div>
                    <div className="text-[11px] text-slate-500">Board & Foundation Prep</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
