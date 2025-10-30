import React from 'react';
import { FaShieldAlt, FaUpload, FaDownload, FaLock, FaUsers, FaArrowRight } from 'react-icons/fa';

const UploadReports = () => {
  const fileTypes = [
    "PDF reports", "Word documents", "Excel files", "JPEG/PNG images", 
    ".FIT fitness files", ".VCF genetic data", "23andMe raw data"
  ];

  const securityFeatures = [
    {
      icon: <FaLock className="text-2xl" />,
      title: "HIPAA-Grade Encryption",
      description: "Bank-level security with HTTPS encryption during upload and at rest"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Blockchain Audit Trails",
      description: "Every file access is immutably logged for complete transparency"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Strict Access Control",
      description: "Only your assigned wellness team can access your files"
    }
  ];

  return (
    <section id="upload-reports" className="py-20 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 font-montserrat">
            Secure Health Data Portal
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed font-opensans">
            Exchange health documents securely with our HIPAA-compliant, encrypted portal
          </p>
        </div>

        {/* Why Upload Portal */}
        <div className="bg-white rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-montserrat">Why Use Our Secure Portal?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-4 font-montserrat">For Clients:</h4>
              <ul className="space-y-3 text-[#1A1A1A]/80 font-opensans">
                <li className="flex items-start">
                  <FaUpload className="text-[#00CFFF] mr-3 mt-1 flex-shrink-0" />
                  Upload lab results, DNA data, medical reports
                </li>
                <li className="flex items-start">
                  <FaDownload className="text-[#00CFFF] mr-3 mt-1 flex-shrink-0" />
                  Receive personalized wellness reports and plans
                </li>
                <li className="flex items-start">
                  <FaShieldAlt className="text-[#00CFFF] mr-3 mt-1 flex-shrink-0" />
                  All data encrypted and stored securely
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-4 font-montserrat">Supported Files:</h4>
              <div className="flex flex-wrap gap-2">
                {fileTypes.map((type, index) => (
                  <span key={index} className="bg-[#F2F2F2] px-3 py-1 rounded-full text-sm text-[#1A1A1A] font-opensans">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center">
              <div className="text-[#00CFFF] mb-4">{feature.icon}</div>
              <h4 className="font-bold text-[#1A1A1A] mb-3 font-montserrat">{feature.title}</h4>
              <p className="text-[#1A1A1A]/80 text-sm font-opensans">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center font-montserrat">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2 font-montserrat">1</div>
              <p className="text-sm font-opensans">Go to Client Portal</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2 font-montserrat">2</div>
              <p className="text-sm font-opensans">Upload Your Files</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2 font-montserrat">3</div>
              <p className="text-sm font-opensans">Team Reviews & Analyzes</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2 font-montserrat">4</div>
              <p className="text-sm font-opensans">Receive Personalized Response</p>
            </div>
          </div>
        </div>

        {/* Data Privacy Commitment */}
        <div className="bg-white rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-montserrat">Our Data Privacy Commitment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1A1A1A]/80 font-opensans">
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-3 font-montserrat">We Do:</h4>
              <ul className="space-y-2">
                <li>• Use your data only for your personalized wellness plan</li>
                <li>• Maintain strict confidentiality like doctor-patient relationship</li>
                <li>• Comply with data deletion requests</li>
                <li>• Get explicit consent for any new data use</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-3 font-montserrat">We Don't:</h4>
              <ul className="space-y-2">
                <li>• Sell your data to anyone</li>
                <li>• Share your information without permission</li>
                <li>• Use data for marketing without consent</li>
                <li>• Keep unnecessary information</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Ready to Upload Your Documents?</h3>
            <p className="text-white/90 mb-6 text-lg font-opensans">
              Access our secure client portal to upload your health documents and get started with your personalized wellness journey.
            </p>
            <button
              onClick={() => window.location.href = '/client-portal'}
              className="inline-flex items-center bg-white text-[#5B00FF] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-200 font-montserrat"
            >
              Go to Client Portal
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadReports;