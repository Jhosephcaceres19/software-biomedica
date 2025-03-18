"use client";

import React, { useState } from "react";
import Navbar from "../../NavBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userService from "../../service/Service";
import { useRouter } from "next/navigation";

// Define the UserFormValues interface
interface UserFormValues {
  nombre: string;
  edad: string;
  sexo: string;
  altura: number;
  peso: number;
}

export default function RegisterUserPage() {
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .required("El nombre es obligatorio")
      .min(2, "Debe tener al menos 2 caracteres")
      .max(50, "No puede exceder 50 caracteres"),
    edad: Yup.date()
      .required("La fecha de nacimiento es obligatoria")
      .max(new Date(), "No puedes ingresar una fecha futura"),
    sexo: Yup.string()
      .required("El sexo es obligatorio")
      .oneOf(["masculino", "femenino", "otro"], "Selecciona una opción válida"),
    altura: Yup.number()
      .required("La altura es obligatoria")
      .positive("Debe ser un número positivo")
      .min(0.5, "Altura mínima es 0.5m")
      .max(3, "No puede exceder 3m"),
    peso: Yup.number()
      .required("El peso es obligatorio")
      .positive("Debe ser un número positivo")
      .min(1, "El peso mínimo es 1 kg")
      .max(500, "No puede exceder 500 kg"),
  });

  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (values: UserFormValues) => {
    try {
      const birthDate = new Date(values.edad);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      const response = await userService.createUser({
        ...values,
        edad: age,
      });
      console.log(response)
      router.push("/dashboardUser");
    } catch  {
      setError("Hubo un error al crear el usuario. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="bg-gradient-to-l from-indigo-500 to-indigo-950 min-h-screen flex flex-col items-center p-4 md:p-8">
      <Navbar />
      <div className="w-full max-w-lg mt-20 p-6 bg-white rounded-lg shadow-lg lg:shadow-xl">
        <Formik
          initialValues={{
            nombre: "",
            edad: "",
            sexo: "",
            altura: 0,
            peso: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Registrar Paciente</h2>

              {error && <div className="text-red-500 text-center">{error}</div>}

              <div>
                <label htmlFor="nombre" className="block font-medium text-gray-700">Nombre</label>
                <Field
                  id="nombre"
                  name="nombre"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-800 focus:ring-2 focus:ring-indigo-600"
                />
                <ErrorMessage name="nombre" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="edad" className="block font-medium text-gray-700">Fecha de Nacimiento</label>
                <Field
                  id="edad"
                  name="edad"
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-800 focus:ring-2 focus:ring-indigo-600"
                />
                <ErrorMessage name="edad" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="sexo" className="block font-medium text-gray-700">Sexo</label>
                <Field
                  as="select"
                  id="sexo"
                  name="sexo"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-800 focus:ring-2 focus:ring-indigo-600"
                >
                  <option value="" disabled>
                    Seleccione una opción
                  </option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </Field>
                <ErrorMessage name="sexo" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="altura" className="block font-medium text-gray-700">Altura (m)</label>
                <Field
                  id="altura"
                  name="altura"
                  type="number"
                  step="0.01"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-800 focus:ring-2 focus:ring-indigo-600"
                />
                <ErrorMessage name="altura" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="peso" className="block font-medium text-gray-700">Peso (kg)</label>
                <Field
                  id="peso"
                  name="peso"
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-800 focus:ring-2 focus:ring-indigo-600"
                />
                <ErrorMessage name="peso" component="div" className="text-red-500" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-150 ease-in-out"
              >
                {isSubmitting ? "Registrando..." : "Registrar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
