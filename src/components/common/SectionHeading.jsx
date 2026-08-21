import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = ""
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-brand-amber/15 text-brand-amber border border-brand-amber/30">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2 className={`text-3xl md:text-4xl lg:text-4.5xl font-bold tracking-tight mb-4 ${dark ? 'text-white' : 'text-brand-navy'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-brand-slate'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
