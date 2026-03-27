import { useState } from "react";

const tabs = ["available", "selected"];

const AvailablePayers = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full max-w-11/12 mx-auto border-b border-b-white/12 pb-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Available Players</h2>
        <div className="flex gap-3 bg-slate-800/85 p-1.5 rounded-full">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`text-sm font-semibold text-slate-400 capitalize px-4 py-1 border-0 rounded-full cursor-pointer transition-all duration-300
              ${active === index ? "bg-green-500 text-slate-900 font-semibold" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailablePayers;
