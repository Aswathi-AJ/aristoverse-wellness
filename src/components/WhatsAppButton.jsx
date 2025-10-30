import React from 'react';
import { FaWhatsapp, FaComment } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/+919894595035?text=Hi%20Aristoverse%20Wellness,%20I'd%20like%20to%20book%20a%20consultation";

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative group">
        {/* Floating Animation */}
        <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300 animate-pulse"></div>
        
        {/* Main Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center w-16 h-16 hover:scale-110 hover:shadow-3xl group"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
          
          {/* Hover Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
            <div className="flex items-center space-x-2">
              <FaComment className="w-3 h-3" />
              <span>Chat with us!</span>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        </a>
        
        {/* Pulsing Ring Effect */}
        <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;