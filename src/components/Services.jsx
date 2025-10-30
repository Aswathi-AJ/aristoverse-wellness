import React from 'react';
import { 
  FaBrain, 
  FaTint, 
  FaMoon, 
  FaHeart, 
  FaBalanceScale,
  FaSync,
  FaHeadSideVirus,
  FaUserCheck,
  FaRocket,
  FaShieldAlt,
  FaStar
} from 'react-icons/fa';

const Services = () => {
  const allServices = [
    {
      icon: <FaBrain className="text-2xl" />,
      title: "Mental Clarity Coaching",
      description: "Optimizing brain health for sharp focus, memory, and creativity through nootropic nutrients and neuroprotective antioxidants.",
      features: ["Brain fog elimination", "Memory enhancement", "Cognitive optimization"],
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      icon: <FaTint className="text-2xl" />,
      title: "Stress Modulation Therapy",
      description: "Cultivating balanced mood and adaptive stress response through evidence-based adaptogens and stress-reduction strategies.",
      features: ["Cortisol regulation", "Resilience building", "Emotional stability"],
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    },
    {
      icon: <FaMoon className="text-2xl" />,
      title: "Sleep Architecture Design",
      description: "Enhancing sleep quality and circadian rhythm alignment through personalized sleep interventions and supplementation.",
      features: ["Sleep quality enhancement", "Circadian alignment", "Recovery optimization"],
      gradient: "from-[#FF00FF] to-[#FF1493]"
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "Gut Coherence Counseling",
      description: "Restoring digestive harmony and metabolic vigor through microbiome analysis and personalized probiotic protocols.",
      features: ["Microbiome optimization", "Digestive harmony", "Metabolic support"],
      gradient: "from-[#00CFFF] to-[#5B00FF]"
    },
    {
      icon: <FaBalanceScale className="text-2xl" />,
      title: "Hormonal Rhythm Reset",
      description: "Regulating hormones and biorhythms for sustained vitality through natural modulators and balance protocols.",
      features: ["Hormonal balance", "Energy optimization", "Metabolic rhythm"],
      gradient: "from-[#5B00FF] to-[#FF00FF]"
    },
    {
      icon: <FaSync className="text-2xl" />,
      title: "Neuroadaptive Recovery Training",
      description: "Boosting nervous system capacity to recover and adapt using biofeedback and neuro-supportive supplements.",
      features: ["HRV optimization", "Burnout prevention", "Neural resilience"],
      gradient: "from-[#FF00FF] to-[#00CFFF]"
    },
    {
      icon: <FaHeadSideVirus className="text-2xl" />,
      title: "Cognitive Restoration Therapy",
      description: "Rehabilitating and enhancing cognitive function long-term through brain-restorative protocols and micronutrients.",
      features: ["Cognitive rehabilitation", "Brain fog recovery", "Mental agility"],
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      icon: <FaUserCheck className="text-2xl" />,
      title: "Emotional Regulation Counseling",
      description: "Mastering mood and emotional well-being through personalized techniques and targeted nutrient support.",
      features: ["Mood stability", "Anxiety reduction", "Emotional mastery"],
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    }
  ];

  const whatsappUrl = "https://wa.me/+919894595035?text=Hi%20Aristoverse%20Wellness,%20I'm%20interested%20in%20your%20services";

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#F2F2F2] via-white to-[#5B00FF]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#00CFFF]/20 to-[#5B00FF]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-[#5B00FF]/15 to-[#FF00FF]/15 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 font-montserrat">
            Precision Wellness Services
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-4xl mx-auto leading-relaxed font-opensans bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            Each service combines AI-driven insights from our HealthStack Engine with expert human guidance 
            to deliver measurable, personalized health optimization through multi-omics analysis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {allServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#F2F2F2] group"
            >
              <div className={`text-white bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 leading-tight font-montserrat">
                {service.title}
              </h3>
              <p className="text-[#1A1A1A]/80 text-sm mb-4 leading-relaxed font-opensans">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-[#1A1A1A]/70 font-opensans">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 flex-shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI Section */}
        <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl p-12 text-white mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <FaRocket className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-6 font-montserrat">Powered by Aristoverse AI</h3>
            <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-2xl mx-auto font-opensans">
              Our proprietary AI analyzes over 100 biomarkers to deliver hyper-personalized wellness protocols
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#5B00FF] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-montserrat"
            >
              <FaStar className="mr-3" />
              Start with Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;