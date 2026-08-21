import React from 'react';
import { useSite } from '../../context/SiteContext';
import { Phone, MessageSquare, Navigation, FileText } from 'lucide-react';

export const MobileStickyBar = () => {
  const { config, openEnquiry, showToast } = useSite();

  const handleCall = () => {
    if (config.phoneRaw) {
      window.location.href = `tel:${config.phoneRaw}`;
    } else {
      showToast(`Phone number is pending verification: ${config.phone}`, 'info');
    }
  };

  const handleWhatsApp = () => {
    if (config.whatsappRaw) {
      const text = encodeURIComponent("Hello S.P. Classes, I would like to enquire about classes and admission.");
      window.open(`https://wa.me/${config.whatsappRaw}?text=${text}`, '_blank');
    } else {
      showToast(`WhatsApp is pending verification: ${config.whatsapp}`, 'info');
    }
  };

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-40 bg-brand-navy border-t border-brand-amber/30 lg:hidden shadow-2xl py-2 px-3 pb-safe"
      role="navigation"
      aria-label="Quick Mobile Actions"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Call Button */}
        <button
          onClick={handleCall}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg text-white hover:bg-white/10 active:bg-white/20 transition text-center min-h-[48px]"
          aria-label="Call S.P. Classes"
        >
          <Phone className="w-5 h-5 text-brand-amber mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg text-white hover:bg-white/10 active:bg-white/20 transition text-center min-h-[48px]"
          aria-label="WhatsApp S.P. Classes"
        >
          <MessageSquare className="w-5 h-5 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </button>

        {/* Directions Button */}
        <a
          href={config.googleBusinessProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg text-white hover:bg-white/10 active:bg-white/20 transition text-center min-h-[48px]"
          aria-label="Get directions to S.P. Classes"
        >
          <Navigation className="w-5 h-5 text-sky-400 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Directions</span>
        </a>

        {/* Enquire Button */}
        <button
          onClick={() => openEnquiry()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-brand-amber text-brand-navy font-bold hover:bg-brand-amber-hover transition text-center shadow-md min-h-[48px]"
          aria-label="Enquire about classes"
        >
          <FileText className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Enquire</span>
        </button>
      </div>
    </div>
  );
};
