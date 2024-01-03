import { downloadCV } from "./DownloadCV";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


export const SocialLinks = ( ) => {
  const email = "benjaapaez788@gmail.com";
  const asunto = "¡Hola! Me gustaria organizar una reunion";

  const handleSendEmail = () => {
    const enlaceCorreo = `mailto:${email}?subject=${encodeURIComponent(
      asunto
    )}`
    window.location.href = enlaceCorreo
  }
  const links = [
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/benjaminpaez",
    },
    {
        id: 2,
        child: (
          <>
            LinkedIn <FaLinkedin size={30} />
          </>
        ),
        href: "www.linkedin.com/in/benjaminpaez9 ",
        style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Correo <HiOutlineMail size={30} />
        </>
      ),
      href: "#",
      open: handleSendEmail
    },
    {
      id: 4,
      child: (
        <>
          Curriculum <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "/resume.pdf",
      open: downloadCV
    },
  ]
 
  return (
    <div className="flex-col lg:flex fixed top-[35%] left-0 transform hidden" >
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#020223]" +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              onClick={link.open}
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

