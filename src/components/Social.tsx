import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Social = () => {
  const email = "benjaapaez788@gmail.com";
  const asunto = "¡Hola! Me gustaria organizar una reunion";

  const handleSendEmail = () => {
    const enlaceCorreo = `mailto:${email}?subject=${encodeURIComponent(
      asunto
    )}`;
    window.location.href = enlaceCorreo;
  };
  return (
    <>
      <a
        href="https://github.com/benjaminpaez"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110 hover:filter "
      >
        <FaGithub color="white" size={50} />
      </a>

      <a
        href="https://www.linkedin.com/in/benjaminpaez9/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110 hover:filter hover:bg-white"
      >
        <FaLinkedin color="blue" size={50} />
      </a>

      <a
        href="#"
        onClick={handleSendEmail}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110 hover:filter  "
      >
        <SiGmail color="red" size={50} />
      </a>
    </>
  );
};
