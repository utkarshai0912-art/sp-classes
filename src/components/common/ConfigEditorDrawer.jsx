import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { X, Sliders, Save, RotateCcw, Copy, Check, Sparkles, HelpCircle } from 'lucide-react';

export const ConfigEditorDrawer = () => {
  const { config, updateConfig, resetConfig, isConfigDrawerOpen, setIsConfigDrawerOpen, showToast } = useSite();
  const [formData, setFormData] = useState(config);
  const [copied, setCopied] = useState(false);

  if (!isConfigDrawerOpen) return null;

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateConfig(formData);
    setIsConfigDrawerOpen(false);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    showToast('Config JSON copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-drawer-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsConfigDrawerOpen(false)}
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="bg-brand-navy p-5 text-white flex items-center justify-between border-b border-brand-amber/20">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-brand-amber" />
              <div>
                <h2 id="config-drawer-title" className="font-heading font-bold text-base">
                  Owner Configuration Demo
                </h2>
                <p className="text-[11px] text-slate-300">
                  Update placeholders live to test client verification
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsConfigDrawerOpen(false)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Close configuration drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSave} className="p-5 space-y-4 text-xs">
            
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 leading-relaxed">
              <strong className="font-semibold block mb-1">💡 Real-Time Placeholder Replacement</strong>
              Change any placeholder value below to test how the website renders with your verified business credentials.
            </div>

            {/* Business Name */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Business Name</label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => handleChange('businessName', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-amber focus:outline-none"
              />
            </div>

            {/* Phone Placeholder */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Phone Number</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => {
                  handleChange('phone', e.target.value);
                  handleChange('phoneRaw', e.target.value.replace(/[^0-9+]/g, ''));
                }}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-amber focus:outline-none"
                placeholder="e.g. +91 98765 43210"
              />
            </div>

            {/* WhatsApp Placeholder */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">WhatsApp Number</label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => {
                  handleChange('whatsapp', e.target.value);
                  handleChange('whatsappRaw', e.target.value.replace(/[^0-9]/g, ''));
                }}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-amber focus:outline-none"
                placeholder="e.g. +91 98765 43210"
              />
            </div>

            {/* Email Placeholder */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-amber focus:outline-none"
                placeholder="e.g. contact@spclasses.com"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Verified Address</label>
              <textarea
                rows={2}
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-amber focus:outline-none resize-none"
              />
            </div>

            {/* Opening Hours */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Opening Hours</label>
              <input
                type="text"
                value={formData.openingHours}
                onChange={(e) => handleChange('openingHours', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-amber focus:outline-none"
                placeholder="e.g. Mon-Sat: 7:00 AM - 7:30 PM"
              />
            </div>

            {/* Google Business Profile URL */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Google Maps Profile URL</label>
              <input
                type="text"
                value={formData.googleBusinessProfileUrl}
                onChange={(e) => handleChange('googleBusinessProfileUrl', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-amber focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="submit"
                className="flex-1 py-2.5 bg-brand-navy hover:bg-brand-navy-hover text-white font-semibold rounded-lg shadow flex items-center justify-center gap-1.5 transition"
              >
                <Save className="w-4 h-4 text-brand-amber" />
                <span>Apply Live Changes</span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
          <button
            onClick={handleCopyJSON}
            className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium text-xs hover:bg-slate-100 flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
          </button>

          <button
            onClick={() => {
              resetConfig();
              setFormData(config);
            }}
            className="px-3 py-1.5 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-medium flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>
    </div>
  );
};
