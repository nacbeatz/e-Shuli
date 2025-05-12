// /home/ubuntu/e_learning_platform/frontend/src/pages/DashboardPage.js
import React from 'react';
// import { useAuth } from '../contexts/AuthContext'; // To be created

const DashboardPage = () => {
  // const { user } = useAuth(); // Example: Get user from context
  const user = { name: "Test User", email: "test@example.com", role: "student" }; // Placeholder

  return (
    <div>
      <h1>User Dashboard</h1>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          {/* Placeholder for enrolled courses, progress, etc. */}
          <h2>My Enrolled Courses</h2>
          <p>Course 1 - Progress: 50%</p>
          <p>Course 2 - Progress: 20%</p>
        </>
      ) : (
        <p>Loading user data or not logged in...</p>
      )}
    </div>
  );
};

export default DashboardPage;

