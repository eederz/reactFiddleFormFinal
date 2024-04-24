import React from "react";
import Paciente from "../Pacient/Paciente";
export default List = ({ listaPacientes, handleEliminar }) => {
  return (
    <section className="displayData">
      <div className="">
        <h1>Seguimiento de pacientes</h1>
        <p>
          Administra tus pacientes y <span className="highlight">Citas</span>
        </p>
      </div>
      <div className="list">
        {listaPacientes.length ? (
          listaPacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              handleEliminar={handleEliminar}
            ></Paciente>
          ))
        ) : (
          <h1>No Hay Pacientes</h1>
        )}
      </div>
    </section>
  );
};
