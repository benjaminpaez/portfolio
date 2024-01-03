import React from "react";

interface TCard {
  imagen: string;
  titulo: string;
  descripcion: string;
  link1: string;
}

export const Card: React.FC<TCard> = ({
  imagen,
  titulo,
  descripcion,
  link1,
}) => {
  return (
    <div
      className="max-w-sm bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4"
      style={{ maxHeight: "390px"}}
    >
      <a href={link1} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-t-lg"
          src={imagen}
          alt=""
          style={{ width: "350px", height: "200px" }}
        />
      </a>
      <div className="p-5">
        <a href={link1} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {titulo}
          </h5>
        </a>
        <p
          className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 5,
          }}
        >
          {descripcion}
        </p>
      </div>
    </div>
  );
};
