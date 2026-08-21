import React from 'react';
import { useSite } from '../../context/SiteContext';
import { ChevronRight, Navigation, Sparkles, ShieldCheck, MapPin, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

export const Hero = () => {
  const { config, openEnquiry, navigateTo } = useSite();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-bg via-white to-brand-bg pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-brand-border">
      {/* Subtle Background Pattern Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B1F3A_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Verified Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-xs font-semibold text-brand-navy">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
              <span className="truncate">Shivpuri, Pachawali Rd, Etawah</span>
              <span className="text-slate-400">•</span>
              <span className="text-brand-amber font-bold">Academic Coaching</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
              Learn With Clarity. <br className="hidden sm:inline" />
              <span className="relative inline-block text-brand-navy">
                Prepare With Confidence.
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-amber/25 -z-10 rounded-sm"></span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-brand-slate max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {config.subTagline}
            </p>

            {/* Primary and Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => openEnquiry()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white font-bold text-base shadow-lg shadow-brand-navy/15 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Enquire About Classes</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-brand-amber" />
              </button>

              <a
                href={config.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-brand-navy font-semibold text-base border border-brand-border shadow-sm hover:shadow transition flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-brand-blue" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Factual Non-Numeric Trust Statement (Rule 9.3) */}
            <div className="pt-4 border-t border-brand-border/70 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-brand-slate">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-slate-700">Concept Clarity Focused</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-slate-700">Approachable Doubt Clearing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-slate-700">Regular Guided Practice</span>
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
                  alt="Students engaged in structured academic learning in a classroom"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Badge for Image Authenticity Transparency */}
                <div className="absolute bottom-3 inset-x-3 bg-brand-navy/85 backdrop-blur-md p-3 rounded-xl text-white text-xs flex items-center justify-between border border-white/10">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-brand-amber shrink-0" />
                    <div>
                      <div className="font-semibold leading-tight">Interactive Classroom Environment</div>
                      <div className="text-[10px] text-slate-300">Shivpuri, Pachawali Road, Etawah</div>
                    </div>
                  </div>
                  <span className="text-[9px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded uppercase font-mono tracking-wider">Demo Image</span>
                </div>
              </div>

              {/* Floating Trust Card */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-xl shadow-xl border border-brand-border max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-amber/20 flex items-center justify-center text-brand-amber">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-navy">Structured Syllabus</div>
                    <div className="text-[10px] text-slate-500">Methodical Study Path</div>
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
