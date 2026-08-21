import React from 'react';
import { SiteProvider, useSite } from './context/SiteContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileStickyBar } from './components/common/MobileStickyBar';
import { EnquiryModal } from './components/common/EnquiryModal';
import { LightboxModal } from './components/common/LightboxModal';
import { ConfigEditorDrawer } from './components/common/ConfigEditorDrawer';

import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { AdmissionsPage } from './pages/AdmissionsPage';

import { CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';

const MainContent = () => {
  const { activePage, toastMessage } = useSite();

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'courses':
        return <CoursesPage />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      case 'admissions':
        return <AdmissionsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div 
          className="fixed top-20 right-4 z-50 animate-bounce duration-300 max-w-sm bg-brand-navy text-white px-4 py-3 rounded-xl shadow-2xl border border-brand-amber/40 flex items-center gap-3 text-xs"
          role="status"
          aria-live="polite"
        >
          {toastMessage.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          ) : toastMessage.type === 'info' ? (
            <Info className="w-5 h-5 text-amber-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          )}
          <span>{toastMessage.message}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar />

      {/* Dynamic View */}
      <div className="flex-grow">
        {renderPage()}
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />

      {/* Universal Interactive Modals */}
      <EnquiryModal />
      <LightboxModal />
      <ConfigEditorDrawer />
    </div>
  );
};

export default function App() {
  return (
    <SiteProvider>
      <MainContent />
    </SiteProvider>
  );
}
