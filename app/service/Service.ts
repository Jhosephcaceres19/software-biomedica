// service/service.js
import api from '../api/api'; // Importa la configuración base

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

const createAdmin = async (adminData) => {
  try {
    const response = await api.post('/admin', adminData);
    console.log('Admin creado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al crear admin:', error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const response = await api.post('/user', userData);
    console.log('Usuario creado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
};

export default {
  alladmin,
  createAdmin,
  createUser,
};
