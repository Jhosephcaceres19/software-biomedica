// components/WeatherClock.tsx
"use client"
import React, { useEffect, useState } from 'react';

const Clock: React.FC<{ humidity: number }> = ({ humidity }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2">Control de Tiempo</h2>
      <p className="text-xl">{currentTime}</p>
      <div className="mt-4">
        <h3 className="text-2xl font-bold">Humedad</h3>
        <p className="text-2xl text-center">{humidity}%</p>
      </div>
    </div>
  );
};

export default Clock;
