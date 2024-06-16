import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaPhp, FaLaravel, FaNode, FaHtml5, FaReact } from "react-icons/fa6";
import { TbBrandMongodb } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillEntry from "./SkillEntry";

const Skills = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-5xl text-blue-500 font-bold text-center py-5">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <Card className="rounded-lg shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-center">Frontend</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 justify-items-center">
                        <SkillEntry icon={FaHtml5} color="text-orange-500" label="HTML" />
                        <SkillEntry icon={DiCss3} color="text-blue-500" label="CSS" />
                        <SkillEntry icon={RiTailwindCssFill} color="text-emerald-500" label="Tailwind" />
                        <SkillEntry icon={FaReact} color="text-blue-500" label="React" />
                    </CardContent>
                </Card>

                <Card className="rounded-lg shadow-lg ">
                    <CardHeader>
                        <CardTitle className="text-center">Backend</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 justify-items-center">
                        <SkillEntry icon={FaPhp} color="text-purple-500" label="PHP" />
                        <SkillEntry icon={FaLaravel} color="text-red-500" label="Laravel" />
                        <SkillEntry icon={FaNode} color="text-green-500" label="Node" />
                        <SkillEntry textIcon="express" color ="text-slate-500" label ="Express"/>
                    </CardContent>
                </Card>
                <Card className="rounded-lg shadow-lg ">
                    <CardHeader>
                        <CardTitle className="text-center">Database</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 justify-items-center">
                        <SkillEntry icon={TbBrandMongodb} color="text-green-500" label="MongoDB" />
                        <SkillEntry icon={SiMysql} color="text-blue-500" label="MySQL" />
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default Skills;