import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // In a real app, you'd decode this to get the user's name
    navigate('/dashboard'); 
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