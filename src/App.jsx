// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './Login'; // Import your login component
import DownloadsPage from './components/DownloadsPage';
// Un archivo CSS global para resetear márgenes básicos
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal (la portada oscura) */}
        <Route path="/" element={<HomePage />} />
        
        {/* Ruta de descargas (la página clara con botones) */}
        <Route path="/documentacion" element={<DownloadsPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
