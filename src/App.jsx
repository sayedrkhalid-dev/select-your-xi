import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import AvailablePayers from "./components/AvailablePlayers/AvailablePayers";
import Teams from "./components/Teams/Teams";
import Subscribe from "./components/Subscribe/Subscribe";
import { Suspense } from "react";

const fetch_ipl_data = async () =>
  (await fetch("data/ipl_session_2025.json")).json();

const App = () => {
  const teamsPromise = fetch_ipl_data();

  return (
    <>
      <Navbar />
      <Hero />
      <AvailablePayers />

      <Suspense
        fallback={
          <div className="flex justify-center items-center px-4 py-10">
            <span className="loading loading-bars loading-md"></span>
          </div>
        }
      >
        <Teams teamsPromise={teamsPromise} />
      </Suspense>

      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
