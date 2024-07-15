import logo from "../assets/aulogo.png";
import { Link } from 'react-scroll';
import NavBarItem from "./NavBarItem";
import MobileNav from "./MobileNav";
import useVisibleSection from '../hooks/useVisibleSection';

const Header = () => {
  const sectionIds = ['hero', 'main-body', 'skills', 'projects', 'contacts'];
  const visibleSections = useVisibleSection(sectionIds);

  return (
    <div className="flex max-h-[10vh] justify-between pb-20 md:max-h-[10vh]">
      <div>
        <Link to="hero" smooth={true} duration={500}>
          <img
            src={logo}
            className="md:mx-[1vw] w-full object-contain max-h-[10vh]"
          />
        </Link>
      </div>
      <div className="lg:mt-[3vh] md:mt-[1vh] mr-10 text-xl hidden md:block">
        <div className="flex flex-col md:flex-row">
          <NavBarItem growSize="2xl" scrollTo="hero" text="Home" active={visibleSections.includes('hero')} />
          <NavBarItem growSize="2xl" scrollTo="main-body" text="About" offset active={visibleSections.includes('main-body')} />
          <NavBarItem growSize="2xl" scrollTo="skills" text="Skills" offset active={visibleSections.includes('skills')} />
          <NavBarItem growSize="2xl" scrollTo="projects" text="Projects" offset active={visibleSections.includes('projects')} />
          <NavBarItem growSize="2xl" scrollTo="contacts" text="Contact" offset active={visibleSections.includes('contacts')} />
        </div>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
