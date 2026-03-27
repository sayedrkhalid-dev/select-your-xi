import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import AvailablePayers from "./components/AvailablePlayers/AvailablePayers";
import Teams from "./components/Teams/Teams";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AvailablePayers />
      <Teams />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
