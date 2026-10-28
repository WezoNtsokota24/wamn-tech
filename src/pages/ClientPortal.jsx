import React from 'react';

const ClientPortal = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#76B900]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-md w-full relative z-10">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 md:p-10">
          {/* Status Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#76B900] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#76B900]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                Systems Operational: All Cloud Regions
              </span>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Client <span className="text-[#76B900]">Portal</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Access your managed services workspace
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Corporate Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#76B900]/50 focus:border-[#76B900] transition-all text-sm"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label htmlFor="token" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Access Token / Password
              </label>
              <input
                id="token"
                name="token"
                type="password"
                required
                className="appearance-none block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#76B900]/50 focus:border-[#76B900] transition-all text-sm"
                placeholder="••••••••••••"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-black bg-[#76B900] hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#76B900] transition-all duration-300 shadow-[0_0_20px_rgba(118,185,0,0.3)] hover:shadow-[0_0_30px_rgba(118,185,0,0.5)] uppercase tracking-widest"
              >
                Sign In to Workspace
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <a href="#" className="text-xs text-gray-500 hover:text-[#76B900] transition-colors">
              Trouble logging in? Contact Infrastructure Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
