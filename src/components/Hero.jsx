import React from 'react';
import backgroundVideo from '../assets/media/Abstract_glowing_neon_waves_1080p_20261010204749.mp4';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-800">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-w-green to-green-200">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Wamn Tech builds, upgrades, and maintains world-class digital infrastructure. From high-performance application development to scalable website solutions, we architect the systems that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="bg-w-green text-black font-bold px-8 py-3 rounded-sm hover:bg-green-400 transition-colors text-center uppercase tracking-wide">
              Explore Solutions
            </a>
            <a href="#contact" className="border border-w-green text-w-green font-bold px-8 py-3 rounded-sm hover:bg-w-green hover:text-black transition-colors text-center uppercase tracking-wide">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
