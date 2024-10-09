import React from "react";
import Navbar from "./NavBar";

export default function Home() {
  return (
    <div className="bg-gradient-to-l from-indigo-500 to-indigo-950 max-h-screen h-screen">
      <Navbar/>
      <div className="flex h-screen items-center justify-center text-white text-4xl font-bold">
        BIENVENIDO A PROYECTO DE ANNI
      </div>
    </div>
  );
}
