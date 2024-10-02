import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <div className="image-container">
      <img src="https://th.bing.com/th/id/OIG2.dSm.mTsulvr7Kx6RquHh?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Daniel" style={{ width: '200px', borderRadius: '50%' }} />
      </div>
      <p>En este portafolio podrás encontrar los trabajos realizados en la asignatura de Desarrollo de Experiencias Multimedia para la WEB como estudiante de Ingeniería Multimedia de la Universidad Autónoma de Occidente, según los conocimientos previos enseñados a lo largo de los semestres, su finalidad es observar los avances que el estudiante ha tenido segun los proyectos realizados hasta el momento en HTML, git y github.</p>
    </div>
  );
};

export default Home;
