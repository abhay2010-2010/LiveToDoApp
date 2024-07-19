import React from 'react';
import { loginUser } from '../services/api';
import AuthForm from '../components/AuthForm';


const Login = ({ onLogin }) => {
  const handleLogin = async (formData) => {
    try {
      const token = await loginUser(formData);
      localStorage.setItem('token', token);
      onLogin(token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
    </div>
  );
};

export default Login;
