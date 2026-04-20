// src/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <img src="/assets/Foto.jpeg" alt="Avatar" className="dashboard-avatar" />
        <h1 className="welcome-text">Bienvenido Leonardo Flores</h1>
        <h2 className="parcial-title">EVALUACIÓN PARCIAL 3</h2>

        <div className="button-stack">
          {/* Solo dejamos los links de la Parcial 3 y el ERS */}
          <a href="/ERS_Artemis.docx" download className="dash-btn">
            DESCARGAR DOCUMENTO ERS DEL PROYECTO
          </a>
          <a href="https://utd-team-bct3gry.atlassian.net/jira/software/projects/KAN/boards/1?atlOrigin=eyJpIjoiYjFlNzI2ZmRjNDExNDU5NTk4NWU3YzNlYjhmN2ZlM2YiLCJwIjoiaiJ9" 
             target="_blank" rel="noreferrer" className="dash-btn">
            TABLERO JIRA PROYECTO SIBA
          </a>
          <button onClick={() => window.location.href='/'} className="dash-btn logout-btn">
            CERRAR SESIÓN PARCIAL 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;