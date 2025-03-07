import i1 from "../assets/images/pirela_page.jpg";
import i2 from "../assets/images/pampa-shop.png";
import i3 from "../assets/images/hakernews.png";
import i4 from "../assets/images/Fech.jpg";
import i5 from "../assets/images/js-quizz.png";
import i6 from "../assets/images/Bankec.jpg";

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
      id: 4,
      imagen: i4,
      titulo: "Blog Informativo",
      descripcion:
        "Su objetivo es promover y difundir festivales y eventos en la provincia del Chaco",
      link1: "https://github.com/GabrielaMonta/blog-django.git",
    },

    {
      id: 6,
      imagen: i6,
      titulo: "Billetera virtual",
      descripcion:
        "Aplicación web desarrollada en Django para gestionar el intercambio de dinero entre usuarios",
      link1: "https://github.com/benjaminpaez/bankec.git",
    },
    {
      id: 2,
      imagen: i2,
      titulo: "Pampa | Tienda",
      descripcion:
        "Tienda de ropas responsive, con filtros por categoría, checkin, carrito de compra. Utilizando next js y tailwind",
      link1: "https://pampa-tienda.vercel.app/",
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
      id: 5,
      imagen: i5,
      titulo: "Juego de preguntas",
      descripcion:
        "Preguntas de Javascript utilizando informacion de una API externa creada",
      link1: "https://javascript-quizz-rwh9.vercel.app",
    },
  ],
};

export default portfolio;
