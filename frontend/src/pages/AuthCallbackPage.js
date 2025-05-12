// /home/ubuntu/e_learning_platform/frontend/src/pages/AuthCallbackPage.js
import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import authService from '../services/authService'; // Assuming this service can handle token storage
// import { useAuth } from '../contexts/AuthContext'; // If using context to set user

const AuthCallbackPage = () => {
  const location = useLocation();
  const history = useHistory();
  // const { login } = useAuth(); // Example if using AuthContext

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      console.log("Token received from backend redirect:", token);
      // Store the token (e.g., in localStorage via authService)
      const success = authService.handleGoogleCallback(token);
      if (success) {
        // Optionally, fetch user details with the new token
        // authService.getCurrentUser().then(user => login(user));
        // Redirect to dashboard or a protected route
        history.push('/dashboard'); // Or wherever appropriate
      } else {
        // Handle case where token storage failed
        console.error("Failed to store token from Google OAuth callback.");
        history.push('/login?error=auth_failed');
      }
    } else {
      // Handle case where no token is found in query params
      console.error("No token found in Google OAuth callback.");
      history.push('/login?error=no_token');
    }
  }, [location, history]); // Add login to dependency array if used from context

  return (
    <div>
      <p>Processing authentication...</p>
      {/* You can add a loading spinner here */}
    </div>
  );
};

export default AuthCallbackPage;

