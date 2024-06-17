import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { ReactNode } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  imagePath: string;
  explanation: string;
  link?: string;
  sourceCode?: string;
  children: ReactNode;
};
const Projects = ({
  title,
  description,
  imagePath,
  explanation,
  link,
  sourceCode,
  children,
}: Props) => {
  return (
    <Card className="rounded-lg shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl"> {title}</CardTitle>
        <CardDescription className="text-xl tracking-tighter">
          {" "}
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <AspectRatio ratio={16 / 10} className="border shadow mb-5">
          {
            <img
              src={imagePath}
              alt={title}
              className="w-full object-cover"
            />
          }
        </AspectRatio>
        <p className="[text-indent:2em] text-justify">{explanation}</p>
      </CardContent>
      {children}
      <CardFooter className="flex justify-end pt-5 px-10 gap-5">
        {sourceCode && (
          <Link to={sourceCode} target="#">
            <FaGithub className="inline-block mr-1 w-6 h-6" />
            <span className="inline-block">Code</span>
          </Link>
        )}

        {link && (
          <Link to={link} target="#">
            <FaExternalLinkAlt className="w-4 h-4 inline-block mr-1" />
            <span className="inline-block">Demo</span>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;
