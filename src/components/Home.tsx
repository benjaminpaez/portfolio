import profile from "../assets/profile/image.jpg";
import { downloadCV } from "./DownloadCV";
import { IoDocumentText } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Social } from "./Social";

export const Home = () => {
  return (
    <main className="relative w-full h-screen bg-center bg-cover bg-radial-gradient">
      <div className="flex flex-col items-center justify-between h-full max-w-screen-lg gap-16 px-4 pb-8 mx-auto md:flex-row">
        <section className="flex flex-col justify-center h-full mt-[4.5rem]">
          <p className="flex mt-4 space-x-3 text-base text-center text-gray-400 sm:text-base">
            ¡Gracias por contactarme!
          </p>

          <h1 className="py-4 mt-4 text-5xl font-bold text-orange-500 sm:text-7xl font-secondary">
            Desarrollador <br /> Web.
          </h1>

          <section className="flex flex-wrap items-center justify-center gap-4 mt-5 sm:gap-12">
            <Social />

            <button
              className="flex items-center gap-2 px-7 py-4  duration-150 bg-slate-300  font-bold rounded-lg border border-white hover:scale-95 hover:bg-gradient-to-r hover:from-[#033d8b] hover:to-[#0a3069] active:bg-indigo-700 mb-4  text-slate-800 hover:bg-slate-500 hover:text-slate-100"
              onClick={downloadCV}
            >
              <IoDocumentText size={30} />
              Descargar CV
            </button>
          </section>
        </section>
        <div className="items-center mx-8 mb-8 text-center">
          <img
            src={profile}
            alt="profile"
            className="object-cover p-1 mx-auto border rounded-full w-72 sm:w-96 sm:mt-6"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:bottom-0 animate-bounce">
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
