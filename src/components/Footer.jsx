import React from 'react';
import { FaWhatsapp, FaEnvelope, FaGlobe, FaArrowRight, FaRocket } from 'react-icons/fa';

const Footer = () => {
  const whatsappUrl = "https://wa.me/+919894595035?text=Hi%20Aristoverse%20Wellness,%20I%20have%20a%20question";

  return (
    <footer className="bg-gradient-to-br from-[#5B00FF] via-[#8A2BE2] to-[#FF00FF] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              
              <div>
                <h3 className="text-2xl font-bold text-white font-montserrat">
                  ARISTOVERSE
                  <span className="text-white/80 block text-sm font-medium font-opensans">
                    WELLNESS
                  </span>
                </h3>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed font-opensans">
              Precision wellness powered by AI and scientific excellence.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#5B00FF] px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-montserrat"
            >
              <FaRocket className="mr-2" />
              Start Your Journey
              <FaArrowRight className="ml-2" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white font-montserrat">
              Contact Us
            </h4>
            
            <div className="space-y-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mr-3 group-hover:bg-white/30">
                  <FaWhatsapp className="w-4 h-4" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">+91 98945 95035</span>
              </a>
              
              <a 
                href="mailto:Support@AristoverseWellness.org"
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mr-3 group-hover:bg-white/30">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Support@AristoverseWellness.org</span>
              </a>
              
              <a 
                href="https://aristoversewellness.com"
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mr-3 group-hover:bg-white/30">
                  <FaGlobe className="w-4 h-4" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">aristoversewellness.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <div className="text-white/60 text-sm font-opensans">
            © 2024 Aristoverse Wellness. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;