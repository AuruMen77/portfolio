import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Contacts = () => {
  return (
    <div className="bg-slate-200 py-5">
      <div className="container mx-auto flex flex-col gap-5 justify-between items-center bg-slate">
        <h1 className="text-center font-serif text-xl italic tracking-tight">
          I would love to hear from you, get to know me more through
        </h1>
        <div className="grid gap-2 grid-cols-3 gap-5 justify-items-center ">
          <Link
            to="https://github.com/AuruMen77"
            target="#"
            className="flex flex-row hover:text-xl hover:shadow-md hover:rounded-lg hover:cursor-pointer"
          >
            <FaGithub className="w-6 h-6" /> <h1>Github</h1>
          </Link>
          <Link
            to="https://web.facebook.com/azzedine.usman.75"
            target="#"
            className="flex flex-row hover:text-xl hover:shadow-md hover:rounded-lg hover:cursor-pointer"
          >
            <FaFacebook className="w-6 h-6 text-blue-700" />
            <h1>Facebook</h1>
          </Link>
          <Link
            to="https://www.linkedin.com/in/azzedine-usman-781aa4265/"
            target="#"
            className="flex flex-row hover:text-xl hover:shadow-md hover:rounded-lg hover:cursor-pointer" 
          >
            <FaLinkedin className="w-6 h-6 text-blue-600" />
            <h1>LinkedIn</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
