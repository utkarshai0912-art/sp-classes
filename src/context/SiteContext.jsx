import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialSiteConfig } from '../data/siteConfig';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [config, setConfig] = useState(() => {
    const saved = localStorage.getItem('sp_classes_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialSiteConfig;
      }
    }
    return initialSiteConfig;
  });

  const [activePage, setActivePage] = useState('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryPreselectedCourse, setEnquiryPreselectedCourse] = useState('');
  const [lightboxData, setLightboxData] = useState({ isOpen: false, index: 0, items: [] });
  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('sp_classes_config', JSON.stringify(config));
  }, [config]);

  // Scroll to top on page change
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

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
    showToast('Configuration updated live!');
  };

  const resetConfig = () => {
    setConfig(initialSiteConfig);
    localStorage.removeItem('sp_classes_config');
    showToast('Reset to default placeholder settings.');
  };

  return (
    <SiteContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
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
        isConfigDrawerOpen,
        setIsConfigDrawerOpen,
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
