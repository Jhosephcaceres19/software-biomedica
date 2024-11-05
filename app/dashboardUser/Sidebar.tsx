"use client"
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón de menú para abrir el sidebar en dispositivos móviles */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 fixed top-4 left-4 bg-violet-700 text-white rounded-md mt-10 z-50"
      >
        <span className="material-icons">menu</span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-violet-700 text-white w-72 p-5 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 z-40`}
      >
        <h2 className="text-2xl  text-sky-400 mb-5 mt-20 font-bold">
          Opciones Usuario
        </h2>
        <ul className="space-y-4 flex  flex-col text-lg font-semibold">
          <Link href="#prueba" onClick={toggleSidebar} className="hover:text-sky-400">
            Visualizacion de plantillas
          </Link>
          <Link href="#dispositivos" onClick={toggleSidebar} className="hover:text-sky-400">
            Visualizacion de parametros
          </Link>
          <Link href="#protocolos" onClick={toggleSidebar} className="hover:text-sky-400">
            Tiempo de diagnostico
          </Link>
          <Link href="#tecnologias" onClick={toggleSidebar} className="hover:text-sky-400">
            Limite de temperatura y humedad
          </Link>
          <button onClick={toggleSidebar} className="hover:text-black border-2 bg-sky-400">
            Guardar registro
          </button>
        </ul>
      </div>

      {/* Fondo oscuro para cuando el sidebar está abierto */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
        />
      )}
    </div>
  );
};

export default Sidebar;
