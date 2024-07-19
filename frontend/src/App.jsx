// App.js

import React, { useState } from 'react';
import {   useNavigate, Navigate, Routes, Route } from 'react-router-dom';
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
    <><Navbar token={token} handleLogout={handleLogout} />
    <Routes>
      
        

        <Route path="/login">
          {token ? navigate("/tasks") : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/register">
          {token ? navigate("/tasks" ) : <Register onRegister={handleRegister} />}
        </Route>
        <Route path="/tasks">
          {token ? <TaskPage /> : navigate("/login" )}
        </Route>
        <Route path="/">
          {/* navigate("/login" ) */}
        </Route>
      
    </Routes>
    </>
  );
};

export default App;
