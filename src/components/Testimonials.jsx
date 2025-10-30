import React from 'react';
import { FaStar, FaQuoteLeft, FaHeart, FaRocket, FaChartLine } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul M.",
      role: "Tech Executive, Chennai",
      content: "Aristoverse Wellness gave me my life back. After years of trying generic vitamins and still feeling exhausted, their team pinpointed exactly what my body was missing. Three months in, my energy levels are through the roof!",
      improvement: "Energy levels restored, ran first 10K at 45",
      rating: 5,
      gradient: "from-[#00CFFF] to-[#00A3FF]"
    },
    {
      name: "Samantha L.",
      role: "Marketing Professional, New York",
      content: "As a working mom, stress was my constant companion. Aristoverse's precision counselling uncovered my cortisol was peaking at night. Their personalized plan made a huge difference!",
      improvement: "Better sleep, calmer mood, stress under control",
      rating: 5,
      gradient: "from-[#5B00FF] to-[#8A2BE2]"
    },
    {
      name: "Arjun S.",
      role: "Entrepreneur, Bengaluru",
      content: "The personalized supplement packs are a game changer. I used to have a cupboard full of supplements I took randomly. Now I have just what I need in the right doses.",
      improvement: "Cholesterol and blood sugar improved, lost 5kg",
      rating: 5,
      gradient: "from-[#FF00FF] to-[#FF1493]"
    },
    {
      name: "Dr. Priya K.",
      role: "Neuroscientist, London",
      content: "What impressed me most is the science. Everything was explained with research citations! Aristoverse isn't just another wellness fad; it's like having a personal health research team.",
      improvement: "Scientific approach, transparent methodology",
      rating: 5,
      gradient: "from-[#00CFFF] to-[#5B00FF]"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white via-[#F2F2F2] to-[#00CFFF]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-[#00CFFF]/10 to-[#5B00FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-[#5B00FF]/10 to-[#FF00FF]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 font-montserrat">
            Real Clients, Real Transformations
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed font-opensans bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            Discover how precision wellness has transformed lives through data-driven, personalized approaches
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#F2F2F2]"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-[#1A1A1A] text-lg font-montserrat">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-[#1A1A1A]/70 text-sm font-opensans">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-[#00CFFF] text-2xl mb-4 opacity-50" />
                <p className="text-[#1A1A1A] mb-6 leading-relaxed italic text-lg font-opensans pl-8">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#00CFFF]/10 to-[#5B00FF]/10 border border-[#00CFFF]/20 rounded-xl p-4">
                <p className="text-[#1A1A1A] font-medium font-opensans flex items-center">
                  <FaChartLine className="text-[#00CFFF] mr-2" />
                  <span className="font-bold">Key Improvement:</span> 
                  <span className="ml-2">{testimonial.improvement}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-[#00CFFF] to-[#5B00FF] rounded-2xl p-8 text-white shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "98%", label: "Client Satisfaction", icon: FaHeart },
              { number: "100+", label: "Biomarkers Tracked", icon: FaChartLine },
              { number: "24/7", label: "Expert Support", icon: FaRocket },
              { number: "5★", label: "Average Rating", icon: FaStar }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
                <stat.icon className="text-3xl text-white mb-3 mx-auto" />
                <div className="text-3xl font-bold font-montserrat mb-2">{stat.number}</div>
                <div className="text-white/80 font-opensans text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;