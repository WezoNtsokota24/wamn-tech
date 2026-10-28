import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/media/Abstract_glowing_neon_waves_1080p_20261010204749.mp4';
import fallbackBg from '../assets/media/Digital_network_data_flowing_2K_20261010203407.jpg';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-800 bg-transparent">
      {/* Video Background */}
      <video
        src={backgroundVideo}
        poster={fallbackBg}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-3xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-w-green to-green-200">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            We become subject matter experts in your business before we write a single line of code. Wamn Tech engineers bespoke software solutions built around your unique infrastructure to eliminate rework and drive scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="bg-w-green text-black font-bold px-8 py-3 rounded-full hover:bg-green-400 hover:shadow-[0_0_20px_rgba(118,185,0,0.4)] transition-all text-center uppercase tracking-wide">
              Explore Solutions
            </Link>
            <Link to="/contact" className="border border-w-green text-w-green font-bold px-8 py-3 rounded-full hover:bg-w-green hover:text-black transition-all text-center uppercase tracking-wide">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
