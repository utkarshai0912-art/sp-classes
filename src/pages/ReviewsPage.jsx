import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { FinalCTA } from '../components/home/FinalCTA';
import { MessageSquare, ExternalLink, ShieldCheck, Star, Send, CheckCircle2 } from 'lucide-react';

export const ReviewsPage = () => {
  const { config, showToast } = useSite();
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    role: 'Student',
    rating: '5',
    comment: ''
  });

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    showToast('Feedback submitted for verification!');
  };

  return (
    <main className="py-12 bg-brand-bg min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-amber/20 text-brand-amber border border-brand-amber/30">
              <MessageSquare className="w-4 h-4" />
              <span>Authentic Feedback</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Reviews & Testimonials
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We believe in honest, verified student outcomes. Real parent and student feedback is collected through verified Google Business channels.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-10">
        
        {/* Main Verification Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card text-center">
          <div className="w-16 h-16 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center mx-auto mb-4 border border-brand-navy/10">
            <ShieldCheck className="w-8 h-8 text-brand-amber" />
          </div>

          <h2 className="text-2xl font-heading font-bold text-brand-navy mb-3">
            Google Reviews Policy
          </h2>

          <div className="my-4 inline-block px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-medium">
            {config.reviewsPlaceholderText}
          </div>

          <p className="text-sm text-brand-slate max-w-xl mx-auto leading-relaxed mb-6">
            In compliance with strict truth-in-advertising guidelines, S.P. Classes does not fabricate ratings or invent testimonials. All published reviews reflect real, verifiable Google reviews.
          </p>

          <a
            href={config.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white font-semibold text-sm shadow-md transition"
          >
            <span>Open Verified Google Business Profile</span>
            <ExternalLink className="w-4 h-4 text-brand-amber" />
          </a>
        </div>

        {/* Student/Parent Direct Feedback Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card">
          <h3 className="text-xl font-heading font-bold text-brand-navy mb-1">
            Are you a current student or parent?
          </h3>
          <p className="text-xs text-brand-slate mb-6">
            Submit your learning experience or review for verification by the institute administrators.
          </p>

          {feedbackSubmitted ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-heading font-bold text-emerald-900">Thank you for your feedback!</h4>
              <p className="text-xs text-emerald-700">Your review will be reviewed and verified by S.P. Classes.</p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">Relationship</label>
                  <select
                    value={feedbackForm.role}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, role: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-amber focus:outline-none"
                  >
                    <option value="Student">Current Student</option>
                    <option value="Parent">Parent / Guardian</option>
                    <option value="Alumnus">Past Student</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1">Feedback / Experience</label>
                <textarea
                  rows={3}
                  required
                  value={feedbackForm.comment}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, comment: e.target.value })}
                  placeholder="Share your experience regarding concept clarity, doubt support, and teaching quality..."
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-amber focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-brand-navy hover:bg-brand-navy-hover text-white font-semibold text-xs rounded-xl shadow transition flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Feedback for Verification</span>
              </button>
            </form>
          )}
        </div>

      </div>

      <FinalCTA />
    </main>
  );
};
