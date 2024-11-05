"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Plantillas() {
  // Estado para controlar los colores de los rectángulos de ambas plantillas
  const [leftColors, setLeftColors] = useState(Array(16).fill('#87ceeb')); // Inicialmente negros
  const [rightColors, setRightColors] = useState(Array(16).fill('#87ceeb'));

  // Función para cambiar el color de un rectángulo en la plantilla izquierda
  const handleLeftClick = (index:number) => {
    const newColors = [...leftColors];
    newColors[index] = newColors[index] === '#000' ? '#4CAF50' : '#000'; // Cambia entre negro y verde
    setLeftColors(newColors);
  };

  // Función para cambiar el color de un rectángulo en la plantilla derecha
  const handleRightClick = (index:number) => {
    const newColors = [...rightColors];
    newColors[index] = newColors[index] === '#000' ? '#F44336' : '#000'; // Cambia entre negro y rojo
    setRightColors(newColors);
  };

  return (
    <div className="flex justify-center gap-12 p-5 mt-20 flex-col lg:flex-row">
      {/* Plantilla Izquierda */}
      <div className="flex flex-col items-center w-52 h-[540px] bg-blue-100  rounded-lg p-2">
        {/* Fila 1 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[0] }}
            onClick={() => handleLeftClick(0)}>1</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[1] }}
            onClick={() => handleLeftClick(1)}>2</div>
        </div>
        {/* Fila 2 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[2] }}
            onClick={() => handleLeftClick(2)}>3</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[3] }}
            onClick={() => handleLeftClick(3)}>4</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[4] }}
            onClick={() => handleLeftClick(4)}>5</div>
        </div>
        {/* Fila 3 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[5] }}
            onClick={() => handleLeftClick(5)}>6</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[6] }}
            onClick={() => handleLeftClick(6)}>7</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[7] }}
            onClick={() => handleLeftClick(7)}>8</div>
        </div>
        {/* Fila 4 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[8] }}
            onClick={() => handleLeftClick(8)}>9</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[9] }}
            onClick={() => handleLeftClick(9)}>10</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[10] }}
            onClick={() => handleLeftClick(10)}>11</div>
        </div>{/* Fila 5 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[11] }}
            onClick={() => handleLeftClick(11)}>12</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[12] }}
            onClick={() => handleLeftClick(12)}>13</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[13] }}
            onClick={() => handleLeftClick(13)}>14</div>
        </div>
        {/* Última Fila */}
        <div className="flex gap-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[14] }}
            onClick={() => handleLeftClick(14)}>15</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: leftColors[15] }}
            onClick={() => handleLeftClick(15)}>16</div>
        </div>
      </div>

      {/* Plantilla Derecha */}
      <div className="flex flex-col items-center w-52 h-[540px] bg-blue-100 rounded-lg p-2">
        {/* Fila 1 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[0] }}
            onClick={() => handleRightClick(0)}>1</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[1] }}
            onClick={() => handleRightClick(1)}>2</div>
        </div>
        {/* Fila 2 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[2] }}
            onClick={() => handleRightClick(2)}>3</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[3] }}
            onClick={() => handleRightClick(3)}>4</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[4] }}
            onClick={() => handleRightClick(4)}>5</div>
        </div>
        {/* Fila 3 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[5] }}
            onClick={() => handleRightClick(5)}>6</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[6] }}
            onClick={() => handleRightClick(6)}>7</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[7] }}
            onClick={() => handleRightClick(7)}>8</div>
        </div>
        {/* Fila 4 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[8] }}
            onClick={() => handleRightClick(8)}>9</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[9] }}
            onClick={() => handleRightClick(9)}>10</div>
             <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[10] }}
            onClick={() => handleRightClick(10)}>11</div>
        </div>{/* Fila 4 */}
        <div className="flex gap-2 mb-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[11] }}
            onClick={() => handleRightClick(11)}>12</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[12] }}
            onClick={() => handleRightClick(12)}>13</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[13] }}
            onClick={() => handleRightClick(13)}>14</div>
        </div>
        {/* Última Fila */}
        <div className="flex gap-2">
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[14] }}
            onClick={() => handleRightClick(14)}>15</div>
          <div className="w-10 h-20 bg-black rounded-md cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: rightColors[15] }}
            onClick={() => handleRightClick(15)}>16</div>
        </div>
      </div>
      <div>
      <Image
        src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1729545435/photo_4925211265622715547_y_1_orbn9e.jpg" // URL de tu imagen
        alt="Descripción de la imagen"
        width={410} // Ancho de la imagen en píxeles
        height={600} // Alto de la imagen en píxeles
        priority // Opcional: carga la imagen de forma prioritaria
        className='rounded-md hidden lg:flex'
      />
      </div>
    </div>
  );
}
