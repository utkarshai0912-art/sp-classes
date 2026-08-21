import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { SectionHeading } from '../common/SectionHeading';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

export const FAQPreview = ({ showAll = false }) => {
  const { config, openEnquiry } = useSite();
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = config.faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 7);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq-section" className="py-16 lg:py-24 bg-white border-b border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Answers & Guidance"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about classes, syllabus coverage, location, and enquiry at S.P. Classes."
        />

        {/* Optional Search */}
        {showAll && (
          <div className="relative mb-8 max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-sm focus:ring-2 focus:ring-brand-amber focus:outline-none transition"
            />
          </div>
        )}

        {/* Accordion List */}
        <div className="space-y-3.5">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-brand-navy/30 bg-brand-navy-subtle/40 shadow-sm'
                    : 'border-brand-border bg-white hover:border-brand-border-dark'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-brand-navy leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-brand-navy text-white rotate-180' : 'bg-slate-100 text-brand-navy'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-brand-slate leading-relaxed border-t border-slate-200/50">
                    <p>{faq.answer}</p>
                    
                    {faq.id !== 'faq-4' && (
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          onClick={() => openEnquiry()}
                          className="text-xs font-semibold text-brand-blue hover:underline"
                        >
                          Have specific questions? Enquire directly →
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-bg border border-brand-border text-center">
          <h3 className="font-heading font-bold text-base text-brand-navy mb-1">
            Still have a question not listed here?
          </h3>
          <p className="text-xs text-brand-slate mb-4">
            Our team is happy to guide you with any specific question regarding syllabus, batch timings, or admissions.
          </p>
          <button
            onClick={() => openEnquiry()}
            className="px-5 py-2.5 rounded-lg bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-semibold shadow transition"
          >
            Ask a Question
          </button>
        </div>

      </div>
    </section>
  );
};
