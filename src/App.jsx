import { useState } from 'react'
import ListaTareas from './components/ListaTareas'
import Api from './components/Api'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Bienvenido a la aplicación</h2>} />
        <Route path="/lista-tareas" element={<ListaTareas />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </Router>
  );
}

export default App
