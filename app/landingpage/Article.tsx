"use client"
import React from "react";
import { useEffect, useState } from "react";
// import Link from "next/link";
import Image from "next/image";

export default function Article() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <section className=" ">
        <div className="container h-full flex flex-col items-center px-4 py-16 text-center  md:px-10 lg:px-32 ">
          <h2 className="text-4xl font-bold leading-none sm:text-5xl ">
            SOFTWARE ANNISOFT
            <br />
            <h1 className="text-cyan-400">CONTROL DE PRESION PLANTAR</h1>
          </h2>
          <p className="px-8 mt-8 mb-12 text-lg text-justify">
            Descubre la importancia de cuidar cada paso que das con nuestro
            innovador software para registrar la presión de tus pies. Cada
            pisada cuenta, y con nuestra herramienta, podrás monitorizar y
            optimizar tu bienestar. ¡Camina con confianza hacia una vida más
            saludable y activa! Porque tus pies merecen el mejor cuidado, y
            nosotros estamos aquí para acompañarte en cada paso del camino. 🦶💙
          </p>
          <div>
            <Image
              src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1742270769/abuelito-removebg-preview_cgnf1v.png"
              alt="Descripción de la imagen"
              width={410}
              height={600}
              priority
              className="rounded-md  lg:flex"
              suppressHydrationWarning
            />
          </div>
          {/* <div className="flex flex-wrap justify-center">
            <Link
              href="/auth/formAdmin"
              className="px-8 py-3 m-2 text-lg font-semibold rounded border hover:bg-violet-600 "
            >
              Ingresar Doctor
            </Link>
            <Link
              href="/auth/formUsser"
              className="px-8 py-3 m-2 text-lg text-black bg-cyan-400 shadow-lg shadow-cyan-400 hover:bg-violet-500 hover:text-white border rounded  "
            >
              Ingresar usuario
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}
