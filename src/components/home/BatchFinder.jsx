import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { Search, Sparkles, CheckCircle2, Clock, BookOpen, ChevronRight, MessageSquare, GraduationCap } from 'lucide-react';

export const BatchFinder = () => {
  const { config, openEnquiry } = useSite();
  const [selectedGrade, setSelectedGrade] = useState('Class 10');
  const [selectedBoard, setSelectedBoard] = useState('CBSE Board');

  const grades = ['Class 9', 'Class 10', 'Class 11', 'Class 12'];
  const boards = ['CBSE Board', 'UP State Board'];

  // Match or fallback
  const matchedBatch = config.batchFinder.find(
    b => b.grade === selectedGrade && (b.board === selectedBoard || b.board.includes('State Board'))
  ) || config.batchFinder[0];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Interactive Batch Selector"
          title="Find Your Ideal Batch & Schedule"
          subtitle="Select your class and board to see customized batch timings, syllabus tracks, and study materials."
        />

        <div className="max-w-4xl mx-auto bg-brand-bg rounded-3xl p-6 sm:p-10 border border-brand-border shadow-card">
          
          {/* Step 1 & 2 Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            
            {/* Grade Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2.5 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-amber" />
                <span>1. Select Your Class</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {grades.map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setSelectedGrade(grade)}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                      selectedGrade === grade
                        ? 'bg-brand-navy text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>

            {/* Board Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-brand-amber" />
                <span>2. Select Educational Board</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {boards.map((board) => (
                  <button
                    key={board}
                    onClick={() => setSelectedBoard(board)}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                      selectedBoard === board
                        ? 'bg-brand-navy text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {board}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-amber/30 shadow-sm space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-amber text-brand-navy text-[11px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Recommended Track
            </div>

            <div>
              <div className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-1">
                {selectedGrade} • {selectedBoard}
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-navy">
                {matchedBatch.recommendedTrack}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-slate-100 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-slate-500 block">Subjects Covered:</span>
                <span className="font-semibold text-brand-navy text-sm">{matchedBatch.subjects}</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-500 block">Batch Timing:</span>
                <span className="font-semibold text-brand-navy text-sm flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-amber" />
                  {matchedBatch.timing}
                </span>
              </div>
            </div>

            <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold block mb-1 text-amber-950">Academic Focus for {selectedGrade}:</span>
              {matchedBatch.focus}
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Seats limited to <span className="font-bold text-brand-navy">25 students per batch</span> to ensure personal attention.
              </div>

              <button
                onClick={() => openEnquiry(`${selectedGrade} (${selectedBoard}) - ${matchedBatch.recommendedTrack}`)}
                className="w-full sm:w-auto px-6 py-3 bg-brand-navy hover:bg-brand-navy-hover text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Reserve Seat for {selectedGrade}</span>
                <ChevronRight className="w-4 h-4 text-brand-amber group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
