import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import classNames from "classnames";

type Props = {
  text: string;
  scrollTo: string;
  growSize: string;
  offset?: boolean;
  active?: boolean;
};
const NavBarItem = ({ text, scrollTo, offset = false, growSize, active }: Props) => {
  const [offsetInPixels, setOffsetInPixels] = useState(
    (-10 * window.innerHeight) / 100
  );

  useEffect(() => {
    const updateOffset = () => {
      setOffsetInPixels((-10 * window.innerHeight) / 100);
    };

    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <ScrollLink
      className={classNames(
        "py-1 px-5 hover:shadow-md hover:rounded-lg hover:cursor-pointer",
        {
          "hover:text-sm": growSize === "sm",
          "hover:text-2xl": growSize === "2xl",
          "text-blue-500": active,
        }
      )}
      to={scrollTo}
      smooth={true}
      duration={500}
      offset={offset ? offsetInPixels : undefined}
    >
      {text}
    </ScrollLink>
  );
};

export default NavBarItem;
