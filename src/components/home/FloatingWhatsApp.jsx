import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { MessageSquare, Phone, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const { config } = useSite();
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello S.P. Classes, I would like to enquire about admission and batch timings.");
    window.open(`https://wa.me/${config.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-white text-brand-navy p-3 rounded-2xl shadow-xl border border-brand-border text-xs max-w-[220px] relative animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-slate-700"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="font-bold text-slate-800 mb-0.5">Need Batch Guidance?</div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Chat directly with our academic desk on WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
