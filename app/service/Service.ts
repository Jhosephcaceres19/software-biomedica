import api from '../api/api'; // Importa la configuración base

// Obtener todos los administradores
const alladmin = async () => {
  try {
    const response = await api.get('/admin');
    console.log('Administradores:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener administradores:', error);
    throw error;
  }
};

// Crear un nuevo administrador
const createAdmin = async (adminData: { nombre: string; contrasena: string; codigo_admin: string }) => {
  try {
    const response = await api.post('/admin', adminData);
    console.log('Admin creado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al crear admin:', error);
    throw error;
  }
};

// Crear un nuevo usuario
const createUser = async (userData: { nombre: string; edad: number; sexo: string; altura: number; peso: number }) => {
  try {
    const response = await api.post('/user', userData);
    console.log('Usuario creado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
};

// Obtener usuario por ID
const getUserById = async (userId: number) => {
  try {
    const response = await api.get(`/user/${userId}`);
    console.log('Usuario obtenido:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    throw error;
  }
};

// Obtener todos los usuarios
const allUsers = async () => {
  try {
    const response = await api.get('/user');
    console.log('Usuarios obtenidos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener todos los usuarios:', error);
    throw error;
  }
};

export default {
  alladmin,
  createAdmin,
  createUser,
  getUserById,
  allUsers, // Agrega la nueva función aquí
};
