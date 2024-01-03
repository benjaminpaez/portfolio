import React, { useState } from "react";
import { FaBars, FaTimes, FaLaptopCode } from "react-icons/fa";

interface TNavbar {
  scrollToSection: (section: string) => void;
}

export const Navbar: React.FC<TNavbar> = ({ scrollToSection }) => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Inicio",
      section: "inicio",
    },
    {
      id: 2,
      link: "Sobre mi",
      section: "about",
    },
    {
      id: 3,
      link: "Proyectos",
      section: "proyectos",
    },
    {
      id: 4,
      link: "Habilidades",
      section: "habilidades",
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavClick = (section: string) => {
    handleNav();
    scrollToSection(section);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0b0922] z-50 shadow mb-4 pb-3">
      <div className="flex items-center justify-between gap-14 p-4 pl-0 pr-0 pb-0 text-[#FDF0D5] h-[100%] max-w-[65%] m-auto max-[600px]:max-w-[90%] ">
        <div className="flex items-center">
          <FaLaptopCode size={50} />
          <h1 className="text-4xl font-signature ml-3">Benjamin</h1>
        </div>

        <div className="md:hidden flex flex-col items-center justify-center">
          <div
            onClick={handleNav}
            className="cursor-pointer pr-4 z-10 text-gray-600"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col bg-[#020111] text-white absolute top-full left-0 w-full p-4 ">
              {links.map(({ id, link, section }) => (
                <li
                  key={id}
                  onClick={() => handleNavClick(section)}
                  className="px-4 cursor-pointer capitalize py-6 text-3xl relative group"
                >
                  <span className="group-hover:block absolute inset-x-0 bottom-0 h-0.5 bg-gray-800 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100"></span>
                  {link}
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link, section }) => (
            <li
              key={id}
              onClick={() => handleNavClick(section)}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400 relative group text-xl"
            >
              <span className="group-hover:block absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 group-hover:ml-2 group-hover:mr-2"></span>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
