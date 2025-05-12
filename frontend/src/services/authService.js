// /home/ubuntu/e_learning_platform/frontend/src/services/authService.js
import apiClient from "./api";

const authService = {
  // login: async (email, password) => {
  //   try {
  //     const response = await apiClient.post("/auth/login", { email, password });
  //     if (response.data.token) {
  //       localStorage.setItem("authToken", response.data.token);
  //       // You might want to store user info as well, or fetch it separately
  //       // localStorage.setItem("user", JSON.stringify(response.data.user));
  //     }
  //     return response.data; // { token, user (optional) }
  //   } catch (error) {
  //     throw error.response?.data || error.message || "Login failed";
  //   }
  // },

  // signup: async (userData) => { // { name, email, password }
  //   try {
  //     const response = await apiClient.post("/auth/register", userData);
  //     if (response.data.token) { // Assuming signup also returns a token and logs in
  //       localStorage.setItem("authToken", response.data.token);
  //     }
  //     return response.data;
  //   } catch (error) {
  //     throw error.response?.data || error.message || "Signup failed";
  //   }
  // },

  // logout: () => {
  //   localStorage.removeItem("authToken");
  //   localStorage.removeItem("user");
  //   // Potentially call a backend logout endpoint if it exists (e.g., to invalidate session/token server-side)
  // },

  // getCurrentUser: async () => {
  //   try {
  //     const response = await apiClient.get("/auth/user");
  //     return response.data;
  //   } catch (error) {
  //     // If token is invalid or expired, this might fail
  //     // authService.logout(); // Clear local storage if user fetch fails
  //     throw error.response?.data || error.message || "Failed to fetch user";
  //   }
  // },

  // Placeholder for Google OAuth callback handling on frontend
  // This would typically involve taking a token from URL query params (from backend redirect)
  // and storing it, then fetching user details.
  handleGoogleCallback: (token) => {
    if (token) {
      localStorage.setItem("authToken", token);
      // Optionally, immediately fetch user details or redirect to dashboard
      // For now, just log it.
      console.log("Google OAuth token received on frontend:", token);
      return true;
    }
    return false;
  },

  // A simple check if a token exists
  isAuthenticated: () => !!localStorage.getItem("authToken"),
};

export default authService;

