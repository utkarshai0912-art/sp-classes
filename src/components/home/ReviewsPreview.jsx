import React from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { Star, MessageSquare, ExternalLink, ShieldCheck, CheckCircle2, Quote, UserCheck } from 'lucide-react';

export const ReviewsPreview = () => {
  const { config, navigateTo } = useSite();

  return (
    <section id="reviews-section" className="py-16 lg:py-24 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Parent & Student Feedback"
          title="What Students & Parents Say"
          subtitle="Genuine experiences and academic transformations from students enrolled at S.P. Classes, Shivpuri."
        />

        {/* Real Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {config.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-brand-amber/20 group-hover:text-brand-amber/40 transition-colors" />
                </div>

                {/* Review Comment */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold text-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-navy leading-tight">
                      {rev.name}
                    </h4>
                    <div className="text-xs text-brand-slate">
                      {rev.role}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <UserCheck className="w-3 h-3" />
                  <span>Enrolled Student/Parent</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Connection Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-brand-border shadow-sm text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <h3 className="font-heading font-bold text-lg text-brand-navy">
                Verified on Google Business Profile
              </h3>
              <p className="text-xs text-brand-slate max-w-md">
                Find our official listing on Google Maps to read real parent reviews and navigate directly to our centre on Pachawali Road.
              </p>
            </div>

            <a
              href={config.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white font-bold text-xs shadow-md transition flex items-center gap-2 shrink-0"
            >
              <span>View Google Maps Listing</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-amber" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
