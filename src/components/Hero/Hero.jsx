import banner_bg from "../../assets/images/bg-shadow.png";
import banner_main from "../../assets/images/banner-main.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${banner_bg})` }}
      className="w-full max-w-11/12 mx-auto mt-32 md:bg-cover md:bg-center bg-no-repeat rounded-lg"
    >
      <div className="hero">
        <div className="hero-content flex-col text-center">
          <img src={banner_main} className="max-w-sm" />
          <div>
            <h1 className="text-3xl font-semibold md:text-5xl md:font-bold capitalize">
              Assemble your ultimate <br /> dream 11 cricket team
            </h1>
            <p className="text-sm text-white/65 capitalize py-4">
              Beyond boundaries • beyond limits
            </p>
            <button
              className="btn capitalize font-bold bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 border-0 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)] 
               hover:shadow-[0_8px_25px_-5px_rgba(245,158,11,0.6)]
               transition-shadow duration-300 rounded-full px-8"
            >
              claim free credit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
