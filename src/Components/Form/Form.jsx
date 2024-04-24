import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";

const Form = ({ agregarPaciente }) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [emptyField, setEmptyField] = useState(false);

  function handleNombreMascota(event) {
    setNombreMascota(event.target.value);
  }
  function handleNombrePropietario(event) {
    setNombrePropietario(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleFechaAlta(event) {
    setFechaAlta(event.target.value);
  }
  function handleSintomas(event) {
    setSintomas(event.target.value);
  }

  function cleanForm() {
    setNombreMascota("");
    setNombrePropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Enviando...", emptyField);

    if (
      [nombreMascota, nombrePropietario, email, fechaAlta, sintomas].includes(
        ""
      )
    ) {
      setEmptyField(true);
      return;
    }
    setEmptyField(false);

    const objetoPaciente = {
      nombreMascota,
      nombrePropietario,
      email,
      fechaAlta,
      sintomas,
      id: crypto.randomUUID(),
    };

    agregarPaciente(objetoPaciente);
    cleanForm();
  }

  return (
    <section className="displayData">
      <div className="subHeaders">
        <h1>Form de alta de pacientes</h1>
        <p>
          Añade Pacientes y <span className="highlight">Administralos</span>
        </p>
      </div>
      <div className="">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombreMascota">Nombre de la Mascota</label>
            <input
              type="text"
              id="nombreMascota"
              value={nombreMascota}
              onChange={handleNombreMascota}
            />
          </div>

          <div>
            <label htmlFor="nombrePropietario">Nombre del Propietario</label>
            <input
              type="text"
              id="nombrePropietario"
              value={nombrePropietario}
              onChange={handleNombrePropietario}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div>
            <label htmlFor="fecha">Fecha Alta</label>
            <input
              type="date"
              id="fecha"
              value={fechaAlta}
              onChange={handleFechaAlta}
            />
          </div>

          <div>
            <label htmlFor="sintomas">Síntomas</label>
            <textarea
              id="sintomas"
              value={sintomas}
              onChange={handleSintomas}
            />
          </div>

          <div className="btn-submit">
            <input type="submit" value="Agregar paciente" />
          </div>
        </form>
      </div>

      {emptyField && <h1>Hay valores vacios</h1>}
    </section>
  );
};

export default Form;
