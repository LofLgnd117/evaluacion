// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './Login';
import Dashboard from './Dashboard';
import DownloadsPage from './components/DownloadsPage'; // Verifica esta importación

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Esta es la ruta que activa el Centro de Descargas */}
        <Route path="/documentacion" element={<DownloadsPage />} />
      </Routes>
    </Router>
  );
}

export default App;