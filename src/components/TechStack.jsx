import React, { useState } from 'react';

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Backend & APIs', 'Data & Cloud Infrastructure', 'Frontend & UI', 'AI & Automation'];

  const technologies = [
    { name: 'Java', category: 'Backend & APIs', description: 'Powering high-concurrency enterprise microservices and secure transaction systems.' },
    { name: 'Python', category: 'Backend & APIs', description: 'Used for rapid API development, data processing pipelines, and AI integration.' },
    { name: 'PostgreSQL', category: 'Data & Cloud Infrastructure', description: 'Our primary relational database for complex data integrity and ACID compliance.' },
    { name: 'React', category: 'Frontend & UI', description: 'Building high-performance, interactive user interfaces with reusable component architecture.' },
    { name: 'Django', category: 'Backend & APIs', description: 'Enabling rapid, secure delivery of complex web applications with built-in security.' },
    { name: 'Spring Boot', category: 'Backend & APIs', description: 'Facilitating scalable, production-ready microservices with robust ecosystem support.' },
    { name: 'FastAPI', category: 'Backend & APIs', description: 'Modern, high-performance web framework for building APIs with Python 3.7+.' },
    { name: 'Docker', category: 'Data & Cloud Infrastructure', description: 'Ensuring consistency across development, testing, and production environments.' },
    { name: 'Kafka', category: 'Data & Cloud Infrastructure', description: 'Driving event-driven architectures and real-time data streaming at scale.' },
    { name: 'Kubernetes', category: 'Data & Cloud Infrastructure', description: 'Orchestrating containerized workloads for automated deployment and scaling.' },
    { name: 'TensorFlow', category: 'AI & Automation', description: 'Implementing deep learning models for predictive analytics and process automation.' },
    { name: 'TypeScript', category: 'Frontend & UI', description: 'Adding static typing to JavaScript for larger-scale frontend reliability.' },
  ];

  const filteredTechs = activeFilter === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <section id="tech-stack" className="py-24 bg-w-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interactive Tech Stack Matrix</h2>
          <div className="w-20 h-1 bg-[#76B900] mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We select tools based on engineering requirements, not trends. Explore our core technology arsenal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-[#76B900] text-black border-[#76B900] shadow-[0_0_15px_rgba(118,185,0,0.4)]'
                  : 'bg-white/[0.03] text-gray-400 border-white/10 hover:border-[#76B900]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Tech Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechs.map((tech) => (
            <div
              key={tech.name}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#76B900]/60 rounded-xl p-6 transition-all duration-300 group shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[#76B900] transition-colors">{tech.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#76B900]/10 text-[#76B900] px-2 py-1 rounded border border-[#76B900]/20">
                  {tech.category}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#76B900]/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default TechStack;
