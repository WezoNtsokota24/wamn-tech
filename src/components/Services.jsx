import React from 'react';

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

            {/* App Dev Card */}
            <div className="bg-w-gray border border-gray-800 p-8 rounded-sm card-hover transition-all duration-300 group">
              <div className="h-12 w-12 text-w-green mb-6">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-w-green transition-colors">Application Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Custom backend systems, robust APIs, and scalable architecture designed for enterprise-grade performance and security.
              </p>
              <a href="#" className="text-w-green font-semibold text-sm hover:underline flex items-center uppercase tracking-wide">
                Learn More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            {/* Web Dev Card */}
            <div className="bg-w-gray border border-gray-800 p-8 rounded-sm card-hover transition-all duration-300 group">
              <div className="h-12 w-12 text-w-green mb-6">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-w-green transition-colors">Website Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                High-converting, visually striking frontends. We build dynamic digital storefronts optimized for speed and engagement.
              </p>
              <a href="#" className="text-w-green font-semibold text-sm hover:underline flex items-center uppercase tracking-wide">
                Learn More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
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
