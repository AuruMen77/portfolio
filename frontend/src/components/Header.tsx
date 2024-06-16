import { useState, useEffect } from "react";
import logo from "../assets/aulogo.png";
import { Link as ScrollLink } from 'react-scroll';
const Header = () => {

    const [offsetInPixels, setOffsetInPixels] = useState(-10 * window.innerHeight / 100);

    useEffect(() => {
        const updateOffset = () => {
            setOffsetInPixels(-10 * window.innerHeight / 100);
        };

        window.addEventListener('resize', updateOffset);

        return () => {
            window.removeEventListener('resize', updateOffset);
        };
    }, []);
    
    return (
        <div className=" flex max-h-[10vh] justify-between pb-20 md:max-h-[10vh]" >
            <div>
                <img src={logo} className="md:mx-[1vw] w-full object-contain max-h-[10vh]" />
            </div>
            <div className="mt-[3vh] mr-10 text-xl">
                <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <ScrollLink to="hero" smooth={true} duration={500} >
                        Home
                    </ScrollLink>
                    <ScrollLink to="main-body" smooth={true} duration={500} offset={offsetInPixels}>
                        About
                    </ScrollLink>
                    <ScrollLink to="skills" smooth={true} duration={500} offset={offsetInPixels}>
                        Skills
                    </ScrollLink>
                    <ScrollLink to="projects" smooth={true} duration={500} offset={offsetInPixels}>
                        Projects
                    </ScrollLink>
                    <ScrollLink to="contacts" smooth={true} duration={500} offset={offsetInPixels}>
                        Contact
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

export default Header;