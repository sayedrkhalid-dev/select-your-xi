const Subscribe = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mt-20">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/20 bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]">
        {/* Glow Effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/30 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-400/20 blur-3xl rounded-full"></div>

        <div className="relative flex flex-col items-center text-center px-6 py-16 gap-5">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Stay Updated with Cricket Insights
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 text-sm md:text-base max-w-md">
            Get match updates, team news, and exclusive content delivered
            straight to your inbox.
          </p>

          {/* Input + Button */}
          <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 mt-4">
            <div className="w-full flex items-center gap-2 px-4 py-3 rounded-full border border-slate-300 bg-white/80 focus-within:ring-2 focus-within:ring-amber-400 transition-all">
              <svg
                className="h-5 w-5 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 7l10 6 10-6" />
                <rect x="2" y="5" width="20" height="14" rx="2" />
              </svg>

              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full bg-transparent text-sm outline-none text-slate-600 placeholder:text-slate-400"
              />
            </div>

            <button className="px-8 py-3 rounded-full bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold shadow-lg hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
