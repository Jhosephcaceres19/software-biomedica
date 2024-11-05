"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar';
import Sidebar from './Sidebar';
import service from '../service/Service';
import { jsPDF } from 'jspdf';

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

  const downloadPDF = (user: User) => {
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.text(`ID: ${user.id}`, 10, 10);
    doc.text(`Nombre: ${user.nombre}`, 10, 20);
    doc.text(`Edad: ${user.edad}`, 10, 30);
    doc.text(`Sexo: ${user.sexo}`, 10, 40);
    doc.text(`Altura: ${user.altura}m`, 10, 50);
    doc.text(`Peso: ${user.peso}Kg`, 10, 60);

    // Guardar el PDF
    doc.save(`Usuario_${user.id}.pdf`);
  };

  return (
    <div className='bg-gradient-to-l from-indigo-500 to-indigo-950 min-h-screen'>
      <Navbar />
      <div className='flex flex-row'>
        <Sidebar />
        <div className='flex-1 p-5 mt-20 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 80px)' }}>
          {error && <div className='text-red-500'>{error}</div>}
          {users.length === 0 ? (
            <div className='text-white'>Cargando usuarios...</div>
          ) : (
            users.map(user => (
              <div key={user.id} className='mb-5'>
                <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                  <table className='min-w-full'>
                    <thead className='bg-indigo-600 text-white'>
                      <tr>
                        <th className='py-2 px-4 text-left'>Campo</th>
                        <th className='py-2 px-4 text-left'>Valor</th>
                        <th className='py-2 px-1 bg-sky-500 text-center'>Imprimir</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-b'>
                        <td className='py-2 px-4'>ID</td>
                        <td className='py-2 px-4'>{user.id}</td>
                        <td className='py-2 px-1 text-center'>
                          <button onClick={() => downloadPDF(user)} className='bg-sky-600 text-white rounded py-1 px-3'>
                            Descargar Resultados
                          </button>
                        </td>
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
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
