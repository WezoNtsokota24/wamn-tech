import React, { useState } from 'react';

const Estimator = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    need: '',
    scope: '',
    timeline: ''
  });

  const needs = [
    'Custom Software Development',
    'Application Modernisation',
    'Solution Architecture',
    'Team Augmentation'
  ];

  const scopes = [
    { id: 'MVP', label: 'MVP / Departmental System' },
    { id: 'Enterprise', label: 'Multi-System Enterprise Integration' },
    { id: 'Rewrite', label: 'Full Legacy Rewrite & Cloud Migration' }
  ];

  const timelines = [
    { id: 'Urgent', label: 'Urgent (1–2 Months)' },
    { id: 'Standard', label: 'Standard (3–6 Months)' },
    { id: 'Long-term', label: 'Long-Term Roadmap (6+ Months)' }
  ];

  const handleSelect = (field, value) => {
    setSelections(prev => ({ ...prev, [field]: value }));
    if (step < 3) setStep(step + 1);
  };

  const reset = () => {
    setStep(1);
    setSelections({ need: '', scope: '', timeline: '' });
  };

  const handleFinalize = () => {
    const message = `Project Estimator Summary:\nNeed: ${selections.need}\nScope: ${selections.scope}\nTimeline: ${selections.timeline}\n\nClient is looking to eliminate rework via upfront analysis.`;

    window.dispatchEvent(new CustomEvent('prefillContact', {
      detail: {
        service: selections.need,
        message: message
      }
    }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="estimator" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <div
              className="h-full bg-[#76B900] transition-all duration-500 shadow-[0_0_10px_#76B900]"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Project ROI Estimator</h2>
            <p className="text-gray-400">Configure your project scope to see how our engineered approach drives value.</p>
          </div>

          {/* Step 1: Select Need */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">Step 1: Select Your Primary Need</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {needs.map((need) => (
                  <button
                    key={need}
                    onClick={() => handleSelect('need', need)}
                    className="p-6 text-left bg-white/5 border border-white/10 rounded-2xl hover:border-[#76B900]/60 hover:bg-[#76B900]/5 transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white font-medium">{need}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Project Scope */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm">Step 2: Project Scope & Complexity</h3>
                <button onClick={() => setStep(1)} className="text-xs text-[#76B900] hover:underline">Back</button>
              </div>
              <div className="space-y-4">
                {scopes.map((scope) => (
                  <button
                    key={scope.id}
                    onClick={() => handleSelect('scope', scope.label)}
                    className="w-full p-6 text-left bg-white/5 border border-white/10 rounded-2xl hover:border-[#76B900]/60 hover:bg-[#76B900]/5 transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white font-medium">{scope.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Target Timeline */}
          {step === 3 && !selections.timeline && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm">Step 3: Target Timeline</h3>
                <button onClick={() => setStep(2)} className="text-xs text-[#76B900] hover:underline">Back</button>
              </div>
              <div className="space-y-4">
                {timelines.map((time) => (
                  <button
                    key={time.id}
                    onClick={() => handleSelect('timeline', time.label)}
                    className="w-full p-6 text-left bg-white/5 border border-white/10 rounded-2xl hover:border-[#76B900]/60 hover:bg-[#76B900]/5 transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white font-medium">{time.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Summary View */}
          {selections.timeline && (
            <div className="animate-in zoom-in-95 duration-500">
              <div className="bg-[#76B900]/10 border border-[#76B900]/30 rounded-2xl p-6 mb-8">
                <h3 className="text-[#76B900] font-bold mb-4 uppercase tracking-widest text-xs">Dynamic Project Summary</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-white"><span className="text-gray-500 text-sm mr-2 uppercase">Need:</span> {selections.need}</p>
                  <p className="text-white"><span className="text-gray-500 text-sm mr-2 uppercase">Scope:</span> {selections.scope}</p>
                  <p className="text-white"><span className="text-gray-500 text-sm mr-2 uppercase">Timeline:</span> {selections.timeline}</p>
                </div>
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <p className="text-sm text-gray-400 italic">
                    "Wamn Tech's upfront analysis eliminates up to 40% of development rework for {selections.scope} projects. By engineering the solution before coding, we ensure your {selections.timeline} delivery remains on track."
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleFinalize}
                  className="flex-1 bg-[#76B900] text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(118,185,0,0.3)] uppercase tracking-widest"
                >
                  Lock In Scope & Discuss
                </button>
                <button
                  onClick={reset}
                  className="px-8 py-4 bg-white/5 text-gray-400 font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Estimator;
