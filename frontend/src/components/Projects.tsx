import ProjectEntry from "./ProjectEntry";
import SkillEntry from "./SkillEntry";
import { FaPhp, FaLaravel, FaNode, FaReact } from "react-icons/fa6";
import { TbBrandMongodb } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCloudinary } from "react-icons/si";
import FoodOrder from "@/assets/project-mern-food-ordering.png";
import Scheduler from "@/assets/project-scheduler.png";
import Jasm from "@/assets/project-jasm.png";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

const ProjectsList = [
  {
    title: "Foodmanazz",
    description: "A food ordering application with searching capabilities",
    imagePath: FoodOrder,
    explanation:
      "This food ordering-app is built with React for the frontend framework and Node for the backend, it uses express to manage the routes. Additionally it uses third-party applications such as Stripe for the payment, Cloudinary for saving images, and MongoDB for the database",
    demoLink: "https://mern-food-ordering-app-frontend-bnlz.onrender.com/",
    sourceCodeLink:
      "https://github.com/AuruMen77/mern-food-ordering-app-frontend.git",
    skills: [
      {
        icon: FaNode,
        color: "text-green-500",
        label: "Node",
      },
      {
        icon: RiTailwindCssFill,
        color: "text-emerald-500",
        label: "Tailwind",
      },
      {
        icon: FaReact,
        color: "text-blue-500",
        label: "React",
      },
      {
        icon: FaCcStripe,
        color: "text-purple-500",
        label: "Stripe",
      },
      {
        icon: SiCloudinary,
        color: "text-blue-500",
        label: "Cloudinary",
      },
      {
        icon: TbBrandMongodb,
        color: "text-green-500",
        label: "MongoDB",
      },
    ],
  },
  {
    title: "JASM (Just Another Social Media)",
    description:
      "A social media app complete with posts, comments, and following",
    imagePath: Jasm,
    explanation:
      "Built with NextJS and a PostGres database and Node for its backend.",
    demoLink: "https://social-media-app-xi-two.vercel.app",
    sourceCodeLink: "https://github.com/AuruMen77/social-media-app",
    skills: [
      {
        icon: RiTailwindCssFill,
        color: "text-emerald-500",
        label: "Tailwind",
      },
      {
        icon: FaNode,
        color: "text-green-500",
        label: "Node",
      },
      {
        icon: FaReact,
        color: "text-blue-500",
        label: "React",
      },
      {
        icon: RiNextjsFill,
        color: "text-green-500",
        label: "NextJS",
      },
      {
        icon: BiLogoPostgresql,
        color: "text-slate-500",
        label: "PostgreSQL",
      },
    ],
  },
  {
    title: "Ground Zero - Scheduler",
    description: "A scheduler with a calendar view",
    imagePath: Scheduler,
    explanation:
      "This is built using React for front end and Laravel with Breeze for the scaffolding. It also utilizes FullCalendar for the calendar view. ",
    demoLink: "",
    sourceCodeLink: "https://github.com/AuruMen77/Ground0-Scheduler",
    skills: [
      { icon: SiMysql, color: "text-blue-500", label: "MySQL" },
      { icon: RiTailwindCssFill, color: "text-emerald-500", label: "Tailwind" },
      { icon: FaReact, color: "text-blue-500", label: "React" },
      {
        icon: FaPhp,
        color: "text-purple-500",
        label: "PHP",
      },
      { icon: FaLaravel, color: "text-red-500", label: "Laravel" },
    ],
    // icon: SiMysql, color:"text-blue-500", label:"MySQL",

    //   icon: RiTailwindCssFill
    //   color:"text-emerald-500"
    //   label:"Tailwind"

    // icon: FaReact color:"text-blue-500" label:"React"
    // icon: FaPhp color:"text-purple-500" label:"PHP"
    // icon: FaLaravel color:"text-red-500" label:"Laravel"
  },
];

const Projects = () => {
  return (
    <>
      <div className="text-5xl text-blue-500 font-bold text-center pt-10 mb-20">
        Projects
      </div>
      <div
        className="grid md:grid-cols-2 gap-10 mt-[-50px]"
        id="project-content"
      >
        {ProjectsList.map((project) => {
          return (
            <ProjectEntry {...project}>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-black"></div>
                <span> Made with</span>
                <div className="h-px flex-1 bg-black"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center">
                {project.skills.map((skill) => {
                  return <SkillEntry {...skill} />;
                })}
              </div>
            </ProjectEntry>
          );
        })}
        {/* <ProjectEntry
          title="Ground Zero - Scheduler"
          description="A scheduler with a calendar view"
          imagePath={Scheduler}
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
            <SkillEntry icon={FaLaravel} color="text-red-500" label="Laravel" />
          </div>
        </ProjectEntry> */}
      </div>
    </>
  );
};

export default Projects;
