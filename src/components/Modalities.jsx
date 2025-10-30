import React from 'react';
import { 
  FaBolt, 
  FaShieldAlt, 
  FaBed, 
  FaMicroscope, 
  FaSync, 
  FaBrain, 
  FaHeadSideVirus, 
  FaHeart,
  FaRocket,
  FaChartLine
} from 'react-icons/fa';

const Modalities = () => {
  const coreModalities = [
    {
      title: "Mental Clarity Coaching",
      description: "Cognitive enhancement and focus optimization",
      icon: <FaBolt className="text-2xl" />,
      details: "Personalized nootropic protocols for brain performance",
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      title: "Stress Modulation Therapy",
      description: "Adaptogenic resilience and cortisol balance",
      icon: <FaShieldAlt className="text-2xl" />,
      details: "Evidence-based stress management and hormone regulation",
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    },
    {
      title: "Sleep Architecture Design",
      description: "Circadian realignment and deep recovery",
      icon: <FaBed className="text-2xl" />,
      details: "Precision sleep optimization for optimal restoration",
      gradient: "from-[#FF00FF] to-[#FF1493]"
    },
    {
      title: "Gut Coherence Counseling",
      description: "Microbiome balance and metabolic stability",
      icon: <FaMicroscope className="text-2xl" />,
      details: "Gut-brain axis optimization and digestive harmony",
      gradient: "from-[#00CFFF] to-[#5B00FF]"
    },
    {
      title: "Hormonal Rhythm Reset",
      description: "Endocrine and mood optimization",
      icon: <FaSync className="text-2xl" />,
      details: "Hormonal balance for energy and metabolic rhythm",
      gradient: "from-[#5B00FF] to-[#FF00FF]"
    },
    {
      title: "Neuroadaptive Recovery",
      description: "Nervous system renewal and burnout prevention",
      icon: <FaBrain className="text-2xl" />,
      details: "HRV optimization and anti-burnout protocols",
      gradient: "from-[#FF00FF] to-[#00CFFF]"
    },
    {
      title: "Cognitive Restoration",
      description: "Brain fatigue and post-illness recovery",
      icon: <FaHeadSideVirus className="text-2xl" />,
      details: "Rehabilitation of cognitive decline and mental fatigue",
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      title: "Emotional Regulation",
      description: "Anxiety modulation and emotional self-mastery",
      icon: <FaHeart className="text-2xl" />,
      details: "Mood stability and emotional resilience building",
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    }
  ];

  const whatsappUrl = "https://wa.me/+919894595035?text=Hi%20Aristoverse%20Wellness,%20I'd%20like%20to%20learn%20more%20about%20your%20modalities";

  return (
    <section id="modalities" className="py-20 bg-gradient-to-br from-white via-[#F2F2F2] to-[#00CFFF]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-[#00CFFF]/15 to-[#5B00FF]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#5B00FF]/10 to-[#FF00FF]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 font-montserrat">
            Core Consultation Modalities
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed font-opensans bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            Specialized counselling approaches powered by AI and backed by scientific rigor
          </p>
        </div>

        {/* Core Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreModalities.map((modality, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#F2F2F2] group"
            >
              <div className={`text-white bg-gradient-to-r ${modality.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {modality.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 leading-tight font-montserrat">
                {modality.title}
              </h3>
              <p className="text-[#1A1A1A] font-medium mb-2 text-sm font-opensans bg-gradient-to-r from-transparent to-[#00CFFF]/5 px-2 py-1 rounded-lg">
                {modality.description}
              </p>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed font-opensans">
                {modality.details}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <FaRocket className="text-4xl text-white" />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-6 font-montserrat">
                Precision Wellness for the Human Future
              </h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-2xl mx-auto font-opensans">
                Data-driven, measurable, personal. Join the Aristoverse Wellness movement 
                and experience the future of human optimization.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#5B00FF] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-montserrat"
              >
                <FaChartLine className="mr-3" />
                Book Your Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modalities;