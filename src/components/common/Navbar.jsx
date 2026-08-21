import React, { useState, useEffect } from 'react';
import { useSite } from '../../context/SiteContext';
import { Menu, X, Phone, MessageSquare, MapPin, Sparkles, ChevronRight, Sliders } from 'lucide-react';

export const Navbar = () => {
  const { config, activePage, navigateTo, openEnquiry, setIsConfigDrawerOpen } = useSite();
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
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleNavClick = (pageId) => {
    navigateTo(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification Bar for Client/Owner Awareness */}
      <div className="bg-brand-navy-dark text-slate-300 text-xs py-1.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
            <span className="font-medium text-white truncate">
              📍 Shivpuri, Pachawali Rd, Etawah, UP (206002)
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs shrink-0">
            <a 
              href={config.googleBusinessProfileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-amber hover:underline flex items-center gap-1 font-medium"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Verified Google Profile</span>
            </a>
            <button
              onClick={() => setIsConfigDrawerOpen(true)}
              className="bg-brand-amber/20 hover:bg-brand-amber/30 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 text-[11px] flex items-center gap-1 transition"
              title="Customize phone numbers and courses live"
            >
              <Sliders className="w-3 h-3" />
              <span>Owner Demo Controls</span>
            </button>
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
            <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center text-white font-heading font-extrabold text-xl shadow-sm border border-brand-amber/30 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white">S</span>
              <span className="text-brand-amber">P</span>
            </div>
            <div>
              <div className="font-heading font-extrabold text-xl tracking-tight text-brand-navy leading-none">
                S.P. CLASSES
              </div>
              <div className="text-[10px] uppercase font-semibold text-brand-amber tracking-wider mt-0.5">
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
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-hover transition-all duration-150 shadow-sm hover:shadow active:scale-95 group"
            >
              <span>Enquire About Classes</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openEnquiry()}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-navy hover:bg-brand-navy-hover"
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
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-brand-navy flex items-center justify-center text-white font-bold text-sm">
                    SP
                  </div>
                  <span className="font-heading font-bold text-brand-navy">S.P. Classes</span>
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
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition flex items-center justify-between ${
                        isActive
                          ? 'bg-brand-navy text-white font-semibold'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-amber' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </nav>

              {/* Verified Location Card in Menu */}
              <div className="mt-6 p-3 bg-brand-bg rounded-lg border border-brand-border text-xs text-brand-slate">
                <div className="font-semibold text-brand-navy flex items-center gap-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-amber" />
                  <span>Centre Location:</span>
                </div>
                <p className="leading-snug">{config.address}</p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-brand-border space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiry();
                }}
                className="w-full py-3 bg-brand-navy text-white text-sm font-semibold rounded-lg shadow text-center flex items-center justify-center gap-2"
              >
                <span>Enquire About Classes</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConfigDrawerOpen(true);
                }}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg text-center flex items-center justify-center gap-1.5"
              >
                <Sliders className="w-3.5 h-3.5 text-brand-amber" />
                <span>Owner Demo Controls</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
