
export const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-12 sm:p-2">
      <div id="about" className="w-full text-white">
        <div className="max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-6">
            <h1 className="text-4xl font-bold inline border-b-4 border-gray-600 sm:text-center">
              Sobre mí
            </h1>
          </div>
          
          <p className="text-2xl mt-20 leading-10"> <span className="font-bold">¡Hola! </span>
            Soy un desarrollador web con interes en el diseño e implementación de
            aplicaciones innovadoras. Mi experiencia radica en aplicaciones web utilizando como base React,
            complementando con diferentes tecnologías como Typescript, Material Ui, Tailwind, entre otras. He trabajado en proyectos que involucran la integración con diferentes sistemas API y bases de datos. <br/>Mi habilidad para aprender de forma autodidacta, mi aptitud para asimilar nuevos conceptos y procesos, así como mi enfoque creativo para resolver problemas, son aspectos claves con los que impulso mi deseo constante de superación. <br/>¡Coordinemos una reunion para conversar sobre cómo puedo contribuir con mi entusiasmo y habilidades en tu equipo de trabajo!
          </p>

          
        </div>
      </div>

      <section className="rounded-2xl p-3 w-full lg:w-[60%] shadow-2xl border-2 border-[#293e4b] mt-8 md:mt-0 max-w-[350px]">
        <div className="flex text-[#FDF0D5] justify-between text-center pl-4 p-3">
          <div className="text-3xl font-bold w-[50%] md:w-[20%] whitespace-nowrap">
            +10
            <br />
            <span className="text-xl font-normal lg:text-xs">Proyectos</span>
          </div>
          <div className="text-3xl font-bold w-[60%] md:w-[20%] whitespace-nowrap">
            +2
            <br />
            <span className="text-xl font-normal md:text-xs">Años de Exp.</span>
          </div>
        </div>
      </section>
    </section>
  );
};

