"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Yup para validaciones
import adminService from '../../service/Service';
import Navbar from '@/app/NavBar';
import { useRouter } from 'next/navigation';

// Esquema de validación con Yup
const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('El nombre es obligatorio'),
  contrasena: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  codigo_admin: Yup.string()
    .length(6, 'El código debe tener exactamente 6 caracteres')
    .required('El código de administrador es obligatorio'),
});

export default function CreateAdminPage() {
  const router = useRouter();

  // Configuración de Formik
  const formik = useFormik({
    initialValues: {
      nombre: '',
      contrasena: '',
      codigo_admin: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await adminService.createAdmin(values);
        console.log('Admin creado:', response);
        router.push('/dashboard'); // Redirige al dashboard
      } catch (error) {
        console.error('Error al crear admin:', error);
        alert('Hubo un error al crear el admin');
      } finally {
        setSubmitting(false); // Finaliza la operación
      }
    },
  });

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-l from-indigo-500 to-indigo-950 min-h-screen p-4 sm:p-0">
      <Navbar />
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Crear Administrador</h2>

        {/* Campo Nombre */}
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`mt-1 p-2 w-full border rounded-md ${
              formik.touched.nombre && formik.errors.nombre
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
            placeholder="Ingrese el nombre"
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <p className="text-red-500 text-sm">{formik.errors.nombre}</p>
          )}
        </div>

        {/* Campo Contraseña */}
        <div className="mb-4">
          <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formik.values.contrasena}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`mt-1 p-2 w-full border rounded-md ${
              formik.touched.contrasena && formik.errors.contrasena
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
            placeholder="Ingrese la contraseña"
          />
          {formik.touched.contrasena && formik.errors.contrasena && (
            <p className="text-red-500 text-sm">{formik.errors.contrasena}</p>
          )}
        </div>

        {/* Campo Código de Admin */}
        <div className="mb-4">
          <label htmlFor="codigo_admin" className="block text-sm font-medium text-gray-700">
            Código de Admin
          </label>
          <input
            type="text"
            id="codigo_admin"
            name="codigo_admin"
            value={formik.values.codigo_admin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`mt-1 p-2 w-full border rounded-md ${
              formik.touched.codigo_admin && formik.errors.codigo_admin
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
            placeholder="Ingrese el código de administrador"
          />
          {formik.touched.codigo_admin && formik.errors.codigo_admin && (
            <p className="text-red-500 text-sm">{formik.errors.codigo_admin}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 ${
            formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Creando...' : 'Crear Admin'}
        </button>
      </form>
    </div>
  );
}
