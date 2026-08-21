import React, { useState, useEffect } from 'react';
import { useSite } from '../../context/SiteContext';
import { Menu, X, Phone, MessageSquare, MapPin, Sparkles, ChevronRight, GraduationCap } from 'lucide-react';

export const Navbar = () => {
  const { config, activePage, navigateTo, openEnquiry } = useSite();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Classes & Courses' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Inside S.P. Classes' },
    { id: 'reviews', label: 'Reviews & Results' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleNavClick = (pageId) => {
    navigateTo(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-brand-navy-dark text-slate-200 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-amber/20 text-brand-amber font-semibold text-[11px]">
              <Sparkles className="w-3 h-3" />
              Admissions Open 2026-27
            </span>
            <span className="hidden sm:inline text-slate-300">
              Pachawali Rd, Shivpuri, Etawah
            </span>
          </div>
          
          <div className="flex items-center gap-5 text-xs shrink-0">
            <a 
              href={`tel:${config.phoneRaw}`}
              className="hover:text-brand-amber flex items-center gap-1.5 transition text-slate-300 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-brand-amber" />
              <span className="hidden md:inline">{config.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${config.whatsappRaw}?text=${encodeURIComponent('Hello S.P. Classes, I would like to enquire about admissions and batch timings.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1.5 transition text-slate-300 hover:text-white"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">WhatsApp Us</span>
            </a>
            <a 
              href={config.googleBusinessProfileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-amber hover:underline flex items-center gap-1 font-medium"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-brand-border'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="S.P. Classes - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white font-heading font-extrabold text-xl shadow-sm border border-brand-amber/30 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white">S</span>
              <span className="text-brand-amber">P</span>
            </div>
            <div>
              <div className="font-heading font-extrabold text-xl tracking-tight text-brand-navy leading-none">
                S.P. CLASSES
              </div>
              <div className="text-[10px] uppercase font-bold text-brand-amber tracking-wider mt-0.5">
                Learn • Understand • Progress
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-navy bg-brand-navy-subtle font-semibold'
                      : 'text-brand-slate hover:text-brand-navy hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openEnquiry()}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-brand-navy hover:bg-brand-navy-hover transition-all duration-150 shadow-md hover:shadow-lg active:scale-95 group"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-brand-amber" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openEnquiry()}
              className="px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-brand-navy hover:bg-brand-navy-hover shadow-sm"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-brand-amber"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-brand-navy/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center text-white font-bold text-sm">
                    SP
                  </div>
                  <span className="font-heading font-bold text-brand-navy text-base">S.P. Classes</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-lg"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition flex items-center justify-between ${
                        isActive
                          ? 'bg-brand-navy text-white font-semibold shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-amber' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </nav>

              {/* Centre Location Card in Menu */}
              <div className="mt-6 p-3.5 bg-brand-bg rounded-xl border border-brand-border text-xs text-brand-slate">
                <div className="font-semibold text-brand-navy flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-amber" />
                  <span>Centre Location</span>
                </div>
                <p className="leading-snug text-slate-600">{config.address}</p>
                <div className="mt-2 text-[11px] text-brand-blue font-medium">
                  {config.openingHours}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-brand-border space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiry();
                }}
                className="w-full py-3.5 bg-brand-navy text-white text-sm font-bold rounded-xl shadow-md text-center flex items-center justify-center gap-2"
              >
                <span>Enquire About Classes</span>
                <ChevronRight className="w-4 h-4 text-brand-amber" />
              </button>

              <a
                href={`tel:${config.phoneRaw}`}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-amber" />
                <span>Call {config.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
