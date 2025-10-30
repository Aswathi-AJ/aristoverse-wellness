import React from 'react';
import { FaRobot, FaDna, FaFlask, FaCheckCircle, FaArrowRight, FaStar, FaShieldAlt, FaRocket } from 'react-icons/fa';

const Hero = () => {
  const whatsappUrl = "https://wa.me/+919894595035?text=Hi%20Aristoverse%20Wellness,%20I'd%20like%20to%20book%20a%20free%2015-minute%20consultation";

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll' // Changed from 'fixed' to 'scroll'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Existing gradient overlays with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00CFFF]/15 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-[#00CFFF]/20 to-[#5B00FF]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-[#5B00FF]/15 to-[#FF00FF]/15 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 z-10">
        <div className="text-center">
          {/* Tagline - Enhanced for better contrast */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-[#00CFFF]/30 mb-8 shadow-lg">
            <FaStar className="text-[#00CFFF] mr-2" />
            <span className="text-[#00CFFF] font-semibold text-sm tracking-wider font-montserrat">PRECISION WELLNESS FOR THE HUMAN FUTURE</span>
          </div>

          {/* Main Headline */}
          <div className="mb-12">
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight font-montserrat drop-shadow-lg">
              Elevate Your
              <span className="block bg-gradient-to-r from-[#00CFFF] via-[#5B00FF] to-[#FF00FF] bg-clip-text text-transparent font-montserrat mt-4 animate-pulse drop-shadow-none">
                Healthspan
              </span>
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-opensans bg-black/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10">
              AI-driven precision wellness integrating cutting-edge science with personalized protocols for optimal human performance and longevity.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto border border-[#00CFFF]/30 shadow-xl">
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4 font-opensans">
              Welcome to <span className="font-semibold bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] bg-clip-text text-transparent">Aristoverse Wellness</span> - a premium, AI-enabled wellness platform integrating personalized counselling, life-extension science, and precision nutraceuticals.
            </p>
            <p className="text-[#1A1A1A] font-semibold bg-gradient-to-r from-[#00CFFF]/20 to-[#5B00FF]/20 px-4 py-2 rounded-xl font-opensans">
              Precision | Empathy | Data-integrity | Transformation
            </p>
          </div>

          {/* Scientific Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {[
              {
                icon: <FaRobot className="text-4xl" />,
                title: "AI Precision",
                description: "Machine learning algorithms for hyper-personalized recommendations",
                gradient: "from-[#00CFFF] to-[#00A3FF]"
              },
              {
                icon: <FaDna className="text-4xl" />,
                title: "Genomic Insight", 
                description: "Multi-omics integration including genomics and metabolomics",
                gradient: "from-[#5B00FF] to-[#8A2BE2]"
              },
              {
                icon: <FaFlask className="text-4xl" />,
                title: "Scientific Rigor", 
                description: "Evidence-based protocols grounded in peer-reviewed research",
                gradient: "from-[#FF00FF] to-[#FF1493]"
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className={`text-white bg-gradient-to-r ${pillar.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-[#1A1A1A] mb-4 text-xl font-montserrat">{pillar.title}</h4>
                <p className="text-[#1A1A1A]/70 leading-relaxed font-opensans text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-montserrat shadow-lg z-10 relative"
            >
              <FaRocket className="mr-3 text-xl" />
              Begin Your Transformation
            </a>
            <a
              href="#science"
              className="inline-flex items-center border-2 border-white/50 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:border-[#00CFFF] hover:text-[#00CFFF] transition-all duration-300 transform hover:scale-105 font-montserrat backdrop-blur-sm bg-black/40 z-10 relative"
            >
              <FaShieldAlt className="mr-3 text-xl" />
              Explore The Science
            </a>
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { text: "100+ Biomarkers Analyzed", icon: FaDna },
              { text: "AI-Driven Personalization", icon: FaRobot },
              { text: "98% Client Satisfaction", icon: FaStar },
              { text: "24/7 Expert Support", icon: FaShieldAlt }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
                <item.icon className="w-5 h-5 text-[#00CFFF]" />
                <span className="font-medium text-[#1A1A1A] font-opensans text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;