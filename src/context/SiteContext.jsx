import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialSiteConfig } from '../data/siteConfig';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [config, setConfig] = useState(initialSiteConfig);
  const [activePage, setActivePage] = useState('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryPreselectedCourse, setEnquiryPreselectedCourse] = useState('');
  const [lightboxData, setLightboxData] = useState({ isOpen: false, index: 0, items: [] });
  const [toastMessage, setToastMessage] = useState(null);

  // Clear any old placeholder cache in user's localStorage
  useEffect(() => {
    localStorage.removeItem('sp_classes_config');
  }, []);

  const navigateTo = (pageId, hashTarget = null) => {
    setActivePage(pageId);
    if (hashTarget) {
      setTimeout(() => {
        const element = document.getElementById(hashTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openEnquiry = (courseName = '') => {
    setEnquiryPreselectedCourse(courseName);
    setEnquiryModalOpen(true);
  };

  const closeEnquiry = () => {
    setEnquiryModalOpen(false);
    setEnquiryPreselectedCourse('');
  };

  const openLightbox = (items, index = 0) => {
    setLightboxData({ isOpen: true, items, index });
  };

  const closeLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <SiteContext.Provider
      value={{
        config,
        activePage,
        navigateTo,
        enquiryModalOpen,
        enquiryPreselectedCourse,
        openEnquiry,
        closeEnquiry,
        lightboxData,
        setLightboxData,
        openLightbox,
        closeLightbox,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
