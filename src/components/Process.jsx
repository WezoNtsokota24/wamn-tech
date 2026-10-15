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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
      </div>
    </section>
  );
};

export default Process;
