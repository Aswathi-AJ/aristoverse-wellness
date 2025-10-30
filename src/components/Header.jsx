import React from 'react';
import { FaWhatsapp, FaBars, FaUser, FaFlask, FaCog, FaComments, FaUpload, FaQuestionCircle } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', id: 'home', icon: <FaUser className="w-4 h-4" /> },
    { name: 'Science', id: 'science', icon: <FaFlask className="w-4 h-4" /> },
    { name: 'Services', id: 'services', icon: <FaCog className="w-4 h-4" /> },
    { name: 'Modalities', id: 'modalities', icon: <FaUser className="w-4 h-4" /> },
    { name: 'Upload', id: 'upload-reports', icon: <FaUpload className="w-4 h-4" /> },
    { name: 'Appointments', id: 'appointments', icon: <FaUser className="w-4 h-4" /> },
    { name: 'FAQ', id: 'faq', icon: <FaQuestionCircle className="w-4 h-4" /> }
  ];

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-[#F2F2F2] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Image and Text */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-2 sm:space-x-4 transform hover:scale-105 transition-transform duration-300">
              {/* Larger Logo Image */}
              <img 
                src="logo.png" 
                alt="Aristoverse Wellness" 
                className="h-12 sm:h-16 w-auto object-contain" 
              />
              {/* Text Logo */}
              <div className="text-left">
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] bg-clip-text text-transparent tracking-tight leading-none font-montserrat">
                  ARISTOVERSE
                </h1>
                <p className="text-xs sm:text-sm text-[#00CFFF] font-medium tracking-wide uppercase font-opensans bg-gradient-to-r from-[#00CFFF]/20 to-[#5B00FF]/20 px-2 sm:px-3 py-1 rounded-full mt-1">
                  WELLNESS
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm tracking-wide font-opensans text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#00CFFF]/10 hover:to-[#5B00FF]/10 hover:text-[#5B00FF] hover:shadow-md"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="https://wa.me/+919894595035"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-xs sm:text-sm font-montserrat transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Book Consultation</span>
              <span className="sm:hidden">Book</span>
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#1A1A1A] p-2 hover:bg-[#F2F2F2] rounded-xl transition-colors"
            >
              <FaBars className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#F2F2F2] py-4 bg-white/95 backdrop-blur-md absolute left-0 right-0 top-full shadow-lg">
            <nav className="flex flex-col space-y-2 px-4 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center space-x-3 text-[#1A1A1A] hover:text-[#5B00FF] font-medium py-3 px-4 font-opensans text-left cursor-pointer hover:bg-gradient-to-r hover:from-[#00CFFF]/5 hover:to-[#5B00FF]/5 rounded-xl transition-all duration-300"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;