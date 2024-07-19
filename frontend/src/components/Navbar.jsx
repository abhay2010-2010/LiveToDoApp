

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, handleLogout }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        {token && <li><button onClick={handleLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
}

export default Navbar;
