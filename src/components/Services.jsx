import React from 'react';
import microchipImg from '../assets/media/Microchip_pulsing_with_green_energy_2K_20261010204322.jpg';
import serverRacksImg from '../assets/media/Server_racks_in_data_center_2K_20261010204306.jpg';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Designing and building bespoke systems that work specifically for your business processes.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    {
      title: "Application Modernisation",
      description: "Code rewrites and system upgrades to bring legacy applications into the modern cloud era.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      )
    },
    {
      title: "Solution Architecture",
      description: "Designing robust, scalable infrastructures that seamlessly integrate with your current tech stack.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Team Augmentation",
      description: "Providing elite software engineering talent to integrate with and accelerate your internal delivery teams.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Core Capabilities Grid */}
      <section id="services" className="py-24 bg-w-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
            <div className="w-20 h-1 bg-w-green"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-w-gray border border-gray-800 p-8 rounded-sm card-hover transition-all duration-300 group">
                <div className="h-12 w-12 text-w-green mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-w-green transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="text-w-green font-semibold text-sm hover:underline flex items-center uppercase tracking-wide">
                  Learn More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            ))}
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
