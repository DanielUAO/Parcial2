import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './components/Nav.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navegación */}
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/skills">Habilidades</Link>
            </li>
            <li>
              <Link to="/projects">Proyectos</Link>
            </li>
          </ul>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
