import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

const handleSuccess = (credentialResponse) => {
  console.log('Acceso concedido');
  navigate('/dashboard'); // Esto debe coincidir con el path de App.jsx
};
  return (
    <GoogleOAuthProvider clientId="864344236168-kd2tkpu8nl02gdctmkosrdacc206rjvu.apps.googleusercontent.com">
      <div className="login-container" style={{ backgroundColor: '#1a1a1a', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log('Login Failed')}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;