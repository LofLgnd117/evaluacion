// src/Dashboard.jsx
import React from 'react';
import './Dashboard.css'; // Asegúrate de que este archivo exista en src/

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <img src="/assets/Foto.jpeg" alt="Avatar" className="dashboard-avatar" />
        
        <h1 className="welcome-text">Bienvenido(a), Fernanda Sosa</h1>
        <h2 className="parcial-title">EVALUACIÓN PARCIAL 3</h2>

        <div className="button-stack">
          {/* LINK PARCIAL 1 - EL QUE FALTABA */}
          <a href="/doc_parcial1.pdf" download className="dash-btn">
            DOCUMENTACIÓN PARCIAL 1
          </a>

          {/* DOCUMENTO ERS */}
          <a href="/ERS_Artemis.docx" download className="dash-btn">
            DESCARGAR DOCUMENTO ERS DEL PROYECTO
          </a>

          {/* JIRA LINK */}
          <a href="https://utd-team-z3wt1vve.atlassian.net/jira/software/projects/SCRUM/board" 
             target="_blank" rel="noreferrer" className="dash-btn">
            TABLERO JIRA PROYECTO SIBA
          </a>

          {/* LOGOUT */}
          <button onClick={() => window.location.href='/'} className="dash-btn logout-btn">
            CERRAR SESIÓN PARCIAL 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;