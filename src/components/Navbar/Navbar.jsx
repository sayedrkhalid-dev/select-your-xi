import { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { CircleDollarSign } from "lucide-react";

const nav_items = ["home", "teams", "fixture", "schedules", "transactions"];

const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className="w-full fixed top-0 z-10 bg-slate-900 border-b border-b-white/12 shadow-lg">
      <div className="navbar max-w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nav_items.map((item, i) => (
                <li key={i} className="capitalize">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a className="hidden lg:block">
            <img src={logo} alt="Logo" width={60} height={60} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1">
            {nav_items.map((item, i) => (
              <li
                key={i}
                onClick={() => setActive(i)}
                className={`text-base capitalize cursor-pointer transition-all duration-300 select-none hover:text-amber-400 
                ${active === i && "text-amber-400"}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div
            className="flex items-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold border-0 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)] 
            hover:shadow-[0_8px_25px_-5px_rgba(245,158,11,0.6)]
            transition-shadow duration-300 px-6 py-1.5 rounded-full"
          >
            <span>5000</span>
            <CircleDollarSign size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
