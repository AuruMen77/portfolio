import logo from "../assets/aulogo.png";
import NavBarItem from "./NavBarItem";
import MobileNav from "./MobileNax";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className=" flex max-h-[10vh] justify-between pb-20 md:max-h-[10vh]">
      <div>
        <Link to="hero" smooth={true} duration={500}>
          <img
            src={logo}
            className="md:mx-[1vw] w-full object-contain max-h-[10vh]"
          />
        </Link>
      </div>
      <div className="lg:mt-[3vh] md:mt-[1vh] mr-10 text-xl hidden md:block">
        <div className="flex flex-col md:flex-row ">
          <NavBarItem growSize="2xl" scrollTo="hero" text="Home" />
          <NavBarItem growSize="2xl" scrollTo="main-body" text="About" offset />
          <NavBarItem growSize="2xl" scrollTo="skills" text="Skills" offset />
          <NavBarItem
            growSize="2xl"
            scrollTo="projects"
            text="Projects"
            offset
          />
          <NavBarItem
            growSize="2xl"
            scrollTo="contacts"
            text="Contact"
            offset
          />
        </div>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
