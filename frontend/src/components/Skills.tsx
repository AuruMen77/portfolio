import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { IconType } from "react-icons";
import { FaPhp, FaLaravel, FaNode, FaHtml5, FaReact } from "react-icons/fa6";
import { TbBrandMongodb } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillEntry from "./SkillEntry";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export interface skillDescription {
  icon?: IconType | string;
  textIcon?: string;
  color: string;
  label: string;
}

export interface skillsContent {
  title: string;
  skills: skillDescription[];
}

const skillsContent = [
  {
    title: "Frontend",
    skills: [
      { icon: FaHtml5, color: "text-orange-500", label: "HTML" },
      { icon: DiCss3, color: "text-blue-500", label: "CSS" },
      {
        icon: RiTailwindCssFill,
        color: "text-emerald-500",
        label: "Tailwind",
      },
      { icon: FaReact, color: "text-blue-500", label: "React" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: FaPhp, color: "text-purple-500", label: "PHP" },
      { icon: FaLaravel, color: "text-red-500", label: "Laravel" },
      { icon: FaNode, color: "text-green-500", label: "Node" },
      { icon: "ex", color: "text-slate-500", label: "Express" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: TbBrandMongodb, color: "text-green-500", label: "MongoDB" },
      { icon: SiMysql, color: "text-blue-500", label: "MySQL" },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prevActive) => (prevActive === 2 ? 0 : prevActive + 1));
    }, 3000);
    console.log(active);
    return () => {
      clearInterval(intervalId);
    };
  }, [active]);

  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-5xl text-blue-500 font-bold text-center py-5">
        Skills
      </h1>
      <div className="flex items-center">
        <ChevronLeftIcon
          className="text-slate-400 hover:text-slate-700 mr-2 size-10"
          onClick={() =>
            setActive((prevActive) => (prevActive === 0 ? 2 : prevActive - 1))
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 flex-grow">
          {skillsContent.map((skill, index) => {
            return (
              <Card
                id={skill.title}
                className={classNames(" rounded-lg shadow-lg", {
                  "scale-50 order-0": (active + 2) % 3 === index,
                  "transition-transform duration-1000 scale-105 md:scale-150 order-1 ":
                    active === index,
                  "scale-50 order-2": (active + 1) % 3 === index,
                })}
              >
                <CardHeader>
                  <CardTitle className="text-center">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 justify-items-center">
                  {skill.skills.map((entry) => {
                    return typeof entry.icon !== "string" ? (
                      <SkillEntry
                        icon={entry.icon}
                        color={entry.color}
                        label={entry.label}
                      />
                    ) : (
                      <SkillEntry
                        textIcon={entry.icon}
                        color={entry.color}
                        label={entry.label}
                      />
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>
        <ChevronRightIcon
          className="ml-2 size-10 text-slate-400 hover:text-slate-700"
          onClick={() =>
            setActive((prevActive) => (prevActive === 2 ? 0 : prevActive + 1))
          }
        />
      </div>
    </div>
  );
};

export default Skills;
