import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, handleLogout }) => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
    borderBottom: '1px solid #555',
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  };

  const liStyle = {
    marginRight: '10px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px',
    transition: 'all 0.3s ease',
  };

  const logoutButtonStyle = {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/register" style={linkStyle}>
            Register
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/tasks" style={linkStyle}>
            Tasks
          </Link>
        </li>
        {token && (
          <li style={liStyle}>
            <button style={logoutButtonStyle} onClick={handleLogoutClick}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
