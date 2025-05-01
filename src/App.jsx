import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from "react-router";
import * as emailjs from '@emailjs/browser';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Faq = lazy(() => import('./pages/Faq'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Error = lazy(() => import('./pages/Error'));

function App() {
  const [emailJsReady, setEmailJsReady] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const userid = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;

  // Initialize EmailJS
  useEffect(() => {
    const initializeEmailJS = async () => {
      try {
        if (userid && window.emailjs) {
          await emailjs.init(userid);
          console.log('EmailJS initialized successfully');
          setEmailJsReady(true);
        }
      } catch (err) {
        console.error('EmailJS initialization failed:', err);
        setEmailJsReady(false);
      } finally {
        setInitialized(true);
      }
    };
  
    // Check if emailjs is available on window first
    if (window.emailjs) {
      initializeEmailJS();
    } else {
      // Fallback: try again after short delay
      const timer = setTimeout(() => {
        if (window.emailjs) {
          initializeEmailJS();
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full z-70">
      <div className="background-pattern relative min-h-screen z-60">
        <ErrorBoundary>
          <Navbar />
          <ScrollToTop />
          
          <Suspense fallback={<LoadingSpinner fullScreen />}>
            <Routes>
              <Route index element={<Home emailJsReady={emailJsReady} />} />
              <Route path="about" element={<About />} />
              <Route path="faq" element={<Faq />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacypolicy" element={<PrivacyPolicy />} />
              <Route path="termsofservice" element={<TermsOfService />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
          
          <Footer />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;