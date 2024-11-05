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
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
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
