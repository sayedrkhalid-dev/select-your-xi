import { use, useState } from "react";
import { toast } from "react-toastify";

const Teams = ({ teamsPromise }) => {
  const { teams } = use(teamsPromise);
  const [active, setActive] = useState("csk");

  console.log(teams);

  return (
    <section className="w-full max-w-11/12 mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Select Your Team
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Choose your favorite franchise and build your XI
        </p>
      </div>

      {/* Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-6 items-center justify-center place-content-center">
        {teams.map((team) => (
          <li key={team.teamId}>
            <div
              onClick={() => {
                setActive(team.teamId);
                toast.success(`Your team is ${team.teamName}`);
              }}
              className={`group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer outline-3 outline-offset-2
              ${active === team.teamId ? " outline-green-500" : "outline-transparent"}`}
            >
              {/* Logo Section */}
              <figure
                className="flex items-center justify-center h-32 sm:h-38"
                style={{ backgroundColor: team.primaryColor }}
              >
                <img
                  src={team.logo}
                  alt={team.teamName}
                  className="w-30 h-30 md:w-30 md:h-30 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </figure>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {team.teamName}
                </h3>

                {/* Optional small accent line */}
                <div
                  className="w-10 h-1 mx-auto mt-2 rounded-full"
                  style={{ backgroundColor: team.primaryColor }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Teams;
