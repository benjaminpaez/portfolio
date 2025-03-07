export const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-12 sm:p-2">
      <div id="about" className="w-full text-white">
        <div className="flex flex-col justify-center w-full h-full max-w-screen-md p-4 mx-auto">
          <div className="pb-6">
            <h1 className="inline text-4xl font-bold border-b-4 border-orange-400 sm:text-center">
              Sobre mí
            </h1>
          </div>

          <p className="mt-20 text-2xl leading-10">
            {" "}
            <span className="font-bold">¡Hola! </span>
            Soy un desarrollador web con experiencia en la creación de
            aplicaciones modernas y escalables. He trabajado en diversos
            proyectos web , incluyendo e-commerce, blogs y sistemas de gestión,
            utilizando tecnologías como React, Astro, Django y Tailwind. Además,
            manejo bases de datos SQL y NoSQL e integración de APIs. <br />
            Tengo conocimientos en análisis de datos con Python y Excel, área en
            la que continúo perfeccionándome para ampliar mis capacidades en la
            interpretación y procesamiento de información. <br />
            ¡Coordinemos una reunion para conversar sobre cómo puedo contribuir
            con mi entusiasmo y habilidades en tu equipo de trabajo!
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
