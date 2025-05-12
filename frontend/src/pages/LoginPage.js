// /home/ubuntu/e_learning_platform/frontend/src/pages/LoginPage.js
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // For redirecting after login
// import authService from '../services/authService'; // To be created
// import { useAuth } from '../contexts/AuthContext'; // To be created, if using context

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  // const { login } = useAuth(); // Example from context

  const handleDirectLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // try {
    //   // const userData = await authService.login(email, password);
    //   // login(userData); // Update auth context
    //   // history.push('/dashboard');
    //   alert('Direct login successful (placeholder)! Redirecting...');
    //   // Simulate redirect
    //   setTimeout(() => window.location.href = '/dashboard', 1000);
    // } catch (err) {
    //   setError(err.message || 'Failed to login. Please check your credentials.');
    // }
    alert('Direct login form submitted (placeholder). API call would be made here.');
    setLoading(false);
  };

  const handleGoogleLogin = () => {
    // Redirect to backend Google OAuth endpoint
    // This URL should match the one defined in your backend authRoutes.js
    window.location.href = `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/google`;
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleDirectLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <hr />
      <p>Or</p>
      <button onClick={handleGoogleLogin} disabled={loading}>
        Sign in with Google
      </button>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
      <p>
        <a href="/forgot-password">Forgot Password?</a> (Placeholder)
      </p>
    </div>
  );
};

export default LoginPage;

