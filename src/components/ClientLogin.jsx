import React, { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';

const ClientLogin = ({ onLogin }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);
    
    // Basic validation
    if (!loginData.email || !loginData.password) {
      setLoginError('Please enter both email and password');
      setIsLoading(false);
      return;
    }

    // Simulate login process
    setTimeout(() => {
      // For demo purposes, accept any email/password
      // In real implementation, you would validate against your backend
      if (loginData.email && loginData.password) {
        setIsLoggedIn(true);
        setIsLoading(false);
        setIsLoginOpen(false);
        onLogin(); // Call the parent callback to switch to portal view
      } else {
        setLoginError('Invalid email or password');
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
    setLoginError('');
  };

  const handleForgotPassword = () => {
    // In real implementation, this would trigger a password reset flow
    alert('Password reset instructions will be sent to your email. Please contact support if you need assistance.');
  };

  if (isLoggedIn) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <div className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-4 py-2 rounded-xl shadow-lg flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <FaUser className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium font-opensans">Client Portal</span>
          <button
            onClick={handleLogout}
            className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition-colors font-opensans"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Login Trigger Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2 font-montserrat"
        >
          <FaUser className="w-4 h-4" />
          <span>Client Portal</span>
        </button>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => {
                setIsLoginOpen(false);
                setLoginError('');
              }}
              className="absolute top-4 right-4 text-[#1A1A1A]/60 hover:text-[#1A1A1A] text-xl"
            >
              ✕
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaUser className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2 font-montserrat">
                Client Portal Login
              </h3>
              <p className="text-[#1A1A1A]/60 font-opensans">
                Access your personalized wellness dashboard
              </p>
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 font-opensans">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-opensans">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => {
                      setLoginData({ ...loginData, email: e.target.value });
                      setLoginError('');
                    }}
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-xl focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF]/20 transition-all duration-200 font-opensans"
                    placeholder="your@email.com"
                    required
                  />
                  <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1A1A1A]/40" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-opensans">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) => {
                      setLoginData({ ...loginData, password: e.target.value });
                      setLoginError('');
                    }}
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-xl focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF]/20 transition-all duration-200 font-opensans"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="text-right mt-2">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm text-[#00CFFF] hover:text-[#5B00FF] font-opensans"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 font-montserrat"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Access Portal</span>
                    <FaArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#1A1A1A]/60 font-opensans">
                Don't have an account?{' '}
                <button 
                  onClick={() => {
                    setIsLoginOpen(false);
                    // In real implementation, this would scroll to contact section or open contact modal
                    const contactSection = document.getElementById('appointments');
                    if (contactSection) {
                      const offset = 80;
                      const elementPosition = contactSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="text-[#00CFFF] hover:text-[#5B00FF] font-medium"
                >
                  Contact support
                </button>
              </p>
            </div>

            {/* Demo Credentials Hint */}
            <div className="mt-6 p-4 bg-[#F2F2F2] rounded-xl">
              <p className="text-sm text-[#1A1A1A]/60 text-center font-opensans">
                <strong>Demo:</strong> Enter any email and password to login
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientLogin;