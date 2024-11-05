"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-violet-800 to-violet-600 p-4 fixed w-full z-50 top-0 text-white hover:shadow-2xl hover:shadow-sky-600 flex items-center justify-between xl:text-xl xl:font-bold">
      <Link href="/" className="hover:underline">
        BIOMEDICA
      </Link>
      {/* Desktop Links */}
      <div className="hidden md:flex gap-4">
        <Link href="/auth/formUsser" className="border p-1 rounded-md bg-sky-500 text-sky-900 px-2">
          INGRESAR USUARIO
        </Link>
        <Link href="/auth/formAdmin" className="border p-1 rounded-md">
          CREAR DOCTOR
        </Link>
      </div>
      {/* Mobile Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="md:hidden flex items-center focus:outline-none"
      >
        <span className="material-icons text-white">menu</span>
      </button>
      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40">
          <div className="fixed top-0 right-0 w-64 bg-violet-700 z-50 shadow-lg flex flex-col p-4 h-full">
            <button
              onClick={toggleSidebar}
              className="self-end text-white text-2xl focus:outline-none"
            >
              &times;
            </button>
            <Link
              href="/auth/formUsser"
              className="mt-8 border p-2 rounded-md bg-sky-500 text-sky-900 text-center"
              onClick={toggleSidebar}
            >
              INGRESAR USUARIO
            </Link>
            <Link
              href="/auth/formAdmin"
              className="mt-4 border p-2 rounded-md text-center text-white"
              onClick={toggleSidebar}
            >
              CREAR DOCTOR
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
