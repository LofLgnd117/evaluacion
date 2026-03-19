// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        {/* Asegúrate de que el nombre de la imagen coincida con el que pusiste en public/assets */}
        <img src="/assets/Foto.jpeg" alt="Avatar 3D" className="avatar-image" />
        
        <h1 className="main-title">Evaluación parcial 1</h1>
        
        <h2 className="student-name">Leonardo Javier Flores Verdin</h2>
        
        <div className="links-container">
          {/* Reemplaza con TU enlace real de LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/leo-verd-6170aa378" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-btn"
          >
            LINKED IN DE MI PROFILE
          </a>
          
          {/* Usamos el componente Link de React Router para navegación interna */}
          <Link to="/documentacion" className="link-btn">
            DOCUMENTACION PARCIAL 1
          </Link>
          <a href="/metodologias.html" className="link-btn">DOCUMENTACION PARCIAL 2</a>
          <Link to="/login" className="link-btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;