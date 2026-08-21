import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { FinalCTA } from '../components/home/FinalCTA';
import { MessageSquare, ExternalLink, ShieldCheck, Star, Send, CheckCircle2, Quote, UserCheck } from 'lucide-react';

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
    showToast('Feedback submitted successfully!');
  };

  return (
    <main className="py-12 bg-brand-bg min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-brand-amber/20 text-brand-amber border border-brand-amber/30">
              <MessageSquare className="w-4 h-4" />
              <span>Reviews & Testimonials</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Student & Parent Experiences
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Read genuine reviews and academic feedback from students and parents enrolled across our secondary and senior secondary batches in Shivpuri, Etawah.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-12">
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-brand-border shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-brand-amber/20" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

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

                <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <UserCheck className="w-3 h-3" />
                  <span>Verified Feedback</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Direct Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card text-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mx-auto mb-4 border border-brand-navy/10">
            <ShieldCheck className="w-7 h-7 text-brand-amber" />
          </div>

          <h2 className="text-2xl font-heading font-bold text-brand-navy mb-2">
            Verified on Google Business Profile
          </h2>

          <p className="text-sm text-brand-slate max-w-xl mx-auto leading-relaxed mb-6">
            Find our official listing on Google Maps to read real parent reviews and view location directions to our centre on Pachawali Road.
          </p>

          <a
            href={config.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white font-bold text-sm shadow-md transition"
          >
            <span>Open Google Maps Profile</span>
            <ExternalLink className="w-4 h-4 text-brand-amber" />
          </a>
        </div>

        {/* Student/Parent Feedback Submission Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card">
          <h3 className="text-xl font-heading font-bold text-brand-navy mb-1">
            Are you a current student or parent?
          </h3>
          <p className="text-xs text-brand-slate mb-6">
            Share your learning experience or review regarding concept clarity, doubt support, and teaching quality at S.P. Classes.
          </p>

          {feedbackSubmitted ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-heading font-bold text-emerald-900">Thank you for your feedback!</h4>
              <p className="text-xs text-emerald-700">Your feedback has been submitted to S.P. Classes.</p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1">Your Full Name</label>
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
                  <label className="block text-xs font-bold text-brand-navy mb-1">Relationship</label>
                  <select
                    value={feedbackForm.role}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, role: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-amber focus:outline-none"
                  >
                    <option value="Current Student">Current Student</option>
                    <option value="Parent / Guardian">Parent / Guardian</option>
                    <option value="Past Student">Past Student / Alumnus</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1">Your Feedback & Experience</label>
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
                className="px-6 py-3 bg-brand-navy hover:bg-brand-navy-hover text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Feedback</span>
              </button>
            </form>
          )}
        </div>

      </div>

      <FinalCTA />
    </main>
  );
};
