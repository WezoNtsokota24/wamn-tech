import React, { useState } from 'react';

const projects = [
  {
    title: "iCure Clinic",
    description: "Custom clinic web application engineered to streamline healthcare operations and digital service workflows.",
    techStack: ["WEB APP", "FULL-STACK", "UX ARCHITECTURE"],
    details: "A comprehensive digital transformation for healthcare providers, featuring patient management, scheduling, and electronic health records. The architecture focuses on HIPAA-compliant data handling, real-time sync across devices, and a mobile-responsive interface for practitioners on the move."
  },
  {
    title: "Phillips Burial Society",
    description: "Android portrait kiosk application featuring SQLite product catalog screens and streamlined local workflows.",
    techStack: ["FLUTTER", "DART", "SQLITE"],
    details: "Interactive kiosk solution for funeral service management, optimized for portrait displays with offline-first data capabilities. Built with Flutter for high-performance rendering and SQLite for robust local data persistence, ensuring functionality even in areas with intermittent connectivity."
  },
  {
    title: "The Law-baller App",
    description: "Full-stack marketplace architecture focusing on scalable data modeling, REST APIs, and responsive UI.",
    techStack: ["DJANGO REST FRAMEWORK", "REACT/VITE", "POSTGRESQL"],
    details: "Legal services marketplace connecting clients with legal professionals, built with a focus on data integrity and high-concurrency handling. The system leverages Django's robust ORM for complex legal data relations and React for a high-fidelity user experience."
  },
  {
    title: "Job Scraping & Gig Bot",
    description: "Automated 24/7 gig discovery and proposal workflow using web scraping, deduplication storage, and bot approvals.",
    techStack: ["PYTHON", "PLAYWRIGHT / BS4", "SQLITE"],
    details: "High-efficiency automation engine that monitors multiple platforms for new opportunities, filtering and flagging relevant gigs in real-time. Employs advanced scraping techniques to bypass anti-bot measures and uses smart deduplication to ensure unique lead generation."
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Case <span className="text-[#76B900]">Studies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A selection of our enterprise-grade deployments and architectural achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-[#76B900]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(118,185,0,0.1)]"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#76B900] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#76B900]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 px-6 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-[#76B900] hover:text-black transition-all duration-300"
                  >
                    View Architecture
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300">
          <div className="bg-[#0a0a0a] border border-[#76B900]/30 rounded-3xl max-w-3xl w-full p-8 relative shadow-[0_0_50px_rgba(118,185,0,0.1)]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <div className="w-12 h-1 bg-[#76B900]"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[#76B900] text-xs font-bold uppercase tracking-[0.2em] mb-3">Architectural Overview</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>

              <div>
                <h4 className="text-[#76B900] text-xs font-bold uppercase tracking-[0.2em] mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3 bg-[#76B900] text-black font-bold rounded-xl hover:bg-green-400 transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
