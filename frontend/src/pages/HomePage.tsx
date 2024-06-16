import MainBody from "@/components/MainBody";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SkillEntry from "@/components/SkillEntry";
import { FaPhp, FaLaravel, FaNode, FaReact } from "react-icons/fa6";
import { TbBrandMongodb } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCloudinary } from "react-icons/si";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-20 py-20 ">
        <div id="main-body">
          <MainBody />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div
          id="projects"
          className="text-5xl text-blue-500 font-bold text-center pt-10"
        >
          Projects
        </div>
        <div className="grid md:grid-cols-2 gap-10 mt-[-50px]">
          <Projects
            title="Foodmanazz"
            description="A food ordering application with searching capabilities"
            imagePath="../assets/project-mern-food-ordering.png"
            explanation="This food ordering-app is built with React for the frontend framework and Node for the backend, it uses express to manage the routes.
        Additionally it uses third-party applications such as Stripe for the payment, Cloudinary for saving images, and MongoDB for the database"
            link="https://mern-food-ordering-app-frontend-y8ki.onrender.com"
            sourceCode="https://github.com/AuruMen77/mern-food-ordering-app-frontend.git"
          >
            <p className="text-lg tracking-tighter text-center">Made with:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center">
              <SkillEntry icon={FaNode} color="text-green-500" label="Node" />
              <SkillEntry
                icon={RiTailwindCssFill}
                color="text-emerald-500"
                label="Tailwind"
              />
              <SkillEntry icon={FaReact} color="text-blue-500" label="React" />
              <SkillEntry
                icon={FaCcStripe}
                color="text-purple-500"
                label="Stripe"
              />
              <SkillEntry
                icon={SiCloudinary}
                color="text-blue-500"
                label="Cloudinary"
              />
              <SkillEntry
                icon={TbBrandMongodb}
                color="text-green-500"
                label="MongoDB"
              />
            </div>
          </Projects>
          <Projects
            title="Ground Zero - Scheduler"
            description="A scheduler with a calendar view"
            imagePath="../assets/project-scheduler.png"
            explanation="This is built using React for front end and Laravel with Breeze for the scaffolding. It also utilizes FullCalendar for the calendar view. "
            link=""
            sourceCode="https://github.com/AuruMen77/Ground0-Scheduler"
          >
            <p className="text-lg tracking-tighter text-center">Made with:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center">
              <SkillEntry icon={SiMysql} color="text-blue-500" label="MySQL" />
              <SkillEntry
                icon={RiTailwindCssFill}
                color="text-emerald-500"
                label="Tailwind"
              />
              <SkillEntry icon={FaReact} color="text-blue-500" label="React" />
              <SkillEntry icon={FaPhp} color="text-purple-500" label="PHP" />
              <SkillEntry
                icon={FaLaravel}
                color="text-red-500"
                label="Laravel"
              />
            </div>
          </Projects>
        </div>
      </div>
    </>
  );
};

export default HomePage;
