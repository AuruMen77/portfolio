import Community from "./Community";
import Education from "./Education";
import Experience from "./Experience";

const MainBody = () => {
  return (
    <div className="flex flex-col text-center  pt-10">
      <h1 className="text-4xl font-sans font-bold text-blue-500">
        Hello, I am Azzedine
      </h1>
      <h2 className="text-xl font-serif italic text-yellow-500 mb-5">
        An aspiring web developer
      </h2>
      <div className="text-left grid md:grid-cols-3 max-h-[vh] gap-10">
        <Education />
        <Experience />
        <Community />
      </div>
    </div>
  );
};

export default MainBody;
