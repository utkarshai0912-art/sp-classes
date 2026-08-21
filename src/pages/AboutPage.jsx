import React from 'react';
import { useSite } from '../context/SiteContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { FinalCTA } from '../components/home/FinalCTA';
import { MapPin, BookOpen, Target, Heart, Award, CheckCircle2, User, Sparkles, GraduationCap, Users } from 'lucide-react';

export const AboutPage = () => {
  const { config, openEnquiry } = useSite();

  return (
    <main className="py-12 bg-white min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-brand-amber/20 text-brand-amber border border-brand-amber/30">
              <BookOpen className="w-4 h-4" />
              <span>About S.P. Classes</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Focused Learning. Clearer Understanding.
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Dedicated to building academic clarity, disciplined study routines, and self-confidence in local students through methodical classroom guidance in Shivpuri, Etawah.
            </p>
          </div>
        </div>
      </div>

      {/* Main Philosophy & Location */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
              Our Educational Philosophy
            </h2>
            
            <p className="text-base text-brand-slate leading-relaxed">
              {config.about.storyP1}
            </p>

            <p className="text-base text-brand-slate leading-relaxed">
              {config.about.storyP2}
            </p>

            <div className="p-5 bg-brand-bg rounded-2xl border border-brand-border text-sm text-slate-700 space-y-2">
              <div className="font-bold text-brand-navy flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-amber" />
                <span>Centre Address:</span>
              </div>
              <p className="text-brand-slate leading-snug">{config.address}</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                alt="Students studying in an academic environment"
                className="w-full h-84 sm:h-96 object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Faculty Mentorship Team Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-brand-bg rounded-3xl p-8 sm:p-12 border border-brand-border">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-brand-amber/15 text-brand-amber border border-brand-amber/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Teaching Mentors</span>
            </div>
            
            <h2 className="text-3xl font-heading font-extrabold text-brand-navy">
              Experienced Subject Mentors
            </h2>

            <p className="text-sm text-brand-slate leading-relaxed">
              Dedicated educators focused on individual conceptual mastery, answer writing techniques, and continuous student support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.faculty.map((fac) => (
              <div key={fac.id} className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm hover:shadow-card transition duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-4 border border-brand-navy/10">
                    <GraduationCap className="w-6 h-6 text-brand-amber" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-1">
                    {fac.name}
                  </h3>
                  <div className="text-xs font-semibold text-brand-blue mb-3">
                    {fac.role}
                  </div>
                  <p className="text-xs text-brand-slate leading-relaxed mb-4">
                    <span className="font-semibold text-slate-700">Specialization:</span> {fac.focus}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{fac.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </main>
  );
};
