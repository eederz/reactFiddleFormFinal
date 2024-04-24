import React from "react";
import "./Paciente.css";
const Paciente = ({ paciente, handleEliminar }) => {
  const { nombreMascota, nombrePropietario, email, fechaAlta, sintomas } =
    paciente;
  return (
    <div className="patientContainer">
      <p>
        <strong>Nombre de la Mascota:</strong>
        {nombreMascota}
      </p>
      <p>
        <strong>Nombre del Propietario:</strong>
        {nombrePropietario}
      </p>
      <p>
        <strong>Email:</strong>
        {email}
      </p>
      <p>
        <strong>Fecha de alta:</strong>
        {fechaAlta}
      </p>
      <p>
        <strong>Síntomas:</strong>
        {sintomas}
      </p>
      <button onClick={() => handleEliminar(paciente.id)}>Eliminar</button>
    </div>
  );
};

export default Paciente;
