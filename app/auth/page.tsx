import React from "react";
import Navbar from "../NavBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function page() {
  const getValidationSchema = () => {
    return Yup.object({
      name: Yup.string()
        .required("El nombre es obligatorio")
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre no puede exceder los 50 caracteres"),

      age: Yup.number()
        .required("La edad es obligatoria")
        .integer("La edad debe ser un número entero")
        .min(0, "La edad no puede ser negativa")
        .max(120, "La edad no puede ser mayor a 120 años"),

      sex: Yup.string()
        .required("El sexo es obligatorio")
        .oneOf(
          ["masculino", "femenino", "otro"],
          "El sexo debe ser masculino, femenino u otro"
        ),

      height: Yup.number()
        .required("La altura es obligatoria")
        .positive("La altura debe ser un número positivo")
        .max(300, "La altura no puede exceder 300 cm"),

      weight: Yup.number()
        .required("El peso es obligatorio")
        .positive("El peso debe ser un número positivo")
        .max(500, "El peso no puede exceder 500 kg"),
    });
  };
  return (
    <div className="bg-gradient-to-l from-indigo-500 to-indigo-950 max-h-screen h-screen">
      <Navbar />
      <div>
        <Formik
          initialValues={{
            name: "",
            age: "",
            sex: "",
            height: "",
            weight: "",
          }}
          validationSchema={getValidationSchema}
          onSubmit={}
        >
          <Form>
            <h2>Registrar Paciente</h2>
            <div>
              <label htmlFor="name">Nombre del paciente</label>
              <Field id="name" name="name" type="text"></Field>
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="age">Ingrese la edad</label>
              <Field id="age" name="age" type="text"></Field>
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="sex">Ingrese el sexo</label>
              <Field id="sex" name="sex" type="text"></Field>
              <ErrorMessage
                name="sex"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="heght">Ingrese la altura</label>
              <Field id="heght" name="heght" type="text"></Field>
              <ErrorMessage
                name="heght"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="weight">Ingrese el peso</label>
              <Field id="weight" name="weight" type="text"></Field>
              <ErrorMessage
                name="weight"
                component="div"
                className="text-red-500"
              />
            </div>
            <button type="submit">Registrar paciente</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
