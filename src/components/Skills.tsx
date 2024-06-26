import html from "../assets/skills/icon-html.png";
import css from "../assets/skills/icon-css-.png";
import javascript from "../assets/skills/icon-javascript.png";
import reactImage from "../assets/skills/icon-react.png";
import typescript from "../assets/skills/icon-typescript.png";
import python from "../assets/skills/icon-python.png";
import github from "../assets/skills/icon-github1.png"
import tailwind from "../assets/skills/icon-tailwind.png";
import mui from "../assets/skills/icon-material-ui.png"
import next from "../assets/skills/icon-next.png"
import django from "../assets/skills/icon-django.png"
import postgres from "../assets/skills/icon-postgres.png"


export const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: typescript,
      title: "TypeScript",
      style: "shadow-sky-600",
    },
    {
      id: 6,
      src: next,
      title: "Next js",
      style: "shadow-gray-400",
    },
    
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: mui,
      title: "Material UI",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-sky-400"
      
    },
    {
      id: 10,
      src: django,
      title: "Django",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: postgres,
      title: "Postgres",
      style: "shadow-sky-600",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      className="w-full h-[90%] mt-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-orange-400 p-2 inline mt-5">
            Habilidades
          </p>
          <p className="py-6 text-xl">Estas son las tecnologías con las que he trabajado</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              style={{ lineHeight: 'normal' }}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

