import React from 'react';
import Navbar from '../NavBar';
import Sidebar from './Sidebar';
import Plantillas from './components/Plantillas';
import Clock from './components/Clock';

export default function Page() {
  const humidity = 65;
  const temperature = 22
  return (
    <div className="bg-gradient-to-l from-indigo-500 to-indigo-950 min-h-screen h-full">
      <Navbar />
      <div className="flex flex-col  md:flex-row h-full">
        {/* Sidebar: Adjust width on smaller screens */}
        <div className="w-full md:w-1/4 lg:w-1/5 bg-indigo-800 min-h-full">
          <Sidebar />
        </div>

        {/* Plantillas: Centered and responsive */}
        <div className="flex-grow ml-16 flex justify-center flex-col items-center p-4 md:p-8">
          <Plantillas />
          <br />
          <Clock humidity={humidity} temperature={temperature}/>
        </div>
      </div>
    </div>
  );
}
