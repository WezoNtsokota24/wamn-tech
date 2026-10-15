import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Analysis",
      description: "Understanding your business needs and infrastructure before building the solution."
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Engineering systems treated with the same precision as a manufacturing process."
    },
    {
      number: "03",
      title: "Testing & Support",
      description: "Continuous integration, rigorous testing, and managed software delivery."
    }
  ];

  return (
    <section className="py-24 bg-w-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
          <div className="w-20 h-1 bg-w-green"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-extrabold text-gray-800 mb-6">{step.number}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 7-Pillar Matrix */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Makes Us Different</h2>
            <div className="w-16 h-1 bg-w-green"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              "Custom Made Solutions",
              "Code Rewrite & Modernisation",
              "Continuous Integration (CI/CD)",
              "Deep Technical Research",
              "Infrastructure & Code Audits",
              "Scalable Architecture",
              "Continuous Software Improvement"
            ].map((pillar, idx) => (
              <div key={idx} className="bg-w-gray border border-gray-800 p-6 rounded-sm text-center flex flex-col items-center justify-center min-h-[160px] group hover:border-w-green transition-colors duration-300 shadow-lg shadow-black/20">
                <div className="w-2 h-2 rounded-full bg-w-green mb-4 shadow-[0_0_8px_#76B900]"></div>
                <h4 className="text-sm font-bold text-gray-200 uppercase tracking-tight leading-snug group-hover:text-white transition-colors">
                  {pillar}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Callout */}
        <div className="bg-w-gray border-l-4 border-w-green p-8 md:p-12 rounded-sm shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">How Can We Save You Money?</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Most business problems aren't unique—only the way they manifest in your infrastructure. By treating software engineering with the precision of a manufacturing process and conducting deep analysis before writing a single line of code, we eliminate costly mistakes, technical debt, and endless rework.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-block bg-w-green text-black font-bold px-8 py-4 rounded-sm hover:bg-green-400 transition-colors uppercase tracking-widest text-sm"
              >
                Discuss Your Needs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
