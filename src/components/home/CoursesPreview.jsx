import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { BookOpen, Clock, Calendar, ChevronRight, Sparkles, Check, HelpCircle } from 'lucide-react';

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
          badge="Curriculum & Batches"
          title="Find the Right Learning Support"
          subtitle="Explore academic classes and subject coaching designed to build understanding and strengthen student fundamentals."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {displayCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Header: Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-amber/15 text-brand-amber border border-brand-amber/30">
                    {course.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {course.category}
                  </span>
                </div>

                {/* Course Name / Placeholder */}
                <h3 className="text-xl font-heading font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-2">
                  {course.name}
                </h3>

                {/* Class Level Tag */}
                <div className="inline-block text-xs font-semibold text-brand-slate bg-brand-navy/5 px-2.5 py-1 rounded-md mb-4 border border-brand-navy/10">
                  Target: {course.classLevel}
                </div>

                {/* Description Placeholder */}
                <p className="text-sm text-brand-slate leading-relaxed mb-5">
                  {course.description}
                </p>

                {/* Subjects Tags */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-brand-navy mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-brand-amber" />
                    <span>Subjects Included:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.subjects.map((subj, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metadata Row: Timing & Duration */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs text-slate-600 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-amber" />
                    <span className="truncate">{course.timing}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-amber" />
                    <span className="truncate">{course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-brand-navy">Fee:</span> {course.fee}
                </div>

                <button
                  onClick={() => openEnquiry(course.name)}
                  className="px-4 py-2.5 rounded-lg bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-semibold transition shadow-sm hover:shadow flex items-center gap-1.5 active:scale-95"
                >
                  <span>Enquire Batch</span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-amber" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigateTo('courses')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-brand-navy font-semibold text-sm border border-brand-border shadow-sm hover:shadow transition"
            >
              <span>View Full Course Catalogue & Batches</span>
              <ChevronRight className="w-4 h-4 text-brand-amber" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
