import React from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { CheckCircle2, XCircle, ShieldCheck, Sparkles } from 'lucide-react';

export const ComparisonSection = () => {
  const { config, openEnquiry } = useSite();

  return (
    <section className="py-16 lg:py-24 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Why We Are Different"
          title="S.P. Classes vs. Ordinary Home Tuitions"
          subtitle="See why parents in Shivpuri and Etawah trust our structured coaching environment over informal tuition setups."
        />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-brand-border shadow-card overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-brand-navy text-white p-5 sm:p-6 text-xs sm:text-sm font-bold items-center">
            <div className="col-span-4 sm:col-span-4 text-slate-300 uppercase tracking-wider text-[11px] sm:text-xs">
              Academic Parameter
            </div>
            <div className="col-span-4 sm:col-span-4 text-brand-amber font-extrabold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-amber shrink-0" />
              <span>S.P. Classes</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-400 font-semibold">
              Ordinary Tuitions
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {config.comparison.map((item, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-12 p-5 sm:p-6 items-center gap-3 transition-colors ${
                  idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'
                }`}
              >
                {/* Feature Name */}
                <div className="col-span-12 sm:col-span-4 font-bold text-brand-navy">
                  {item.feature}
                </div>

                {/* S.P. Classes Pillar */}
                <div className="col-span-6 sm:col-span-4 text-slate-800 font-medium flex items-start gap-2 bg-emerald-50/50 p-2.5 sm:p-0 rounded-xl sm:bg-transparent border sm:border-0 border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.spClasses}</span>
                </div>

                {/* Ordinary Tuitions */}
                <div className="col-span-6 sm:col-span-4 text-slate-500 flex items-start gap-2 bg-rose-50/30 p-2.5 sm:p-0 rounded-xl sm:bg-transparent border sm:border-0 border-rose-100">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">{item.traditional}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-left">
              Experience the difference yourself. <span className="font-bold text-brand-navy">Attend a free orientation session.</span>
            </div>

            <button
              onClick={() => openEnquiry()}
              className="px-6 py-2.5 bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-bold rounded-xl shadow transition active:scale-95"
            >
              Book Free Trial Class
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
