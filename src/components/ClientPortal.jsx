import React, { useState } from 'react';
import { FaUpload, FaFile, FaDownload, FaTrash, FaCheck, FaUser, FaHome, FaClock, FaShieldAlt, FaArrowLeft } from 'react-icons/fa';

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Sample client data for demo
  const clientData = {
    name: "Demo Client",
    email: "client@aristoversewellness.com",
    memberSince: "2024-01-15",
    lastLogin: new Date().toISOString().split('T')[0],
    plan: "Premium Wellness",
    nextAppointment: "Contact for scheduling"
  };

  // Sample reports data
  const clientReports = [
    { 
      id: 1, 
      name: "Welcome to Aristoverse Wellness", 
      date: "2024-01-20", 
      type: "PDF", 
      size: "1.2 MB",
      description: "Getting started guide and onboarding information"
    },
    { 
      id: 2, 
      name: "File Upload Instructions", 
      date: "2024-01-20", 
      type: "PDF", 
      size: "0.8 MB",
      description: "How to upload your health documents securely"
    }
  ];

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      const newFiles = files.map(file => ({
        id: Date.now() + Math.random(),
        name: file.name,
        type: file.type.split('/')[1]?.toUpperCase() || 'FILE',
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        date: new Date().toLocaleDateString(),
        timestamp: new Date().toISOString(),
        status: 'uploaded'
      }));
      
      setUploadedFiles(prev => [...newFiles, ...prev]);
      setIsUploading(false);
      event.target.value = '';
      
      // Show success message
      alert(`Successfully uploaded ${files.length} file(s)! Our team will review them within 24 hours.`);
    }, 1500);
  };

  const handleDeleteFile = (fileId) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    }
  };

  const handleDownloadReport = (reportId) => {
    const report = clientReports.find(r => r.id === reportId);
    alert(`Downloading: ${report.name}\n\nIn a real implementation, this would download the actual PDF file.`);
  };

  const FileUploadArea = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#00CFFF]/10 to-[#5B00FF]/10 border-2 border-dashed border-[#00CFFF] rounded-2xl p-8 text-center">
        <FaUpload className="text-[#00CFFF] text-3xl mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 font-montserrat">Upload Your Health Documents</h3>
        <p className="text-[#1A1A1A]/60 mb-6 font-opensans">
          Securely upload lab results, medical reports, DNA data, or any health-related documents. Our team will analyze them and contact you.
        </p>
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.fit,.vcf,.csv,.xlsx"
        />
        <label
          htmlFor="file-upload"
          className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center space-x-2 font-montserrat"
        >
          <FaUpload className="w-4 h-4" />
          <span>Choose Files to Upload</span>
        </label>
        <p className="text-sm text-[#1A1A1A]/40 mt-4 font-opensans">
          Supported: PDF, Word, Excel, Images, FIT, VCF, Text files (Max 50MB per file)
        </p>
      </div>

      {isUploading && (
        <div className="bg-[#F2F2F2] rounded-2xl p-6 text-center">
          <div className="w-8 h-8 border-2 border-[#00CFFF] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-[#1A1A1A] font-opensans">Uploading files... Please wait</p>
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="bg-white rounded-2xl p-6 border border-[#F2F2F2]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-[#1A1A1A] font-montserrat">Your Uploaded Files</h4>
            <span className="text-sm text-[#1A1A1A]/60 font-opensans">
              {uploadedFiles.length} file(s) uploaded
            </span>
          </div>
          <div className="space-y-3">
            {uploadedFiles.map(file => (
              <div key={file.id} className="flex items-center justify-between p-4 bg-[#F2F2F2] rounded-xl">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-lg flex items-center justify-center">
                    <FaFile className="text-white text-sm" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#1A1A1A] font-opensans">{file.name}</p>
                    <p className="text-sm text-[#1A1A1A]/60 font-opensans">
                      {file.type} • {file.size} • {file.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-green-600 font-opensans flex items-center">
                    <FaCheck className="mr-1" /> Uploaded
                  </span>
                  <button
                    onClick={() => handleDeleteFile(file.id)}
                    className="text-red-500 hover:text-red-700 p-2 transition-colors"
                    title="Delete file"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Steps */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <FaClock className="text-blue-500 text-xl mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-blue-900 mb-2 font-montserrat">What Happens Next?</h4>
            <ul className="text-blue-800 text-sm font-opensans space-y-1">
              <li>• Our team will review your documents within 24 hours</li>
              <li>• We'll contact you to schedule your consultation</li>
              <li>• Your data is protected with HIPAA-compliant security</li>
              <li>• You can upload additional files at any time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const ReportsSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#1A1A1A] font-montserrat">Available Resources</h3>
        <span className="text-sm text-[#1A1A1A]/60 font-opensans">
          {clientReports.length} resource(s) available
        </span>
      </div>
      
      <div className="grid gap-4">
        {clientReports.map(report => (
          <div key={report.id} className="bg-white border border-[#F2F2F2] rounded-2xl p-6 hover:border-[#00CFFF] transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-xl flex items-center justify-center">
                  <FaFile className="text-white text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#1A1A1A] font-montserrat">{report.name}</h4>
                  <p className="text-sm text-[#1A1A1A]/60 font-opensans mb-1">
                    {report.description}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/40 font-opensans">
                    {report.date} • {report.size}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => handleDownloadReport(report.id)}
                className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-200 font-montserrat flex items-center space-x-2"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-[#F2F2F2]">
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 font-montserrat">Get in Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-2 font-montserrat">WhatsApp Support</h4>
              <p className="text-[#1A1A1A] font-opensans mb-3">Quick answers and scheduling</p>
              <a 
                href="https://wa.me/+919894595035"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-colors inline-flex items-center space-x-2 font-montserrat"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-2 font-montserrat">Email Support</h4>
              <p className="text-[#1A1A1A] font-opensans mb-3">Detailed questions and documents</p>
              <a 
                href="mailto:Support@AristoverseWellness.org"
                className="bg-[#00CFFF] hover:bg-[#00BFFF] text-white px-4 py-2 rounded-xl transition-colors inline-flex items-center space-x-2 font-montserrat"
              >
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F2F2F2] pt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 mb-8 border border-[#F2F2F2] shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl flex items-center justify-center">
                <FaUser className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#1A1A1A] font-montserrat">Aristoverse Wellness Client Portal</h1>
                <p className="text-[#1A1A1A]/60 font-opensans">Upload your health documents and access resources</p>
              </div>
            </div>
            <a 
              href="/"
              className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-200 font-montserrat flex items-center space-x-2"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Back to Main Site</span>
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl p-2 mb-8 border border-[#F2F2F2] shadow-sm">
          <div className="flex space-x-2">
            {[
              { id: 'upload', label: 'Upload Files', icon: FaUpload },
              { id: 'reports', label: 'Resources', icon: FaFile },
              { id: 'contact', label: 'Contact', icon: FaUser }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 font-montserrat ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white shadow-lg'
                    : 'text-[#1A1A1A] hover:bg-[#F2F2F2]'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl p-8 border border-[#F2F2F2] shadow-sm">
          {activeTab === 'upload' && <FileUploadArea />}
          {activeTab === 'reports' && <ReportsSection />}
          {activeTab === 'contact' && <ContactSection />}
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;