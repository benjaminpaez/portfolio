import profile from "../assets/profile/image.jpg"
import { downloadCV } from "./DownloadCV"
import { IoDocumentText } from "react-icons/io5"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import { Social } from "./Social"

export const Home = () => {

  return (
    <main className="h-screen w-full bg-radial-gradient bg-cover bg-center ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pb-8">
        <section className="flex flex-col justify-center h-full mt-[4.5rem]">
          <p className=" flex space-x-3 text-base sm:text-base text-gray-400 mt-4 text-center">
          ¡Gracias por contactarme!
          </p>
      
          <h1 className="text-4xl mt-1 sm:text-7xl font-bold text-orange-500 font-secondary py-4">
           Desarrollador Web.  
          </h1>

          <section className="flex flex-wrap mt-5 justify-center items-center gap-4 sm:gap-12">
            <Social />

            <button
              className="flex items-center gap-2 px-7 py-4  duration-150 bg-gradient-to-b from-[#d0d7de] to-[#afb8c1] font-bold rounded-lg border border-white hover:scale-95 hover:bg-gradient-to-r hover:from-[#033d8b] hover:to-[#0a3069] active:bg-indigo-700 hover:text-black mb-4 bg-slate-700 text-white"
              onClick={downloadCV}
            >
              <IoDocumentText size={30} />
              Descargar CV
            </button>
          </section>
        </section>
        <div className="text-center mb-8">
          <img
            src={profile}
            alt="profile"
            className="rounded-2xl w-2/3 border sm:w-full md:w-full p-1 mx-auto sm:mt-6 "
          />
        </div>
        <div className="flex flex-col lg:absolute lg:bottom-0 animate-bounce">
          <MdKeyboardDoubleArrowDown
            size={80}
            color="white"
            className="col-span-12"
          />
        </div>
      </div>

   
    </main>
  );
};
