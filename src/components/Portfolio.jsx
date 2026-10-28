import React from 'react';

const projects = [
  {
    title: "The Law-baller App",
    description: "An e-commerce marketplace architecture focusing on scalable data modeling and robust API performance.",
    techStack: ["Django REST Framework", "React/Vite", "PostgreSQL"],
    details: "High-performance backend for legal service procurement."
  },
  {
    title: "WeShare",
    description: "Highlighting seamless data flow, modern user experience, and optimized backend engineering.",
    techStack: ["Node.js", "React", "Real-time DB"],
    details: "Peer-to-peer data sharing ecosystem."
  },
  {
    title: "AA PAKADE ATTORNEYS",
    description: "Professional services deployment showcasing a robust and accessible legal web presence.",
    techStack: ["React", "Tailwind CSS", "Netlify"],
    details: "Corporate digital identity."
  },
  {
    title: "Geotronix Core",
    description: "Industrial/construction web architecture featuring advanced 3D rendering capabilities.",
    techStack: ["Three.js", "React", "WebGL"],
    details: "Industrial 3D visualization platform."
  }
];

const Portfolio = () => {
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

                  <button className="w-full py-3 px-6 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-[#76B900] hover:text-black transition-all duration-300">
                    View Architecture
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
