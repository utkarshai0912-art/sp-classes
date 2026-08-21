import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { LocationSection } from '../components/home/LocationSection';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2, Navigation } from 'lucide-react';

export const ContactPage = () => {
  const { config, showToast } = useSite();

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    classLevel: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.classLevel.trim()) newErrors.classLevel = 'Please select a class';
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

    setTimeout(() => {
      setFormStatus('success');
      showToast('Enquiry sent successfully to S.P. Classes!');
    }, 1200);
  };

  return (
    <main className="py-12 bg-brand-bg min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-amber/20 text-brand-amber border border-brand-amber/30">
              <MapPin className="w-4 h-4" />
              <span>Contact & Location</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Get in Touch with S.P. Classes
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Have questions about batch availability, fees, syllabus, or admission procedures? Send us an enquiry or visit our centre on Pachawali Road.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Form + Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card">
            <h2 className="text-2xl font-heading font-bold text-brand-navy mb-2">
              Send an Academic Enquiry
            </h2>
            <p className="text-xs text-brand-slate mb-6">
              Fill out the form below and our academic coordinator will contact you directly.
            </p>

            {formStatus === 'success' ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-navy">
                  Enquiry Successfully Sent!
                </h3>
                <p className="text-sm text-brand-slate max-w-sm mx-auto leading-relaxed">
                  Thanks! Your enquiry has been received. S.P. Classes will contact you using the details provided.
                </p>
                <button
                  onClick={() => {
                    setFormData({
                      studentName: '',
                      parentName: '',
                      classLevel: '',
                      subject: '',
                      phone: '',
                      message: ''
                    });
                    setFormStatus('idle');
                  }}
                  className="px-6 py-2.5 bg-brand-navy text-white text-xs font-semibold rounded-xl hover:bg-brand-navy-hover transition"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {formStatus === 'error' && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Something went wrong while sending your enquiry. Please try again or contact us directly.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1">
                      Student Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Ankit Sharma"
                      className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition ${
                        errors.studentName ? 'border-rose-400 bg-rose-50/30' : 'border-brand-border'
                      }`}
                    />
                    {errors.studentName && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.studentName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1">
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Mr. Sharma"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-brand-border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1">
                      Class Level <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.classLevel}
                      onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                      className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition ${
                        errors.classLevel ? 'border-rose-400 bg-rose-50/30' : 'border-brand-border'
                      }`}
                    >
                      <option value="">-- Select Class --</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10 (Board)">Class 10 (Board Prep)</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 12 (Board)">Class 12 (Board Prep)</option>
                      <option value="Subject Coaching">Specific Subject Coaching</option>
                    </select>
                    {errors.classLevel && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.classLevel}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1">
                      Contact Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition ${
                        errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-brand-border'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Subject / Course of Interest
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Mathematics, Science, Foundation, Full Syllabus"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-brand-border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Message / Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about specific learning goals, doubt support, or batch timings..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-brand-border bg-white focus:ring-2 focus:ring-brand-amber focus:outline-none transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-3.5 bg-brand-navy hover:bg-brand-navy-hover disabled:bg-slate-400 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2"
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
              </form>
            )}
          </div>

          {/* Right Location & Hours Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-card space-y-6">
              <h3 className="text-xl font-heading font-bold text-brand-navy">
                Centre Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-navy mb-0.5">Verified Address:</span>
                    <span className="text-brand-slate leading-snug">{config.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-navy mb-0.5">Opening Hours:</span>
                    <span className="text-brand-slate">{config.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-navy mb-0.5">Direct Line:</span>
                    <span className="text-brand-slate">{config.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-navy mb-0.5">WhatsApp:</span>
                    <span className="text-brand-slate">{config.whatsapp}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={config.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-2 transition"
                >
                  <Navigation className="w-4 h-4 text-brand-amber" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <LocationSection />
    </main>
  );
};
