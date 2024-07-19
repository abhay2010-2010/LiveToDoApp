import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskPage from './pages/TaskPage';
import Navbar from './components/Navbar';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  const handleLogin = (token) => {
    setToken(token);
    navigate('/tasks'); // Redirect to tasks page after successful login
  };

  const handleRegister = (token) => {
    setToken(token);
    navigate('/tasks'); // Redirect to tasks page after successful registration
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <>
      <Navbar token={token} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={token ? <Navigate to="/tasks" /> : <Login onLogin={handleLogin} />} />
        <Route path="/register" element={token ? <Navigate to="/tasks" /> : <Register onRegister={handleRegister} />} />
        <Route path="/tasks" element={token ? <TaskPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
