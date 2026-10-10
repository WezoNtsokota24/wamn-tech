import React from 'react';
import microchipImg from '../assets/media/Microchip_pulsing_with_green_energy_2K_20261010204322.jpg';
import serverRacksImg from '../assets/media/Server_racks_in_data_center_2K_20261010204306.jpg';

const Services = () => {
  return (
    <>
      {/* Core Capabilities Grid */}
      <section id="services" className="py-24 bg-w-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
            <div className="w-20 h-1 bg-w-green"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Software Development Card */}
            <div className="bg-w-gray border border-gray-800 rounded-sm card-hover transition-all duration-300 group overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src={microchipImg} alt="Software Development" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-w-gray to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="h-12 w-12 text-w-green mb-6">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-w-green transition-colors">Software Development</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Expertly crafted React and Django applications, designed for enterprise-grade performance, scalability, and security.
                </p>
                <a href="#" className="text-w-green font-semibold text-sm hover:underline flex items-center uppercase tracking-wide">
                  Learn More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="bg-w-gray border border-gray-800 rounded-sm card-hover transition-all duration-300 group overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src={serverRacksImg} alt="Infrastructure / PostgreSQL" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-w-gray to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="h-12 w-12 text-w-green mb-6">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-w-green transition-colors">Infrastructure / PostgreSQL</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Robust database management and scalable infrastructure solutions that ensure your data is always accessible and secure.
                </p>
                <a href="#" className="text-w-green font-semibold text-sm hover:underline flex items-center uppercase tracking-wide">
                  Learn More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Upgrading & Maintenance Card */}
            <div className="bg-w-gray border border-gray-800 p-8 rounded-sm card-hover transition-all duration-300 group">
              <div className="h-12 w-12 text-w-green mb-6">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-w-green transition-colors">Upgrades & Maintenance</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Continuous integration, legacy system modernization, and proactive maintenance to keep your tech stack ahead of the curve.
              </p>
              <a href="#" className="text-w-green font-semibold text-sm hover:underline flex items-center uppercase tracking-wide">
                Learn More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Infrastructure / Data Section */}
      <section className="py-20 bg-w-gray border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Architecting Solutions Across the Modern Stack</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            <span className="text-xl font-bold text-gray-400 tracking-widest uppercase">Java</span>
            <span className="text-xl font-bold text-gray-400 tracking-widest uppercase">Python</span>
            <span className="text-xl font-bold text-gray-400 tracking-widest uppercase">PostgreSQL</span>
            <span className="text-xl font-bold text-gray-400 tracking-widest uppercase">React</span>
            <span className="text-xl font-bold text-gray-400 tracking-widest uppercase">Django</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
