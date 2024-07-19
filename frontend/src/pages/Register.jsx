import React from 'react';
import AuthForm from '../components/AuthForm';
import { registerUser } from '../services/api';


const Register = ({ onRegister }) => {
  const handleRegister = async (formData) => {
    try {
      const token = await registerUser(formData);
      localStorage.setItem('token', token);
      onRegister(token);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} buttonText="Register" />
    </div>
  );
};

export default Register;
