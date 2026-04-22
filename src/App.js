import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ambient from './components/Ambient';
import { usePageTransition } from './utils/pageTransition';
import { initAllScrollTriggers } from './utils/scrollTriggerAnimations';
import { initAllTypographyAnimations } from './utils/typographyAnimations';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import Work from './pages/Work';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';

function AppContent() {
  const location = useLocation();
  
  // Trigger page transition animations on route change
  usePageTransition();

  useEffect(() => {
    // Wait for DOM to update after route change
    setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal:not(.is-visible)');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      reveals.forEach((reveal) => {
        observer.observe(reveal);
      });

      // Initialize scroll-triggered animations
      initAllScrollTriggers();

      // Initialize typography animations
      initAllTypographyAnimations();

      return () => observer.disconnect();
    }, 0);
  }, [location.pathname]);

  return (
    <>
      <Ambient />
      {/* Page Transition Line */}
      <div id="page-transition-line" className="page-transition-line" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/work" element={<Work />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
