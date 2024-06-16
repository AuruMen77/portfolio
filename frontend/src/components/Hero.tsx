import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {
  const [offsetInPixels, setOffsetInPixels] = useState(
    (-10 * window.innerHeight) / 100
  );

  useEffect(() => {
    const updateOffset = () => {
      setOffsetInPixels((-10 * window.innerHeight) / 100);
    };

    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <div
      id="hero"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to my portfolio!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Thank you for giving my application some consideration
        </p>
        <ScrollLink
          to="main-body"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-300"
          smooth={true}
          duration={500}
          offset={offsetInPixels}
        >
          Get Started
        </ScrollLink>
      </div>
    </div>
  );
};

export default Hero;
