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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-yellow-100 opacity-75 grid"></div>

      <div className="grid grid-cols-5 relative z-10 flex flex-col h-full ms-5 md:ms-20  mt-[25vh] text-white">
        <div className="col-span-5  md:col-span-4 lg:col-span-3">
          {" "}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
            Learning to thrive,
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
            thrive to bring change
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-[100]">
            Are you looking for a dedicated web developer eager to learn and
            adapt to bring value to your company?
          </p>
          <ScrollLink
            to="main-body"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-300  hover:cursor-pointer"
            smooth={true}
            duration={500}
            offset={offsetInPixels}
          >
            Learn More
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
