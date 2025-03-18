"use client"
import React from "react";
import Navbar from "./NavBar";
import Article from "./landingpage/Article";

export default function Home() {
  return (
    <div className="bg-gradient-to-l from-indigo-500 to-indigo-950 ">
      <Navbar />
      <div className="flex min-h-screen items-center justify-center text-white text-4xl font-bold">
        <Article />
      </div>
    </div>
  );
}
