import React from "react";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const initList = () => {
    const preList = localStorage.getItem("list");
    return preList ? JSON.parse(preList) : [];
  };
  const [listaPacientes, setListaPacientes] = useState(initList);

  function agregarPaciente(item) {
    setListaPacientes((prevPacientes) => [...prevPacientes, item]);
  }

  function handleEliminar(pacienteId) {
    const updatedList = listaPacientes.filter(
      (paciente) => paciente.id !== pacienteId
    );
    setListaPacientes(updatedList);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listaPacientes));
  }, [listaPacientes]);

  return (
    <div className="App">
      <Header />
      <section className="container">
        <Form agregarPaciente={agregarPaciente} />
        <List listaPacientes={listaPacientes} handleEliminar={handleEliminar} />
      </section>
    </div>
  );
};

export default App;
