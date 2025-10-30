import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScienceSection from './components/ScienceSection';
import Services from './components/Services';
import Modalities from './components/Modalities';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import UploadReports from './components/UploadReports';
import Appointment from './components/Appointment';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ClientPortal from './components/ClientPortal';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('main');

  // Check URL on component mount
  React.useEffect(() => {
    if (window.location.pathname === '/client-portal' || window.location.hash === '#client-portal') {
      setCurrentView('client-portal');
    }
  }, []);

  // Handle navigation to client portal
  const handleNavigateToClientPortal = () => {
    setCurrentView('client-portal');
    window.history.pushState({}, '', '/client-portal');
  };

  // Handle navigation back to main site
  const handleBackToMainSite = () => {
    setCurrentView('main');
    window.history.pushState({}, '', '/');
  };

  if (currentView === 'client-portal') {
    return <ClientPortal onBackToSite={handleBackToMainSite} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ScienceSection />
      <Services />
      <Modalities />
      <ProcessTimeline />
      <Testimonials />
      <UploadReports onNavigateToClientPortal={handleNavigateToClientPortal} />
      <Appointment />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;