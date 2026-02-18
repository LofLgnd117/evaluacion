// src/components/DownloadsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './DownloadsPage.css';

const DownloadsPage = () => {
  return (
    <div className="downloads-container">
      <div className="download-card">
        <h1 className="card-title">Centro de Descargas</h1>
        <p className="card-subtitle">Haz clic en los botones para obtener tus archivos PDF.</p>

        <div className="buttons-list">
          {/* Botón 1: Azul */}
          {/* El href apunta a la carpeta pública: /pdfs/nombrearchivo.pdf */}
          <a href="/pdfs/comandos-react.pdf" download className="dl-btn btn-blue">
            COMANDOS BÁSICOS DE REACT
          </a>

          {/* Botón 2: Verde */}
          <a href="/pdfs/iso-ieee.pdf" download className="dl-btn btn-green">
            ISO / ESTANDAR IEEE
          </a>

          {/* Botón 3: Gris Oscuro */}
          <a href="/pdfs/requerimientos.pdf" download className="dl-btn btn-dark">
            REQUERIMIENTOS FUNCINALES Y NO FUNCIONALES
          </a>

          {/* Botón 4: Gris Oscuro */}
          <a href="/pdfs/codigo-python.pdf" download className="dl-btn btn-dark">
            CÓDIGO PYTHON ALGORITMO SHA-256
          </a>

          {/* Botón de Regreso: Usa Link de React Router */}
          <Link to="/" className="dl-btn btn-back">
            REGRESAR AL PROYECTO PRINCIPAL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;