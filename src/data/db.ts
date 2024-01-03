import i1 from "../assets/images/pirela_page.jpg"
import i2 from "../assets/images/paraelbajon.png"
import i3  from "../assets/images/hakernews.png"
import i4 from "../assets/images/Calculadora.png"
import i5 from "../assets/images/js-quizz.png"
import i6 from "../assets/images/argpr.png"



interface PortfolioItem {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  link1: string;

}

interface PortfolioData {
  portfolio: PortfolioItem[];
}

const portfolio: PortfolioData = {
  portfolio: [
    {
      id: 1,
      imagen: i1,
      titulo: "Pirela Construccion",
      descripcion:
        "Proyecto personal para mostrar los productos y los contactos de la empresa",
      link1: "https://page-pirela.vercel.app",
    },
    {
      id: 2,
      imagen: i2,
      titulo: "Local de comidas rapidas",
      descripcion:
        "La finalidad de la pagina es visualizar los productos que ofrece el local y cargarlos a un carrito de compra",
      link1: "https://tienshop.vercel.app",

    },
    {
      id: 3,
      imagen: i3,
      titulo: "Clon pagina de noticias",
      descripcion:
        "Pagina clon de HackerNews. El objetivo es la implementacion de componentes recursivos ",
      link1: "https://hacker-news-clone-smoky.vercel.app",

    },
    {
      id: 4,
      imagen: i4,
      titulo: "Calculadora",
      descripcion:
        "Proyecto de una calculadora con la implementacion de dark mode",
      link1: "https://calculator-psi-sandy.vercel.app",

    },
    {
      id: 5,
      imagen: i5,
      titulo: "Juego de preguntas",
      descripcion:
        "Preguntas de Javascript utilizando informacion de una API externa creada",
      link1: "https://javascript-quizz-rwh9.vercel.app",

    },
    {
      id: 6,
      imagen: i6,
      titulo: "Todo List",
      descripcion:
        "Trabajo individual final del curso Argentina Programa 4.0",
      link1: "https://app-todolist-nu.vercel.app",

    },
  ],
};

export default portfolio;
