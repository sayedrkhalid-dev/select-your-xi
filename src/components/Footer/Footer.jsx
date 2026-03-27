import logo from "../../assets/images/logo/logo-footer.png";

const nav_items = ["home", "teams", "fixture", "schedules", "transactions"];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-16" />
              <h4>
                SELECT-<span className="text-amber-500">YOUR</span>-XI
              </h4>
            </div>
            <p className="text-sm leading-relaxed">
              A modern platform for cricket enthusiasts to build, manage, and
              explore team lineups with real-time insights.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4 md:flex md:flex-col md:items-center">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
              Navigation
            </h3>
            <ul className="space-y-2">
              {nav_items.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm capitalize hover:text-amber-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
              Newsletter
            </h3>
            <p className="text-sm">
              Subscribe to receive product updates and announcements.
            </p>

            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm bg-slate-900 border border-slate-800 rounded-l-md focus:outline-none focus:ring-1 focus:ring-slate-600"
              />
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium bg-slate-200 text-slate-900 rounded-r-md hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © 2026 Select Your XI. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
