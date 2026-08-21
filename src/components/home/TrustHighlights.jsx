import React from 'react';
import { useSite } from '../../context/SiteContext';
import { MapPin, Users, GraduationCap, MessageSquareText, CheckCircle2 } from 'lucide-react';

export const TrustHighlights = () => {
  const { config } = useSite();

  const iconMap = {
    MapPin: MapPin,
    Users: Users,
    GraduationCap: GraduationCap,
    MessageSquareText: MessageSquareText
  };

  return (
    <section className="py-12 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.trustHighlights.map((item) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;
            return (
              <div 
                key={item.id}
                className="p-5 rounded-xl bg-brand-bg hover:bg-white border border-brand-border hover:border-brand-navy/20 transition-all duration-200 shadow-subtle hover:shadow-card flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-navy/5 group-hover:bg-brand-navy group-hover:text-white text-brand-navy flex items-center justify-center shrink-0 transition-colors duration-200 border border-brand-navy/10">
                  <IconComponent className="w-5 h-5 group-hover:text-brand-amber transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-brand-navy mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
