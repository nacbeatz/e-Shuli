// /home/ubuntu/e_learning_platform/frontend/src/pages/SignupPage.js
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import authService from "../services/authService"; // To be created
// import { useAuth } from "../contexts/AuthContext"; // To be created

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  // const { login } = useAuth(); // To set user context after signup and login

  const handleDirectSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setLoading(true);
    try {
const userData = await authService.signup({ name, email, password });
 login(userData); // Log in the user and set auth context
   history.push("/dashboard");
alert("Direct signup successful (placeholder)! Redirecting...");
setTimeout(() => window.location.href = 
"/dashboard", 1000);
  } catch (err) {
     setError(err.message || "Failed to sign up. Please try again.");
}
    alert("Direct signup form submitted (placeholder). API call would be made here.");
    setLoading(false);
  };

  const handleGoogleSignup = () => {
    // Redirect to backend Google OAuth endpoint, same as login
    window.location.href = `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/auth/google`;
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleDirectSignup}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      <hr />
      <p>Or</p>
      <button onClick={handleGoogleSignup} disabled={loading}>
        Sign up with Google
      </button>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignupPage;

