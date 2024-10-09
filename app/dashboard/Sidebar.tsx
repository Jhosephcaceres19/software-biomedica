import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-violet-700 text-white w-72 h-screen p-5">
      <h2 className="text-2xl text-sky-400 mb-5 mt-14 font-bold">
        Opciones Biomédico
      </h2>
        <ul className="space-y-4 flex flex-col text-lg font-semibold">
          <Link href="#prueba" className="hover:text-sky-400">
            Visualizacion de plantillas
          </Link>

          <Link href="#dispositivos" className="hover:text-sky-400">
            Visualizacion de parametros
          </Link>

          <Link href="#protocolos" className="hover:text-sky-400">
            Tiempo de diagnostico
          </Link>

          <Link href="#tecnologias" className="hover:text-sky-400">
            Limite de temperatura y humedad
          </Link>

          <button className="hover:text-sky-400">
            Guardar registro
          </button>
          <button className="bg-sky-500 p-2 hover:text-violet-600 rounded-md">Descargar Resultados</button>
        </ul>
    </div>
  );
};

export default Sidebar;
