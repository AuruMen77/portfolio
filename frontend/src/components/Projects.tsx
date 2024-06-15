import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import getImageUrl from "../utils/image-import-util.ts";

type Props = {
    title: string;
    description: string;
    imagePath: string,
    explanation: string,
    link?: string,
    techstack: string[],


}
const Projects = ({ title, description, imagePath, explanation, link, techstack }: Props) => {
   
    return (
        <Card>
            <CardHeader className="text-center">
                <CardTitle className="text-3xl"> {title}</CardTitle>
                <CardDescription className="text-xl tracking-tighter"> {description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                <AspectRatio ratio={16 / 10} className="border shadow mb-5">
                    {<img src={getImageUrl(imagePath)} alt={title} className="w-full object-cover" />}
                </AspectRatio>
                <p className="[text-indent:2em] text-justify">{explanation}</p>
                {techstack.map((tech)=>{
                    return <p> {tech}</p>
                }
                )}
            </CardContent>
            <CardFooter className="flex justify-center px-10">
                {link && <Link to={link} target="#">Visit site</Link>}
            </CardFooter>
        </Card>
    )
}

export default Projects;

