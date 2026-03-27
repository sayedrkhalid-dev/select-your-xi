import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-white/85 h-50">
      <div className="join gap-2">
        <div>
          <label className="input validator join-item rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="Enter valid email address"
              required
              className=" focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 "
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button
          className="btn btn-neutral join-item bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 border-0 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)] 
               hover:shadow-[0_8px_25px_-5px_rgba(245,158,11,0.6)]
               transition-shadow duration-300 rounded-full px-8"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
