import React from 'react';
import { 
  FaClipboardList, 
  FaRobot, 
  FaComments, 
  FaChartLine, 
  FaSyncAlt,
  FaFileMedical,
  FaDatabase,
  FaUserMd,
  FaHeadset,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';

const ProcessTimeline = () => {
  const steps = [
    {
      number: "01",
      title: "Comprehensive Intake & Data Collection",
      description: "Complete detailed health questionnaire and share any existing health data",
      icon: <FaClipboardList className="text-2xl" />,
      details: ["Health & Lifestyle Questionnaire", "Biometric Data Collection", "Privacy Consent"],
      detailIcons: [FaFileMedical, FaDatabase, FaUserMd],
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      number: "02", 
      title: "AI HealthStack Analysis",
      description: "Our proprietary AI analyzes your data against 100+ biomarkers",
      icon: <FaRobot className="text-2xl" />,
      details: ["Multi-omics data analysis", "Pattern recognition", "Root cause identification"],
      detailIcons: [FaDatabase, FaChartLine, FaUserMd],
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    },
    {
      number: "03",
      title: "Live Expert Counselling Session", 
      description: "60-minute deep-dive session with AI-driven insights",
      icon: <FaComments className="text-2xl" />,
      details: ["Personal connection", "Collaborative goal-setting", "Real-time AI suggestions"],
      detailIcons: [FaUserMd, FaChartLine, FaRobot],
      gradient: "from-[#FF00FF] to-[#FF1493]"
    },
    {
      number: "04",
      title: "Personalized Wellness Protocol",
      description: "Receive comprehensive wellness report and supplement plan",
      icon: <FaChartLine className="text-2xl" />,
      details: ["Supplement protocol", "Lifestyle recommendations", "Trackable goals"],
      detailIcons: [FaFileMedical, FaClipboardList, FaUserMd],
      gradient: "from-[#00CFFF] to-[#5B00FF]"
    },
    {
      number: "05",
      title: "Ongoing Support & Optimization", 
      description: "Continuous monitoring and protocol adjustments",
      icon: <FaSyncAlt className="text-2xl" />,
      details: ["Follow-up sessions", "Protocol adjustments", "WhatsApp support"],
      detailIcons: [FaHeadset, FaSyncAlt, FaComments],
      gradient: "from-[#5B00FF] to-[#FF00FF]"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-[#F2F2F2] via-white to-[#5B00FF]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#00CFFF]/15 to-[#5B00FF]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-[#5B00FF]/10 to-[#FF00FF]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 font-montserrat">
            Your Personalized Wellness Journey
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed font-opensans bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            A structured, scientific approach to personalized health optimization from initial assessment to ongoing excellence
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting Line with Gradient */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#00CFFF] via-[#5B00FF] to-[#FF00FF] hidden lg:block shadow-lg"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group flex flex-col">
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="w-10 h-10 bg-white border-2 border-[#00CFFF] rounded-full flex items-center justify-center text-[#00CFFF] font-bold text-sm shadow-lg group-hover:bg-[#00CFFF] group-hover:text-white transition-all duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 border border-[#F2F2F2] group-hover:border-[#00CFFF] group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col min-h-[320px] shadow-lg">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 leading-tight line-clamp-2 font-montserrat">
                    {step.title}
                  </h3>
                  <p className="text-[#1A1A1A]/80 text-sm mb-4 leading-relaxed flex-grow font-opensans">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => {
                      const IconComponent = step.detailIcons[idx];
                      return (
                        <li key={idx} className="flex items-center text-xs text-[#1A1A1A]/70 font-opensans group-hover:text-[#1A1A1A] transition-colors duration-300">
                          <IconComponent className="w-3 h-3 text-[#00CFFF] mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{detail}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border border-[#F2F2F2] shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl p-4">
                <FaRocket className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-montserrat">
              Ready to Start Your Journey?
            </h3>
            <p className="text-[#1A1A1A]/80 mb-6 max-w-2xl mx-auto font-opensans">
              Begin with a complimentary discovery session and experience the Aristoverse Wellness difference in personalized wellness optimization.
            </p>
            <a
              href="https://wa.me/+919894595035?text=Hi%20Aristoverse%20Wellness,%20I'd%20like%20to%20start%20my%20wellness%20journey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-montserrat"
            >
              <FaCheckCircle className="mr-3" />
              Begin Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;