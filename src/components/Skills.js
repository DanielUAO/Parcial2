import React from 'react';

const Skills = () => {
  const hardSkills = ['JavaScript', 'React', 'Node.js', 'CSS'];
  const softSkills = ['Comunicación', 'Trabajo en equipo', 'Adaptabilidad'];

  return (
    <div>
      <h1>Habilidades</h1>
      <h2>Habilidades Duras</h2>
      <ul>
        {hardSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>Habilidades Blandas</h2>
      <ul>
        {softSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
