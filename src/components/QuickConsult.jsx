import React, { useState } from 'react';

const QuickConsult = () => {
  const [isOpen, setIsOpen] = useState(false);

  const prompts = [
    { label: "How does your 3-step process work?", answer: "Our process begins with deep Analysis, followed by precision Design & Development, and concludes with rigorous Testing & Support to ensure zero rework." },
    { label: "Can you modernize our legacy system?", answer: "Yes. We specialize in Application Modernisation, transforming legacy code into scalable, cloud-native microservices architectures." },
    { label: "Estimate my project", action: () => { document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
    { label: "Book a discovery call", action: () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } }
  ];

  const [activeAnswer, setActiveAnswer] = useState(null);

  const handlePromptClick = (prompt) => {
    if (prompt.action) {
      prompt.action();
    } else {
      setActiveAnswer(prompt.answer);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#76B900] text-black rounded-full shadow-[0_0_20px_rgba(118,185,0,0.5)] flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        )}
      </button>

      {/* Assistant Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-[#0d0d0d]/90 backdrop-blur-xl border border-[#76B900]/40 rounded-2xl p-6 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
          <div className="mb-4">
            <h3 className="text-white font-bold text-lg mb-1 flex items-center">
              <span className="w-2 h-2 bg-[#76B900] rounded-full mr-2 animate-pulse"></span>
              AI Architecture Assistant
            </h3>
            <p className="text-gray-400 text-xs uppercase tracking-widest">Enterprise Consulting Bot</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-gray-300 text-sm">
                {activeAnswer || "Hello. How can I assist with your infrastructure strategy today?"}
              </p>
            </div>

            {activeAnswer && (
              <button
                onClick={() => setActiveAnswer(null)}
                className="text-[10px] text-[#76B900] uppercase font-bold hover:underline"
              >
                ← Back to options
              </button>
            )}
          </div>

          {!activeAnswer && (
            <div className="flex flex-col gap-2">
              {prompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePromptClick(prompt)}
                  className="text-left text-sm bg-white/5 border border-white/10 hover:border-[#76B900]/50 hover:bg-[#76B900]/5 p-3 rounded-lg text-gray-300 transition-all duration-300"
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] text-gray-500 uppercase font-bold">Wamn Tech Protocol v2.6</span>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#76B900] text-xs font-bold hover:underline">Book Discovery Call</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickConsult;
