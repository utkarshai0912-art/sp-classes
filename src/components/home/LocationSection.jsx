import React from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { MapPin, Navigation, Phone, MessageSquare, ExternalLink, Clock, Compass, ShieldCheck } from 'lucide-react';

export const LocationSection = () => {
  const { config, openEnquiry, showToast } = useSite();

  const handleCall = () => {
    if (config.phoneRaw) {
      window.location.href = `tel:${config.phoneRaw}`;
    } else {
      showToast(`Phone number pending verification: ${config.phone}`, 'info');
    }
  };

  const handleWhatsApp = () => {
    if (config.whatsappRaw) {
      const text = encodeURIComponent("Hello S.P. Classes, I would like to enquire about classes.");
      window.open(`https://wa.me/${config.whatsappRaw}?text=${text}`, '_blank');
    } else {
      showToast(`WhatsApp pending verification: ${config.whatsapp}`, 'info');
    }
  };

  return (
    <section id="location-section" className="py-16 lg:py-24 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Verified Location"
          title="Find S.P. Classes"
          subtitle="Conveniently situated in Shivpuri on Pachawali Road for students and parents across Pachaoli and Etawah."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-7 border border-brand-border shadow-card flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Centre Identity */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-white font-heading font-extrabold text-xl shadow-sm">
                  <span>S</span>
                  <span className="text-brand-amber">P</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy leading-tight">
                    S.P. Classes
                  </h3>
                  <p className="text-xs text-brand-slate">
                    Shivpuri, Pachaoli, Etawah (UP)
                  </p>
                </div>
              </div>

              {/* Verified Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-brand-amber flex items-center justify-center shrink-0 border border-amber-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Verified Address
                  </div>
                  <p className="text-sm font-medium text-brand-navy leading-snug">
                    {config.address}
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Opening Hours
                  </div>
                  <p className="text-sm text-brand-slate">
                    {config.openingHours}
                  </p>
                </div>
              </div>

              {/* Contact Placeholders */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-medium text-brand-navy">{config.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">WhatsApp:</span>
                  <span className="font-medium text-brand-navy">{config.whatsapp}</span>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 grid grid-cols-2 gap-3">
              <a
                href={config.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
              >
                <Navigation className="w-4 h-4 text-brand-amber" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={() => openEnquiry()}
                className="py-3 px-4 rounded-xl bg-brand-amber hover:bg-brand-amber-hover text-brand-navy text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition"
              >
                <span>Enquire Now</span>
              </button>
            </div>

          </div>

          {/* Right Map Display & Embed Placeholder (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-brand-border shadow-card flex flex-col">
            
            {/* Interactive Embed Container */}
            <div className="relative w-full h-80 sm:h-96 bg-slate-100">
              <iframe
                title="S.P. Classes Location Map"
                src="https://maps.google.com/maps?q=Pachawali%20Rd,%20Shivpuri,%20Pachaoli,%20Uttar%20Pradesh%20206002,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-brand-border max-w-xs text-xs">
                <div className="font-bold text-brand-navy flex items-center gap-1.5 mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>S.P. Classes Centre</span>
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-1">
                  Shivpuri, Pachawali Rd, Pachaoli
                </div>
              </div>
            </div>

            {/* Map Sub-bar */}
            <div className="p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-600">
                <Compass className="w-4 h-4 text-brand-navy" />
                <span>Need assistance finding the location?</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCall}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-brand-navy rounded-lg font-medium transition flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-amber" />
                  <span>Call Us</span>
                </button>

                <a
                  href={config.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-brand-navy hover:bg-brand-navy-hover text-white rounded-lg font-medium transition flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
