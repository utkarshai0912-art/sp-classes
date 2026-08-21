/**
 * S.P. CLASSES — CENTRAL CONFIGURATION DATA
 * 
 * IMPORTANT: In accordance with Rule 1 & Rule 25:
 * NO UNVERIFIED BUSINESS INFORMATION IS HARD-CODED.
 * All items marked with brackets [] are placeholders ready for the owner/developer to replace.
 */

export const initialSiteConfig = {
  businessName: "S.P. Classes",
  brandMonogram: "SP",
  tagline: "Learn With Clarity. Prepare With Confidence.",
  subTagline: "S.P. Classes provides a focused learning environment where students can build understanding, strengthen their fundamentals and approach their studies with greater confidence.",
  
  // Location & Contact Details
  address: "Pachawali Rd, Shivpuri, Pachaoli, Uttar Pradesh 206002, India",
  cityRegion: "Shivpuri, Pachaoli, Etawah, UP - 206002",
  
  // Contact Placeholders (Rule 1 & 25)
  phone: "[ADD VERIFIED PHONE NUMBER]",
  phoneRaw: "", // e.g. "+919876543210" once verified
  whatsapp: "[ADD VERIFIED WHATSAPP NUMBER]",
  whatsappRaw: "", // e.g. "919876543210" once verified
  email: "[ADD VERIFIED EMAIL]",
  openingHours: "[ADD VERIFIED OPENING HOURS]",
  
  // Verified Google Maps & Profile Links (Rule 1, 24, 25)
  googleBusinessProfileUrl: "https://maps.app.goo.gl/htEY42nNfBeE9VG89",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Pachawali+Rd,+Shivpuri,+Pachaoli,+Uttar+Pradesh+206002",
  googleMapsEmbedQuery: "Pachawali Rd, Shivpuri, Pachaoli, Uttar Pradesh 206002, India",

  // Trust Highlights (Factual & Non-numeric - Rule 9.3)
  trustHighlights: [
    {
      id: "trust-1",
      title: "Local Learning Centre",
      description: "Conveniently accessible for students in Shivpuri and surrounding Pachaoli areas.",
      icon: "MapPin"
    },
    {
      id: "trust-2",
      title: "Student-Focused Learning",
      description: "Careful attention given to individual comprehension and concept mastery.",
      icon: "Users"
    },
    {
      id: "trust-3",
      title: "Academic Guidance",
      description: "Structured approach to syllabus preparation and exam readiness.",
      icon: "GraduationCap"
    },
    {
      id: "trust-4",
      title: "Easy Enquiry & Support",
      description: "Transparent communication with parents regarding student academic progress.",
      icon: "MessageSquareText"
    }
  ],

  // Courses Catalogue (Editable Placeholders - Rule 9.4 & 10)
  courses: [
    {
      id: "course-1",
      name: "[CONFIRM COURSE / BATCH 1]",
      classLevel: "[CONFIRM CLASS LEVEL: E.G. CLASS 9 - 10]",
      subjects: ["[CONFIRM SUBJECT 1]", "[CONFIRM SUBJECT 2]", "[CONFIRM SUBJECT 3]"],
      description: "[ADD VERIFIED DESCRIPTION: Comprehensive foundation coaching focused on core school curriculum and conceptual clarity.]",
      duration: "[ADD VERIFIED DURATION]",
      timing: "[ADD VERIFIED BATCH TIMING]",
      fee: "[CONFIRM WITH INSTITUTE]",
      category: "Secondary",
      badge: "Popular Foundation"
    },
    {
      id: "course-2",
      name: "[CONFIRM COURSE / BATCH 2]",
      classLevel: "[CONFIRM CLASS LEVEL: E.G. CLASS 11 - 12]",
      subjects: ["[CONFIRM SUBJECT 1]", "[CONFIRM SUBJECT 2]", "[CONFIRM SUBJECT 3]"],
      description: "[ADD VERIFIED DESCRIPTION: In-depth academic guidance for higher secondary board syllabus and competitive fundamentals.]",
      duration: "[ADD VERIFIED DURATION]",
      timing: "[ADD VERIFIED BATCH TIMING]",
      fee: "[CONFIRM WITH INSTITUTE]",
      category: "Senior Secondary",
      badge: "Board Prep"
    },
    {
      id: "course-3",
      name: "[CONFIRM SUBJECT-SPECIFIC COACHING]",
      classLevel: "[CONFIRM TARGET CLASSES]",
      subjects: ["[CONFIRM SPECIALIZED SUBJECT: E.G. MATHEMATICS / SCIENCE]"],
      description: "[ADD VERIFIED DESCRIPTION: Targeted modular coaching designed to strengthen fundamentals in specific challenging subjects.]",
      duration: "[ADD VERIFIED DURATION]",
      timing: "[ADD VERIFIED BATCH TIMING]",
      fee: "[CONFIRM WITH INSTITUTE]",
      category: "Specialized",
      badge: "Subject Focus"
    },
    {
      id: "course-4",
      name: "[CONFIRM CRASH COURSE / REVISION BATCH]",
      classLevel: "[CONFIRM ALL RELEVANT GRADES]",
      subjects: ["[CONFIRM SUBJECT COVERAGE]"],
      description: "[ADD VERIFIED DESCRIPTION: Intensive revision batches including structured problem-solving, test papers, and doubt clearing.]",
      duration: "[ADD VERIFIED DURATION]",
      timing: "[ADD VERIFIED BATCH TIMING]",
      fee: "[CONFIRM WITH INSTITUTE]",
      category: "Revision",
      badge: "Exam Focused"
    }
  ],

  // Why Choose Us Pillars (Rule 9.5)
  whyChoose: [
    {
      id: "why-1",
      title: "Structured Learning",
      subtitle: "Organized Syllabus Progress",
      description: "Every topic is covered methodically, ensuring students stay on track with their academic goals and school timeline.",
      icon: "BookOpenCheck"
    },
    {
      id: "why-2",
      title: "Concept Clarity",
      subtitle: "Focus on Core Fundamentals",
      description: "Prioritizing true understanding over rote memorization so students can solve unfamiliar problems with confidence.",
      icon: "Lightbulb"
    },
    {
      id: "why-3",
      title: "Doubt Support",
      subtitle: "Approachable Classroom Atmosphere",
      description: "Dedicated time for students to ask questions openly and resolve difficulties without hesitation.",
      icon: "HelpCircle"
    },
    {
      id: "why-4",
      title: "Regular Practice",
      subtitle: "Continuous Reinforcement",
      description: "Periodic evaluations, worksheets, and guided practice to solidify understanding and track steady progress.",
      icon: "FileCheck"
    }
  ],

  // Learning Process (Rule 9.7)
  learningProcess: [
    {
      step: "01",
      title: "Understand",
      description: "Learn concepts clearly with structured classroom explanation and illustrative examples."
    },
    {
      step: "02",
      title: "Practise",
      description: "Apply what you've learned through guided worksheets, problem sets, and textbook exercises."
    },
    {
      step: "03",
      title: "Ask",
      description: "Clear doubts promptly with direct guidance from teachers in an approachable setting."
    },
    {
      step: "04",
      title: "Improve",
      description: "Use feedback, revision sessions, and practice tests to keep progressing steadily."
    }
  ],

  // About Section Copy (Rule 9.6 & 11)
  about: {
    heading: "Learning That Starts With Understanding",
    tagline: "Focused Academic Guidance in Shivpuri, Etawah",
    storyP1: "Education becomes more effective when students understand what they are learning—not simply what they need to memorise. S.P. Classes is designed around focused academic learning and guidance, helping students build stronger foundations and develop a more confident approach to their studies.",
    storyP2: "Located on Pachawali Road in Shivpuri, our centre provides an encouraging academic space where local students receive dedicated attention and structured support aligned with their school curriculum.",
    founderPlaceholder: "[ADD VERIFIED FOUNDER / INSTITUTE STORY: When verified by owner, add founding year, educator background, and vision for local students.]",
    facultyPlaceholder: "[ADD VERIFIED TEACHER INFORMATION: Add credentials and subject specializations once confirmed.]"
  },

  // Classroom Gallery Items (Licensed stock / Curated educational placeholders - Rule 9.8, 13, 19)
  gallery: [
    {
      id: "gal-1",
      title: "Classroom Learning Environment",
      category: "Classrooms",
      aspectRatio: "16:9",
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
      caption: "Interactive classroom study sessions with focused academic attention [DEMO IMAGE — Replace with authentic institute photo]",
      alt: "Indian students in a focused classroom setting studying"
    },
    {
      id: "gal-2",
      title: "Concept Discussion & Blackboard Sessions",
      category: "Teaching",
      aspectRatio: "4:3",
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
      caption: "Teacher explaining core concepts with clarity on the board [DEMO IMAGE — Replace with authentic institute photo]",
      alt: "Teacher explaining concepts on the board in a modern classroom"
    },
    {
      id: "gal-3",
      title: "Individual Study & Practice",
      category: "Students",
      aspectRatio: "1:1",
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80",
      caption: "Students working through practice problems with structured guidance [DEMO IMAGE — Replace with authentic institute photo]",
      alt: "Students studying attentively at desks"
    },
    {
      id: "gal-4",
      title: "Collaborative Learning & Doubt Clearing",
      category: "Classrooms",
      aspectRatio: "4:3",
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      caption: "Approachable doubt clarification and student discussion [DEMO IMAGE — Replace with authentic institute photo]",
      alt: "Students and teacher engaged in academic discussion"
    },
    {
      id: "gal-5",
      title: "Study Material & Notebook Preparation",
      category: "Material",
      aspectRatio: "16:9",
      url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80",
      caption: "Structured notes and reference materials [DEMO IMAGE — Replace with authentic institute photo]",
      alt: "Study books, notebooks, and learning materials on desk"
    },
    {
      id: "gal-6",
      title: "Institute Premises & Study Area",
      category: "Facilities",
      aspectRatio: "4:3",
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
      caption: "Quiet and disciplined learning atmosphere [DEMO IMAGE — Replace with authentic institute photo]",
      alt: "Students in a modern learning institute library and study room"
    }
  ],

  // Reviews Structure (Rule 9.9 & 12 — STRICTLY NO FAKE REVIEWS)
  reviews: [], // Intentionally empty until verified by business owner
  reviewsPlaceholderText: "[REAL GOOGLE REVIEWS WILL APPEAR HERE AFTER VERIFICATION]",

  // FAQ Accordion Data (Rule 9.11)
  faqs: [
    {
      id: "faq-1",
      question: "Which classes do you teach at S.P. Classes?",
      answer: "[ADD VERIFIED ANSWER: Please contact the institute directly or submit an enquiry to confirm current class levels and batches offered for the upcoming academic session.]",
      category: "Classes"
    },
    {
      id: "faq-2",
      question: "Which subjects are available?",
      answer: "[ADD VERIFIED ANSWER: Subject availability is confirmed upon consultation. Submit the enquiry form with your desired subjects (Mathematics, Science, English, etc.) for current details.]",
      category: "Subjects"
    },
    {
      id: "faq-3",
      question: "What are the class timings?",
      answer: "[ADD VERIFIED ANSWER: Morning and evening batch schedules are arranged according to student grade levels. Enquire directly to receive the updated timetable.]",
      category: "Timings"
    },
    {
      id: "faq-4",
      question: "Where is S.P. Classes located?",
      answer: "S.P. Classes is located on Pachawali Rd, Shivpuri, Pachaoli, Uttar Pradesh 206002, India. You can easily find directions via our verified Google Maps listing.",
      category: "Location"
    },
    {
      id: "faq-5",
      question: "How can I enquire about admission?",
      answer: "[ADD VERIFIED ANSWER: You can submit the online enquiry form on this website, send a WhatsApp message, or visit our centre during working hours for an admission discussion.]",
      category: "Admissions"
    },
    {
      id: "faq-6",
      question: "Is a demo or orientation session available?",
      answer: "[ADD VERIFIED ANSWER: Orientation policies vary by batch and availability. Please enquire through our contact form to ask about trial classes or parent consultations.]",
      category: "Admissions"
    },
    {
      id: "faq-7",
      question: "How can parents contact the institute?",
      answer: "[ADD VERIFIED ANSWER: Parents can connect directly through our verified phone line, WhatsApp, or by scheduling an in-person visit at the centre.]",
      category: "General"
    }
  ]
};
