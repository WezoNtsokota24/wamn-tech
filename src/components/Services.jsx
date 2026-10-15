import React, { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Custom Software Development",
      description: "Designing and building bespoke systems that work specifically for your business processes.",
      details: "Our custom software engineering focuses on creating competitive advantages by building tools that fit your unique workflows perfectly.",
      deliverables: [
        "End-to-End System Architecture",
        "Proprietary Business Logic Implementation",
        "Scalable Cloud-Native Infrastructure",
        "Third-Party API Integrations"
      ],
      stack: ["Java", "Spring Boot", "React", "PostgreSQL"],
      timeline: "12-24 Weeks MVP",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    {
      title: "Application Modernisation",
      description: "Code rewrites and system upgrades to bring legacy applications into the modern cloud era.",
      details: "We transform brittle legacy systems into resilient, high-performance cloud applications without disrupting your core business operations.",
      deliverables: [
        "Legacy Code Audit & Strategy",
        "Database Migration & Optimization",
        "Monolith to Microservices Refactoring",
        "Cloud-Native Re-platforming"
      ],
      stack: ["Docker", "Kubernetes", "AWS/Azure", "Python"],
      timeline: "8-16 Weeks / Iterative",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      )
    },
    {
      title: "Solution Architecture",
      description: "Designing robust, scalable infrastructures that seamlessly integrate with your current tech stack.",
      details: "Precision-engineered architectural blueprints that ensure your systems are scalable, secure, and cost-effective from day one.",
      deliverables: [
        "Infrastructure as Code (Terraform)",
        "System Scalability Mapping",
        "Security & Compliance Frameworks",
        "Interoperability Blueprints"
      ],
      stack: ["Terraform", "Kafka", "Redis", "ElasticSearch"],
      timeline: "4-8 Weeks Strategy",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Team Augmentation",
      description: "Providing elite software engineering talent to integrate with and accelerate your internal delivery teams.",
      details: "We embed senior-level engineering talent directly into your sprints, bringing best practices and high-velocity delivery to your internal teams.",
      deliverables: [
        "Senior Engineering Integration",
        "Agile Process Optimization",
        "Knowledge Transfer & Mentorship",
        "Scalable Delivery Velocity"
      ],
      stack: ["Agile", "CI/CD", "Scrum", "DevOps"],
      timeline: "On-demand / Long-term",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    }
  ];

  const handleRequestService = (serviceTitle) => {
    setSelectedService(null);
    window.dispatchEvent(new CustomEvent('prefillContact', {
      detail: { service: serviceTitle }
    }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-w-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
          <div className="w-20 h-1 bg-[#76B900]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl backdrop-blur-md cursor-pointer hover:border-[#76B900]/50 transition-all duration-300 group shadow-lg"
            >
              <div className="h-12 w-12 text-[#76B900] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#76B900] transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                className="text-[#76B900] font-semibold text-sm flex items-center uppercase tracking-wide group/btn"
              >
                Learn More
                <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-[#111111]/80 backdrop-blur-2xl border border-[#76B900]/40 rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-[0_0_50px_rgba(118,185,0,0.15)] relative animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedService.title}</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {selectedService.details}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-sm font-bold text-[#76B900] uppercase tracking-widest mb-4">Key Deliverables</h4>
                <ul className="space-y-3">
                  {selectedService.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm">
                      <svg className="w-5 h-5 mr-2 text-[#76B900] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#76B900] uppercase tracking-widest mb-4">Architecture & Stack</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedService.stack.map((tech, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="text-sm font-bold text-[#76B900] uppercase tracking-widest mb-2">Timeline</h4>
                <p className="text-gray-300 text-sm font-medium">{selectedService.timeline}</p>
              </div>
            </div>

            <button
              onClick={() => handleRequestService(selectedService.title)}
              className="w-full bg-[#76B900] text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-all duration-300 shadow-[0_0_20px_rgba(118,185,0,0.3)] uppercase tracking-widest"
            >
              Request This Service
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
