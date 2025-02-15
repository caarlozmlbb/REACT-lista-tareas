import React, { useState } from "react";
// import '../css/ListaTareas.css'
import "bootstrap/dist/css/bootstrap.min.css";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const InputCambios = (e) => {
    console.log(e.target.value);
    setTarea(e.target.value);
  };

  const AgregarListaTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  };

  return (
    <div>
      <h1 className="text-center text-primary mb-4">Lista de Tareas</h1>

      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="input-group shadow-sm w-75">
          <input
            type="text"
            placeholder="Ingrese su tarea"
            className="form-control"
            onChange={InputCambios}
            value={tarea}
          />
          <button onClick={AgregarListaTarea} className="btn btn-primary">
            Agregar
          </button>
        </div>
      </div>

      <ul>
        {tareas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
