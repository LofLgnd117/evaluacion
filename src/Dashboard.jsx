import React from 'react';
//import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <img src="/assets/Foto.jpeg" alt="Avatar" className="avatar-small" />
      
      <h1>Bienvenido(a), Fernanda Sosa</h1>
      <h2 className="title-parcial">EVALUACIÓN PARCIAL 3</h2>

      <div className="button-stack">
        {/* DOWNLOAD BUTTON */}
        <a href="/ERS_Artemis.docx" download className="dash-btn">
          DESCARGAR DOCUMENTO ERS DEL PROYECTO
        </a>

        {/* JIRA LINK */}
        <a href="https://utd-team-z3wt1vve.atlassian.net/jira/software/projects/SCRUM/board" 
           target="_blank" rel="noreferrer" className="dash-btn">
          TABLERO JIRA PROYECTO SIBA
        </a>

        {/* LOGOUT */}
        <button onClick={() => window.location.href='/'} className="dash-btn logout">
          CERRAR SESIÓN PARCIAL 3
        </button>
      </div>
    </div>
  );
};

export default Dashboard;