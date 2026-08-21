import React from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { Star, MessageSquare, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ReviewsPreview = () => {
  const { config, navigateTo } = useSite();

  return (
    <section id="reviews-section" className="py-16 lg:py-24 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Verified Feedback"
          title="What Students & Parents Say"
          subtitle="Genuine feedback and reviews from students and families studying at S.P. Classes."
        />

        {/* Polished Empty State / Transparent Verification Container (Rules 1, 9.9, 12) */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-brand-border shadow-card text-center relative overflow-hidden">
          
          {/* Subtle Top Accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-navy via-brand-amber to-brand-navy"></div>

          <div className="w-14 h-14 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center mx-auto mb-4 border border-brand-navy/10">
            <MessageSquare className="w-7 h-7 text-brand-amber" />
          </div>

          <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">
            Authentic Google Reviews Integration
          </h3>

          {/* Prompt Placeholder Notice */}
          <div className="my-4 inline-block px-4 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium">
            {config.reviewsPlaceholderText}
          </div>

          <p className="text-sm text-brand-slate max-w-xl mx-auto leading-relaxed mb-6">
            In adherence to strict transparency standards, we only display verified Google Reviews submitted directly by enrolled students and parents. No artificial testimonials or ratings are fabricated.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={config.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white font-semibold text-sm transition shadow-sm hover:shadow flex items-center justify-center gap-2"
            >
              <span>View Google Business Profile</span>
              <ExternalLink className="w-4 h-4 text-brand-amber" />
            </a>

            <button
              onClick={() => navigateTo('reviews')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-navy font-semibold text-sm transition"
            >
              Learn More
            </button>
          </div>

          {/* Verification Guarantee Tag */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero Fabricated Claims • 100% Genuine Local Business Verification</span>
          </div>

        </div>

      </div>
    </section>
  );
};
