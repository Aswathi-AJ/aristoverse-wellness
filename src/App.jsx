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
  const [showClientPortal, setShowClientPortal] = useState(false);

  if (showClientPortal) {
    return <ClientPortal onBackToSite={() => setShowClientPortal(false)} />;
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
      <UploadReports onNavigateToClientPortal={() => setShowClientPortal(true)} />
      <Appointment />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;