// /home/ubuntu/e_learning_platform/frontend/src/components/common/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this file for Header specific styles

const Header = () => {
  // const { user, logout } = useAuth(); // Example if using AuthContext
  const user = null; // Placeholder

  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">E-Learning Platform</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          {user ? (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              {/* <li><button onClick={logout}>Logout</button></li> */}
              <li><button onClick={() => alert("Logout clicked")}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
          {/* Add dark/light mode toggle here based on UI mockups */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

