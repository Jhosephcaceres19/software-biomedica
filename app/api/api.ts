// api/api.js
import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
  baseURL: 'https://web-production-a3a0.up.railway.app', // Endpoint base para todas las solicitudes
  headers: {
    'Content-Type': 'application/json', // Asegura que se envíe como JSON
  },
});

export default api;
