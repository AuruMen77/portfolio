import MainBody from "@/components/MainBody";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-20 py-10 ">
        <div id="main-body">
          <MainBody />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
