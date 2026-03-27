import Team from "../Team/Team";

const fetchTeams = async () => {
  const res = await fetch("/data/teams.json");
  const data = res.json();
  return data;
};

const teamsPromise = await fetchTeams();
console.log(teamsPromise);

const Teams = () => {
  return (
    <section className="">
      <h2>Select your team</h2>

      <div>
        <ul>
          <li>
            <Team teamsPromise={teamsPromise} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Teams;
