import React from "react";
import Link from "next/link";
export default function Article() {
  return (
    <div>
      <section className=" ">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          SOFTWARE ANNISOFT
          <br />
          CONTROL DE PRECION DE LOS PIES
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
          Descubre la importancia de cuidar cada paso que das con nuestro innovador software para registrar la presión de tus pies. Cada pisada cuenta, y con nuestra herramienta, podrás monitorizar y optimizar tu bienestar. ¡Camina con confianza hacia una vida más saludable y activa! Porque tus pies merecen el mejor cuidado, y nosotros estamos aquí para acompañarte en cada paso del camino. 🦶💙
          </p>
          <div className="flex flex-wrap justify-center">
            <Link href="/auth/formAdmin" className="px-8 py-3 m-2 text-lg font-semibold rounded border hover:bg-violet-600 ">
              Ingresar Doctor
            </Link>
            <Link href="/auth/formUsser" className="px-8 py-3 m-2 text-lg text-black bg-cyan-400 shadow-lg shadow-cyan-400 hover:bg-violet-500 hover:text-white border rounded  ">
              Ingresar usuario
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
