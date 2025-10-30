import React, { useState } from 'react';
import { FaQuestionCircle, FaArrowRight, FaPlus, FaMinus, FaRocket, FaShieldAlt } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Aristoverse Wellness different from regular wellness services?",
      answer: "Aristoverse combines AI-driven precision with human expertise. We analyze 100+ biomarkers using multi-omics integration to create hyper-personalized protocols, unlike generic wellness approaches.",
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      question: "How is AI used in my wellness plan?",
      answer: "Our AI HealthStack Engine works behind the scenes analyzing your data, identifying patterns, and suggesting evidence-based interventions. All recommendations are reviewed by human experts before implementation.",
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    },
    {
      question: "Are the supplements safe and scientifically validated?",
      answer: "Yes. We use only well-researched nutraceuticals with strong safety profiles. Every supplement is triple-vetted by our AI and human experts, with personalized dosing based on your unique needs.",
      gradient: "from-[#FF00FF] to-[#FF1493]"
    },
    {
      question: "Do I need to get lab tests done?",
      answer: "While not mandatory, objective data enhances personalization. We can work with existing data or recommend specific tests that would meaningfully guide your protocol. You have full control over testing decisions.",
      gradient: "from-[#00CFFF] to-[#5B00FF]"
    },
    {
      question: "How soon will I see results?",
      answer: "Most clients notice improvements in 2-4 weeks (better sleep, energy, digestion). Significant changes typically occur by 3 months, with deeper transformations in 6+ months through continuous optimization.",
      gradient: "from-[#5B00FF] to-[#FF00FF]"
    },
    {
      question: "What is the cost structure?",
      answer: "Initial consultation: ₹15,000-25,000. Monthly program: ₹5,000-10,000. Supplements: ₹3,000-8,000/month. We offer transparent pricing with no surprise costs and can work within your budget.",
      gradient: "from-[#FF00FF] to-[#00CFFF]"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = "https://wa.me/+919894595035?text=Hi%20Aristoverse%20Wellness,%20I%20have%20a%20question";

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white via-[#F2F2F2] to-[#00CFFF]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#00CFFF]/15 to-[#5B00FF]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-[#5B00FF]/10 to-[#FF00FF]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 font-montserrat">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-2xl mx-auto leading-relaxed font-opensans bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            Everything you need to know about the Aristoverse Wellness experience
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-[#F2F2F2] hover:border-[#00CFFF] transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${faq.gradient} w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    <FaQuestionCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] font-montserrat group-hover:text-[#00CFFF] transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div className={`bg-gradient-to-r ${faq.gradient} w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <FaMinus className="w-3 h-3" /> : <FaPlus className="w-3 h-3" />}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-[#F2F2F2] pt-6">
                    <p className="text-[#1A1A1A]/80 leading-relaxed font-opensans text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 border border-[#F2F2F2] shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl p-4">
                <FaRocket className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-montserrat">Still have questions?</h3>
            <p className="text-[#1A1A1A]/80 mb-6 font-opensans">
              Our wellness concierge team is here to help you understand how Aristoverse Wellness can transform your health journey.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-montserrat"
            >
              <FaShieldAlt className="mr-3" />
              Chat with Us on WhatsApp
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;