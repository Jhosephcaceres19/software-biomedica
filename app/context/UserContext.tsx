"use client"
// context/UserContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definir los tipos
interface User {
  nombre: string;
  edad: string; // Cambia a Date si necesitas un objeto Date
  sexo: string;
  altura: number;
  peso: number;
}

interface UserContextType {
  userData: User[];
  addUser: (user: User) => void;
}

// Crear el contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Proveedor de contexto
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUserData((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider value={{ userData, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe ser usado dentro de un UserProvider");
  }
  return context;
};
