import React from 'react';
import { useSite } from '../../context/SiteContext';
import { MapPin, Phone, MessageSquare, Mail, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer = () => {
  const { config, navigateTo, openEnquiry, setIsConfigDrawerOpen } = useSite();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Institute Brand & Positioning */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-brand-amber/40 flex items-center justify-center font-heading font-extrabold text-xl text-white">
                <span>S</span>
                <span className="text-brand-amber">P</span>
              </div>
              <div>
                <div className="font-heading font-bold text-xl text-white tracking-tight">S.P. CLASSES</div>
                <div className="text-[10px] uppercase font-semibold text-brand-amber tracking-wider">Etawah, Uttar Pradesh</div>
              </div>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Focused academic learning, concept clarity, and approachable guidance for local students in Shivpuri, Pachaoli.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-amber/15 text-amber-300 text-xs border border-amber-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-amber" />
                <span>Verified Google Maps Location</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore Website
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => navigateTo('home')}
                  className="hover:text-brand-amber transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('courses')}
                  className="hover:text-brand-amber transition-colors"
                >
                  Classes & Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('about')}
                  className="hover:text-brand-amber transition-colors"
                >
                  About S.P. Classes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('gallery')}
                  className="hover:text-brand-amber transition-colors"
                >
                  Inside S.P. Classes (Gallery)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('reviews')}
                  className="hover:text-brand-amber transition-colors"
                >
                  Reviews & Feedback
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('faq')}
                  className="hover:text-brand-amber transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="hover:text-brand-amber transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Location Details (Rule 23 & 29) */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Verified Address
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-amber shrink-0 mt-1" />
                <p className="text-slate-300 leading-snug">
                  {config.address}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={config.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-amber hover:underline font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                <span className="text-slate-300 font-medium">Opening Hours:</span> {config.openingHours}
              </div>
            </div>
          </div>

          {/* Col 4: Enquiries & Action */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Student Enquiries
            </h3>
            <p className="text-xs text-slate-300">
              Have questions about available batches, subjects, or upcoming admissions?
            </p>

            <button
              onClick={() => openEnquiry()}
              className="w-full py-2.5 px-4 bg-brand-amber hover:bg-brand-amber-hover text-brand-navy font-bold text-sm rounded-lg shadow transition-all duration-150 text-center"
            >
              Enquire About Classes
            </button>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-brand-amber" />
                <span className="truncate">Phone: {config.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageSquare className="w-3.5 h-3.5 text-brand-amber" />
                <span className="truncate">WhatsApp: {config.whatsapp}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} S.P. Classes. All rights reserved. (Pachaoli, Etawah 206002).
          </div>
          
          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setIsConfigDrawerOpen(true)}
              className="hover:text-brand-amber underline transition"
            >
              Owner Configuration Demo
            </button>
            <span>•</span>
            <button 
              onClick={() => navigateTo('faq')}
              className="hover:text-slate-200 transition"
            >
              FAQ
            </button>
            <span>•</span>
            <button 
              onClick={() => navigateTo('contact')}
              className="hover:text-slate-200 transition"
            >
              Location Map
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
