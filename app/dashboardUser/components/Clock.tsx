"use client"
import React, { useEffect, useState } from "react";

const WeatherClock: React.FC<{ humidity: number; temperature: number }> = ({ humidity, temperature }) => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning]);

  // Formatear el tiempo en HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2">Cronómetro</h2>
      <p className="text-3xl">{formatTime(time)}</p>

      <div className="flex space-x-4 mt-4">
        <button
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded"
          onClick={() => setIsRunning(true)}
        >
          Iniciar
        </button>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
          onClick={() => setIsRunning(false)}
        >
          Parar
        </button>
      </div>

      <div className="flex gap-10">
      <div className="mt-4">
        <h3 className="text-xl font-bold">Humedad</h3>
        <p className="text-lg">{humidity}%</p>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Temperatura</h3>
        <p className="text-lg">{temperature}°C</p>
      </div>
      </div>
    </div>
  );
};

export default WeatherClock;
