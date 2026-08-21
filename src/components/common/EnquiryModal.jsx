import React, { useState, useEffect } from 'react';
import { useSite } from '../../context/SiteContext';
import { X, CheckCircle2, AlertCircle, Loader2, Send, GraduationCap, Phone, User, BookOpen, MessageSquare } from 'lucide-react';

export const EnquiryModal = () => {
  const { enquiryModalOpen, closeEnquiry, enquiryPreselectedCourse, config, showToast } = useSite();

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    classLevel: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (enquiryPreselectedCourse) {
      setFormData(prev => ({
        ...prev,
        subject: enquiryPreselectedCourse
      }));
    }
  }, [enquiryPreselectedCourse]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && enquiryModalOpen) {
        closeEnquiry();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enquiryModalOpen, closeEnquiry]);

  if (!enquiryModalOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.classLevel.trim()) {
      newErrors.classLevel = 'Please select or enter the class level';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setFormStatus('loading');

    // Simulate reliable submission
    setTimeout(() => {
      // 95% simulated success
      setFormStatus('success');
      showToast('Enquiry received successfully!');
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      parentName: '',
      classLevel: '',
      subject: '',
      phone: '',
      message: ''
    });
    setFormStatus('idle');
    setErrors({});
    closeEnquiry();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-navy/70 backdrop-blur-sm transition-opacity"
        onClick={closeEnquiry}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-brand-border z-10 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-brand-navy px-6 py-5 text-white flex items-center justify-between border-b border-brand-amber/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-brand-amber/20 border border-brand-amber/40 flex items-center justify-center text-brand-amber">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 id="enquiry-modal-title" className="font-heading font-bold text-lg leading-tight">
                Enquire About Classes
              </h2>
              <p className="text-xs text-slate-300">
                S.P. Classes • Shivpuri, Etawah
              </p>
            </div>
          </div>
          <button
            onClick={closeEnquiry}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Close enquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {formStatus === 'success' ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-navy">
                Enquiry Received!
              </h3>
              <p className="text-sm text-brand-slate max-w-sm mx-auto leading-relaxed">
                Thanks! Your enquiry has been received. S.P. Classes will contact you using the details provided to discuss syllabus, class schedules, and admissions.
              </p>

              <div className="p-4 bg-brand-bg rounded-xl border border-brand-border text-xs text-left space-y-1 text-slate-700">
                <div><span className="font-semibold text-brand-navy">Student:</span> {formData.studentName}</div>
                <div><span className="font-semibold text-brand-navy">Class:</span> {formData.classLevel}</div>
                {formData.subject && <div><span className="font-semibold text-brand-navy">Subject/Course:</span> {formData.subject}</div>}
                <div><span className="font-semibold text-brand-navy">Contact:</span> {formData.phone}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-lg hover:bg-brand-navy-hover transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <p className="text-xs text-brand-slate mb-3">
                Tell us what you're looking for and the S.P. Classes team can provide relevant information about available classes, subjects and timings.
              </p>

              {formStatus === 'error' && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Something went wrong while sending your enquiry. Please try again or contact us directly.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Student Name */}
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Student Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full text-sm px-3 py-2 rounded-lg border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition ${
                        errors.studentName ? 'border-rose-400 bg-rose-50/30' : 'border-brand-border'
                      }`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.studentName}</p>
                  )}
                </div>

                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Mr. Sharma"
                    className="w-full text-sm px-3 py-2 rounded-lg border border-brand-border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Class Level */}
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Class / Grade <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.classLevel}
                    onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                    className={`w-full text-sm px-3 py-2 rounded-lg border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition ${
                      errors.classLevel ? 'border-rose-400 bg-rose-50/30' : 'border-brand-border'
                    }`}
                  >
                    <option value="">-- Select Class --</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10 (Board)">Class 10 (Board Prep)</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12 (Board)">Class 12 (Board Prep)</option>
                    <option value="Subject Specific Coaching">Subject Specific / Other</option>
                  </select>
                  {errors.classLevel && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.classLevel}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Contact Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className={`w-full text-sm px-3 py-2 rounded-lg border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition ${
                      errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-brand-border'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Subject / Course */}
              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1">
                  Subjects / Course of Interest
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Mathematics, Science, Board Revision, All Subjects"
                  className="w-full text-sm px-3 py-2 rounded-lg border border-brand-border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1">
                  Message / Learning Needs (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about specific learning goals, doubt clearing needs, or batch timing preferences..."
                  className="w-full text-sm px-3 py-2 rounded-lg border border-brand-border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full py-3 bg-brand-navy hover:bg-brand-navy-hover disabled:bg-slate-400 text-white font-semibold text-sm rounded-lg shadow-md transition flex items-center justify-center gap-2"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-brand-amber" />
                      <span>Sending enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-400">
                  🔒 We respect your privacy. Details will only be used to respond to your academic enquiry.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
