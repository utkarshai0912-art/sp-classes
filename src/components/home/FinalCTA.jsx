import React from 'react';
import { useSite } from '../../context/SiteContext';
import { ChevronRight, Navigation, Sparkles, Phone, MessageSquare } from 'lucide-react';

export const FinalCTA = () => {
  const { config, openEnquiry } = useSite();

  return (
    <section className="py-16 lg:py-24 bg-brand-navy relative overflow-hidden text-white">
      {/* Visual Ambient Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-amber/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-amber/20 text-brand-amber border border-brand-amber/30 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Admissions & Batch Inquiries Open</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          Let's Talk About Your Learning Goals
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Have questions about classes, subjects, timings or admission? Get in touch with S.P. Classes and start building understanding with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openEnquiry()}
            className="w-full sm:w-auto px-8 py-4 bg-brand-amber hover:bg-brand-amber-hover text-brand-navy font-extrabold text-base rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Enquire Now</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={config.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-base rounded-xl border border-white/20 transition flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4 text-brand-amber" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Quick Contact Line */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div>
            <span className="text-slate-400">Phone:</span> <span className="text-white font-medium">{config.phone}</span>
          </div>
          <div>•</div>
          <div>
            <span className="text-slate-400">WhatsApp:</span> <span className="text-white font-medium">{config.whatsapp}</span>
          </div>
          <div>•</div>
          <div>
            <span className="text-slate-400">Location:</span> <span className="text-white font-medium">Shivpuri, Pachawali Rd, Etawah</span>
          </div>
        </div>

      </div>
    </section>
  );
};
