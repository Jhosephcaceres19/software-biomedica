"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX, FiEye, FiClock, FiThermometer } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón de menú hamburguesa para móviles */}
      <button 
        onClick={toggleSidebar} 
        className="p-2 text-white mt-10 bg-violet-700 fixed top-4 left-4 z-50 md:hidden"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-violet-700 mt-10 text-white w-72 h-screen p-5 fixed top-0 left-0 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        <h2 className="text-2xl text-sky-400 mb-5 mt-14 font-bold">
          Opciones Doctor
        </h2>
        <ul className="space-y-4 flex flex-col text-lg font-semibold">
          <Link href="#dispositivos" className="flex items-center space-x-2 hover:text-sky-400">
            <FiEye />
            <span>Visualización de parámetros</span>
          </Link>

          <Link href="#protocolos" className="flex items-center space-x-2 hover:text-sky-400">
            <FiClock />
            <span>Tiempo de diagnóstico</span>
          </Link>

          <Link href="#tecnologias" className="flex items-center space-x-2 hover:text-sky-400">
            <FiThermometer />
            <span>Límite de temperatura y humedad</span>
          </Link>

          {/* <button className="flex items-center space-x-2 hover:text-sky-400">
            <FiSave />
            <span>Guardar registro</span>
          </button>

          <button className="flex items-center space-x-2 bg-sky-500 p-2 hover:text-violet-600 rounded-md">
            <FiDownload />
            <span>Descargar Resultados</span>
          </button> */}
        </ul>
      </div>
      
      {/* Overlay para cerrar el sidebar en móviles */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
