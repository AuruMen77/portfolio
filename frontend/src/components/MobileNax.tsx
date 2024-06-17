import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavBarItem from "./NavBarItem";
const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="lg:mt-[3vh] md:mt-[1vh] mr-10 text-xl md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`text-xl ${menuOpen ? "block" : "hidden"}`}>
        <div className="shadow flex flex-col text-xs text-align-end">
          <NavBarItem  growSize="sm" scrollTo="hero" text="Home" />
          <NavBarItem growSize="sm" scrollTo="main-body" text="About" offset />
          <NavBarItem growSize="sm" scrollTo="skills" text="Skills" offset />
          <NavBarItem growSize="sm" scrollTo="projects" text="Projects" offset />
          <NavBarItem growSize="sm" scrollTo="contacts" text="Contact" offset />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
