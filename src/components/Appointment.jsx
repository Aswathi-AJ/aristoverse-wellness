import React from 'react';
import { FaWhatsapp, FaCalendarAlt, FaClock, FaVideo, FaCheckCircle, FaStar, FaRocket, FaShieldAlt } from 'react-icons/fa';

const Appointment = () => {
  const whatsappUrl = "https://wa.me/+919894595035?text=Hi%20Aristoverse%20Wellness,%20I'd%20like%20to%20book%20a%20consultation";

  const appointmentOptions = [
    {
      title: "Discovery Call",
      duration: "15 minutes",
      price: "FREE",
      description: "Brief introduction to understand your needs and see if we're a good fit",
      features: ["Needs assessment", "Program overview", "Q&A session"],
      popular: false,
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      title: "Comprehensive Consultation",
      duration: "60 minutes",
      price: "₹15,000",
      description: "Deep-dive session with full health assessment and initial protocol development",
      features: ["Full health review", "AI analysis discussion", "Personalized plan outline"],
      popular: true,
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    },
    {
      title: "Premium Wellness Package",
      duration: "90 minutes + Follow-ups",
      price: "₹25,000",
      description: "Complete wellness assessment with ongoing support and protocol optimization",
      features: ["Extended consultation", "30-day support", "Protocol adjustments"],
      popular: false,
      gradient: "from-[#FF00FF] to-[#FF1493]"
    }
  ];

  return (
    <section id="appointments" className="py-20 bg-gradient-to-br from-[#F2F2F2] via-white to-[#5B00FF]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-[#00CFFF]/15 to-[#5B00FF]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#5B00FF]/10 to-[#FF00FF]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 font-montserrat">
            Book Your Consultation
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed font-opensans bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            Begin your journey to optimal health with a personalized consultation tailored to your unique needs
          </p>
        </div>

        {/* Appointment Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {appointmentOptions.map((option, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 transition-all duration-500 transform hover:-translate-y-2 group relative ${
                option.popular 
                  ? 'border-[#00CFFF] shadow-2xl scale-105' 
                  : 'border-[#F2F2F2] hover:border-[#00CFFF] shadow-lg hover:shadow-2xl'
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-6 py-2 rounded-full font-bold text-sm font-montserrat flex items-center space-x-2 shadow-lg">
                    <FaStar className="w-4 h-4" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-montserrat">
                  {option.title}
                </h3>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center text-[#1A1A1A]/70">
                    <FaClock className="w-4 h-4 mr-2" />
                    <span className="font-medium font-opensans">{option.duration}</span>
                  </div>
                  <div className="flex items-center text-[#00CFFF] font-bold">
                    <FaVideo className="w-4 h-4 mr-2" />
                    <span className="font-montserrat">Online</span>
                  </div>
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${option.gradient} bg-clip-text text-transparent mb-2 font-montserrat`}>
                  {option.price}
                </div>
              </div>
              
              <p className="text-[#1A1A1A]/80 mb-6 text-center leading-relaxed font-opensans">
                {option.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-[#1A1A1A] font-opensans">
                    <FaCheckCircle className="w-4 h-4 text-[#00CFFF] mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full bg-gradient-to-r ${option.gradient} text-white text-center py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 font-montserrat transform hover:scale-105`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <FaCalendarAlt className="w-16 h-16 text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-6 font-montserrat">
              Ready to Transform Your Health?
            </h3>
            <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-2xl mx-auto font-opensans">
              Our wellness concierge team is available to answer your questions and help you choose the right consultation package for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#5B00FF] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-montserrat"
              >
                <FaWhatsapp className="mr-3 text-xl" />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:Support@AristoverseWellness.org"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#5B00FF] transition-all duration-300 transform hover:scale-105 font-montserrat"
              >
                <FaShieldAlt className="mr-3 text-xl" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;