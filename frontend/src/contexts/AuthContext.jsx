// /home/ubuntu/e_learning_platform/frontend/src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import authService from "../services/authService"; // Assuming authService handles token and user data

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To check initial auth status

  useEffect(() => {
    // Check if user is already logged in (e.g., token in localStorage)
    const checkLoggedInUser = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          // You might want to verify the token with the backend or fetch user details
          // For this scaffold, we assume if a token exists, we can try to get user data
          // const currentUser = await authService.getCurrentUser(); 
          // setUser(currentUser);
          // For now, let's simulate a user if token exists for scaffold purposes
          setUser({ name: "Scaffold User", email: "scaffold@example.com", role: "student" }); 
        } catch (error) {
          console.error("Failed to fetch user on initial load:", error);
          authService.logout(); // Clear invalid token
          setUser(null);
        }
      }
      setLoading(false);
    };
    checkLoggedInUser();
  }, []);

  const login = (userData) => {
    // This function would be called after successful login (direct or OAuth)
    // userData might be the user object from backend or just a token to be stored
    // For simplicity, let's assume userData is the user object
    setUser(userData);
    // authService would have already stored the token if login was successful
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    // Redirect to login page or home page
    // window.location.href = "/login";
    alert("User logged out (AuthContext)");
  };

  const value = {
    user,
    isAuthenticated: !!user, // Derived from user state
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only after initial loading check */}
    </AuthContext.Provider>
  );
};

