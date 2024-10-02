import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Landing Page', url: 'https://github.com/DanielUAO/landing-page' },
    { name: 'Portafolio 1', url: 'https://github.com/DanielUAO/portafolio' },
    { name: 'Contador', url: 'https://github.com/DanielUAO/Contador' },
    { name: 'Comparacion de Numeros', url: 'https://github.com/DanielUAO/Numeros' },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div>
      <h1>Mis Proyectos</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
