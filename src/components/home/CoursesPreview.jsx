import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { BookOpen, Clock, Calendar, ChevronRight, CheckCircle2, Sparkles, Award } from 'lucide-react';

export const CoursesPreview = ({ showAll = false }) => {
  const { config, openEnquiry, navigateTo } = useSite();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Secondary', 'Senior Secondary', 'Specialized', 'Revision'];

  const filteredCourses = selectedCategory === 'All'
    ? config.courses
    : config.courses.filter(c => c.category === selectedCategory);

  const displayCourses = showAll ? filteredCourses : filteredCourses.slice(0, 4);

  return (
    <section id="courses-section" className="py-16 lg:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Programs"
          title="Find the Right Learning Support"
          subtitle="Explore our specialized classroom batches designed to build rock-solid concepts, problem-solving speed, and exam readiness."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-150 ${
                selectedCategory === category
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-brand-slate hover:text-brand-navy border border-brand-border hover:bg-slate-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Accent Top Line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-navy via-brand-amber to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Header: Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-amber/15 text-brand-amber border border-brand-amber/30">
                    {course.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {course.category}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-2xl font-heading font-extrabold text-brand-navy group-hover:text-brand-blue transition-colors mb-1.5 leading-tight">
                  {course.name}
                </h3>

                {/* Class Level Tag */}
                <div className="inline-block text-xs font-semibold text-brand-navy bg-brand-navy/5 px-3 py-1 rounded-lg mb-4 border border-brand-navy/10">
                  Target: {course.classLevel}
                </div>

                {/* Description */}
                <p className="text-sm text-brand-slate leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Key Features List */}
                {course.features && (
                  <div className="mb-6 space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                      Batch Highlights:
                    </div>
                    {course.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subjects Tags */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-brand-navy mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-brand-amber" />
                    <span>Subjects Covered:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.subjects.map((subj, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-brand-navy/5 text-brand-navy text-xs font-semibold border border-brand-navy/10"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metadata Row: Timing & Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-amber shrink-0" />
                    <span className="truncate">{course.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-amber shrink-0" />
                    <span className="truncate">{course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-slate-600 w-full sm:w-auto">
                  <span className="font-bold text-brand-navy">Fee:</span> {course.fee}
                </div>

                <button
                  onClick={() => openEnquiry(course.name)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-bold transition shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>Enquire Batch</span>
                  <ChevronRight className="w-4 h-4 text-brand-amber" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigateTo('courses')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-brand-navy font-bold text-sm border border-brand-border shadow-sm hover:shadow transition"
            >
              <span>View All Batches & Course Details</span>
              <ChevronRight className="w-4 h-4 text-brand-amber" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
