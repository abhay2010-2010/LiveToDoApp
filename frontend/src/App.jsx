import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskPage from './pages/TaskPage';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleRegister = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
            {token && <li><button onClick={handleLogout}>Logout</button></li>}
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            {token ? <Redirect to="/tasks" /> : <Login onLogin={handleLogin} />}
          </Route>
          <Route path="/register">
            {token ? <Redirect to="/tasks" /> : <Register onRegister={handleRegister} />}
          </Route>
          <Route path="/tasks">
            {token ? <TaskPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
