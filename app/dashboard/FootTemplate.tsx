import React from "react";

export default function FootTemplate() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-64 h-96 bg-gray-300 rounded-full shadow-md">
        {/* Dedos del pie */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
          <div className="w-9 h-9 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-7 h-7 bg-gray-400 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
        </div>
        {/* Arco del pie */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-16 bg-gray-400 rounded-t-full"></div>
        {/* Talón */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
}
