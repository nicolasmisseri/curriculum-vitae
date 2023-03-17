import React from "react";

export default function Presentacion() {
  return (
    <div>
      <div className="grid grid-cols-2 h-screen relative">
        <div className="flex flex-col justify-center items-center border-l-2 border-t-2 h-full">
          <h1 className="text-2xl font-bold mb-2 text-white pl-7 pr-7">
            Transformemos ideas en experiencias digitales impresionantes
          </h1>
          <p className="text-gray-400 pl-7 pr-7">
            Déjame llevar tu visión al siguiente nivel con mis habilidades de
            desarrollo front-end.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center h-screen ">
          <img
            id="img-profile"
            className="inline-block opacity-70 w-6/12 hover:transition-all"
            src="images/perfil.png"
            alt="Descripción de la imagen"
          />
        </div>
      </div>
    </div>
  );
}
