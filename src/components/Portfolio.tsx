import { Card } from './Card';
import projects from '../data/db';

interface PortfolioItem {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  link1: string;
}

const projectsData: PortfolioItem[] = projects.portfolio;

export const Portfolio = () => {
  return (
    <div className=" w-full md:h-screen text-white mt-10 lg:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-4">
          <p className="text-4xl font-bold inline border-b-4 border-orange-400">Proyectos</p>
          <p className="py-6 text-xl">Estos son algunos de los proyectos personales que he realizado</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              imagen={project.imagen}
              titulo={project.titulo}
              descripcion={project.descripcion}
              link1={project.link1}
    
            />
          ))}
        </div>
      </div>
    </div>
  );
};
