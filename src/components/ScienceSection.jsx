import React from 'react';
import { FaDna, FaRobot, FaUserCog, FaSyncAlt, FaMicroscope, FaChartLine, FaShieldAlt, FaDatabase } from 'react-icons/fa';

const ScienceSection = () => {
  const features = [
    {
      icon: <FaDna className="text-3xl" />,
      title: "Multi-Omics Integration",
      description: "Comprehensive analysis integrating genomics, epigenomics, proteomics, and metabolomics for a complete biological picture",
      details: ["Genetic variant analysis", "Epigenetic markers", "Protein expression", "Metabolic pathways"],
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      icon: <FaRobot className="text-3xl" />, 
      title: "AI HealthStack Engine",
      description: "Proprietary algorithms analyzing over 100 biomarkers to identify root causes and optimal interventions",
      details: ["100+ biomarkers analyzed", "Pattern recognition", "Predictive modeling", "Continuous learning"],
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    },
    {
      icon: <FaUserCog className="text-3xl" />,
      title: "Precision Personalization", 
      description: "Every recommendation tailored to your unique biology, lifestyle, and goals - no generic protocols",
      details: ["Individualized dosing", "Lifestyle integration", "Goal alignment", "Progress tracking"],
      gradient: "from-[#FF00FF] to-[#FF1493]"
    },
    {
      icon: <FaSyncAlt className="text-3xl" />,
      title: "Adaptive Optimization",
      description: "Continuous monitoring and protocol adjustments based on your evolving biomarkers and feedback",
      details: ["Real-time adjustments", "Progress monitoring", "Outcome measurement", "Protocol refinement"],
      gradient: "from-[#00CFFF] to-[#5B00FF]"
    }
  ];

  const biomarkers = [
    "Genetic variants", "Gut microbiome", "Hormone levels", "Inflammation markers", 
    "Metabolic panels", "Nutrient levels", "Sleep metrics", "Stress biomarkers",
    "Cognitive function", "Cardiovascular health", "Mitochondrial function", "Oxidative stress",
    "Telomere length", "Epigenetic markers", "Neurotransmitters", "Immune markers"
  ];

  const scientificPrinciples = [
    {
      title: "Evidence-Based Protocols",
      description: "Every intervention backed by peer-reviewed research and clinical evidence",
      icon: <FaMicroscope className="text-2xl" />,
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      title: "Data-Driven Decisions", 
      description: "Quantitative biomarkers guide every recommendation, no guesswork",
      icon: <FaChartLine className="text-2xl" />,
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    },
    {
      title: "Continuous Validation",
      description: "Regular outcome measurement and protocol refinement based on results",
      icon: <FaSyncAlt className="text-2xl" />,
      gradient: "from-[#FF00FF] to-[#FF1493]"
    }
  ];

  return (
    <section id="science" className="py-20 bg-gradient-to-br from-white via-[#F2F2F2] to-[#00CFFF]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#00CFFF]/10 to-[#5B00FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-[#5B00FF]/10 to-[#FF00FF]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 font-montserrat">
            Science-Backed Precision Wellness
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed font-opensans bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            Grounded in rigorous science, powered by advanced AI, and delivered with human expertise
          </p>
        </div>

        {/* Scientific Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {scientificPrinciples.map((principle, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#F2F2F2]">
              <div className={`bg-gradient-to-r ${principle.gradient} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-lg`}>
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center font-montserrat">{principle.title}</h3>
              <p className="text-[#1A1A1A]/80 text-center font-opensans">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-[#F2F2F2] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className={`bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-montserrat">{feature.title}</h3>
              <p className="text-[#1A1A1A]/80 mb-6 leading-relaxed font-opensans">{feature.description}</p>
              <div className="space-y-2 mb-4">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center text-[#1A1A1A] font-opensans">
                    <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full mr-3`}></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Biomarkers Section */}
        <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl p-12 text-white mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative text-center mb-8">
            <FaDatabase className="text-4xl text-white mb-4 mx-auto" />
            <h3 className="text-4xl font-bold mb-4 font-montserrat">100+ Biomarkers Analyzed</h3>
            <p className="text-white/90 text-lg font-opensans">
              Our AI HealthStack Engine analyzes comprehensive biomarker data to deliver truly personalized recommendations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 relative">
            {biomarkers.map((biomarker, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-3 text-center backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 border border-white/20">
                <span className="text-sm font-medium font-opensans">{biomarker}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Privacy Assurance */}
        <div className="bg-white rounded-2xl p-8 border border-[#F2F2F2] shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <FaShieldAlt className="text-3xl text-[#00CFFF] mr-4" />
            <h3 className="text-2xl font-bold text-[#1A1A1A] font-montserrat">Ethical Data Use & Privacy</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#1A1A1A]/80 font-opensans">
            <div className="bg-gradient-to-r from-[#00CFFF]/5 to-[#5B00FF]/5 rounded-2xl p-6">
              <h4 className="font-bold text-[#1A1A1A] mb-4 font-montserrat">Your Data is Protected</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaShieldAlt className="text-[#00CFFF] mr-3" />
                  HIPAA-compliant encryption and storage
                </li>
                <li className="flex items-center">
                  <FaDatabase className="text-[#00CFFF] mr-3" />
                  Blockchain-based access audit trails
                </li>
                <li className="flex items-center">
                  <FaUserCog className="text-[#00CFFF] mr-3" />
                  Strict need-to-know access protocols
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-[#FF00FF]/5 to-[#5B00FF]/5 rounded-2xl p-6">
              <h4 className="font-bold text-[#1A1A1A] mb-4 font-montserrat">Transparent Usage</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaChartLine className="text-[#5B00FF] mr-3" />
                  Data used only for your wellness optimization
                </li>
                <li className="flex items-center">
                  <FaSyncAlt className="text-[#5B00FF] mr-3" />
                  Anonymous aggregation for research improvement
                </li>
                <li className="flex items-center">
                  <FaShieldAlt className="text-[#5B00FF] mr-3" />
                  No data sold to third parties
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;