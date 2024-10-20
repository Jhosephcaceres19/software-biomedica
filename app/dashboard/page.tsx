"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar';
import Sidebar from './Sidebar';
import service from '../service/Service';

interface User {
  id: number;
  nombre: string;
  edad: number;
  sexo: string;
  altura: number;
  peso: number;
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await service.allUsers();
        setUsers(fetchedUsers);
      } catch {
        setError('Esperando Resultados');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='bg-gradient-to-l from-indigo-500 to-indigo-950 max-h-screen h-screen'>
      <Navbar />
      <div className='flex flex-row'>
        <Sidebar />
        <div className='mt-20 flex-1 p-5'>
          {error && <div className='text-red-500'>{error}</div>}
          {users.length === 0 ? (
            <div className='text-white'>Cargando usuarios...</div>
          ) : (
            users.map(user => (
              <div key={user.id} className='mb-5 overflow-x-auto'>
                <table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
                  <thead className='bg-indigo-600 text-white'>
                    <tr>
                      <th className='py-2 px-4 text-left'>Campo</th>
                      <th className='py-2 px-4 text-left'>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 px-4'>ID</td>
                      <td className='py-2 px-4'>{user.id}</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 px-4'>Nombre</td>
                      <td className='py-2 px-4'>{user.nombre}</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 px-4'>Edad</td>
                      <td className='py-2 px-4'>{user.edad}</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 px-4'>Sexo</td>
                      <td className='py-2 px-4'>{user.sexo}</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 px-4'>Altura</td>
                      <td className='py-2 px-4'>{user.altura}m</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 px-4'>Peso</td>
                      <td className='py-2 px-4'>{user.peso}Kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
